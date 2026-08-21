import { NextResponse } from "next/server";
import { portfolio } from "@/data/portfolio";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimit = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function textField(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;

  const normalized = value.trim();
  return normalized.length > 0 && normalized.length <= maxLength
    ? normalized
    : null;
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(
    /[&<>\"']/g,
    (character) => entities[character] ?? character
  );
}

function requestIp(request: Request) {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  current.count += 1;
  return false;
}

function jsonError(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error: message }, { status, headers });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return jsonError("Invalid request origin.", 403);
  }

  const ip = requestIp(request);
  if (isRateLimited(ip)) {
    return jsonError("Too many messages. Please try again later.", 429, {
      "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1_000),
    });
  }

  let payload: ContactPayload;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonError("Message is too large.", 413);
    }

    const parsedBody: unknown = JSON.parse(rawBody);
    if (
      !parsedBody ||
      typeof parsedBody !== "object" ||
      Array.isArray(parsedBody)
    ) {
      return jsonError("Invalid request.", 400);
    }

    payload = parsedBody as ContactPayload;
  } catch {
    return jsonError("Invalid request.", 400);
  }

  // Silently accept honeypot submissions so automated senders do not learn
  // whether the form was rejected.
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = textField(payload.name, 80);
  const email = textField(payload.email, 254);
  const subject = textField(payload.subject, 140);
  const message = textField(payload.message, 4_000);

  if (!name || !email || !subject || !message) {
    return jsonError("Please complete all fields within the allowed limits.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonError("Please enter a valid email address.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_EMAIL ?? portfolio.email;

  if (!apiKey || !from) {
    return jsonError(
      "The contact service is not configured yet. Please use the email link instead.",
      503
    );
  }

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedSubject = escapeHtml(subject);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `<p><strong>From:</strong> ${escapedName} (${escapedEmail})</p><p><strong>Subject:</strong> ${escapedSubject}</p><p>${escapedMessage}</p>`,
        text: `From: ${name} (${email})\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact email provider returned an error", response.status);
      return jsonError("Unable to send your message right now. Please try again later.", 502);
    }
  } catch {
    console.error("Contact email provider request failed");
    return jsonError("Unable to send your message right now. Please try again later.", 502);
  }

  return NextResponse.json({ ok: true });
}
