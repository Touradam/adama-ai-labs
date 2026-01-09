"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteInfo } from "@/data/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Logo - Centered */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-charcoal font-heading">
              {siteInfo.name}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
