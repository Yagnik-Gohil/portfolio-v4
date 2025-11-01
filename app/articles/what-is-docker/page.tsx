import BlogContent from "@/app/components/BlogContent";
import BlogHeader from "@/app/components/BlogHeader";
import BlogSidebar from "@/app/components/BlogSidebar";
import { Metadata } from "next";

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
            <p>
              Welcome to the Docker Series — in this post, we’ll cover the basics
              of containerization, why Docker matters, and how to get started.
            </p>

            <h2>What is Docker?</h2>
            <p>
              Docker is a platform that allows developers to package applications
              and dependencies into containers. Containers ensure your app runs
              the same regardless of where it’s deployed — your laptop, staging
              server, or the cloud.
            </p>

            <h2>Why Use Docker?</h2>
            <p>
              Docker simplifies development, testing, and deployment by providing
              lightweight, isolated environments. Instead of worrying about “it
              works on my machine,” Docker guarantees consistency.
            </p>

            <h2>Docker Hub</h2>
            <p>
              Docker Hub is a public registry that hosts container images. It’s
              like GitHub for Docker — where you can push, share, and pull images
              for your projects.
            </p>
          </BlogContent>
        </main>
      </div>
    </div>
  );
}
