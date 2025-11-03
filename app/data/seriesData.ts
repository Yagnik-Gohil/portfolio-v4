export interface Article {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
  next?: string;
  prev?: string;
}

export interface Series {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  posts: Article[];
  image?: string;
}

export const allArticles: Article[] = [
  {
    title: "What is Docker & Docker Hub",
    slug: "what-is-docker",
    description:
      "Explore what Docker is, its purpose, core concepts, and how Docker Hub helps share and fetch container images.",
    tags: ["Docker"],
    image:
      "https://d21r3yo3pas5u.cloudfront.net/thumbnail/docker-and-docker-hub.png",
    date: "Oct 6, 2025",
    next: "containers",
  },
  {
    title: "Understanding Containers",
    slug: "containers",
    description:
      "Learn about containers, how they differ from virtual machines, and how to run, stop, and manage them effectively.",
    tags: ["Docker", "Images", "Containers"],
    image: "https://d21r3yo3pas5u.cloudfront.net/thumbnail/containers.png",
    date: "Oct 7, 2025",
    prev: "what-is-docker",
    next: "volumes",
  },
  {
    title: "Storage & Volumes",
    slug: "volumes",
    description:
      "Understand Docker volumes and how to persist data safely across containers.",
    tags: ["Docker", "Volumes"],
    image:
      "https://d21r3yo3pas5u.cloudfront.net/thumbnail/storage-and-volumes.png",
    date: "Oct 9, 2025",
    prev: "containers",
    next: "managing-and-inspecting-containers",
  },
  {
    title: "Managing & Inspecting Containers",
    slug: "managing-and-inspecting-containers",
    description:
      "Explore how to run commands and inspect what’s happening inside your Docker containers.",
    tags: ["Docker", "DevOps"],
    image:
      "https://d21r3yo3pas5u.cloudfront.net/thumbnail/inspect-containers.png",
    date: "Oct 15, 2025",
    prev: "volumes",
  },
];

export const allSeries: Series[] = [
  {
    title: "Learn Docker",
    slug: "docker",
    description:
      "This series presents Docker concepts in a clear and structured manner, covering essential topics from basic containerization to deployment.",
    tags: ["Docker", "DevOps", "Containers"],
    posts: allArticles.filter((a) =>
      [
        "what-is-docker",
        "containers",
        "volumes",
        "managing-and-inspecting-containers",
      ].includes(a.slug)
    ),
    image: "https://d21r3yo3pas5u.cloudfront.net/thumbnail/docker-and-docker-hub.png",
  },
];
