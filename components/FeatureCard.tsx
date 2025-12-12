"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  index?: number;
  accentColor?: "blue" | "orange" | "default";
}

export function FeatureCard({
  title,
  description,
  icon,
  features,
  index = 0,
  accentColor = "default",
}: FeatureCardProps) {
  // @ts-ignore - Dynamic icon lookup
  const Icon: LucideIcon = Icons[icon] || Icons.Box;

  const getAccentClass = () => {
    switch (accentColor) {
      case "blue":
        return "text-ai-blue";
      case "orange":
        return "text-energy-orange";
      default:
        return "text-charcoal";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className={`w-12 h-12 rounded-lg bg-soft-gray flex items-center justify-center mb-4 ${getAccentClass()}`}>
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        {features && features.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className={`mr-2 mt-1 ${getAccentClass()}`}>•</span>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}


