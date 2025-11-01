"use client";

import { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Series, Article } from "@/app/data/seriesData"; // ✅ shared types

interface ArticlesClientProps {
  series: Series[];
  articles: Article[];
}

export default function ArticlesClient({ series, articles }: ArticlesClientProps) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // 🏷️ Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    [...articles, ...series].forEach((item) =>
      item.tags?.forEach((t) => tags.add(t))
    );
    return Array.from(tags);
  }, [articles, series]);

  // 🔍 Filter by tag + search
  const filteredArticles = useMemo(() => {
    const query = search.toLowerCase();
    const matches = (item: { title: string; description?: string; tags: string[] }) =>
      (!selectedTag || item.tags.includes(selectedTag)) &&
      (item.title.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query));
    return {
      series: series.filter(matches),
      articles: articles.filter(matches),
    };
  }, [search, selectedTag, articles, series]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="space-y-20">
      {/* 🔍 Filters */}
      <div className="flex flex-wrap gap-4 items-center mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 w-4 h-4 opacity-60" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={handleSearchChange}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/10 focus:outline-none focus:border-[hsl(var(--primary))]/60 transition"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedTag === ""
                ? "bg-[hsl(var(--primary))] text-white"
                : "border-[hsl(var(--border))]/40"
            } transition`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
              className={`px-3 py-1 rounded-full text-sm border ${
                selectedTag === tag
                  ? "bg-[hsl(var(--primary))] text-white"
                  : "border-[hsl(var(--border))]/40"
              } transition`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 📚 Series Section */}
      {filteredArticles.series.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Series</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.series.map((serie) => (
              <Link
                key={serie.slug}
                href={`/articles/series/${serie.slug}`}
                className="group border border-[hsl(var(--border))]/40 rounded-xl p-5 hover:bg-[hsl(var(--muted))]/15 transition"
              >
                <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--primary))]">
                  {serie.title}
                </h3>
                <p className="text-sm opacity-70 mt-1">
                  {serie.description}
                </p>
                <p className="text-xs mt-2 opacity-60">
                  {serie.posts.length} chapters
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 📝 Individual Articles */}
      {filteredArticles.articles.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group border border-[hsl(var(--border))]/40 rounded-xl p-5 hover:bg-[hsl(var(--muted))]/15 transition"
              >
                <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--primary))]">
                  {article.title}
                </h3>
                <p className="text-sm opacity-70 mt-1 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border border-[hsl(var(--border))]/30 opacity-70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
