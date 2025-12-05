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
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/site-config";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", role: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      role: value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="CONTACT US"
        title="Let's Build Something Together"
        description="Whether you want to learn AI or automate your business, we're here to help."
      />

      {/* Contact Form Section */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 font-heading">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our courses or services? Fill out the
                    form and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
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

                {/* Quick Links */}
                <div className="pt-8">
                  <h3 className="font-semibold text-charcoal mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="/learn-ai"
                      className="block text-sm text-ai-blue hover:underline"
                    >
                      Explore Student Courses →
                    </a>
                    <a
                      href="/build-with-ai"
                      className="block text-sm text-energy-orange hover:underline"
                    >
                      View Business Services →
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Tell us about yourself and how we can help
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
                          placeholder="Your name"
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

                      {/* Role */}
                      <div className="space-y-2">
                        <Label htmlFor="role">I am a... *</Label>
                        <Select
                          value={formData.role}
                          onValueChange={handleRoleChange}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">
                              Student (High School / College)
                            </SelectItem>
                            <SelectItem value="founder">
                              Founder / Entrepreneur
                            </SelectItem>
                            <SelectItem value="business">
                              Business / Operations Manager
                            </SelectItem>
                            <SelectItem value="educator">
                              Educator / School Administrator
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your needs, questions, or what you'd like to learn..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-charcoal hover:bg-charcoal/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ or Additional Info */}
      <SectionWrapper className="bg-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  We Review Your Message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Usually within 24 hours
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  We Reach Out
                </h3>
                <p className="text-sm text-muted-foreground">
                  Schedule a call or provide more information
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-charcoal mb-2">
                  We Get Started
                </h3>
                <p className="text-sm text-muted-foreground">
                  Begin your learning or build your solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

