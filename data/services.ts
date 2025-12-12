export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  examples?: string[];
}

export const services: Service[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Custom intelligent agents that automate complex workflows and decision-making.",
    icon: "Bot",
    features: [
      "Research bots",
      "Customer support agents",
      "Workflow executors",
      "Multi-agent systems",
    ],
    examples: [
      "Automated research assistant that gathers and summarizes industry news",
      "Customer support agent that handles common queries",
      "Sales pipeline agent that qualifies leads",
    ],
  },
  {
    id: "python-automation",
    title: "Python Automation",
    description: "Streamline your operations with custom Python scripts and automation pipelines.",
    icon: "Code",
    features: [
      "Data pipeline automation",
      "Spreadsheet & CRM integrations",
      "Report generation",
      "Notification systems",
    ],
    examples: [
      "Automated weekly reports from multiple data sources",
      "CRM data synchronization",
      "Invoice processing and validation",
    ],
  },
  {
    id: "ml-solutions",
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs and data.",
    icon: "Brain",
    features: [
      "Classification models",
      "Forecasting & predictions",
      "Sensor data analytics",
      "Custom model training",
    ],
    examples: [
      "Customer churn prediction",
      "Equipment failure forecasting",
      "Image classification for quality control",
    ],
  },
  {
    id: "consulting",
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI and automation in your business.",
    icon: "Lightbulb",
    features: [
      "AI roadmap development",
      "Tool selection & evaluation",
      "Integration planning",
      "Team training",
    ],
    examples: [
      "AI strategy for small businesses",
      "Tool stack recommendations",
      "Process automation assessment",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We discuss your business needs, pain points, and automation goals.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Proposal",
    description: "Receive a detailed proposal with timeline, deliverables, and pricing.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Build",
    description: "We develop your solution with regular check-ins and updates.",
    icon: "Hammer",
  },
  {
    step: 4,
    title: "Delivery",
    description: "Get your solution deployed with documentation and training.",
    icon: "Rocket",
  },
  {
    step: 5,
    title: "Support",
    description: "Optional ongoing maintenance and feature additions.",
    icon: "HeadphonesIcon",
  },
];


