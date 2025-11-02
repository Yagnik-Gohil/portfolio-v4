import { TerminalSquare } from "lucide-react";

interface CommandBlock {
  command: string;
  output?: string;
}

interface TerminalProps {
  data: CommandBlock[];
}

export default function Terminal({ data }: TerminalProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-[hsl(var(--border))]/50 bg-[hsl(var(--muted))] shadow-sm font-mono text-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[hsl(var(--border))]/40 bg-[hsl(var(--background))]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <TerminalSquare className="w-3.5 h-3.5" />
          Terminal
        </div>
      </div>

      {/* Commands */}
      <div className="p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))] space-y-3">
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
