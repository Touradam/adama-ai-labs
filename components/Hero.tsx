"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
    variant?: "default" | "blue" | "orange";
  };
  secondaryCTA?: {
    text: string;
    href: string;
    variant?: "default" | "blue" | "orange";
  };
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  className = "",
}: HeroProps) {
  const getButtonClasses = (variant?: "default" | "blue" | "orange") => {
    switch (variant) {
      case "blue":
        return "bg-ai-blue hover:bg-ai-blue/90 text-white";
      case "orange":
        return "bg-energy-orange hover:bg-energy-orange/90 text-white";
      default:
        return "bg-charcoal hover:bg-charcoal/90 text-white";
    }
  };

  return (
    <section
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ${className}`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-gray to-background -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wide mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 font-heading leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button
                    size="lg"
                    className={`${getButtonClasses(primaryCTA.variant)} text-base px-8`}
                  >
                    {primaryCTA.text}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`text-base px-8 font-semibold border-2 ${
                      secondaryCTA.variant === "blue"
                        ? "border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white"
                        : secondaryCTA.variant === "orange"
                        ? "border-energy-orange text-energy-orange hover:bg-energy-orange hover:text-white"
                        : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


