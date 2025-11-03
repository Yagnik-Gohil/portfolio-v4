import dynamic from "next/dynamic";
import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import BlogSidebar from "@/app/components/BlogSidebar";
import type { Metadata } from "next";
import { allArticles } from "@/app/data/seriesData";
import { makeMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return makeMetadata({
      title: "Article Not Found | Yagnik Gohil",
      description: "This article could not be found.",
      path: `/articles/${slug}`,
    });
  }

  return makeMetadata({
    title: `${article.title} | Yagnik Gohil`,
    description: article.description,
    path: `/articles/${article.slug}`,
    image: article.image,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return <div className="py-24 text-center">Not found.</div>;

  const Content = dynamic(() =>
    import(`../content/${slug}.tsx`).catch(() => ({
      default: () => <p>Content not found.</p>,
    }))
  );

  const prevPost = article.prev
    ? allArticles.find((a) => a.slug === article.prev)
    : null;

  const nextPost = article.next
    ? allArticles.find((a) => a.slug === article.next)
    : null;

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 max-w-6xl">
      <BlogHeader title={article.title} date={article.date} />
      <div className="mt-16 flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4 w-full lg:sticky lg:top-24 self-start">
          <BlogSidebar
            prevPost={
              prevPost
                ? { title: prevPost.title, slug: prevPost.slug }
                : undefined
            }
            nextPost={
              nextPost
                ? { title: nextPost.title, slug: nextPost.slug }
                : undefined
            }
          />
        </aside>

        <main className="flex-1">
          <BlogContent hero={article.image}>
            <Content />
          </BlogContent>
        </main>
      </div>
    </div>
  );
}
