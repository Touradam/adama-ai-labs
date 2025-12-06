"use client";

import React from 'react';

interface NetworkDiagramProps {
  inputNodes: number;
  hiddenLayers: number[];
  outputNodes: number;
}

export function NetworkDiagram({ inputNodes, hiddenLayers, outputNodes }: NetworkDiagramProps) {
  const totalLayers = hiddenLayers.length + 2;

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left side - Architecture text */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-charcoal mb-1">
            Neural Network
          </h3>
          <p className="text-sm text-muted-foreground font-mono">
            {inputNodes} → {hiddenLayers.join(' → ')} → {outputNodes}
          </p>
        </div>

        {/* Right side - Visual representation */}
        <div className="flex items-center gap-3">
          {/* Input */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-col gap-0.5">
              {Array.from({ length: Math.min(inputNodes, 3) }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-500"></div>
              ))}
              {inputNodes > 3 && (
                <div className="text-xs text-muted-foreground">...</div>
              )}
            </div>
            <span className="text-xs text-muted-foreground">In</span>
          </div>

          {/* Arrow */}
          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>

          {/* Hidden layers */}
          {hiddenLayers.map((neurons, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col gap-0.5">
                  {Array.from({ length: Math.min(neurons, 3) }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-ai-blue"></div>
                  ))}
                  {neurons > 3 && (
                    <div className="text-xs text-muted-foreground">...</div>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">H{idx + 1}</span>
              </div>
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </React.Fragment>
          ))}

          {/* Output */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex flex-col gap-0.5">
              {Array.from({ length: Math.min(outputNodes, 3) }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-amber-500"></div>
              ))}
              {outputNodes > 3 && (
                <div className="text-xs text-muted-foreground">...</div>
              )}
            </div>
            <span className="text-xs text-muted-foreground">Out</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 pt-3 border-t flex items-center justify-between text-xs text-muted-foreground">
        <span>{totalLayers} Layers</span>
        <span>•</span>
        <span>{hiddenLayers.reduce((a, b) => a + b, 0) + inputNodes + outputNodes} Total Nodes</span>
      </div>
    </div>
  );
}

