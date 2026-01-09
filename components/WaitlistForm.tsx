"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "" });
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-200 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
          You're on the list!
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for joining our waitlist. We'll send you an email with the course link if you're accepted.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-500 hover:text-white"
        >
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
          Join the Waitlist
        </h3>
        <p className="text-lg text-gray-600">
          Be among the first to experience our program.{" "}
          <span className="font-bold text-ai-blue">First session is FREE!</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/20 outline-none transition-all text-base"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-ai-blue focus:ring-2 focus:ring-ai-blue/20 outline-none transition-all text-base"
            placeholder="your.email@example.com"
          />
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-ai-blue to-indigo-600 hover:from-ai-blue/90 hover:to-indigo-700 text-white text-lg py-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Free Waitlist"
          )}
        </Button>

        <p className="text-xs text-center text-gray-500">
          By joining, you agree to receive updates about the program. First session is free for waitlist members.
        </p>
      </form>
    </div>
  );
}

