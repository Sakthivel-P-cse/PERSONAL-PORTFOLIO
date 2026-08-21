"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

type ContactFormResponse = {
  error?: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as ContactFormResponse;

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your message.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  }

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="your name" name="name" placeholder="Name" autoComplete="name" />
        <Field
          label="email"
          name="email"
          type="email"
          placeholder="xyz@gmail.com"
          autoComplete="email"
        />
      </div>

      <Field label="subject" name="subject" placeholder="Subject" />

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.24em] text-text-dim"
        >
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={4000}
          placeholder="Message"
          className="w-full resize-y border border-rule bg-bg px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-cyan focus:ring-1 focus:ring-cyan/20"
        />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 border-t border-rule pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`text-xs tracking-[0.16em] ${
            status === "error" ? "text-crimson" : "text-text-faint"
          }`}
          aria-live="polite"
        >
          {status === "sent"
            ? "◎ MESSAGE SENT — THANKS."
            : status === "error"
              ? errorMessage
              : "◎ THANKS — I'LL REPLY SOON."}
        </p>

        <button
          type="submit"
          disabled={isSending}
          className="group inline-flex items-center justify-between gap-5 border border-cyan bg-cyan px-5 py-3 text-xs font-medium tracking-[0.18em] text-bg transition-colors hover:bg-transparent hover:text-cyan disabled:cursor-wait disabled:opacity-60"
        >
          <span>{isSending ? "SENDING..." : "SEND MESSAGE"}</span>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center border border-bg text-base leading-none transition-colors group-hover:border-cyan"
          >
            ↗
          </span>
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
};

function Field({
  label,
  name,
  placeholder,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.24em] text-text-dim"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={name === "subject" ? 140 : name === "email" ? 254 : 80}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full border border-rule bg-bg px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-cyan focus:ring-1 focus:ring-cyan/20"
      />
    </div>
  );
}
