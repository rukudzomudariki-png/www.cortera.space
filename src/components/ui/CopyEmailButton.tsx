"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/config/contact";

export type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const [live, setLive] = useState("");

  async function handleCopy() {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      try {
        const input = document.createElement("input");
        input.value = CONTACT_EMAIL;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, CONTACT_EMAIL.length);
        ok = document.execCommand("copy");
        document.body.removeChild(input);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setLive("Copied");
      window.setTimeout(() => {
        setCopied(false);
        setLive("");
      }, 2000);
    } else {
      setLive(CONTACT_EMAIL);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center justify-center font-sans font-semibold rounded-full border border-line bg-transparent text-text hover:bg-surface transition-colors duration-200 px-6 py-3 text-[var(--font-size-body)] focus-visible:ring-2 ring-focus-ring ${className ?? ""}`}
    >
      <span aria-live="polite">{copied ? "Copied" : live || "Copy address"}</span>
    </button>
  );
}
