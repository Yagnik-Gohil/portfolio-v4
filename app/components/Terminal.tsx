"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CommandBlock {
  command: string;
  output?: string;
}

interface TerminalProps {
  data: CommandBlock[];
}

export default function Terminal({ data }: TerminalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const allCommands = data.map((block) => block.command).join("\n");
    await navigator.clipboard.writeText(allCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/30 font-mono text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/50">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
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

      {/* Commands */}
      <div className="p-4 text-[hsl(var(--foreground))] space-y-3 bg-[hsl(var(--background))]">
        {data.map((block, i) => (
          <div key={i}>
            <div className="flex items-start">
              <span className="text-green-500 select-none">$&nbsp;</span>
              <code className="whitespace-pre-wrap break-words">
                {block.command}
              </code>
            </div>
            {block.output && (
              <div className="mt-1 pl-4 border-l border-[hsl(var(--border))]/40 text-muted-foreground">
                <code className="whitespace-pre-wrap break-words">
                  {block.output}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
