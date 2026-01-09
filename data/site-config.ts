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
  { label: "The Program", href: "/learn-ai" },
  { label: "NN Builder", href: "/neural-network-builder" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  program: [
    { label: "2-Weekend Program", href: "/learn-ai" },
    { label: "Curriculum", href: "/learn-ai#curriculum" },
    { label: "NN Builder", href: "/neural-network-builder" },
    { label: "Join Waitlist", href: "/contact" },
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
  email: "touradam3@gmail.com",
  phone: "+1 (555) 123-4567", // Placeholder
  location: "United States",
};

export const siteInfo = {
  name: "Adama AI Lab",
  tagline: "Build tools that optimize your life — don't let AI use you.",
  description:
    "A 2-weekend AI education program teaching anyone to understand AI, think critically about it, and build real tools without becoming dependent on it.",
  url: "https://adamaailabs.com", // Placeholder
};

