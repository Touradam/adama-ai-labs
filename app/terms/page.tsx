import { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "A-dama AI Labs terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 font-heading">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the A-dama AI Labs website and services, you
                accept and agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Services
              </h2>
              <p>
                A-dama AI Labs provides AI education services for students and AI
                automation solutions for businesses. The specific terms of each
                service will be outlined in separate agreements.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate and complete information when using our services
                </li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>
                  Respect intellectual property rights of course materials and
                  deliverables
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Intellectual Property
              </h2>
              <p>
                All content, materials, and intellectual property provided through our
                services remain the property of A-dama AI Labs unless otherwise
                specified in a separate agreement.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                A-dama AI Labs shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of
                our services.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use
                of our services after changes constitutes acceptance of the modified
                terms.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                For questions about these Terms of Service, please contact us at
                touradam3@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}


