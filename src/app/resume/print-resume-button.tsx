"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      className="button button-primary resume-print-button"
      type="button"
      onClick={() => window.print()}
    >
      Print / Save as PDF <Printer size={16} aria-hidden="true" />
    </button>
  );
}
