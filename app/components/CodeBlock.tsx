"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  fileName?: string;
}

export default function CodeBlock({ code, fileName = "txt" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/30 font-mono text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/50">
        <div className="flex items-center gap-2">
          <span className="text-[11px] tracking-wide text-muted-foreground bg-[hsl(var(--background))] px-2 py-0.5 rounded-md border border-[hsl(var(--border))]/50">
            {fileName}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-[hsl(var(--muted))]/60"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="p-4 text-[hsl(var(--foreground))] bg-[hsl(var(--background))]">
        <code className="whitespace-pre-wrap break-words block text-sm">
          {code}
        </code>
      </div>
    </div>
  );
}
