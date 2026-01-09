"use client";

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrainingChartProps {
  data: Array<{
    epoch: number;
    loss: number;
    accuracy: number;
  }>;
  isTraining: boolean;
}

export function TrainingChart({ data, isTraining }: TrainingChartProps) {
  const chartDimensions = {
    width: 400,
    height: 250,
    padding: { top: 20, right: 50, bottom: 40, left: 50 },
  };

  const chartArea = {
    width: chartDimensions.width - chartDimensions.padding.left - chartDimensions.padding.right,
    height: chartDimensions.height - chartDimensions.padding.top - chartDimensions.padding.bottom,
  };

  // Calculate scales
  const scales = useMemo(() => {
    if (data.length === 0) return null;

    const maxEpoch = Math.max(...data.map(d => d.epoch));
    const maxLoss = Math.max(...data.map(d => d.loss));
    const minLoss = Math.min(...data.map(d => d.loss));
    const maxAccuracy = Math.max(...data.map(d => d.accuracy));
    const minAccuracy = Math.min(...data.map(d => d.accuracy));

    return {
      x: (epoch: number) =>
        chartDimensions.padding.left + (epoch / maxEpoch) * chartArea.width,
      yLoss: (loss: number) =>
        chartDimensions.padding.top +
        chartArea.height -
        ((loss - minLoss) / (maxLoss - minLoss + 0.001)) * chartArea.height,
      yAccuracy: (accuracy: number) =>
        chartDimensions.padding.top +
        chartArea.height -
        ((accuracy - minAccuracy) / (maxAccuracy - minAccuracy + 0.001)) * chartArea.height,
      maxEpoch,
      maxLoss,
      minLoss,
      maxAccuracy,
      minAccuracy,
    };
  }, [data, chartArea, chartDimensions.padding]);

  // Generate path data
  const paths = useMemo(() => {
    if (!scales || data.length === 0) return null;

    const lossPath = data
      .map((d, i) => {
        const x = scales.x(d.epoch);
        const y = scales.yLoss(d.loss);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

    const accuracyPath = data
      .map((d, i) => {
        const x = scales.x(d.epoch);
        const y = scales.yAccuracy(d.accuracy);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');

    return { lossPath, accuracyPath };
  }, [data, scales]);

  // Latest values
  const latestData = data.length > 0 ? data[data.length - 1] : null;

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">Training Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            <div className="text-center">
              <p className="text-sm">No training data yet</p>
              <p className="text-xs mt-1">Start training to see live metrics</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Training Progress</CardTitle>
          {isTraining && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Metrics Display */}
        {latestData && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
              <p className="text-xs text-muted-foreground mb-1">Epoch</p>
              <p className="text-xl font-bold text-blue-700">{latestData.epoch}</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-3 border border-red-200">
              <p className="text-xs text-muted-foreground mb-1">Loss</p>
              <p className="text-xl font-bold text-red-700">{latestData.loss.toFixed(4)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
              <p className="text-xl font-bold text-green-700">
                {(latestData.accuracy * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        )}

        {/* Chart */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border p-4">
          <svg
            width={chartDimensions.width}
            height={chartDimensions.height}
            className="mx-auto"
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
              const y = chartDimensions.padding.top + chartArea.height * (1 - ratio);
              return (
                <line
                  key={`grid-${ratio}`}
                  x1={chartDimensions.padding.left}
                  y1={y}
                  x2={chartDimensions.padding.left + chartArea.width}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* Axes */}
            <line
              x1={chartDimensions.padding.left}
              y1={chartDimensions.padding.top}
              x2={chartDimensions.padding.left}
              y2={chartDimensions.padding.top + chartArea.height}
              stroke="#374151"
              strokeWidth="2"
            />
            <line
              x1={chartDimensions.padding.left}
              y1={chartDimensions.padding.top + chartArea.height}
              x2={chartDimensions.padding.left + chartArea.width}
              y2={chartDimensions.padding.top + chartArea.height}
              stroke="#374151"
              strokeWidth="2"
            />

            {/* Loss line */}
            {paths && (
              <path
                d={paths.lossPath}
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isTraining ? 'animate-pulse' : ''}
              />
            )}

            {/* Accuracy line */}
            {paths && (
              <path
                d={paths.accuracyPath}
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isTraining ? 'animate-pulse' : ''}
              />
            )}

            {/* Data points */}
            {scales &&
              data.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={scales.x(d.epoch)}
                    cy={scales.yLoss(d.loss)}
                    r="4"
                    fill="#ef4444"
                    className="drop-shadow-sm hover:scale-150 transition-transform"
                  >
                    <title>Epoch {d.epoch}: Loss = {d.loss.toFixed(4)}</title>
                  </circle>
                  <circle
                    cx={scales.x(d.epoch)}
                    cy={scales.yAccuracy(d.accuracy)}
                    r="4"
                    fill="#10b981"
                    className="drop-shadow-sm hover:scale-150 transition-transform"
                  >
                    <title>
                      Epoch {d.epoch}: Accuracy = {(d.accuracy * 100).toFixed(1)}%
                    </title>
                  </circle>
                </g>
              ))}

            {/* Axis labels */}
            <text
              x={chartDimensions.padding.left + chartArea.width / 2}
              y={chartDimensions.height - 10}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
              fontWeight="600"
            >
              Epoch
            </text>
            <text
              x={15}
              y={chartDimensions.padding.top + chartArea.height / 2}
              textAnchor="middle"
              fontSize="12"
              fill="#6b7280"
              fontWeight="600"
              transform={`rotate(-90, 15, ${chartDimensions.padding.top + chartArea.height / 2})`}
            >
              Value
            </text>

            {/* Y-axis tick labels */}
            {scales && [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
              const y = chartDimensions.padding.top + chartArea.height * (1 - ratio);
              const value = scales.minLoss + (scales.maxLoss - scales.minLoss) * ratio;
              return (
                <text
                  key={`tick-${ratio}`}
                  x={chartDimensions.padding.left - 10}
                  y={y}
                  textAnchor="end"
                  fontSize="10"
                  fill="#9ca3af"
                  alignmentBaseline="middle"
                >
                  {value.toFixed(2)}
                </text>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-red-500 rounded"></div>
              <span className="text-xs text-muted-foreground font-medium">Loss (↓ better)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-green-500 rounded"></div>
              <span className="text-xs text-muted-foreground font-medium">Accuracy (↑ better)</span>
            </div>
          </div>
        </div>

        {/* Training status message */}
        {isTraining && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-medium text-center">
              🔥 Network is learning patterns...
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


