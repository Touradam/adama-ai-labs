"use client";

import React from 'react';

interface NetworkDiagramProps {
  inputNodes: number;
  hiddenLayers: number[];
  outputNodes: number;
}

export function NetworkDiagram({ inputNodes, hiddenLayers, outputNodes }: NetworkDiagramProps) {
  const allLayers = [inputNodes, ...hiddenLayers, outputNodes];
  const maxNodes = Math.max(...allLayers);
  const nodeRadius = 8;
  const layerSpacing = 120;
  const nodeSpacing = 40;

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-charcoal">Neural Network Architecture</h3>
        <p className="text-sm text-muted-foreground">
          {inputNodes} → {hiddenLayers.join(' → ')} → {outputNodes}
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <svg 
          width={allLayers.length * layerSpacing + 100} 
          height={maxNodes * nodeSpacing + 60}
          className="mx-auto"
        >
          {allLayers.map((layerSize, layerIndex) => {
            const x = layerIndex * layerSpacing + 50;
            const layerHeight = layerSize * nodeSpacing;
            const startY = (maxNodes * nodeSpacing - layerHeight) / 2 + 30;

            return (
              <g key={layerIndex}>
                {/* Draw connections to next layer */}
                {layerIndex < allLayers.length - 1 && (
                  <>
                    {Array.from({ length: layerSize }).map((_, nodeIndex) => {
                      const y1 = startY + nodeIndex * nodeSpacing;
                      const nextLayerSize = allLayers[layerIndex + 1];
                      const nextLayerHeight = nextLayerSize * nodeSpacing;
                      const nextStartY = (maxNodes * nodeSpacing - nextLayerHeight) / 2 + 30;

                      return Array.from({ length: nextLayerSize }).map((_, nextNodeIndex) => {
                        const y2 = nextStartY + nextNodeIndex * nodeSpacing;
                        return (
                          <line
                            key={`${nodeIndex}-${nextNodeIndex}`}
                            x1={x + nodeRadius}
                            y1={y1}
                            x2={x + layerSpacing - nodeRadius}
                            y2={y2}
                            stroke="#e5e7eb"
                            strokeWidth="1"
                            opacity="0.3"
                          />
                        );
                      });
                    })}
                  </>
                )}

                {/* Draw nodes */}
                {Array.from({ length: layerSize }).map((_, nodeIndex) => {
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
                    />
                  );
                })}

                {/* Layer label */}
                <text
                  x={x}
                  y={15}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#6b7280"
                  fontWeight="600"
                >
                  {layerIndex === 0 ? 'Input' : 
                   layerIndex === allLayers.length - 1 ? 'Output' : 
                   `Hidden ${layerIndex}`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-muted-foreground">Input Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-ai-blue"></div>
          <span className="text-muted-foreground">Hidden Layers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-muted-foreground">Output Layer</span>
        </div>
      </div>
    </div>
  );
}

