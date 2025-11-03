import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSeries } from "@/app/data/seriesData";
import { CircleArrowLeft } from "lucide-react";
import { makeMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allSeries.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const series = allSeries.find((s) => s.slug === slug);

  if (!series) {
    return makeMetadata({
      title: "Series Not Found | Yagnik Gohil",
      description: "This series could not be found.",
      path: `/articles/series/${slug}`,
    });
  }

  return makeMetadata({
    title: `${series.title} | Yagnik Gohil`,
    description: series.description,
    path: `/articles/series/${series.slug}`,
    image: series.image ?? null,
  });
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const series = allSeries.find((s) => s.slug === slug);

  if (!series) notFound();

  const { title, description, tags, posts } = series;

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 space-y-32">
      {/* Header */}
      <header className="mb-12">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition"
        >
          <CircleArrowLeft size={16} /> Back to Articles
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-4">{title}</h1>
        <p className="text-lg opacity-85 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] opacity-90"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Chapters */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Chapters</h2>
        <div className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="group border border-[hsl(var(--border))]/40 rounded-xl p-5 hover:bg-[hsl(var(--muted))]/10 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-medium group-hover:text-[hsl(var(--primary))] transition">
                  {index + 1}. {post.title}
                </h3>
                <span className="opacity-50 text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
