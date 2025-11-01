import Image from "next/image";

interface BlogContentProps {
  hero?: string;
  children: React.ReactNode;
}

export default function BlogContent({ hero, children }: BlogContentProps) {
  return (
    <article
      className="
        w-full overflow-hidden
        text-[hsl(var(--foreground))]
        leading-relaxed
        space-y-8
        max-w-3xl mx-auto

        [&_h1]:text-3xl [&_h1]:font-heading [&_h1]:font-bold [&_h1]:mt-12 [&_h1]:mb-6
        [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3

        [&_p]:text-base [&_p]:leading-[1.8] [&_p]:text-[hsl(var(--muted-foreground))] [&_p]:my-4
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
        [&_blockquote]:border-l-4 [&_blockquote]:border-[hsl(var(--border))]/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[hsl(var(--muted-foreground))] [&_blockquote]:my-6

        [&_pre]:bg-[hsl(var(--muted))]/10 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:font-mono
        [&_code]:bg-[hsl(var(--muted))]/20 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[hsl(var(--foreground))]

        [&_a]:text-[hsl(var(--primary))] [&_a]:underline hover:[&_a]:opacity-80
      "
    >
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
