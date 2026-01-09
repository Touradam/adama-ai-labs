import Link from "next/link";
import { socialLinks, siteInfo, contactInfo } from "@/data/site-config";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const iconMap: Record<string, any> = {
  Linkedin,
  Twitter,
  Github,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Section */}
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                {siteInfo.name}
              </h3>
            </Link>
            <p className="text-white/70 mb-6 text-lg">
              {siteInfo.tagline}
            </p>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              {siteInfo.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
