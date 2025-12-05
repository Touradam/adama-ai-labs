import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { courses, courseFormats, studentOutcomes } from "@/data/courses";

export const metadata: Metadata = {
  title: "Learn AI | A-dama AI Labs",
  description:
    "Hands-on AI courses for high school and college students. Learn neural networks, LLM agent design, and AI app development with personalized mentorship.",
};

export default function LearnAIPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="FOR STUDENTS"
        title="Learn AI by Building Real Projects"
        description="Hands-on workshops, neural network fundamentals, LLM agent design, and AI-powered app development for high school and college students."
        primaryCTA={{
          text: "Join a Course",
          href: "/contact?type=student",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "View Courses",
          href: "#courses",
        }}
      />

      {/* What You Learn Section */}
      <SectionWrapper className="bg-white" id="courses">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              What You Learn
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three comprehensive modules that take you from AI beginner to confident builder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {courses.map((course, index) => (
              <FeatureCard
                key={course.id}
                title={course.title}
                description={course.description}
                icon={course.icon}
                features={course.features}
                accentColor="blue"
                index={index}
              />
            ))}
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="text-center p-6 bg-soft-gray rounded-lg"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-ai-blue/10 text-ai-blue text-sm font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Duration: {course.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Course Formats Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              Course Formats
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the learning format that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {courseFormats.map((format, index) => (
              <FeatureCard
                key={index}
                title={format.title}
                description={format.description}
                icon={format.icon}
                accentColor="blue"
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Student Outcomes Section */}
      <SectionWrapper className="bg-white" id="outcomes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-heading">
              What Students Achieve
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real skills, real projects, real confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {studentOutcomes.map((outcome, index) => (
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

      {/* Testimonial Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🎓</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-charcoal mb-6 italic">
                  "I went from not understanding AI to building my own neural
                  network. The mentorship was incredible and the projects I built
                  helped me get into my dream college."
                </p>
              </div>
              <footer className="text-muted-foreground">
                <p className="font-semibold text-charcoal">Sarah M.</p>
                <p className="text-sm">High School Student</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionWrapper>

      {/* Enrollment CTA */}
      <CTASection
        title="Ready to Start Your AI Journey?"
        description="Join our next cohort or schedule a 1:1 mentorship session. Let's build your future together."
        primaryCTA={{
          text: "Enroll Now",
          href: "/contact?type=student",
          variant: "blue",
        }}
        secondaryCTA={{
          text: "Contact for School Partnerships",
          href: "/contact?partnership=true",
        }}
      />
    </>
  );
}

