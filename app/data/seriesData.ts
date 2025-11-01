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
    title: "Learn Docker Series",
    slug: "learn-docker-series",
    description:
      "A step-by-step guide to mastering Docker — from basics to production-ready containers.",
    tags: ["Docker", "DevOps", "Containers"],
    posts: [
      {
        title: "Introduction to Docker",
        slug: "docker-introduction",
        description:
          "Get started with containerization by understanding what Docker is and why it matters.",
        tags: ["Docker", "Containers"],
      },
      {
        title: "Docker Images & Containers",
        slug: "docker-images-containers",
        description:
          "Learn how Docker images are built, stored, and turned into running containers.",
        tags: ["Docker", "Images", "Containers"],
      },
      {
        title: "Dockerfile Deep Dive",
        slug: "dockerfile-deep-dive",
        description:
          "Master writing efficient Dockerfiles with best practices and real-world tips.",
        tags: ["Docker", "Dockerfile", "DevOps"],
      },
      {
        title: "Docker Compose Basics",
        slug: "docker-compose-basics",
        description:
          "Simplify multi-container setups with Docker Compose — a must-have DevOps tool.",
        tags: ["Docker", "Compose", "DevOps"],
      },
      {
        title: "Volumes & Networking",
        slug: "docker-volumes-networking",
        description:
          "Understand persistent data storage and inter-container communication in Docker.",
        tags: ["Docker", "Volumes", "Networking"],
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
