import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | A-dama AI Labs",
  description:
    "Learn about A-dama AI Labs, our mission to make AI accessible, and our approach to education and engineering.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="ABOUT US"
        title="Making AI Accessible to Everyone"
        description="From students taking their first step into machine learning to founders ready to scale with automation."
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
                  A-dama AI Labs was born from a simple belief: AI should be
                  accessible to everyone, not just those with advanced degrees or
                  expensive resources.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With a background in engineering, machine learning, and renewable
                  energy systems, we've seen firsthand how powerful AI can be when
                  applied thoughtfully. We've also seen how intimidating it can feel
                  for those just starting their journey.
                </p>
                <p className="text-lg text-muted-foreground">
                  That's why we created A-dama AI Labs—to bridge the gap between
                  learning AI and using AI. Whether you're a student building your
                  first neural network or a founder automating your operations, we're
                  here to help you succeed.
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
                  To make advanced AI accessible to everyone—from the student taking
                  their first step into machine learning to the founder ready to
                  scale with automation. We believe in hands-on learning,
                  practical solutions, and real-world impact.
                </p>
              </div>

              {/* Vision */}
              <div>
                <div className="w-16 h-16 rounded-xl bg-energy-orange/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-heading">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground">
                  A world where anyone can learn AI, build with AI, and create
                  smarter futures. Where students have the skills to thrive in the
                  AI era, and businesses of all sizes can leverage automation to
                  grow efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              How we teach, how we build, and what we believe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              title="Hands-On Learning"
              description="No endless theory. We teach by building real projects that students can showcase."
              icon="Wrench"
              index={0}
            />
            <FeatureCard
              title="Beginner-Friendly"
              description="Complex concepts explained simply. We meet you where you are and guide you forward."
              icon="Heart"
              index={1}
            />
            <FeatureCard
              title="Project-Based"
              description="Every course and every service focuses on tangible outcomes and real results."
              icon="Target"
              index={2}
            />
            <FeatureCard
              title="Fast Execution"
              description="For founders, we deliver clean, efficient solutions without unnecessary complexity."
              icon="Zap"
              index={3}
            />
            <FeatureCard
              title="Real Expertise"
              description="Grounded in engineering, ML, and renewable energy experience."
              icon="Award"
              index={4}
            />
            <FeatureCard
              title="Clear Communication"
              description="No jargon. No gatekeeping. Just clear explanations and honest guidance."
              icon="MessageCircle"
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
                <div className="w-12 h-12 rounded-full bg-energy-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Renewable Energy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Engineering background in clean energy systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Education & Mentorship
                </h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about teaching and empowering the next generation
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
              Who We Serve
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">
                  For Education
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-ai-blue mr-2">•</span>
                    <span className="text-muted-foreground">
                      High school & college students
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ai-blue mr-2">•</span>
                    <span className="text-muted-foreground">
                      STEM programs & educators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ai-blue mr-2">•</span>
                    <span className="text-muted-foreground">
                      Aspiring AI engineers
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-energy-orange mb-3">
                  For Business
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-energy-orange mr-2">•</span>
                    <span className="text-muted-foreground">
                      Early-stage founders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-energy-orange mr-2">•</span>
                    <span className="text-muted-foreground">
                      Small businesses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-energy-orange mr-2">•</span>
                    <span className="text-muted-foreground">
                      Technical teams needing automation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-energy-orange mr-2">•</span>
                    <span className="text-muted-foreground">
                      Renewable energy & engineering companies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        description="Whether you're looking to learn AI or build with AI, we're here to help."
        primaryCTA={{
          text: "Get in Touch",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/",
        }}
      />
    </>
  );
}


