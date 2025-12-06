"use client";

import React, { useState } from 'react';
import { NeuronDetails } from './NeuronDetails';
import { FunctionSelector } from './FunctionSelector';

interface NetworkDiagramProps {
  inputNodes: number;
  hiddenLayers: number[];
  outputNodes: number;
  activation?: string;
  outputActivation?: string;
  lossFunction?: string;
  optimizer?: string;
  trainingStats?: {
    loss: number;
    accuracy: number;
    epoch: number;
  };
  onActivationChange?: (value: string) => void;
  onOutputActivationChange?: (value: string) => void;
  onLossFunctionChange?: (value: string) => void;
  onOptimizerChange?: (value: string) => void;
}

export function NetworkDiagram({ 
  inputNodes, 
  hiddenLayers, 
  outputNodes,
  activation = 'relu',
  outputActivation = 'softmax',
  lossFunction = 'categoricalCrossentropy',
  optimizer = 'adam',
  trainingStats,
  onActivationChange,
  onOutputActivationChange,
  onLossFunctionChange,
  onOptimizerChange,
}: NetworkDiagramProps) {
  const [selectedNeuron, setSelectedNeuron] = useState<{
    layerIndex: number;
    nodeIndex: number;
    layerType: 'input' | 'hidden' | 'output';
  } | null>(null);
  
  const [selectorModal, setSelectorModal] = useState<{
    type: 'activation' | 'loss' | 'optimizer' | 'activationOutput';
  } | null>(null);

  const allLayers = [inputNodes, ...hiddenLayers, outputNodes];
  
  // Generate sample weights and bias for demonstration
  const generateSampleWeights = (count: number) => {
    return Array.from({ length: count }, () => (Math.random() - 0.5) * 2);
  };
  
  const generateSampleBias = () => {
    return (Math.random() - 0.5) * 0.5;
  };
  
  // Limit nodes displayed per layer for compact view
  const maxDisplayNodes = 6;
  const displayLayers = allLayers.map(count => Math.min(count, maxDisplayNodes));
  const maxLayerSize = Math.max(...displayLayers);
  
  const nodeRadius = 8;
  const layerSpacing = 100;
  const nodeSpacing = 32;
  const networkHeight = maxLayerSize * nodeSpacing + 80;
  const networkWidth = allLayers.length * layerSpacing + 80;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-charcoal mb-1">Neural Network Training Cycle</h3>
        <p className="text-xs text-muted-foreground font-mono">
          {inputNodes} → {hiddenLayers.join(' → ')} → {outputNodes}
        </p>
      </div>

      {/* Main Diagram */}
      <div className="relative">
        {/* Forward Propagation Arrow */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center mb-2">
          <div className="flex items-center gap-2 bg-red-50 px-4 py-1 rounded-full border border-red-200">
            <span className="text-xs font-semibold text-red-700">Forward Propagation</span>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Learning Cycle Arrows */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold">⟲</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 -rotate-90 whitespace-nowrap">Learning</span>
          </div>
        </div>

        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold">⟳</span>
            </div>
            <span className="text-xs font-semibold text-emerald-600 rotate-90 whitespace-nowrap">Training</span>
          </div>
        </div>

        {/* Network Visualization */}
        <div className="my-8 overflow-x-auto">
          <svg width={networkWidth + 40} height={networkHeight + 60} className="mx-auto">
            {allLayers.map((layerSize, layerIndex) => {
              const displaySize = displayLayers[layerIndex];
              const hasMore = layerSize > maxDisplayNodes;
              const x = layerIndex * layerSpacing + 50;
              
              // Center nodes vertically based on max layer size
              const layerHeight = displaySize * nodeSpacing;
              const maxHeight = maxLayerSize * nodeSpacing;
              const startY = 50 + (maxHeight - layerHeight) / 2;

              return (
                <g key={layerIndex}>
                  {/* Draw connections to next layer */}
                  {layerIndex < allLayers.length - 1 && (
                    <>
                      {Array.from({ length: displaySize }).map((_, nodeIndex) => {
                        const y1 = startY + nodeIndex * nodeSpacing;
                        const nextDisplaySize = displayLayers[layerIndex + 1];
                        
                        // Calculate next layer's centered start position
                        const nextLayerHeight = nextDisplaySize * nodeSpacing;
                        const nextStartY = 50 + (maxLayerSize * nodeSpacing - nextLayerHeight) / 2;

                        return Array.from({ length: nextDisplaySize }).map((_, nextNodeIndex) => {
                          const y2 = nextStartY + nextNodeIndex * nodeSpacing;
                          return (
                            <line
                              key={`${nodeIndex}-${nextNodeIndex}`}
                              x1={x + nodeRadius}
                              y1={y1}
                              x2={x + layerSpacing - nodeRadius}
                              y2={y2}
                              stroke="#d1d5db"
                              strokeWidth="2"
                              opacity="0.4"
                            />
                          );
                        });
                      })}
                    </>
                  )}

                  {/* Draw nodes */}
                  {Array.from({ length: displaySize }).map((_, nodeIndex) => {
                    const y = startY + nodeIndex * nodeSpacing;
                    const color = 
                      layerIndex === 0 ? '#10b981' : 
                      layerIndex === allLayers.length - 1 ? '#f59e0b' : 
                      '#6366f1';
                    
                    const layerType: 'input' | 'hidden' | 'output' = 
                      layerIndex === 0 ? 'input' : 
                      layerIndex === allLayers.length - 1 ? 'output' : 
                      'hidden';

                    return (
                      <g 
                        key={nodeIndex}
                        onClick={() => setSelectedNeuron({ layerIndex, nodeIndex, layerType })}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r={nodeRadius}
                          fill={color}
                          stroke="white"
                          strokeWidth="2.5"
                          className="drop-shadow-md hover:opacity-80 transition-opacity"
                        />
                        {/* Hover indicator */}
                        <circle
                          cx={x}
                          cy={y}
                          r={nodeRadius + 3}
                          fill="none"
                          stroke={color}
                          strokeWidth="1.5"
                          opacity="0"
                          className="hover:opacity-50 transition-opacity"
                        />
                      </g>
                    );
                  })}

                  {/* Show "..." if more nodes */}
                  {hasMore && (
                    <text
                      x={x}
                      y={startY + displaySize * nodeSpacing + 5}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#9ca3af"
                      fontWeight="600"
                    >
                      ...
                    </text>
                  )}

                  {/* Layer label */}
                  <text
                    x={x}
                    y={25}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#374151"
                    fontWeight="700"
                  >
                    {layerIndex === 0 ? 'Input' : 
                     layerIndex === allLayers.length - 1 ? 'Output' : 
                     `Hidden ${layerIndex}`}
                  </text>

                  {/* Node count */}
                  <text
                    x={x}
                    y={networkHeight - 15}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="600"
                  >
                    {layerSize}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Processing Steps - Right Side */}
        <div className="absolute -right-48 top-1/4 flex flex-col gap-2">
          <button
            onClick={() => setSelectorModal({ type: 'activationOutput' })}
            className="px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border-2 border-green-400 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <p className="text-xs font-bold text-green-700">Activation</p>
            <p className="text-xs font-bold text-green-700">Function</p>
            <p className="text-xs text-green-600 uppercase mt-1">{outputActivation}</p>
          </button>
          <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-purple-400 shadow-sm">
            <p className="text-xs font-bold text-purple-700 text-center">Prediction</p>
          </div>
          <div className="px-3 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg border-2 border-cyan-400 shadow-sm">
            <p className="text-xs font-bold text-cyan-700 text-center">True Value</p>
          </div>
        </div>

        {/* Back Propagation Arrow */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mt-2">
          <div className="flex items-center gap-2 bg-red-50 px-4 py-1 rounded-full border border-red-200">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-red-700">Back Propagation</span>
          </div>
        </div>
      </div>

      {/* Bottom Process Boxes */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="px-3 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm">
          <p className="text-xs font-semibold text-gray-700 text-center">Weight & Bias</p>
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <button
          onClick={() => setSelectorModal({ type: 'optimizer' })}
          className="px-3 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg border-2 border-red-400 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
        >
          <p className="text-xs font-bold text-red-700 text-center">Optimizer</p>
          <p className="text-xs text-red-600 uppercase">{optimizer}</p>
        </button>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <div className="px-3 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm">
          <p className="text-xs font-semibold text-gray-700 text-center">Loss Score</p>
          {trainingStats && (
            <p className="text-xs text-gray-600 font-mono">{trainingStats.loss.toFixed(4)}</p>
          )}
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <button
          onClick={() => setSelectorModal({ type: 'loss' })}
          className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg border-2 border-yellow-400 shadow-sm hover:shadow-md transition-all hover:scale-105 cursor-pointer"
        >
          <p className="text-xs font-bold text-yellow-700 text-center">Loss Function</p>
          <p className="text-xs text-yellow-600 text-center capitalize">{lossFunction}</p>
        </button>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow"></div>
          <span className="text-muted-foreground font-medium">Input Layer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-indigo-500 border-2 border-white shadow"></div>
          <span className="text-muted-foreground font-medium">Hidden Layers</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow"></div>
          <span className="text-muted-foreground font-medium">Output Layer</span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 text-center">
        <span className="text-xs text-muted-foreground font-medium">
          {allLayers.length} Layers • {allLayers.reduce((a, b) => a + b, 0)} Total Nodes
        </span>
        <span className="text-xs text-blue-600 ml-3">💡 Click any neuron to explore its details</span>
      </div>

      {/* Neuron Details Modal */}
      {selectedNeuron && (
        <NeuronDetails
          layerIndex={selectedNeuron.layerIndex}
          nodeIndex={selectedNeuron.nodeIndex}
          layerType={selectedNeuron.layerType}
          activation={
            selectedNeuron.layerType === 'output' 
              ? outputActivation 
              : selectedNeuron.layerType === 'hidden' 
              ? activation 
              : 'linear'
          }
          weights={
            selectedNeuron.layerType !== 'input' 
              ? generateSampleWeights(
                  selectedNeuron.layerIndex === 0 
                    ? inputNodes 
                    : allLayers[selectedNeuron.layerIndex - 1]
                )
              : undefined
          }
          bias={selectedNeuron.layerType !== 'input' ? generateSampleBias() : undefined}
          trainingStats={trainingStats}
          onClose={() => setSelectedNeuron(null)}
        />
      )}

      {/* Function Selector Modals */}
      {selectorModal && selectorModal.type === 'activation' && onActivationChange && (
        <FunctionSelector
          type="activation"
          currentValue={activation}
          onChange={(value) => {
            onActivationChange(value);
            setSelectorModal(null);
          }}
          onClose={() => setSelectorModal(null)}
          isOutput={false}
        />
      )}

      {selectorModal && selectorModal.type === 'activationOutput' && onOutputActivationChange && (
        <FunctionSelector
          type="activation"
          currentValue={outputActivation}
          onChange={(value) => {
            onOutputActivationChange(value);
            setSelectorModal(null);
          }}
          onClose={() => setSelectorModal(null)}
          isOutput={true}
        />
      )}

      {selectorModal && selectorModal.type === 'loss' && onLossFunctionChange && (
        <FunctionSelector
          type="loss"
          currentValue={lossFunction}
          onChange={(value) => {
            onLossFunctionChange(value);
            setSelectorModal(null);
          }}
          onClose={() => setSelectorModal(null)}
        />
      )}

      {selectorModal && selectorModal.type === 'optimizer' && onOptimizerChange && (
        <FunctionSelector
          type="optimizer"
          currentValue={optimizer}
          onChange={(value) => {
            onOptimizerChange(value);
            setSelectorModal(null);
          }}
          onClose={() => setSelectorModal(null)}
        />
      )}
    </div>
  );
}
