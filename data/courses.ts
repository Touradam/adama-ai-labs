export interface ProgramDay {
  id: string;
  day: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
  learningObjectives: string[];
}

export interface ProgramWeek {
  id: string;
  title: string;
  subtitle: string;
  days: ProgramDay[];
}

export const programWeeks: ProgramWeek[] = [
  {
    id: "week-1",
    title: "Week 1 — BOOTCAMP",
    subtitle: "Foundation + Hands-On Skills",
    days: [
      {
        id: "friday-1",
        day: "Friday",
        title: "Understanding AI",
        description: "Introduction to AI, Machine Learning & Neural Networks",
        icon: "Brain",
        topics: [
          "What AI is vs what it is not",
          "History and evolution of AI",
          "What machine learning actually means",
          "How models learn (data, training, inference)",
          "Neural networks — explained intuitively",
          "Common myths, fears, and limitations of AI",
          "How to think critically about AI outputs",
        ],
        learningObjectives: [
          "Understand the fundamentals of AI and machine learning",
          "Develop critical thinking skills for evaluating AI",
          "Build intuition for how neural networks work",
        ],
      },
      {
        id: "saturday-1",
        day: "Saturday",
        title: "Programming Fundamentals",
        description: "Tools & Foundations for Building",
        icon: "Code",
        topics: [
          "Programming fundamentals (Python + basics)",
          "How software applications are structured",
          "Introduction to Cursor (AI-assisted coding)",
          "Git & version control",
          "Project organization",
          "How developers actually work with AI today",
          "Using AI to accelerate learning, not replace thinking",
        ],
        learningObjectives: [
          "Learn Python programming basics",
          "Understand software development workflows",
          "Use AI tools responsibly to enhance productivity",
        ],
      },
      {
        id: "sunday-1",
        day: "Sunday",
        title: "Building & Deployment",
        description: "From Idea to Working Application",
        icon: "Rocket",
        topics: [
          "Building a simple web app",
          "Building a Python application",
          "Connecting AI models to applications",
          "Prompt design basics",
          "Deployment fundamentals",
          "Turning ideas into usable tools",
          "Best practices to avoid over-reliance on AI",
        ],
        learningObjectives: [
          "Build and deploy your first AI-powered application",
          "Learn effective prompt engineering",
          "Understand deployment and production basics",
        ],
      },
    ],
  },
  {
    id: "week-2",
    title: "Week 2 — WORKSHOP",
    subtitle: "Advanced Concepts + Personal Projects",
    days: [
      {
        id: "friday-2",
        day: "Friday",
        title: "Agentic Workflows",
        description: "How AI Agents Think & Act",
        icon: "Bot",
        topics: [
          "Introduction to frontier LLM models",
          "Introduction to open source LLM models",
          "Introduction to AI agents",
          "Introduction to Jupyter Lab",
          "Introduction to CrewAI and AutoGen",
          "Working with APIs",
          "Building a simple AI agent application",
          "Where agents help — and where they shouldn't be trusted",
        ],
        learningObjectives: [
          "Understand different types of LLM models",
          "Learn agent architecture and design patterns",
          "Build your first AI agent",
        ],
      },
      {
        id: "saturday-2",
        day: "Saturday",
        title: "AI Agent Applications",
        description: "Build Your Own AI Agent",
        icon: "Wrench",
        topics: [
          "Designing a real-world AI agent",
          "Connecting tools, APIs, and data",
          "Building agents for productivity",
          "Building agents for research",
          "Building agents for personal automation",
          "Ethics, safety, and boundaries",
          "How to stay in control of AI systems",
        ],
        learningObjectives: [
          "Design and build a custom AI agent",
          "Integrate multiple tools and APIs",
          "Apply ethical AI principles in practice",
        ],
      },
      {
        id: "sunday-2",
        day: "Sunday",
        title: "Q&A + Integration",
        description: "Reflection, Ethics & Next Steps",
        icon: "MessageCircle",
        topics: [
          "Live Q&A",
          "Review of key concepts",
          "Common mistakes beginners make",
          "How to continue learning responsibly",
          "How to use AI without becoming dependent",
          "Building a long-term AI mindset",
        ],
        learningObjectives: [
          "Consolidate learning from the program",
          "Develop a personal AI learning roadmap",
          "Build sustainable habits for AI usage",
        ],
      },
    ],
  },
];

export const programPhilosophy = [
  {
    title: "AI is a Tool",
    description: "Not a replacement for human thinking. You stay in control.",
    icon: "Wrench",
  },
  {
    title: "Principles Over Tools",
    description: "Understanding principles matters more than memorizing tools.",
    icon: "BookOpen",
  },
  {
    title: "Deliberate Usage",
    description: "Use AI deliberately and intentionally, not passively.",
    icon: "Target",
  },
  {
    title: "Agency & Empowerment",
    description: "The goal is clarity, agency, and empowerment.",
    icon: "Zap",
  },
];

export const targetAudience = [
  {
    title: "Students",
    description: "High school and college students looking to understand AI deeply.",
    icon: "GraduationCap",
  },
  {
    title: "Entrepreneurs",
    description: "Founders who want to build AI tools for their businesses.",
    icon: "Briefcase",
  },
  {
    title: "Creatives",
    description: "Artists, writers, and designers exploring AI applications.",
    icon: "Palette",
  },
  {
    title: "Professionals",
    description: "Career professionals seeking to leverage AI in their work.",
    icon: "Users",
  },
  {
    title: "Non-Technical People",
    description: "Anyone curious about AI — no programming experience required.",
    icon: "Heart",
  },
];

export const programOutcomes = [
  {
    title: "AI Literacy",
    description: "Understand what AI really is and how it works under the hood.",
    icon: "Brain",
  },
  {
    title: "Practical Skills",
    description: "Build real applications using Python, AI models, and modern tools.",
    icon: "Code",
  },
  {
    title: "Critical Thinking",
    description: "Evaluate AI outputs critically and use AI responsibly.",
    icon: "Eye",
  },
  {
    title: "Real Projects",
    description: "Walk away with portfolio-ready AI applications you built yourself.",
    icon: "Folder",
  },
  {
    title: "Ethical Awareness",
    description: "Understand the ethical implications and boundaries of AI.",
    icon: "Shield",
  },
  {
    title: "Long-term Mindset",
    description: "Develop sustainable habits for learning and using AI.",
    icon: "TrendingUp",
  },
];
