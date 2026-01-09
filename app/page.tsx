"use client";

import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { WaitlistForm } from "@/components/WaitlistForm";
import { programWeeks, programPhilosophy, targetAudience, programOutcomes } from "@/data/courses";
import { siteInfo } from "@/data/site-config";
import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Clock, Users, CheckCircle2, Sparkles, Gift } from "lucide-react";

export default function Home() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const toggleWeek = (weekId: string) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-teal-50">
        <div className="absolute inset-0 bg-grid-slate-200/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 font-heading leading-tight">
              {siteInfo.tagline}
            </h1>
            <div className="space-y-3 mb-8">
              <p className="text-2xl md:text-3xl font-semibold text-teal">
                {siteInfo.tagline2}
              </p>
              <p className="text-xl md:text-2xl text-gray-700">
                {siteInfo.tagline3}
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A 2-weekend AI education program for anyone who wants to understand AI and build real tools — without becoming dependent on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#waitlist" className="inline-block">
                <button className="bg-gold hover:bg-gold/90 text-black px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Join Free Waitlist
                </button>
              </a>
              <a href="#program" className="inline-block">
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-xl text-lg font-bold transition-all">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators with FREE Badge */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-teal" />
              <span className="text-sm font-bold text-teal">First Bootcamp FREE</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan" />
              <span className="text-sm font-medium text-gray-700">6 Days Total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan" />
              <span className="text-sm font-medium text-gray-700">Small Cohorts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan" />
              <span className="text-sm font-medium text-gray-700">No Prerequisites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Form Section - PROMINENT PLACEMENT */}
      <SectionWrapper className="bg-gradient-to-b from-white to-teal-50" id="waitlist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-teal text-white text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                🎉 Week 1 Bootcamp Free
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-heading">
                Join the Waitlist
              </h2>
              <p className="text-xl text-gray-600">
                Be among the first to experience our program. Limited spots available.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </SectionWrapper>

      {/* Program Overview Section */}
      <SectionWrapper className="bg-white" id="program">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan/10 text-cyan text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              The Program
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-heading">
              {siteInfo.tagline3}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform in just 6 days across two weekends
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-teal to-teal-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">2</div>
                <div className="text-teal-100 text-lg font-medium">Weekends</div>
                <p className="text-sm text-teal-100 mt-2">Fri-Sat-Sun format</p>
              </div>
              <div className="bg-gradient-to-br from-cyan to-cyan-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">6</div>
                <div className="text-cyan-100 text-lg font-medium">Days Total</div>
                <p className="text-sm text-cyan-100 mt-2">Intensive learning</p>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2">0</div>
                <div className="text-gray-100 text-lg font-medium">Prerequisites</div>
                <p className="text-sm text-gray-100 mt-2">Anyone can join</p>
              </div>
            </div>
          </div>

          {/* Week Breakdown */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {programWeeks.map((week, weekIndex) => (
              <div
                key={week.id}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-teal/50 hover:shadow-xl transition-all"
              >
                <button
                  onClick={() => toggleWeek(week.id)}
                  className="w-full px-8 py-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all group"
                >
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block px-3 py-1 ${weekIndex === 0 ? 'bg-teal' : 'bg-cyan'} text-white text-xs font-bold rounded-full uppercase`}>
                        {weekIndex === 0 ? "Week 1 - FREE" : "Week 2"}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">
                        {week.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black font-heading group-hover:text-teal transition-colors">
                      {week.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedWeek === week.id ? (
                      <ChevronUp className="w-8 h-8 text-teal" />
                    ) : (
                      <ChevronDown className="w-8 h-8 text-gray-400 group-hover:text-teal transition-colors" />
                    )}
                  </div>
                </button>

                {expandedWeek === week.id && (
                  <div className="px-8 pb-8 bg-gradient-to-b from-gray-50 to-white">
                    <div className="grid md:grid-cols-3 gap-6">
                      {week.days.map((day, dayIndex) => (
                        <div
                          key={day.id}
                          className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-teal/50 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${weekIndex === 0 ? 'from-teal to-teal-600' : 'from-cyan to-cyan-600'} flex items-center justify-center flex-shrink-0 shadow-md`}>
                              <span className="text-lg font-bold text-white">
                                {dayIndex + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className={`text-xs font-bold ${weekIndex === 0 ? 'text-teal' : 'text-cyan'} uppercase mb-1`}>
                                {day.day}
                              </div>
                              <h4 className="text-xl font-bold text-black leading-tight">
                                {day.title}
                              </h4>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-4 font-medium">
                            {day.description}
                          </p>

                          <div className="space-y-2">
                            {day.topics.slice(0, 4).map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-start gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${weekIndex === 0 ? 'text-teal' : 'text-cyan'} mt-0.5 flex-shrink-0`} />
                                <span className="text-xs text-gray-700 leading-relaxed">
                                  {topic}
                                </span>
                              </div>
                            ))}
                            {day.topics.length > 4 && (
                              <div className={`text-xs ${weekIndex === 0 ? 'text-teal' : 'text-cyan'} font-medium italic pt-2`}>
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
      <SectionWrapper className="bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
              {siteInfo.tagline2}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This program is for anyone who wants to use AI as a tool, not a crutch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all border-2 border-gray-100 hover:border-teal/50"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-cyan flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">{audience.icon === "GraduationCap" ? "🎓" : 
                                               audience.icon === "Briefcase" ? "💼" :
                                               audience.icon === "Palette" ? "🎨" :
                                               audience.icon === "Users" ? "👥" : "❤️"}</span>
                </div>
                <h3 className="font-bold text-black mb-2 text-lg">
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-heading">
              Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteInfo.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programPhilosophy.map((principle, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-teal hover:shadow-2xl transition-all group"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-teal/10 group-hover:text-teal/20 transition-colors">
                  {index + 1}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-cyan flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{index === 0 ? "🔧" : index === 1 ? "📚" : index === 2 ? "🎯" : "⚡"}</span>
                  </div>
                  <h3 className="font-bold text-xl text-black mb-3 group-hover:text-teal transition-colors">
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

      {/* Final CTA - Waitlist */}
      <SectionWrapper className="bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Master AI?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Join the waitlist today. <span className="text-teal font-bold">First bootcamp is completely free.</span>
            </p>
            <a href="#waitlist" className="inline-block">
              <button className="bg-gold hover:bg-gold/90 text-black px-12 py-5 rounded-xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                Join Free Waitlist Now
              </button>
            </a>
            <p className="text-gray-300 text-sm mt-6">
              Limited spots available • No credit card required
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
