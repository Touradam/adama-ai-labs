"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import * as tf from '@tensorflow/tfjs';
import { NetworkDiagram } from '@/components/nn-builder/NetworkDiagram';
import { TrainingChart } from '@/components/nn-builder/TrainingChart';
import { DataVisualization } from '@/components/nn-builder/DataVisualization';
import { OnboardingTutorial } from '@/components/nn-builder/OnboardingTutorial';
import { InteractiveTesting } from '@/components/nn-builder/InteractiveTesting';
import { GamificationPanel } from '@/components/nn-builder/GamificationPanel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NetworkConfig } from '@/lib/types';
import { BUILT_IN_PRESETS } from '@/lib/presets';
import { createModel, trainModel } from '@/lib/ml-utils';
import { toast } from 'sonner';

export default function NeuralNetworkBuilderPage() {
  const [config, setConfig] = useState<NetworkConfig>(BUILT_IN_PRESETS[1].config);
  const [isTraining, setIsTraining] = useState(false);
  const [model, setModel] = useState<tf.Sequential | null>(null);
  const [trainingProgress, setTrainingProgress] = useState<number>(0);
  const [selectedPreset, setSelectedPreset] = useState("1");
  const [trainingData, setTrainingData] = useState<Array<{
    epoch: number;
    loss: number;
    accuracy: number;
  }>>([]);
  const [dataPoints, setDataPoints] = useState<Array<{
    x: number;
    y: number;
    class: number;
  }>>([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [trainingCount, setTrainingCount] = useState(0);
  const [bestAccuracy, setBestAccuracy] = useState(0);
  const [totalEpochs, setTotalEpochs] = useState(0);

  // Check if user has seen tutorial before and load stats
  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const hasSeenTutorial = localStorage.getItem('nn-builder-tutorial-seen');
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }

    // Load gamification stats
    const stats = localStorage.getItem('nn-builder-stats');
    if (stats) {
      try {
        const parsed = JSON.parse(stats);
        setTrainingCount(parsed.trainingCount || 0);
        setBestAccuracy(parsed.bestAccuracy || 0);
        setTotalEpochs(parsed.totalEpochs || 0);
      } catch (error) {
        console.error('Error parsing stats:', error);
      }
    }
  }, []);

  // Sample data generation
  const generateSampleData = useCallback(() => {
    const numSamples = 100;
    const features: number[][] = [];
    const labels: number[][] = [];
    const points: Array<{ x: number; y: number; class: number }> = [];

    for (let i = 0; i < numSamples; i++) {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      features.push([x, y]);

      // Simple classification: 3 regions
      let classNum = 0;
      if (x > 0 && y > 0) {
        labels.push([1, 0, 0]); // Class 0
        classNum = 0;
      } else if (x < 0 && y > 0) {
        labels.push([0, 1, 0]); // Class 1
        classNum = 1;
      } else {
        labels.push([0, 0, 1]); // Class 2
        classNum = 2;
      }
      
      points.push({ x, y, class: classNum });
    }

    setDataPoints(points);
    return { features, labels };
  }, []);

  const handleLoadPreset = useCallback((presetIndex: string) => {
    const index = parseInt(presetIndex);
    const preset = BUILT_IN_PRESETS[index];
    setConfig(preset.config);
    setSelectedPreset(presetIndex);
    toast.success(`Loaded preset: ${preset.name}`);
  }, []);

  const handleTrain = useCallback(async () => {
    try {
      setIsTraining(true);
      setTrainingProgress(0);
      setTrainingData([]);
      
      toast.info('Generating sample data...');
      const { features, labels } = generateSampleData();

      toast.info('Creating model...');
      const newModel = createModel(config, 2, 3);
      setModel(newModel);

      toast.info('Training started...');
      await trainModel(
        newModel,
        features.slice(0, 60),
        labels.slice(0, 60),
        features.slice(60, 80),
        labels.slice(60, 80),
        config,
        async (epoch, logs) => {
          const progress = ((epoch + 1) / config.epochs) * 100;
          setTrainingProgress(progress);
          
          // Store training metrics
          const metric = {
            epoch: epoch + 1,
            loss: logs.loss as number,
            accuracy: logs.acc as number,
          };
          setTrainingData(prev => [...prev, metric]);
          
          await tf.nextFrame();
        }
      );

      setIsTraining(false);
      setTrainingProgress(100);
      
      // Update gamification stats
      const finalAccuracy = trainingData[trainingData.length - 1]?.accuracy || 0;
      const newTrainingCount = trainingCount + 1;
      const newBestAccuracy = Math.max(bestAccuracy, finalAccuracy);
      const newTotalEpochs = config.epochs;

      setTrainingCount(newTrainingCount);
      setBestAccuracy(newBestAccuracy);
      setTotalEpochs(newTotalEpochs);

      if (typeof window !== 'undefined') {
        localStorage.setItem('nn-builder-stats', JSON.stringify({
          trainingCount: newTrainingCount,
          bestAccuracy: newBestAccuracy,
          totalEpochs: newTotalEpochs,
        }));
      }

      toast.success('Training complete!');
    } catch (error) {
      console.error('Training error:', error);
      toast.error('Training failed');
      setIsTraining(false);
    }
  }, [config, generateSampleData, trainingData, trainingCount, bestAccuracy]);

  const handlePredict = useCallback(async (inputValues?: number[]) => {
    if (!model) {
      toast.error('Please train a model first');
      return { predictedClass: 0, confidence: 0, probabilities: [] };
    }

    let x, y;
    if (inputValues && inputValues.length >= 2) {
      [x, y] = inputValues;
    } else {
      x = Math.random() * 10 - 5;
      y = Math.random() * 10 - 5;
    }
    
    const input = tf.tensor2d([[x, y]]);
    const prediction = model.predict(input) as tf.Tensor;
    const probs = await prediction.data();
    const predictedClass = Array.from(probs).indexOf(Math.max(...Array.from(probs)));
    const confidence = probs[predictedClass];

    input.dispose();
    prediction.dispose();

    if (!inputValues) {
      toast.success(`Input: [${x.toFixed(2)}, ${y.toFixed(2)}] → Class ${predictedClass} (${(confidence * 100).toFixed(1)}% confidence)`);
    }

    return {
      predictedClass,
      confidence,
      probabilities: Array.from(probs),
    };
  }, [model]);

  const handleTutorialComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nn-builder-tutorial-seen', 'true');
    }
    setShowTutorial(false);
  };

  const handleTutorialSkip = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nn-builder-tutorial-seen', 'true');
    }
    setShowTutorial(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      {/* Onboarding Tutorial */}
      {showTutorial && (
        <OnboardingTutorial
          onComplete={handleTutorialComplete}
          onSkip={handleTutorialSkip}
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Neural Network Builder
            </h1>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTutorial(true)}
                className="hidden sm:flex gap-2"
              >
                <span>💡</span>
                Help
              </Button>
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md hover:shadow-lg transition-all"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Info Banner */}
      <div className="border-b border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="text-3xl md:text-4xl">🧠</div>
            <div className="flex-1">
              <p className="font-semibold text-blue-900 mb-1 text-base md:text-lg">
                Free Interactive Learning Tool
              </p>
              <p className="text-sm md:text-base text-blue-800 mb-2">
                Build and train neural networks right in your browser. This tool demonstrates concepts taught in <strong>Week 1 - Friday</strong> of our 2-weekend AI education program.
              </p>
              <p className="text-xs md:text-sm text-blue-700">
                Experiment with different architectures, activation functions, and watch your model learn in real-time — all without writing code.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/learn-ai">
                <Button className="bg-ai-blue hover:bg-ai-blue/90 text-white shadow-md">
                  Learn More About the Program
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Network Diagram */}
        <div className="w-full overflow-x-auto">
          <NetworkDiagram
            inputNodes={config.inputLayers}
            hiddenLayers={config.hiddenLayers}
            outputNodes={config.outputLayers}
            activation={config.hiddenActivation}
            outputActivation={config.outputActivation}
            lossFunction={config.lossFunction}
            optimizer={config.optimizer}
            model={model}
            trainingStats={
              trainingData.length > 0
                ? {
                    loss: trainingData[trainingData.length - 1].loss,
                    accuracy: trainingData[trainingData.length - 1].accuracy,
                    epoch: trainingData[trainingData.length - 1].epoch,
                  }
                : undefined
            }
            onActivationChange={(value) => setConfig(prev => ({ ...prev, hiddenActivation: value as any }))}
            onOutputActivationChange={(value) => setConfig(prev => ({ ...prev, outputActivation: value as any }))}
            onLossFunctionChange={(value) => setConfig(prev => ({ ...prev, lossFunction: value as any }))}
            onOptimizerChange={(value) => setConfig(prev => ({ ...prev, optimizer: value as any }))}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Configuration */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
                <CardDescription>Choose your starting point</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Preset Cards */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold">Preset Templates</Label>
                  <div className="grid grid-cols-1 gap-3">
                    {BUILT_IN_PRESETS.map((preset, index) => (
                      <button
                        key={index}
                        onClick={() => handleLoadPreset(index.toString())}
                        className={`group relative p-4 text-left rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          selectedPreset === index.toString()
                            ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-md'
                            : 'border-gray-200 bg-white hover:border-emerald-300'
                        }`}
                      >
                        {/* Selected indicator */}
                        {selectedPreset === index.toString() && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Icon & Name */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{preset.icon || '⚙️'}</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-sm text-gray-900">{preset.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                preset.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                                preset.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                                'bg-purple-100 text-purple-700'
                              }`}>
                                {preset.difficulty || 'intermediate'}
                              </span>
                              <span className="text-xs text-gray-500">⏱ {preset.estimatedTime || '30s'}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          {preset.description}
                        </p>
                        
                        {/* Use Case */}
                        {preset.useCase && (
                          <div className="text-xs text-emerald-600 font-medium">
                            → {preset.useCase}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Input Features:</span>
                    <span className="font-medium">{config.inputLayers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hidden Layers:</span>
                    <span className="font-medium">{config.hiddenLayers.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Output Classes:</span>
                    <span className="font-medium">{config.outputLayers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Epochs:</span>
                    <span className="font-medium">{config.epochs}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Learning Rate:</span>
                    <span className="font-medium">{config.learningRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Functions</CardTitle>
                <CardDescription>Model configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Activation:</span>
                  <span className="font-medium capitalize">{config.hiddenActivation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Output:</span>
                  <span className="font-medium capitalize">{config.outputActivation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Loss:</span>
                  <span className="font-medium">{config.lossFunction}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Optimizer:</span>
                  <span className="font-medium uppercase">{config.optimizer}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training & Testing */}
          <div className="lg:col-span-2 space-y-6">
            {/* Data Visualization */}
            <DataVisualization
              data={dataPoints}
              model={model}
              onDataGenerate={generateSampleData}
            />

            {/* Training Card */}
            <Card>
              <CardHeader>
                <CardTitle>Training</CardTitle>
                <CardDescription>
                  Train your model with sample data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleTrain}
                  disabled={isTraining}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95"
                  size="lg"
                >
                  {isTraining ? '🔥 Training...' : '🚀 Start Training'}
                </Button>

                {isTraining && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress:</span>
                      <span className="font-medium">{trainingProgress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-300 animate-shimmer"
                        style={{ width: `${trainingProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {!isTraining && trainingProgress === 100 && (
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-lg animate-float">
                    <p className="text-sm text-emerald-800 font-medium text-center">
                      ✓ Training complete! Model is ready for predictions.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Training Chart */}
            <TrainingChart data={trainingData} isTraining={isTraining} />

            {/* Interactive Testing */}
            <InteractiveTesting
              model={model}
              isTraining={isTraining}
              inputSize={config.inputLayers}
              outputSize={config.outputLayers}
              onPredict={handlePredict}
            />

            {/* Quick Random Test */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Random Test</CardTitle>
                <CardDescription className="text-xs">
                  Generate and test random inputs instantly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handlePredict()}
                  disabled={!model || isTraining}
                  variant="outline"
                  className="w-full transition-all hover:scale-105"
                  size="lg"
                >
                  🎲 Run Random Prediction
                </Button>
              </CardContent>
            </Card>

            {/* Educational Info */}
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>1. Sample Data:</strong> We generate 100 samples with 2 features (x, y coordinates) classified into 3 regions.
                </div>
                <div>
                  <strong>2. Training:</strong> The network learns patterns by adjusting weights through backpropagation.
                </div>
                <div>
                  <strong>3. Prediction:</strong> Once trained, the model can classify new inputs into one of the 3 classes.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gamification Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <GamificationPanel
            trainingCount={trainingCount}
            bestAccuracy={bestAccuracy}
            totalEpochs={totalEpochs}
          />
        </div>
      </div>
    </div>
  );
}
