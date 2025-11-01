import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import BlogSidebar from "@/app/components/BlogSidebar";
import { Metadata } from "next";
import Content from "./Content";

// ✅ Static Metadata
export const metadata: Metadata = {
  title: "Storage & Volumes | Yagnik Gohil",
  description:
    "Understand Docker volumes and how to persist data safely across containers.",
};

export default function BlogPage() {
  // ✅ Manual prev/next posts
  const prevPost = {
    title: "Understanding Containers",
    slug: "containers",
  };

  const nextPost = {
    title: "Managing & Inspecting Containers",
    slug: "managing-and-inspecting-containers",
  };

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 max-w-6xl">
      {/* Blog Header at top */}
      <BlogHeader title="Storage & Volumes" date="October 9, 2025" />

      {/* 2-column layout: Sidebar + Main Content */}
      <div className="mt-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/4 w-full lg:sticky lg:top-24 self-start">
          <BlogSidebar prevPost={prevPost} nextPost={nextPost} />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <BlogContent hero="https://d21r3yo3pas5u.cloudfront.net/thumbnail/storage-and-volumes.png">
            <Content />
          </BlogContent>
        </main>
      </div>
    </div>
  );
}
