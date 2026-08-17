"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-24 h-24 md:w-32 md:h-32 rounded border border-rule bg-rule-soft flex items-center justify-center text-text-faint text-2xl font-jetbrains"
        aria-label="Profile placeholder"
      >
        {">_"}
      </div>
    );
  }

  return (
    <Image
      src="/images/profile.webp"
      alt="Sakthivel P"
      width={128}
      height={128}
      className="w-24 h-24 md:w-32 md:h-32 rounded border border-rule object-cover"
      onError={() => setHasError(true)}
      priority
    />
  );
}
