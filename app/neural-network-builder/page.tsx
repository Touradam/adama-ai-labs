"use client";

import React from 'react';
import { Metadata } from "next";

export default function NeuralNetworkBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Neural Network Builder
            </h1>
            <a
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Development Notice */}
      <div className="border-b border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-semibold text-amber-900 mb-1">
                🚧 Under Development
              </p>
              <p className="text-sm text-amber-800">
                This Neural Network Builder is currently under active development. The full interactive version from{' '}
                <a 
                  href="https://touradam.github.io/SEPT-LLC/builder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-amber-900"
                >
                  https://touradam.github.io/SEPT-LLC/builder
                </a>
                {' '}will be integrated here soon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Interactive Neural Network Learning Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Build, train, and test your own neural networks in the browser using TensorFlow.js
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">🧠 Visual Network Builder</h3>
              <p className="text-sm text-muted-foreground">
                Design your network architecture with an intuitive visual interface
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">📊 Real-time Training</h3>
              <p className="text-sm text-muted-foreground">
                Watch your model learn with live metrics and visualizations
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">🎯 Interactive Testing</h3>
              <p className="text-sm text-muted-foreground">
                Test predictions and see how your model performs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">📚 Learning Presets</h3>
              <p className="text-sm text-muted-foreground">
                Start with beginner-friendly templates and configurations
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
            <p className="mb-6">
              We're integrating the full interactive neural network builder into this platform.
              In the meantime, check out the working demo:
            </p>
            <a
              href="https://touradam.github.io/SEPT-LLC/builder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try the Demo →
            </a>
          </div>

          {/* Educational Content */}
          <div className="mt-12 text-left space-y-6">
            <h3 className="text-2xl font-bold text-charcoal">What You'll Learn</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 text-xl">✓</span>
                <div>
                  <strong>Neural Network Architecture:</strong> Understand layers, neurons, and connections
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 text-xl">✓</span>
                <div>
                  <strong>Activation Functions:</strong> Learn when to use ReLU, Sigmoid, Softmax, and more
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 text-xl">✓</span>
                <div>
                  <strong>Training Process:</strong> See backpropagation and gradient descent in action
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 text-xl">✓</span>
                <div>
                  <strong>Model Evaluation:</strong> Understand loss, accuracy, and performance metrics
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

