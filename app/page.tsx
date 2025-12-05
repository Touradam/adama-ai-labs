import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { PathCard } from "@/components/PathCard";
import { CTASection } from "@/components/CTASection";
import { courses } from "@/data/courses";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Build with AI. <br />
            Learn with AI.
          </>
        }
        description="AI Agents, Automation & Applied Machine Learning for Students and Founders."
        primaryCTA={{
          text: "Learn AI",
          href: "/learn-ai",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Automate My Business",
          href: "/build-with-ai",
          variant: "orange",
        }}
      />

      {/* What We Do Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A-dama AI Labs is an AI engineering studio and education hub helping
              students master AI and helping businesses automate their work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* For Students */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-ai-blue/10 flex items-center justify-center">
                  <span className="text-2xl text-ai-blue font-bold">📚</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal font-heading">
                  For Students
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-ai-blue mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">Neural Networks 101</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">LLM Agent Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">Build Your First AI App</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ai-blue mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">
                    Certificates + Portfolio Projects
                  </span>
                </li>
              </ul>
            </div>

            {/* For Founders */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-energy-orange/10 flex items-center justify-center">
                  <span className="text-2xl text-energy-orange font-bold">🚀</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal font-heading">
                  For Founders
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-energy-orange mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">AI Agents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-energy-orange mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">Python Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-energy-orange mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">ML Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-energy-orange mr-3 text-xl mt-1">✓</span>
                  <span className="text-base md:text-lg">Consulting + Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Choose Your Path Section */}
      <SectionWrapper className="bg-soft-gray" id="choose-path">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Choose Your Path
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you want to learn AI or automate with AI, we have a path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PathCard
              title="Learn AI"
              description="High School & College Students"
              features={[
                "Beginner-friendly, hands-on learning",
                "Build real AI projects",
                "Understand neural networks",
                "Design LLM agents",
                "Create portfolio-ready work",
              ]}
              ctaText="Explore Student Courses"
              ctaHref="/learn-ai"
              icon="GraduationCap"
              accentColor="blue"
              index={0}
            />

            <PathCard
              title="Build With AI"
              description="Founders & Small Businesses"
              features={[
                "Automate workflows",
                "Build custom AI agents",
                "Integrate Python automation",
                "Deploy ML models",
                "Scale your operations",
              ]}
              ctaText="Explore Business Services"
              ctaHref="/build-with-ai"
              icon="Rocket"
              accentColor="orange"
              index={1}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Why A-dama AI Labs Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Why A-dama AI Labs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real engineering expertise combined with beginner-friendly teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FeatureCard
              title="Real Expertise"
              description="Engineering background in AI, ML, and renewable energy systems."
              icon="Award"
              index={0}
            />
            <FeatureCard
              title="Hands-On Learning"
              description="Project-based teaching that builds real skills, not just theory."
              icon="Wrench"
              index={1}
            />
            <FeatureCard
              title="Fast Execution"
              description="Clean, efficient AI engineering for founders who need results."
              icon="Zap"
              index={2}
            />
            <FeatureCard
              title="Clear Communication"
              description="Beginner-friendly approach that makes complex AI accessible."
              icon="MessageCircle"
              index={3}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Offerings Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Featured Offerings
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular courses and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FeatureCard
              title={courses[0].title}
              description={courses[0].description}
              icon={courses[0].icon}
              features={courses[0].features.slice(0, 3)}
              accentColor="blue"
              index={0}
            />
            <FeatureCard
              title={courses[1].title}
              description={courses[1].description}
              icon={courses[1].icon}
              features={courses[1].features.slice(0, 3)}
              accentColor="blue"
              index={1}
            />
            <FeatureCard
              title={services[0].title}
              description={services[0].description}
              icon={services[0].icon}
              features={services[0].features.slice(0, 3)}
              accentColor="orange"
              index={2}
            />
            <FeatureCard
              title={services[1].title}
              description={services[1].description}
              icon={services[1].icon}
              features={services[1].features.slice(0, 3)}
              accentColor="orange"
              index={3}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Get Started CTA */}
      <CTASection
        title="Get Started Today"
        description="Whether you want to learn AI or automate with AI, let's take the next step together."
        primaryCTA={{
          text: "Learn AI",
          href: "/learn-ai",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Build With AI",
          href: "/build-with-ai",
        }}
      />
    </>
  );
}
