"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Target, TrendingUp } from 'lucide-react';

interface InteractiveTestingProps {
  model: any | null;
  isTraining: boolean;
  inputSize: number;
  outputSize: number;
  onPredict?: (input: number[]) => Promise<{
    predictedClass: number;
    confidence: number;
    probabilities: number[];
  }>;
}

const CLASS_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export function InteractiveTesting({
  model,
  isTraining,
  inputSize,
  outputSize,
  onPredict,
}: InteractiveTestingProps) {
  const [inputValues, setInputValues] = useState<string[]>(Array(inputSize).fill(''));
  const [prediction, setPrediction] = useState<{
    predictedClass: number;
    confidence: number;
    probabilities: number[];
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleRandomInput = () => {
    const randomValues = Array(inputSize)
      .fill(0)
      .map(() => (Math.random() * 10 - 5).toFixed(2));
    setInputValues(randomValues);
  };

  const handlePredict = async () => {
    if (!model || !onPredict) return;

    const inputs = inputValues.map(v => parseFloat(v) || 0);
    
    // Validate inputs
    if (inputs.some(isNaN)) {
      alert('Please enter valid numbers for all inputs');
      return;
    }

    setIsProcessing(true);
    try {
      const result = await onPredict(inputs);
      setPrediction(result);
    } catch (error) {
      console.error('Prediction error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setInputValues(Array(inputSize).fill(''));
    setPrediction(null);
  };

  const isValid = inputValues.every(v => v !== '' && !isNaN(parseFloat(v)));

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-600" />
              Interactive Testing
            </CardTitle>
            <CardDescription>
              Test your model with custom inputs
            </CardDescription>
          </div>
          {model && !isTraining && (
            <div className="px-3 py-1 bg-green-100 border border-green-300 rounded-full">
              <span className="text-xs font-semibold text-green-700 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Model Ready
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!model ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">No Model Yet</p>
            <p className="text-xs text-muted-foreground">
              Train a model first to enable testing
            </p>
          </div>
        ) : isTraining ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">Training in Progress</p>
            <p className="text-xs text-muted-foreground">
              Wait for training to complete before testing
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Input Fields */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold">Input Features</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRandomInput}
                  className="text-xs"
                >
                  🎲 Random
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {Array(inputSize)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="space-y-1">
                      <Label htmlFor={`input-${index}`} className="text-xs text-muted-foreground">
                        Feature {index + 1}
                      </Label>
                      <Input
                        id={`input-${index}`}
                        type="number"
                        step="0.1"
                        placeholder="0.00"
                        value={inputValues[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={handlePredict}
                disabled={!isValid || isProcessing}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-all hover:scale-105"
              >
                {isProcessing ? 'Predicting...' : '🔮 Predict'}
              </Button>
              <Button
                onClick={handleClear}
                variant="outline"
                className="transition-all hover:scale-105"
              >
                Clear
              </Button>
            </div>

            {/* Prediction Results */}
            {prediction && (
              <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold mb-3">Prediction Results</h4>
                  
                  {/* Winner Card */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-lg mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Predicted Class</p>
                        <p className="text-3xl font-bold text-emerald-700">
                          Class {prediction.predictedClass}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-1">Confidence</p>
                        <p className="text-3xl font-bold text-emerald-700">
                          {(prediction.confidence * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Probability Distribution */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Probability Distribution
                    </p>
                    {prediction.probabilities.map((prob, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full border-2 border-white shadow"
                              style={{
                                backgroundColor: CLASS_COLORS[index % CLASS_COLORS.length],
                              }}
                            ></div>
                            <span className="font-medium">Class {index}</span>
                          </span>
                          <span className="font-mono text-muted-foreground">
                            {(prob * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${prob * 100}%`,
                              backgroundColor: CLASS_COLORS[index % CLASS_COLORS.length],
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Helper Text */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>💡 Tip:</strong> Enter values between -5 and 5 for best results with the sample data.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


