import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { services, processSteps } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Build With AI | A-dama AI Labs",
  description:
    "Custom AI agents, Python automation, and machine learning solutions for founders and small businesses. Automate your operations and scale efficiently.",
};

export default function BuildWithAIPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="FOR FOUNDERS & BUSINESSES"
        title="Stop Wasting Time on Repetitive Tasks"
        description="Let AI automate your operations. We build custom agents, automation pipelines, and ML solutions that scale with your business."
        primaryCTA={{
          text: "Book a Call",
          href: "/contact?type=founder",
          variant: "orange",
        }}
        secondaryCTA={{
          text: "View Services",
          href: "#services",
        }}
      />

      {/* Services Section */}
      <SectionWrapper className="bg-white" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI and automation solutions for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {services.map((service, index) => (
              <FeatureCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                accentColor="orange"
                index={index}
              />
            ))}
          </div>

          {/* Service Examples */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-heading">
              Example Use Cases
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, index) => (
                <div key={service.id} className="bg-soft-gray p-6 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-3">
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.examples?.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, transparent process from discovery to delivery.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Card
                  key={step.step}
                  className="border-l-4 border-l-energy-orange hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-energy-orange text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Case Studies Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Success Stories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped founders and businesses automate and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies
              .filter((cs) => cs.category !== "education")
              .map((caseStudy, index) => (
                <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-block px-3 py-1 bg-energy-orange/10 text-energy-orange text-sm font-semibold rounded-full mb-3">
                      {caseStudy.category.toUpperCase()}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription>{caseStudy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-charcoal mb-2">
                          Results:
                        </h4>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-energy-orange mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonial Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-energy-orange/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-charcoal mb-6 italic">
                  "A-dama AI Labs built us an automation system that saves our
                  team 15 hours every week. The ROI was immediate and the
                  execution was flawless."
                </p>
              </div>
              <footer className="text-muted-foreground">
                <p className="font-semibold text-charcoal">Maria Rodriguez</p>
                <p className="text-sm">Operations Manager, TechStart Inc</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionWrapper>

      {/* Book a Call CTA */}
      <CTASection
        title="Ready to Automate Your Business?"
        description="Let's discuss your needs and build a solution that saves you time and scales with your growth."
        primaryCTA={{
          text: "Book a Free Consultation",
          href: "/contact?type=founder",
          variant: "orange",
        }}
        secondaryCTA={{
          text: "View Pricing",
          href: "/contact",
        }}
      />
    </>
  );
}

