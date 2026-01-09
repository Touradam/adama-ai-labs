"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";

interface PathCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  icon: string;
  accentColor: "blue" | "orange";
  index?: number;
}

export function PathCard({
  title,
  description,
  features,
  ctaText,
  ctaHref,
  icon,
  accentColor,
  index = 0,
}: PathCardProps) {
  // @ts-ignore - Dynamic icon lookup
  const Icon: LucideIcon = Icons[icon] || Icons.Box;

  const getColorClasses = () => {
    if (accentColor === "blue") {
      return {
        icon: "text-ai-blue",
        bg: "bg-ai-blue/5",
        border: "border-ai-blue/20",
        button: "bg-ai-blue hover:bg-ai-blue/90 text-white",
        hover: "hover:border-ai-blue/40",
      };
    }
    return {
      icon: "text-energy-orange",
      bg: "bg-energy-orange/5",
      border: "border-energy-orange/20",
      button: "bg-energy-orange hover:bg-energy-orange/90 text-white",
      hover: "hover:border-energy-orange/40",
    };
  };

  const colors = getColorClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card
        className={`h-full border-2 ${colors.border} ${colors.hover} transition-all duration-300 ${colors.bg}`}
      >
        <CardContent className="p-8 md:p-10">
          <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.icon}`}>
            <Icon className="w-8 h-8" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            {title}
          </h3>

          <p className="text-muted-foreground mb-6 text-base md:text-lg">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`mr-3 mt-1 ${colors.icon} text-lg`}>✓</span>
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href={ctaHref}>
            <Button className={`w-full ${colors.button} group`} size="lg">
              {ctaText}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}


