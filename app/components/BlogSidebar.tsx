"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { USER_IMAGE } from "../data/constant";

interface BlogSidebarProps {
  prevPost?: { slug: string; title: string };
  nextPost?: { slug: string; title: string };
}

export default function BlogSidebar({ prevPost, nextPost }: BlogSidebarProps) {
  return (
    <motion.aside
      className="hidden lg:block w-64 sticky top-28 self-start"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Author */}
      <div className="mb-8 text-center">
        <Image
          src={USER_IMAGE}
          alt="Yagnik Gohil"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-3"
          unoptimized
        />
        <h3 className="font-semibold">Yagnik Gohil</h3>
        <a
          href="https://x.com/yagnik_19"
          target="_blank"
          className="text-sm opacity-70 hover:opacity-100 transition"
        >
          @yagnik_19
        </a>
      </div>

      <div className="border-t border-[hsl(var(--border))]/40 pt-6 space-y-4 text-sm">
        {prevPost && (
          <div>
            <p className="text-xs uppercase tracking-wide opacity-60 mb-1">
              Previous Article
            </p>
            <Link
              href={`/articles/${prevPost.slug}`}
              className="block opacity-80 hover:opacity-100 transition"
            >
              {prevPost.title}
            </Link>
          </div>
        )}

        {nextPost && (
          <div>
            <p className="text-xs uppercase tracking-wide opacity-60 mb-1">
              Next Article
            </p>
            <Link
              href={`/articles/${nextPost.slug}`}
              className="block opacity-80 hover:opacity-100 transition"
            >
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
