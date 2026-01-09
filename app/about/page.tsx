import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | A-dama AI Labs",
  description:
    "Learn about A-dama AI Labs, our mission to empower people with AI literacy and agency, and our 2-weekend education program.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="ABOUT US"
        title="Build Tools That Optimize Your Life"
        description="We believe AI is the most powerful tool humanity has ever created. Our mission is to help you use it intentionally — not become dependent on it."
      />

      {/* Our Story Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  A-dama AI Labs was founded on a critical belief: AI is the most powerful tool humanity has ever created, and those who learn to use it intentionally and responsibly will thrive in the coming years.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Those who don't risk becoming passive users — or victims of it.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With a background in engineering, machine learning, and renewable energy systems, we've seen firsthand how transformative AI can be when used deliberately. We've also witnessed how easily people can become dependent on it without truly understanding it.
                </p>
                <p className="text-lg text-muted-foreground">
                  That's why we created this program — to teach people not just how to use AI, but how to think critically about it, build with it responsibly, and maintain agency over their relationship with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision Section */}
      <SectionWrapper className="bg-soft-gray" id="mission">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div>
                <div className="w-16 h-16 rounded-xl bg-ai-blue/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-heading">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  To empower anyone — regardless of technical background — to understand AI, think critically about it, and use it to build real tools that improve their lives without becoming dependent, manipulated, or replaced by it.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="w-16 h-16 rounded-xl bg-ai-blue/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-heading">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  A world where people use AI deliberately and responsibly, with clarity, agency, and empowerment. Where AI literacy is accessible to everyone, and people build tools that serve them — not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why This Program Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 font-heading text-center">
              Why the 2-Weekend Format?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                We designed this program to be <strong className="text-charcoal">intensive, focused, and transformative</strong>. Two weekends gives us enough time to build real understanding without dragging out the learning process.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Week 1 establishes the foundation — you'll understand what AI is, learn programming fundamentals, and build your first applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Week 2 takes you deeper — you'll work with AI agents, build advanced applications, and develop the critical thinking skills needed to use AI responsibly long-term.
              </p>
              <p className="text-lg text-muted-foreground">
                By the end, you'll have <strong className="text-charcoal">real skills, real projects, and real confidence</strong> — not just surface-level familiarity.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Our Core Philosophy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we teach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FeatureCard
              title="AI is a Tool"
              description="Not a replacement for human thinking. You stay in control."
              icon="Wrench"
              accentColor="blue"
              index={0}
            />
            <FeatureCard
              title="Principles Over Tools"
              description="Understanding principles matters more than memorizing tools."
              icon="BookOpen"
              accentColor="blue"
              index={1}
            />
            <FeatureCard
              title="Deliberate Usage"
              description="Use AI deliberately and intentionally, not passively."
              icon="Target"
              accentColor="blue"
              index={2}
            />
            <FeatureCard
              title="Agency & Empowerment"
              description="The goal is clarity, agency, and empowerment."
              icon="Zap"
              accentColor="blue"
              index={3}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Our Approach Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              How we teach and what makes this program different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              title="Hands-On Learning"
              description="No endless theory. You'll build real applications from day one."
              icon="Code"
              index={0}
            />
            <FeatureCard
              title="Beginner-Friendly"
              description="Complex concepts explained intuitively. No prerequisites required."
              icon="Heart"
              index={1}
            />
            <FeatureCard
              title="Critical Thinking"
              description="Learn to evaluate AI outputs critically and use AI responsibly."
              icon="Eye"
              index={2}
            />
            <FeatureCard
              title="Ethical Awareness"
              description="Understand the ethical implications and boundaries of AI."
              icon="Shield"
              index={3}
            />
            <FeatureCard
              title="Real Projects"
              description="Build portfolio-ready applications you can showcase."
              icon="Folder"
              index={4}
            />
            <FeatureCard
              title="Long-term Mindset"
              description="Develop sustainable habits for learning and using AI."
              icon="TrendingUp"
              index={5}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Background Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 font-heading text-center">
              Background & Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  AI & Machine Learning
                </h3>
                <p className="text-sm text-muted-foreground">
                  Neural networks, LLM agents, and applied ML solutions
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Engineering
                </h3>
                <p className="text-sm text-muted-foreground">
                  Engineering background in renewable energy and complex systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Education & Empowerment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about teaching and empowering people with AI literacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Serve Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 font-heading text-center">
              Who This Program Is For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Students
                </h3>
                <p className="text-sm text-muted-foreground">
                  High school and college students looking to understand AI deeply and build real skills.
                </p>
              </div>
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Entrepreneurs
                </h3>
                <p className="text-sm text-muted-foreground">
                  Founders who want to build AI tools for their businesses without over-reliance.
                </p>
              </div>
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Creatives
                </h3>
                <p className="text-sm text-muted-foreground">
                  Artists, writers, and designers exploring AI applications thoughtfully.
                </p>
              </div>
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Professionals
                </h3>
                <p className="text-sm text-muted-foreground">
                  Career professionals seeking to leverage AI in their work deliberately.
                </p>
              </div>
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Non-Technical People
                </h3>
                <p className="text-sm text-muted-foreground">
                  Anyone curious about AI — no programming experience required.
                </p>
              </div>
              <div className="bg-soft-gray p-6 rounded-lg">
                <h3 className="font-semibold text-lg text-charcoal mb-3">
                  Anyone Curious
                </h3>
                <p className="text-sm text-muted-foreground">
                  If you want to use AI as a tool, not a crutch, this program is for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Take Control of AI?"
        description="Join the waitlist for our next cohort and start your journey to AI literacy and agency."
        primaryCTA={{
          text: "Join Waitlist",
          href: "/contact",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Learn More About the Program",
          href: "/learn-ai",
        }}
      />
    </>
  );
}
