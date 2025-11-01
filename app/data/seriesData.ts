export interface Article {
  title: string;
  slug: string;
  description: string;
  tags: string[];
}

export interface Series {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  posts: Article[];
}

// ---- Data ----
export const allSeries: Series[] = [
  {
    title: "Learn Docker",
    slug: "docker",
    description:
      "This series presents Docker concepts in a clear and structured manner, covering essential topics from basic containerization to deployment.",
    tags: ["Docker", "DevOps", "Containers"],
    posts: [
      {
        title: "What is Docker & Docker Hub",
        slug: "what-is-docker",
        description:
          "Explore what Docker is, its purpose, core concepts, and how Docker Hub helps share and fetch container images.",
        tags: ["Docker"],
      },
      {
        title: "Understanding Containers",
        slug: "containers",
        description:
          "Learn about containers, how they differ from virtual machines, and how to run, stop, and manage them effectively.",
        tags: ["Docker", "Images", "Containers"],
      },
      {
        title: "Storage & Volumes",
        slug: "volumes",
        description:
          "Understand Docker volumes and how to persist data safely across containers.",
        tags: ["Docker", "Volumes"],
      },
      {
        title: "Managing & Inspecting Containers",
        slug: "managing-and-inspecting-containers",
        description:
          "Explore how to run commands and inspect what’s happening inside your Docker containers.",
        tags: ["Docker", "DevOps"],
      },
    ],
  },
];

export const allArticles: Article[] = [
  {
    title: "Optimizing React Performance with useMemo",
    slug: "react-usememo-performance",
    description:
      "How to identify re-render bottlenecks and fix them with memoization.",
    tags: ["React", "Performance", "Frontend"],
  },
  {
    title: "Mastering Git Rebase",
    slug: "git-rebase-guide",
    description:
      "A developer-friendly guide to Git rebase, conflict resolution, and workflow best practices.",
    tags: ["Git", "Version Control"],
  },
];
