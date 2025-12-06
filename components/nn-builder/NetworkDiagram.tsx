"use client";

import React from 'react';

interface NetworkDiagramProps {
  inputNodes: number;
  hiddenLayers: number[];
  outputNodes: number;
}

export function NetworkDiagram({ inputNodes, hiddenLayers, outputNodes }: NetworkDiagramProps) {
  const allLayers = [inputNodes, ...hiddenLayers, outputNodes];
  const totalLayers = allLayers.length;
  
  // Limit nodes displayed per layer for compact view
  const maxDisplayNodes = 5;
  const displayLayers = allLayers.map(count => Math.min(count, maxDisplayNodes));
  
  const nodeRadius = 6;
  const layerSpacing = 80;
  const nodeSpacing = 24;
  const svgHeight = maxDisplayNodes * nodeSpacing + 40;
  const svgWidth = totalLayers * layerSpacing + 40;

  return (
    <div className="bg-white rounded-lg border shadow-sm p-4">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-base font-semibold text-charcoal">Neural Network Architecture</h3>
        <p className="text-sm text-muted-foreground font-mono">
          {inputNodes} → {hiddenLayers.join(' → ')} → {outputNodes}
        </p>
      </div>

      {/* Network Visualization */}
      <div className="overflow-x-auto">
        <svg width={svgWidth} height={svgHeight} className="mx-auto">
          {allLayers.map((layerSize, layerIndex) => {
            const displaySize = displayLayers[layerIndex];
            const hasMore = layerSize > maxDisplayNodes;
            const x = layerIndex * layerSpacing + 20;
            const startY = 20;

            return (
              <g key={layerIndex}>
                {/* Draw connections to next layer */}
                {layerIndex < allLayers.length - 1 && (
                  <>
                    {Array.from({ length: displaySize }).map((_, nodeIndex) => {
                      const y1 = startY + nodeIndex * nodeSpacing;
                      const nextDisplaySize = displayLayers[layerIndex + 1];

                      return Array.from({ length: nextDisplaySize }).map((_, nextNodeIndex) => {
                        const y2 = startY + nextNodeIndex * nodeSpacing;
                        return (
                          <line
                            key={`${nodeIndex}-${nextNodeIndex}`}
                            x1={x + nodeRadius}
                            y1={y1}
                            x2={x + layerSpacing - nodeRadius}
                            y2={y2}
                            stroke="#e5e7eb"
                            strokeWidth="1.5"
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
                    '#2374F2';

                  return (
                    <circle
                      key={nodeIndex}
                      cx={x}
                      cy={y}
                      r={nodeRadius}
                      fill={color}
                      stroke="white"
                      strokeWidth="2"
                      className="drop-shadow-sm"
                    />
                  );
                })}

                {/* Show "..." if more nodes */}
                {hasMore && (
                  <text
                    x={x}
                    y={startY + displaySize * nodeSpacing}
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
                  y={10}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#6b7280"
                  fontWeight="600"
                >
                  {layerIndex === 0 ? 'Input' : 
                   layerIndex === allLayers.length - 1 ? 'Output' : 
                   `H${layerIndex}`}
                </text>

                {/* Node count */}
                <text
                  x={x}
                  y={svgHeight - 5}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#9ca3af"
                >
                  {layerSize}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-3 pt-3 border-t flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-muted-foreground">Input</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-ai-blue"></div>
            <span className="text-muted-foreground">Hidden</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <span className="text-muted-foreground">Output</span>
          </div>
        </div>
        <span className="text-muted-foreground">
          {totalLayers} Layers • {allLayers.reduce((a, b) => a + b, 0)} Nodes
        </span>
      </div>
    </div>
  );
}

