import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_MAX_ENTRIES = 10_000;
const PROVIDER_TIMEOUT_MS = 10_000;

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

function requestIp(request: Request) {
  const ip =
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  return ip.length <= 64 ? ip : "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    for (const [key, entry] of rateLimit) {
      if (entry.resetAt <= now) rateLimit.delete(key);
    }

    // Fail closed rather than allowing attacker-controlled IPs to grow this
    // process-local map without bound.
    if (rateLimit.size >= RATE_LIMIT_MAX_ENTRIES) return true;

    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  current.count += 1;
  return false;
}

function formspreeEndpoint(value: string | undefined) {
  if (!value) return null;

  try {
    const endpoint = new URL(value);
    if (
      endpoint.protocol !== "https:" ||
      endpoint.hostname !== "formspree.io" ||
      !/^\/f\/[A-Za-z0-9_-]+$/.test(endpoint.pathname) ||
      endpoint.search ||
      endpoint.hash
    ) {
      return null;
    }

    return endpoint.toString();
  } catch {
    return null;
  }
}

function jsonResponse(body: object, status = 200, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...headers,
    },
  });
}

function jsonError(message: string, status: number, headers?: HeadersInit) {
  return jsonResponse({ error: message }, status, headers);
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return jsonError("Invalid request origin.", 403);
  }

  const ip = requestIp(request);
  if (isRateLimited(ip)) {
    return jsonError("Too many messages. Please try again later.", 429, {
      "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1_000),
    });
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return jsonError("Expected a JSON request.", 415);
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return jsonError("Message is too large.", 413);
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
    return jsonResponse({ ok: true });
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

  const endpoint = formspreeEndpoint(process.env.FORMSPREE_ENDPOINT);

  if (!endpoint) {
    return jsonError(
      "The contact service is not configured yet. Please create a Formspree form and set FORMSPREE_ENDPOINT.",
      503
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(PROVIDER_TIMEOUT_MS),
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
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

  return jsonResponse({ ok: true });
}
