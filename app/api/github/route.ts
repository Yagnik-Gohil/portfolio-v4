import { NextResponse } from "next/server";

const PROJECTS = [
  { repo: "skribbl", title: "Skribbl" },
  { repo: "Ambient-Chaos", title: "Ambient Chaos" },
  { repo: "pokedex-cli", title: "Pokedex CLI" },
];

export async function GET() {
  const username = "Yagnik-Gohil";

  const projects = await Promise.all(
    PROJECTS.map(async (p) => {
      const res = await fetch(`https://api.github.com/repos/${username}/${p.repo}`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 }, // cache for 1 hour
      });

      if (!res.ok) return null;
      const repo = await res.json();
      console.log(repo)

      return {
        title: p.title,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        topics: repo.topics,
        updated_at: repo.updated_at,
        homepage: repo.homepage,
      };
    })
  );

  const filtered = projects.filter(Boolean);
  return NextResponse.json(filtered);
}
