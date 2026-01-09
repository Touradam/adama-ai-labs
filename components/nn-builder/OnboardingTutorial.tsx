"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingTutorialProps {
  onComplete: () => void;
  onSkip: () => void;
}

const TUTORIAL_STEPS = [
  {
    title: 'Welcome to Neural Network Builder!',
    description: 'Learn to build, train, and understand neural networks interactively. This quick tutorial will show you around.',
    highlight: null,
    icon: '👋',
  },
  {
    title: 'Choose a Preset',
    description: 'Start with a pre-configured network template. Each preset is optimized for different learning goals and complexity levels.',
    highlight: 'preset',
    icon: '🎯',
  },
  {
    title: 'Explore the Network',
    description: 'Click on any neuron in the diagram to see its weights, bias, and activation function. Try clicking one now!',
    highlight: 'network',
    icon: '🧠',
  },
  {
    title: 'Visualize Your Data',
    description: 'See your training data as a scatter plot. Each color represents a different class the network will learn to distinguish.',
    highlight: 'data',
    icon: '📊',
  },
  {
    title: 'Train Your Model',
    description: 'Click "Start Training" to watch your network learn in real-time. The chart will show how loss decreases and accuracy increases.',
    highlight: 'train',
    icon: '🚀',
  },
  {
    title: 'Customize Everything',
    description: 'Click on the colored boxes (Activation Function, Loss Function, Optimizer) to change how your network learns.',
    highlight: 'functions',
    icon: '⚙️',
  },
  {
    title: 'Ready to Learn!',
    description: 'You\'re all set! Experiment freely - you can\'t break anything. Have fun building neural networks!',
    highlight: null,
    icon: '🎉',
  },
];

export function OnboardingTutorial({ onComplete, onSkip }: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const step = TUTORIAL_STEPS[currentStep];
  const isLastStep = currentStep === TUTORIAL_STEPS.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = () => {
    if (isLastStep) {
      handleComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 300);
  };

  const handleSkipTutorial = () => {
    setIsVisible(false);
    setTimeout(onSkip, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300" />

      {/* Tutorial Card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <Card className="w-full max-w-lg pointer-events-auto animate-in zoom-in-95 duration-300 shadow-2xl">
          <CardContent className="p-0">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
              <button
                onClick={handleSkipTutorial}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                title="Skip tutorial"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <div className="text-5xl mb-3 animate-bounce">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-emerald-50">{step.description}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-6 pt-4">
              <div className="flex gap-1">
                {TUTORIAL_STEPS.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 text-center text-xs text-muted-foreground">
                Step {currentStep + 1} of {TUTORIAL_STEPS.length}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstStep}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <button
                onClick={handleSkipTutorial}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip Tutorial
              </button>

              <Button
                onClick={handleNext}
                className="gap-2 bg-emerald-600 hover:bg-emerald-700"
              >
                {isLastStep ? "Let's Go!" : 'Next'}
                {!isLastStep && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>

            {/* Helpful Tips */}
            <div className="px-6 pb-6">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>💡 Pro Tip:</strong> You can always access help by clicking the info icons throughout the interface.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}


