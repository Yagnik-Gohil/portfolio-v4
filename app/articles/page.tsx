import { Metadata } from "next";
import { Suspense } from "react";
import ArticlesClient from "./Articles";
import { allSeries, allArticles } from "@/app/data/seriesData";
import { USER_IMAGE } from "../data/constant";
import { makeMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return makeMetadata({
    title: "Articles | Yagnik Gohil",
    description:
      "Technical blogs and learning series by Yagnik Gohil.",
    path: `/articles`,
    image: USER_IMAGE,
  });
}

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24">
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Articles</h1>
        <p className="text-lg opacity-85">
          A mix of technical deep-dives, quick tutorials, and long-form series.
        </p>
      </section>

      <Suspense fallback={<p>Loading...</p>}>
        <ArticlesClient series={allSeries} articles={allArticles} />
      </Suspense>
    </div>
  );
}
