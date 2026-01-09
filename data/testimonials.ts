export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  category: "student" | "founder" | "business";
  avatar?: string;
}

// Placeholder testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The neural networks course transformed how I think about AI. I went from complete beginner to building my own models in just a few weeks.",
    author: "Alex Chen",
    role: "College Freshman",
    category: "student",
  },
  {
    id: "2",
    quote:
      "A-dama AI Labs built us an automation system that saves our team 15 hours every week. The ROI was immediate.",
    author: "Maria Rodriguez",
    role: "Operations Manager",
    company: "TechStart Inc",
    category: "business",
  },
  {
    id: "3",
    quote:
      "As a non-technical founder, I was intimidated by AI. Their consulting helped me understand exactly what I needed and how to implement it.",
    author: "James Wilson",
    role: "Founder",
    company: "GrowthLabs",
    category: "founder",
  },
  {
    id: "4",
    quote:
      "The LLM agent workshop was hands-on and practical. I built a working agent that I now use in my business every day.",
    author: "Priya Patel",
    role: "Entrepreneur",
    category: "founder",
  },
  {
    id: "5",
    quote:
      "Best investment in my education. The mentorship was personalized and I got real portfolio projects that helped me land internships.",
    author: "Marcus Johnson",
    role: "High School Senior",
    category: "student",
  },
];


