"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
    variant?: "default" | "blue" | "orange";
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className = "",
}: CTASectionProps) {
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
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-charcoal to-charcoal/90 rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  className="border-2 border-white bg-white text-charcoal hover:bg-white/90 text-base px-8 font-semibold"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


