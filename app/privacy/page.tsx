import { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "A-dama AI Labs privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 font-heading">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                When you use our contact form or enroll in our courses, we collect
                information such as your name, email address, and any other
                information you provide to us.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and requests</li>
                <li>Provide our educational services and business solutions</li>
                <li>Send you updates about our courses and services (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Data Protection
              </h2>
              <p>
                We take the security of your personal information seriously and
                implement appropriate technical and organizational measures to protect
                it.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us at
                touradam3@gmail.com.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us
                at touradam3@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}


