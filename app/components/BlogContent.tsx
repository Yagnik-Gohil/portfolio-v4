import Image from "next/image";

interface BlogContentProps {
  hero?: string;
  children: React.ReactNode;
}

export default function BlogContent({ hero, children }: BlogContentProps) {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-full overflow-hidden">
      {hero && (
        <div className="mb-8 w-full overflow-hidden rounded-2xl border border-[hsl(var(--border))]/40">
          <Image
            src={hero}
            alt="Blog Hero"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>
      )}
      <div className="overflow-x-hidden">{children}</div>
    </article>
  );
}
