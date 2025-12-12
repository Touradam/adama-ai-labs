"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface NeuronDetailsProps {
  layerIndex: number;
  nodeIndex: number;
  layerType: 'input' | 'hidden' | 'output';
  activation?: string;
  weights?: number[];
  bias?: number;
  trainingStats?: {
    loss: number;
    accuracy: number;
    epoch: number;
  };
  onClose: () => void;
}

export function NeuronDetails({
  layerIndex,
  nodeIndex,
  layerType,
  activation = 'relu',
  weights,
  bias,
  trainingStats,
  onClose,
}: NeuronDetailsProps) {
  // Generate sample activation function graph
  const generateActivationGraph = (func: string) => {
    const points: { x: number; y: number }[] = [];
    for (let x = -3; x <= 3; x += 0.1) {
      let y = 0;
      switch (func.toLowerCase()) {
        case 'relu':
          y = Math.max(0, x);
          break;
        case 'sigmoid':
          y = 1 / (1 + Math.exp(-x));
          break;
        case 'tanh':
          y = Math.tanh(x);
          break;
        case 'softmax':
          y = Math.exp(x) / (1 + Math.exp(x));
          break;
        default:
          y = x;
      }
      points.push({ x, y });
    }
    return points;
  };

  const activationPoints = generateActivationGraph(activation);
  
  // SVG dimensions
  const width = 300;
  const height = 200;
  const padding = 30;
  
  // Scale functions
  const xScale = (x: number) => padding + ((x + 3) / 6) * (width - 2 * padding);
  const yScale = (y: number) => {
    const maxY = Math.max(...activationPoints.map(p => p.y));
    const minY = Math.min(...activationPoints.map(p => p.y));
    return height - padding - ((y - minY) / (maxY - minY)) * (height - 2 * padding);
  };

  // Generate SVG path
  const pathData = activationPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`)
    .join(' ');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-2xl">
              {layerType === 'input' ? 'Input' : layerType === 'hidden' ? `Hidden Layer ${layerIndex}` : 'Output'} Neuron
            </CardTitle>
            <CardDescription>
              Node {nodeIndex + 1} • {layerType.charAt(0).toUpperCase() + layerType.slice(1)} Layer
            </CardDescription>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Neuron Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground mb-1">Layer Type</p>
              <p className="text-xl font-bold text-blue-700 capitalize">{layerType}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <p className="text-sm text-muted-foreground mb-1">Activation</p>
              <p className="text-xl font-bold text-purple-700 uppercase">{activation}</p>
            </div>
          </div>

          {/* Weights & Bias */}
          {weights && weights.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Weights & Bias</h3>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Bias: <span className="font-mono text-emerald-600">{bias?.toFixed(4) || '0.0000'}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Incoming Weights:</p>
                  <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                    {weights.slice(0, 20).map((weight, i) => (
                      <div key={i} className="text-xs font-mono bg-white px-2 py-1 rounded border">
                        w{i}: <span className={weight >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {weight.toFixed(3)}
                        </span>
                      </div>
                    ))}
                    {weights.length > 20 && (
                      <div className="text-xs text-muted-foreground px-2 py-1">
                        +{weights.length - 20} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activation Function Graph */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Activation Function: {activation.toUpperCase()}</h3>
            <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border">
              <svg width={width} height={height} className="mx-auto">
                {/* Grid lines */}
                <line x1={padding} y1={height/2} x2={width-padding} y2={height/2} stroke="#e5e7eb" strokeWidth="1" />
                <line x1={width/2} y1={padding} x2={width/2} y2={height-padding} stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Axes */}
                <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#374151" strokeWidth="2" />
                <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#374151" strokeWidth="2" />
                
                {/* Function curve */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#2374F2"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Labels */}
                <text x={width/2} y={height-5} textAnchor="middle" fontSize="12" fill="#6b7280">x</text>
                <text x={10} y={height/2-5} fontSize="12" fill="#6b7280">f(x)</text>
              </svg>
              
              {/* Function explanation */}
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-sm font-medium mb-2">Function Properties:</p>
                {activation.toLowerCase() === 'relu' && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Returns max(0, x) - outputs x if positive, 0 otherwise</li>
                    <li>• Most common activation for hidden layers</li>
                    <li>• Fast computation, no vanishing gradient</li>
                  </ul>
                )}
                {activation.toLowerCase() === 'sigmoid' && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Returns 1/(1 + e^(-x)) - outputs between 0 and 1</li>
                    <li>• Used for binary classification</li>
                    <li>• Can suffer from vanishing gradients</li>
                  </ul>
                )}
                {activation.toLowerCase() === 'tanh' && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Returns (e^x - e^(-x))/(e^x + e^(-x)) - outputs between -1 and 1</li>
                    <li>• Zero-centered, better than sigmoid</li>
                    <li>• Still can have vanishing gradients</li>
                  </ul>
                )}
                {activation.toLowerCase() === 'softmax' && (
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Converts logits to probability distribution</li>
                    <li>• Used for multi-class classification output</li>
                    <li>• Outputs sum to 1.0</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Training Statistics */}
          {trainingStats && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Training Statistics</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <p className="text-sm text-muted-foreground mb-1">Last Epoch</p>
                  <p className="text-2xl font-bold text-green-700">{trainingStats.epoch}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border border-red-200">
                  <p className="text-sm text-muted-foreground mb-1">Loss Score</p>
                  <p className="text-2xl font-bold text-red-700">{trainingStats.loss.toFixed(4)}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-2xl font-bold text-blue-700">{(trainingStats.accuracy * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>
          )}

          {/* Educational Note */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>💡 Learning Tip:</strong> This neuron receives weighted inputs from the previous layer, 
              adds a bias, and applies the {activation} activation function to produce its output. 
              During training, the weights and bias are adjusted to minimize the loss function.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


