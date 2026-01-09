export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "automation" | "ml" | "agent" | "education";
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  impact?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

// Placeholder case studies
export const caseStudies: CaseStudy[] = [
  {
    id: "founder-automation",
    title: "Saved 10 Hours/Week with Research Automation",
    client: "Tech Startup Founder",
    category: "automation",
    description:
      "Automated competitive research and market analysis for a fast-growing SaaS startup.",
    challenge:
      "Founder was spending 10+ hours weekly manually gathering competitor data and market insights.",
    solution:
      "Built a custom AI agent that monitors competitors, aggregates news, and delivers weekly summarized reports.",
    results: [
      "10 hours saved per week",
      "30% more comprehensive market coverage",
      "Real-time alerts on competitor moves",
    ],
    impact: "Freed up time to focus on product and customer acquisition.",
  },
  {
    id: "student-portfolio",
    title: "High School Student Builds Award-Winning AI Project",
    client: "High School Student",
    category: "education",
    description:
      "Mentored a high school student through building a neural network for image classification.",
    challenge:
      "Student was interested in AI but didn't know where to start or what project to build.",
    solution:
      "1:1 mentorship program covering neural network fundamentals and project-based learning.",
    results: [
      "Completed portfolio project",
      "Won regional science fair",
      "Accepted to top engineering program",
    ],
    testimonial: {
      quote:
        "I went from not understanding AI to building my own neural network. The mentorship was incredible.",
      author: "Sarah M.",
      role: "High School Student",
    },
  },
  {
    id: "renewable-energy-ml",
    title: "Sensor Analytics for Renewable Energy",
    client: "Clean Energy Company",
    category: "ml",
    description:
      "Developed ML models for predictive maintenance on solar panel arrays.",
    challenge:
      "Client needed to predict equipment failures before they happened to reduce downtime.",
    solution:
      "Built custom classification model using sensor data to predict failures 48 hours in advance.",
    results: [
      "40% reduction in unplanned downtime",
      "25% increase in energy output",
      "Faster maintenance scheduling",
    ],
  },
];


