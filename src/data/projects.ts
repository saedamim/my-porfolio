export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  accent: "sage" | "lavender" | "sand";
  screenshot: string;
  imageWidth: number;
  imageHeight: number;
  overview: string;
  features: string[];
  role: string;
  challenges: string;
  solution: string;
  future: string;
  liveUrl?: string;
  githubUrl?: string;
};

// Project names and public links were supplied by Saeda. Descriptions reflect the
// visible live pages; project-specific technology stacks and repository links need confirmation.
export const projects: Project[] = [
  {
    slug: "bazardor",
    title: "BazarDor — বাজার দর",
    description: "A Bengali-language dashboard showing everyday product prices and market price changes.",
    technologies: [],
    accent: "sage",
    screenshot: "/bazardor.png",
    imageWidth: 3420,
    imageHeight: 6944,
    overview: "The live page presents market prices for everyday products in Bengali, including price changes and product categories.",
    features: [],
    role: "Personal contributions to confirm.",
    challenges: "Development challenges to confirm.",
    solution: "How those challenges were addressed to confirm.",
    future: "Future improvements to confirm.",
    liveUrl: "https://bazar-dor-app-one.vercel.app/",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    description: "A workout library and planning interface for browsing exercises and organizing a training plan.",
    technologies: [],
    accent: "lavender",
    screenshot: "/fitlog.png",
    imageWidth: 3420,
    imageHeight: 5018,
    overview: "The live FitLog page describes a workout companion with an exercise library and a training plan.",
    features: [],
    role: "Personal contributions to confirm.",
    challenges: "Development challenges to confirm.",
    solution: "How those challenges were addressed to confirm.",
    future: "Future improvements to confirm.",
    liveUrl: "https://a6-fitlog-repo.vercel.app/",
  },
  {
    slug: "dev-conf",
    title: "Dev Conf",
    description: "A developer technology catalog for exploring tools and assembling a project stack.",
    technologies: [],
    accent: "sand",
    screenshot: "/devstack.png",
    imageWidth: 3420,
    imageHeight: 5192,
    overview: "The provided live page displays a catalog of development technologies across frontend, backend, database, and tooling categories.",
    features: [],
    role: "Personal contributions to confirm.",
    challenges: "Development challenges to confirm.",
    solution: "How those challenges were addressed to confirm.",
    future: "Future improvements to confirm.",
    liveUrl: "https://frolicking-truffle-0d6ef9.netlify.app/",
  },
];
