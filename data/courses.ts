export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  duration?: string;
  level?: string;
}

export const courses: Course[] = [
  {
    id: "neural-networks",
    title: "Neural Networks for Beginners",
    description: "Build a strong intuition for how neural networks work. Learn to build networks from scratch in Python.",
    icon: "Brain",
    features: [
      "Intuition-first approach",
      "Build from scratch in Python",
      "Understand backpropagation",
      "Train your first models",
    ],
    duration: "4-6 weeks",
    level: "Beginner",
  },
  {
    id: "llm-agent-design",
    title: "LLM Agent Design",
    description: "Master the art of building intelligent agents with tools, memory, and multi-agent patterns.",
    icon: "Bot",
    features: [
      "Tools & function calling",
      "Memory systems",
      "Multi-agent architectures",
      "Build research & Q&A agents",
    ],
    duration: "6-8 weeks",
    level: "Intermediate",
  },
  {
    id: "ai-app-building",
    title: "AI App Building",
    description: "Create full-stack AI applications using Python, APIs, and modern frameworks like Next.js.",
    icon: "Code",
    features: [
      "Python + APIs integration",
      "Next.js frontend",
      "Deploy to production",
      "Portfolio-ready projects",
    ],
    duration: "8-10 weeks",
    level: "Intermediate",
  },
];

export const courseFormats = [
  {
    title: "1:1 Mentorship",
    description: "Personalized guidance tailored to your pace and learning style.",
    icon: "User",
  },
  {
    title: "Small Cohorts",
    description: "Learn with 5-10 students in an interactive group setting.",
    icon: "Users",
  },
  {
    title: "Weekend Bootcamps",
    description: "Intensive weekend sessions to kickstart your AI journey.",
    icon: "Calendar",
  },
  {
    title: "Certificate Programs",
    description: "Complete structured programs with certificates of completion.",
    icon: "Award",
  },
];

export const studentOutcomes = [
  {
    title: "Portfolio Projects",
    description: "Build real AI projects you can showcase to colleges and employers.",
    icon: "Folder",
  },
  {
    title: "Real AI Skills",
    description: "Gain practical skills that go beyond theory and tutorials.",
    icon: "Zap",
  },
  {
    title: "Confidence",
    description: "Understand AI deeply enough to explain it and build with it.",
    icon: "Award",
  },
  {
    title: "Future Ready",
    description: "Get ahead in college applications, internships, and tech careers.",
    icon: "TrendingUp",
  },
];

