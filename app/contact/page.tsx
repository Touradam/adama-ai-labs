"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/site-config";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call when ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", background: "", motivation: "" });
    }, 1000);

    // TODO: Implement actual API call when backend is ready
    // try {
    //   const response = await fetch("/api/waitlist", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setIsSubmitted(true);
    //     setFormData({ name: "", email: "", background: "", motivation: "" });
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBackgroundChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      background: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="JOIN THE WAITLIST"
        title="Be the First to Know"
        description="Sign up for early access to our 2-weekend AI education program. Limited spots available."
      />

      {/* Waitlist Form Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Info Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 font-heading">
                    Join the Waitlist
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Be among the first to know when we announce dates for our next cohort. Waitlist members receive priority enrollment and early-bird pricing.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-ai-blue/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-ai-blue font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Priority Access</p>
                      <p className="text-sm text-muted-foreground">
                        First to know about new cohorts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-ai-blue/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-ai-blue font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Early-Bird Pricing</p>
                      <p className="text-sm text-muted-foreground">
                        Special discounts for waitlist members
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-ai-blue/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-ai-blue font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Exclusive Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Program updates and free resources
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-charcoal mb-4">
                    Questions?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-charcoal mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-sm text-muted-foreground hover:text-charcoal"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-charcoal mt-1" />
                      <div>
                        <p className="font-medium text-charcoal">Location</p>
                        <p className="text-sm text-muted-foreground">
                          {contactInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waitlist Form */}
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <Card className="border-2 border-ai-blue/20">
                    <CardContent className="pt-12 pb-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-ai-blue/10 flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🎉</span>
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal mb-4">
                        You're on the list!
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Thank you for your interest! We'll notify you about upcoming sessions and send you exclusive early-bird access.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white"
                      >
                        Submit Another Response
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Join the Waitlist</CardTitle>
                      <CardDescription>
                        Tell us a bit about yourself and why you're interested in the program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* Background */}
                        <div className="space-y-2">
                          <Label htmlFor="background">Background *</Label>
                          <Select
                            value={formData.background}
                            onValueChange={handleBackgroundChange}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your background" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">
                                Student (High School / College)
                              </SelectItem>
                              <SelectItem value="entrepreneur">
                                Entrepreneur / Founder
                              </SelectItem>
                              <SelectItem value="creative">
                                Creative (Artist / Writer / Designer)
                              </SelectItem>
                              <SelectItem value="professional">
                                Professional (Career / Corporate)
                              </SelectItem>
                              <SelectItem value="non-technical">
                                Non-Technical / Career Changer
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Motivation */}
                        <div className="space-y-2">
                          <Label htmlFor="motivation">
                            Why are you interested in this program? *
                          </Label>
                          <Textarea
                            id="motivation"
                            name="motivation"
                            placeholder="Tell us what you hope to learn and achieve..."
                            rows={6}
                            value={formData.motivation}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-ai-blue hover:bg-ai-blue/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Joining..." : "Join Waitlist"}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          By joining, you agree to receive updates about the program. You can unsubscribe at any time.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What to Expect Section */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 rounded-full bg-ai-blue text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  You're on the List
                </h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive a confirmation email immediately
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-ai-blue text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  We Announce Dates
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get notified first when cohort dates are set
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-ai-blue text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Priority Enrollment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Secure your spot before public enrollment opens
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
