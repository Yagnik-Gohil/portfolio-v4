import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import BlogSidebar from "@/app/components/BlogSidebar";
import { Metadata } from "next";
import Content from "./Content";

// ✅ Static Metadata
export const metadata: Metadata = {
  title: "What is Docker & Docker Hub | Yagnik Gohil",
  description:
    "Explore what Docker is, its purpose, core concepts, and how Docker Hub helps share and fetch container images.",
};

export default function BlogPage() {
  // ✅ Manual prev/next posts
  const prevPost = {
    title: "Optimizing React Performance with useMemo",
    slug: "react-usememo-performance",
  };

  const nextPost = {
    title: "Understanding Containers",
    slug: "containers",
  };

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 max-w-6xl">
      {/* Blog Header at top */}
      <BlogHeader title="What is Docker & Docker Hub" date="Oct 31, 2025" />

      {/* 2-column layout: Sidebar + Main Content */}
      <div className="mt-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full lg:sticky lg:top-24 self-start">
          <BlogSidebar prevPost={prevPost} nextPost={nextPost} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <BlogContent hero="https://d21r3yo3pas5u.cloudfront.net/thumbnail/docker-and-docker-hub.png">
            <Content />
          </BlogContent>
        </main>
      </div>
    </div>
  );
}
