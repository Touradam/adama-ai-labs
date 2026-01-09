"use client";

import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { programWeeks, programPhilosophy, targetAudience, programOutcomes } from "@/data/courses";
import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Clock, Users, CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const toggleWeek = (weekId: string) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };

  return (
    <>
      {/* Hero Section with Enhanced Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10"></div>
        
        <Hero
          title="Build tools that optimize your life — don't let AI use you."
          description="A 2-weekend AI education program teaching anyone to understand AI, think critically about it, and build real tools without becoming dependent on it."
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
      </div>

      {/* Trust Indicators */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-ai-blue" />
              <span className="text-sm font-medium text-gray-700">6 Days Total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-ai-blue" />
              <span className="text-sm font-medium text-gray-700">Small Cohorts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-ai-blue" />
              <span className="text-sm font-medium text-gray-700">No Prerequisites</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-ai-blue" />
              <span className="text-sm font-medium text-gray-700">Hands-On Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview Section */}
      <SectionWrapper className="bg-gradient-to-b from-white to-slate-50" id="program">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-ai-blue/10 text-ai-blue text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              The Program
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 font-heading">
              Transform in <span className="text-ai-blue">6 Days</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From AI beginner to confident builder in just two weekends
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-ai-blue to-blue-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">2</div>
                <div className="text-blue-100 text-lg font-medium">Weekends</div>
                <p className="text-sm text-blue-100 mt-2">Fri-Sat-Sun format</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">6</div>
                <div className="text-purple-100 text-lg font-medium">Days Total</div>
                <p className="text-sm text-purple-100 mt-2">Intensive learning</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">0</div>
                <div className="text-emerald-100 text-lg font-medium">Prerequisites</div>
                <p className="text-sm text-emerald-100 mt-2">Anyone can join</p>
              </div>
            </div>
          </div>

          {/* Week Breakdown with Enhanced Design */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {programWeeks.map((week, weekIndex) => (
              <div
                key={week.id}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-ai-blue/50 hover:shadow-xl transition-all"
              >
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full px-8 py-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all group"
                >
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-ai-blue text-white text-xs font-bold rounded-full uppercase">
                        {weekIndex === 0 ? "Week 1" : "Week 2"}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">
                        {week.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal font-heading group-hover:text-ai-blue transition-colors">
                      {week.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedWeek === week.id ? (
                      <ChevronUp className="w-8 h-8 text-ai-blue" />
                    ) : (
                      <ChevronDown className="w-8 h-8 text-gray-400 group-hover:text-ai-blue transition-colors" />
                    )}
                  </div>
                </button>

                {expandedWeek === week.id && (
                  <div className="px-8 pb-8 bg-gradient-to-b from-slate-50 to-white">
                    <div className="grid md:grid-cols-3 gap-6">
                      {week.days.map((day, dayIndex) => (
                        <div
                          key={day.id}
                          className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-ai-blue/50 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ai-blue to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                              <span className="text-lg font-bold text-white">
                                {dayIndex + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-ai-blue uppercase mb-1">
                                {day.day}
                              </div>
                              <h4 className="text-xl font-bold text-charcoal leading-tight">
                                {day.title}
                              </h4>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-4 font-medium">
                            {day.description}
                          </p>

                          <div className="space-y-2 mb-4">
                            {day.topics.slice(0, 4).map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-ai-blue mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700 leading-relaxed">
                                  {topic}
                                </span>
                              </div>
                            ))}
                            {day.topics.length > 4 && (
                              <div className="text-xs text-ai-blue font-medium italic pt-2">
                                + {day.topics.length - 4} more topics
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Who This Is For Section */}
      <SectionWrapper className="bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              Who Should Join
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-heading">
              Designed for <span className="text-ai-blue">Everyone</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No prior technical background required. If you want to use AI as a tool, not a crutch — this is for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all border-2 border-gray-100 hover:border-ai-blue/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ai-blue to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">{audience.icon === "GraduationCap" ? "🎓" : 
                                               audience.icon === "Briefcase" ? "💼" :
                                               audience.icon === "Palette" ? "🎨" :
                                               audience.icon === "Users" ? "👥" : "❤️"}</span>
                </div>
                <h3 className="font-bold text-charcoal mb-2 text-lg">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Core Philosophy Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-heading">
              Built on <span className="text-ai-blue">Core Principles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we teach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programPhilosophy.map((principle, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-ai-blue hover:shadow-2xl transition-all group"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-ai-blue/10 group-hover:text-ai-blue/20 transition-colors">
                  {index + 1}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ai-blue to-indigo-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{index === 0 ? "🔧" : index === 1 ? "📚" : index === 2 ? "🎯" : "⚡"}</span>
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-3 group-hover:text-ai-blue transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What You'll Achieve Section */}
      <SectionWrapper className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              Program Outcomes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-heading">
              What You'll <span className="text-ai-blue">Achieve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real skills, real projects, real confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-ai-blue hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-ai-blue/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-ai-blue" />
                </div>
                <h3 className="font-bold text-xl text-charcoal mb-3">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Now Section */}
      <SectionWrapper className="bg-gradient-to-br from-ai-blue to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">
              Why This Matters Now
            </h2>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed">
              <p className="text-blue-100">
                AI is the most powerful tool humanity has ever created. Those who learn how to use it <strong className="text-white">intentionally and responsibly</strong> will thrive in the coming years.
              </p>
              <p className="text-blue-100">
                Those who don't risk becoming passive users — or victims of it.
              </p>
              <p className="text-white font-semibold text-xl md:text-2xl">
                This program gives you the clarity, skills, and confidence to use AI deliberately — not passively.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Take Control of AI?"
        description="Interested in our program? Get in touch to learn more about upcoming cohorts."
        primaryCTA={{
          text: "Contact Us",
          href: "mailto:touradam3@gmail.com",
          variant: "blue",
        }}
      />
    </>
  );
}
