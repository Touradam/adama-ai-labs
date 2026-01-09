"use client";

import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { programWeeks, programOutcomes } from "@/data/courses";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function LearnAIPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="2-WEEKEND AI EDUCATION PROGRAM"
        title="Master AI in 6 Days"
        description="Learn to understand AI, think critically about it, and build real tools that optimize your life — without becoming dependent on it."
        primaryCTA={{
          text: "Join Waitlist",
          href: "/contact",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "View Curriculum",
          href: "#curriculum",
        }}
      />

      {/* Program Details Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Program Details
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about the program structure and logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-soft-gray rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-ai-blue" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Friday - Saturday - Sunday<br />Two consecutive weekends
              </p>
            </div>

            <div className="bg-soft-gray rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-ai-blue" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Time Commitment</h3>
              <p className="text-sm text-muted-foreground">
                Full-day sessions<br />9 AM - 5 PM each day
              </p>
            </div>

            <div className="bg-soft-gray rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-ai-blue" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Format</h3>
              <p className="text-sm text-muted-foreground">
                Small cohorts<br />10-15 participants max
              </p>
            </div>

            <div className="bg-soft-gray rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-ai-blue" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                In-person & Online<br />Details upon enrollment
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Curriculum Section */}
      <SectionWrapper className="bg-soft-gray" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Detailed Curriculum
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive breakdown of what you'll learn each day.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {programWeeks.map((week, weekIndex) => (
              <div key={week.id}>
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-ai-blue/10 text-ai-blue text-sm font-semibold rounded-full mb-3">
                    {week.title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-2 font-heading">
                    {week.subtitle}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {week.days.map((day, dayIndex) => (
                    <div
                      key={day.id}
                      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-ai-blue/30 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-ai-blue/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-ai-blue">
                            {weekIndex * 3 + dayIndex + 1}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-ai-blue uppercase">
                            {day.day}
                          </div>
                          <h4 className="text-lg font-bold text-charcoal">
                            {day.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {day.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="text-xs font-semibold text-charcoal uppercase mb-2">
                          Topics Covered
                        </div>
                        {day.topics.slice(0, 4).map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start gap-2">
                            <span className="text-ai-blue mt-0.5 flex-shrink-0 text-xs">•</span>
                            <span className="text-xs text-charcoal leading-relaxed">
                              {topic}
                            </span>
                          </div>
                        ))}
                        {day.topics.length > 4 && (
                          <div className="text-xs text-muted-foreground italic">
                            + {day.topics.length - 4} more topics
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-xs font-semibold text-charcoal uppercase mb-2">
                          Learning Objectives
                        </div>
                        <div className="space-y-1">
                          {day.learningObjectives.map((objective, objIndex) => (
                            <div key={objIndex} className="flex items-start gap-2">
                              <span className="text-ai-blue mt-0.5 flex-shrink-0 text-xs">✓</span>
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {objective}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What You'll Achieve Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              What You'll Achieve
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real skills, real projects, real confidence.
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

      {/* FAQ Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Do I need programming experience?
              </h3>
              <p className="text-base text-muted-foreground">
                No! This program is designed for complete beginners. We'll teach you everything you need to know, starting with the fundamentals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                What equipment do I need?
              </h3>
              <p className="text-base text-muted-foreground">
                Just a laptop (Mac, Windows, or Linux). We'll guide you through installing all necessary software on Day 1.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                What if I can't attend all 6 days?
              </h3>
              <p className="text-base text-muted-foreground">
                The program is designed as a cohesive journey. We strongly recommend attending all sessions, but recordings will be available for registered participants.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Will I receive a certificate?
              </h3>
              <p className="text-base text-muted-foreground">
                Yes! Upon completion, you'll receive a certificate of completion and have portfolio-ready projects to showcase.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                When is the next cohort?
              </h3>
              <p className="text-base text-muted-foreground">
                We're currently accepting waitlist signups. Join the waitlist to be notified when dates are announced and receive early access to enrollment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                How much does it cost?
              </h3>
              <p className="text-base text-muted-foreground">
                Pricing will be announced with cohort dates. Join the waitlist to receive pricing information and early-bird discounts.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonial Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-charcoal mb-6 italic">
                  "This program is designed to give you the clarity, skills, and confidence to use AI as a powerful tool — not to become dependent on it. You'll learn to think critically, build intentionally, and stay in control."
                </p>
              </div>
              <footer className="text-muted-foreground">
                <p className="font-semibold text-charcoal">A-dama AI Labs</p>
                <p className="text-sm">Program Philosophy</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionWrapper>

      {/* Enrollment CTA */}
      <CTASection
        title="Ready to Start Your AI Journey?"
        description="Join the waitlist for our next cohort. Limited spots available."
        primaryCTA={{
          text: "Join Waitlist",
          href: "/contact",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Explore Neural Network Builder",
          href: "/neural-network-builder",
        }}
      />
    </>
  );
}
