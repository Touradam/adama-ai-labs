export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Learn AI", href: "/learn-ai" },
  { label: "Build With AI", href: "/build-with-ai" },
  { label: "NN Builder", href: "/neural-network-builder" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  education: [
    { label: "Courses", href: "/learn-ai#courses" },
    { label: "NN Builder", href: "/neural-network-builder" },
    { label: "Student Outcomes", href: "/learn-ai#outcomes" },
    { label: "Enrollment", href: "/contact?type=student" },
  ],
  services: [
    { label: "AI Agents", href: "/build-with-ai#ai-agents" },
    { label: "Python Automation", href: "/build-with-ai#python-automation" },
    { label: "ML Solutions", href: "/build-with-ai#ml-solutions" },
    { label: "Consulting", href: "/build-with-ai#consulting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Mission", href: "/about#mission" },
    { label: "Contact", href: "/contact" },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter",
  },
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "Github",
  },
];

export const contactInfo = {
  email: "hello@adamaailabs.com",
  phone: "+1 (555) 123-4567", // Placeholder
  location: "United States",
};

export const siteInfo = {
  name: "A-dama AI Labs",
  tagline: "Build with AI. Learn with AI.",
  description:
    "AI Agents, Automation & Applied Machine Learning for Students and Founders.",
  url: "https://adamaailabs.com", // Placeholder
};

