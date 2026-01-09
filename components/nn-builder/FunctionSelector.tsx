"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X } from 'lucide-react';

interface FunctionSelectorProps {
  type: 'activation' | 'loss' | 'optimizer';
  currentValue: string;
  onChange: (value: string) => void;
  onClose: () => void;
  isOutput?: boolean;
}

const activationFunctions = [
  {
    value: 'sigmoid',
    label: 'Sigmoid',
    formula: 'f(x) = 1 / (1 + e^(-x))',
    description: 'Outputs between 0 and 1. Good for binary classification.',
    graph: 'sigmoid',
  },
  {
    value: 'tanh',
    label: 'Hyperbolic Tangent (tanh)',
    formula: 'f(x) = (e^x - e^(-x)) / (e^x + e^(-x))',
    description: 'Outputs between -1 and 1. Zero-centered.',
    graph: 'tanh',
  },
  {
    value: 'relu',
    label: 'Rectified Linear Unit (ReLU)',
    formula: 'f(x) = max(0, x)',
    description: 'Most popular for hidden layers. Fast and effective.',
    graph: 'relu',
  },
  {
    value: 'softmax',
    label: 'Softmax',
    formula: 'f(x)i = e^xi / Σ(e^xj)',
    description: 'Converts logits to probabilities. Used for multi-class output.',
    graph: 'softmax',
  },
];

const lossFunctions = [
  {
    value: 'categoricalCrossentropy',
    label: 'Categorical Cross-Entropy',
    formula: 'L = -Σ yi * log(ŷi)',
    description: 'For multi-class classification with one-hot encoded labels.',
    graph: 'crossentropy',
  },
  {
    value: 'binaryCrossentropy',
    label: 'Binary Cross-Entropy / Log Loss',
    formula: 'L = -[y*log(ŷ) + (1-y)*log(1-ŷ)]',
    description: 'For binary classification problems.',
    graph: 'binary',
  },
  {
    value: 'meanSquaredError',
    label: 'Mean Square Error / Quadratic Loss / L2 Loss',
    formula: 'L = (1/n) * Σ(yi - ŷi)²',
    description: 'For regression problems. Penalizes large errors heavily.',
    graph: 'mse',
  },
  {
    value: 'meanAbsoluteError',
    label: 'Mean Absolute Error / L1 Loss',
    formula: 'L = (1/n) * Σ|yi - ŷi|',
    description: 'For regression. Less sensitive to outliers than MSE.',
    graph: 'mae',
  },
];

const optimizers = [
  {
    value: 'sgd',
    label: 'SGD',
    description: 'Stochastic Gradient Descent. Simple and reliable.',
  },
  {
    value: 'adam',
    label: 'Adam',
    description: 'Adaptive Moment Estimation. Most popular choice.',
  },
  {
    value: 'rmsprop',
    label: 'RMSProp',
    description: 'Root Mean Square Propagation. Good for RNNs.',
  },
  {
    value: 'adadelta',
    label: 'Adadelta',
    description: 'Extension of Adagrad. Adaptive learning rate.',
  },
  {
    value: 'adagrad',
    label: 'Adagrad',
    description: 'Adaptive Gradient. Good for sparse data.',
  },
];

export function FunctionSelector({
  type,
  currentValue,
  onChange,
  onClose,
  isOutput = false,
}: FunctionSelectorProps) {
  let currentOption: any;
  let options: any[];
  
  if (type === 'activation') {
    options = activationFunctions;
    currentOption = activationFunctions.find(opt => opt.value === currentValue) || activationFunctions[0];
  } else if (type === 'loss') {
    options = lossFunctions;
    currentOption = lossFunctions.find(opt => opt.value === currentValue) || lossFunctions[0];
  } else {
    options = optimizers;
    currentOption = optimizers.find(opt => opt.value === currentValue) || optimizers[0];
  }
  
  const hasFormula = type === 'activation' || type === 'loss';
  const hasGraph = type === 'activation' || type === 'loss';

  // Generate graph for activation or loss functions
  const generateGraph = (graphType: string) => {
    const points: { x: number; y: number }[] = [];
    const width = 280;
    const height = 180;
    
    for (let x = -3; x <= 3; x += 0.05) {
      let y = 0;
      switch (graphType) {
        case 'sigmoid':
          y = 1 / (1 + Math.exp(-x));
          break;
        case 'tanh':
          y = Math.tanh(x);
          break;
        case 'relu':
          y = Math.max(0, x);
          break;
        case 'softmax':
          y = Math.exp(x) / (1 + Math.exp(x));
          break;
        case 'crossentropy':
        case 'binary':
          // Show negative log curve
          const p = 1 / (1 + Math.exp(-x));
          y = p > 0.001 ? -Math.log(p) : 5;
          break;
        case 'mse':
          y = x * x;
          break;
        case 'mae':
          y = Math.abs(x);
          break;
        default:
          y = x;
      }
      points.push({ x, y });
    }

    const padding = 25;
    const minY = Math.min(...points.map(p => p.y));
    const maxY = Math.max(...points.map(p => p.y));
    
    const xScale = (x: number) => padding + ((x + 3) / 6) * (width - 2 * padding);
    const yScale = (y: number) => height - padding - ((y - minY) / (maxY - minY + 0.001)) * (height - 2 * padding);

    const pathData = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`)
      .join(' ');

    return (
      <svg width={width} height={height} className="bg-white rounded border">
        {/* Grid */}
        <line x1={padding} y1={height/2} x2={width-padding} y2={height/2} stroke="#f3f4f6" strokeWidth="1" />
        <line x1={width/2} y1={padding} x2={width/2} y2={height-padding} stroke="#f3f4f6" strokeWidth="1" />
        
        {/* Axes */}
        <line x1={padding} y1={height-padding} x2={width-padding} y2={height-padding} stroke="#9ca3af" strokeWidth="1.5" />
        <line x1={padding} y1={padding} x2={padding} y2={height-padding} stroke="#9ca3af" strokeWidth="1.5" />
        
        {/* Function curve */}
        <path d={pathData} fill="none" stroke="#2374F2" strokeWidth="2.5" />
        
        {/* Labels */}
        <text x={width-10} y={height-10} textAnchor="end" fontSize="11" fill="#6b7280">x</text>
        <text x={padding+5} y={padding-5} fontSize="11" fill="#6b7280">y</text>
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-2xl">
            {type === 'activation' 
              ? isOutput 
                ? 'Select Output Activation Function'
                : 'Select Activation Function for Hidden Neurons'
              : type === 'loss'
              ? 'Select Loss Function'
              : 'Choose Optimizer Algorithm'}
          </CardTitle>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Selector */}
          <div className="space-y-2">
            <Label className="text-base font-semibold">
              {type === 'activation' 
                ? 'Activation Function'
                : type === 'loss'
                ? 'Loss Function'
                : 'Optimizer'}
            </Label>
            <Select value={currentValue} onValueChange={onChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Current Selection Details */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
            <h3 className="font-semibold text-lg mb-2">{currentOption.label}</h3>
            {hasFormula && 'formula' in currentOption && (
              <p className="text-sm font-mono bg-white px-3 py-2 rounded border mb-2">
                {currentOption.formula}
              </p>
            )}
            <p className="text-sm text-muted-foreground">{currentOption.description}</p>
          </div>

          {/* Graph Visualization */}
          {hasGraph && 'graph' in currentOption && (
            <div className="space-y-2">
              <h4 className="font-semibold">Function Graph</h4>
              <div className="flex justify-center">
                {generateGraph(currentOption.graph)}
              </div>
            </div>
          )}

          {/* All Options Grid */}
          <div className="space-y-2">
            <h4 className="font-semibold">
              {type === 'optimizer' ? 'Available Algorithms' : 'All Functions'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => onChange(opt.value)}
                  className={`p-3 text-left rounded-lg border-2 transition-all ${
                    opt.value === currentValue
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <p className="font-semibold text-sm mb-1">{opt.label}</p>
                  <p className="text-xs text-muted-foreground">{opt.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Educational Info */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>💡 Learning Tip:</strong>{' '}
              {type === 'activation' && !isOutput && 
                'Activation functions introduce non-linearity, allowing networks to learn complex patterns. ReLU is most common for hidden layers.'}
              {type === 'activation' && isOutput && 
                'Output activation depends on your task: Softmax for multi-class, Sigmoid for binary, Linear for regression.'}
              {type === 'loss' && 
                'The loss function measures how wrong your predictions are. The network adjusts weights to minimize this loss.'}
              {type === 'optimizer' && 
                'The optimizer algorithm determines how weights are updated. Adam is a good default choice for most tasks.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

