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

// Project content is drawn from the corresponding public source repository and
// its documentation. Personal challenge/solution/future-plan notes remain explicit placeholders.
export const projects: Project[] = [
  {
    slug: "bazardor",
    title: "BazarDor — বাজার দর",
    description: "A Bengali-language market price tracker for browsing essential product prices, categories, and price changes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB"],
    accent: "sage",
    screenshot: "/bazardor.png",
    imageWidth: 3420,
    imageHeight: 6944,
    overview: "BazarDor helps people in Bangladesh review daily prices for essential products. The application organizes products by category and presents price movement and comparisons over time.",
    features: [
      "Browse essential products by category.",
      "Review price increases and decreases.",
      "Compare current prices with previous periods.",
      "Sign-in, sign-up, and protected profile features.",
    ],
    role: "Built as a personal project. Specific individual contributions are not documented here.",
    challenges: "Development challenges have not been documented yet.",
    solution: "Challenge-specific solutions have not been documented yet.",
    future: "Future plans have not been provided yet.",
    liveUrl: "https://bazar-dor-app-one.vercel.app/",
    githubUrl: "https://github.com/saedamim/bazar-dor-app",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    description: "A workout library and planning interface for browsing exercises and organizing a training plan.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    accent: "lavender",
    screenshot: "/fitlog.png",
    imageWidth: 3420,
    imageHeight: 5018,
    overview: "FitLog is a workout library and tracking interface. It lets visitors browse exercise information, view workout details, organize a daily plan, and save favorite exercises.",
    features: [
      "Browse workouts with exercise and equipment information.",
      "View workout details, instructions, and activity data.",
      "Build and manage a personal workout plan.",
      "Save favorite workouts for later.",
      "Persist plan and saved items in browser local storage.",
    ],
    role: "Built as a personal frontend project. Specific individual contributions are not documented here.",
    challenges: "Development challenges have not been documented yet.",
    solution: "Challenge-specific solutions have not been documented yet.",
    future: "Future plans have not been provided yet.",
    liveUrl: "https://a6-fitlog-repo.vercel.app/",
    githubUrl: "https://github.com/saedamim/a6-fitlog-repo",
  },
  {
    slug: "dev-conf",
    title: "Dev Conf",
    description: "A responsive developer conference landing page featuring event information, speakers, pricing, and updates.",
    technologies: ["HTML5", "CSS3"],
    accent: "sand",
    screenshot: "/devstack.png",
    imageWidth: 3420,
    imageHeight: 5192,
    overview: "Dev Conf (DevConference 2026) is a static conference landing page designed to present event details and help visitors explore the speakers, ticket plans, and updates.",
    features: [
      "Conference hero and event introduction.",
      "Speaker profiles.",
      "Ticket pricing plans.",
      "Email updates form and social links.",
      "Responsive layout for mobile and larger screens.",
    ],
    role: "Built as a personal project. Specific individual contributions are not documented here.",
    challenges: "Development challenges have not been documented yet.",
    solution: "Challenge-specific solutions have not been documented yet.",
    future: "Future plans have not been provided yet.",
    liveUrl: "https://saedamim.github.io/b14-as1-repository/",
    githubUrl: "https://github.com/saedamim/b14-as1-repository",
  },
];
