"use client";

import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { programWeeks, programPhilosophy, targetAudience, programOutcomes } from "@/data/courses";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Home() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const toggleWeek = (weekId: string) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Build tools that optimize your life — don't let AI use you."
        description="A 2-weekend AI education program for anyone who wants to understand AI, think critically about it, and build real tools without becoming dependent on it."
        primaryCTA={{
          text: "Get in Touch",
          href: "mailto:touradam3@gmail.com",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Learn More",
          href: "#program",
        }}
      />

      {/* Program Overview Section */}
      <SectionWrapper className="bg-white" id="program">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              The Program
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              2 weekends. 6 days. Transform from AI beginner to confident builder.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-ai-blue/5 to-indigo-50 rounded-2xl p-8 md:p-12 border border-ai-blue/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-ai-blue mb-2">2</div>
                  <div className="text-sm md:text-base text-muted-foreground">Weekends</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-ai-blue mb-2">6</div>
                  <div className="text-sm md:text-base text-muted-foreground">Days Total</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-ai-blue mb-2">0</div>
                  <div className="text-sm md:text-base text-muted-foreground">Prerequisites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Week Breakdown */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {programWeeks.map((week) => (
              <div
                key={week.id}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-ai-blue/30 transition-all"
              >
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-soft-gray/50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2 font-heading">
                      {week.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {week.subtitle}
                    </p>
                  </div>
                  {expandedWeek === week.id ? (
                    <ChevronUp className="w-6 h-6 text-ai-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {expandedWeek === week.id && (
                  <div className="px-6 md:px-8 pb-6 space-y-6">
                    {week.days.map((day, index) => (
                      <div
                        key={day.id}
                        className="bg-soft-gray/50 rounded-lg p-6 border border-gray-200"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-xl font-bold text-ai-blue">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-ai-blue mb-1">
                              {day.day}
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold text-charcoal mb-2">
                              {day.title}
                            </h4>
                            <p className="text-base text-muted-foreground mb-4">
                              {day.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {day.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-2">
                              <span className="text-ai-blue mt-1 flex-shrink-0">•</span>
                              <span className="text-sm md:text-base text-charcoal">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who This Is For Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Who This Program Is For
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Anyone who wants to use AI as a tool, not a crutch. No prior experience required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {targetAudience.map((audience, index) => (
              <FeatureCard
                key={index}
                title={audience.title}
                description={audience.description}
                icon={audience.icon}
                accentColor="blue"
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Core Philosophy Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Core Philosophy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              AI is the most powerful tool humanity has ever created. Learn to use it intentionally and responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {programPhilosophy.map((principle, index) => (
              <FeatureCard
                key={index}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
                accentColor="blue"
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What You'll Achieve Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              What You'll Achieve
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Walk away with real skills, real projects, and real confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programOutcomes.map((outcome, index) => (
              <FeatureCard
                key={index}
                title={outcome.title}
                description={outcome.description}
                icon={outcome.icon}
                accentColor="blue"
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Now Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-heading">
                Why This Matters Now
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                AI is the most powerful tool humanity has ever created. Those who learn how to use it <strong className="text-charcoal">intentionally and responsibly</strong> will thrive in the coming years.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Those who don't risk becoming passive users — or victims of it.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                This program focuses on understanding what AI really is, learning how machine learning works, gaining practical skills to build real applications, and developing <strong className="text-charcoal">AI literacy, agency, and ethical awareness</strong>.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Take Control of AI?"
        description="Interested in our program? Get in touch to learn more."
        primaryCTA={{
          text: "Contact Us",
          href: "mailto:touradam3@gmail.com",
          variant: "blue",
        }}
      />
    </>
  );
}
