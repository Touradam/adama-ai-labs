"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Upload } from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
  class: number;
}

interface DataVisualizationProps {
  data: DataPoint[];
  predictions?: Array<{ x: number; y: number; predictedClass: number }>;
  onDataGenerate?: () => void;
  onPointClick?: (x: number, y: number) => void;
}

const CLASS_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export function DataVisualization({
  data,
  predictions,
  onDataGenerate,
  onPointClick,
}: DataVisualizationProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const plotDimensions = {
    width: 400,
    height: 400,
    padding: 40,
  };

  const plotArea = {
    width: plotDimensions.width - 2 * plotDimensions.padding,
    height: plotDimensions.height - 2 * plotDimensions.padding,
  };

  // Calculate scales
  const scales = useMemo(() => {
    if (data.length === 0) {
      return {
        x: (val: number) => plotDimensions.padding + plotArea.width / 2,
        y: (val: number) => plotDimensions.padding + plotArea.height / 2,
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5,
      };
    }

    const xValues = data.map(d => d.x);
    const yValues = data.map(d => d.y);
    const xMin = Math.min(...xValues, -5);
    const xMax = Math.max(...xValues, 5);
    const yMin = Math.min(...yValues, -5);
    const yMax = Math.max(...yValues, 5);

    // Add padding to ranges
    const xRange = xMax - xMin;
    const yRange = yMax - yMin;
    const xPadding = xRange * 0.1;
    const yPadding = yRange * 0.1;

    return {
      x: (val: number) =>
        plotDimensions.padding +
        ((val - (xMin - xPadding)) / (xRange + 2 * xPadding)) * plotArea.width,
      y: (val: number) =>
        plotDimensions.padding +
        plotArea.height -
        ((val - (yMin - yPadding)) / (yRange + 2 * yPadding)) * plotArea.height,
      xMin: xMin - xPadding,
      xMax: xMax + xPadding,
      yMin: yMin - yPadding,
      yMax: yMax + yPadding,
    };
  }, [data, plotDimensions.padding, plotArea]);

  // Handle click on plot area
  const handlePlotClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!onPointClick) return;

    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convert pixel coordinates to data coordinates
    const dataX =
      scales.xMin +
      ((clickX - plotDimensions.padding) / plotArea.width) * (scales.xMax - scales.xMin);
    const dataY =
      scales.yMax -
      ((clickY - plotDimensions.padding) / plotArea.height) * (scales.yMax - scales.yMin);

    onPointClick(dataX, dataY);
  };

  // Count classes
  const classCounts = useMemo(() => {
    const counts: { [key: number]: number } = {};
    data.forEach(d => {
      counts[d.class] = (counts[d.class] || 0) + 1;
    });
    return counts;
  }, [data]);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Data Visualization</CardTitle>
            <CardDescription>
              {data.length > 0
                ? `${data.length} data points across ${Object.keys(classCounts).length} classes`
                : 'No data yet - generate sample data to begin'}
            </CardDescription>
          </div>
          {onDataGenerate && (
            <Button
              variant="outline"
              size="sm"
              onClick={onDataGenerate}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Generate</span>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Scatter Plot */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg border p-4">
            <svg
              width={plotDimensions.width}
              height={plotDimensions.height}
              className="mx-auto cursor-crosshair"
              onClick={handlePlotClick}
            >
              {/* Grid lines */}
              {[-4, -2, 0, 2, 4].map(val => {
                const x = scales.x(val);
                const y = scales.y(val);
                return (
                  <g key={`grid-${val}`}>
                    <line
                      x1={x}
                      y1={plotDimensions.padding}
                      x2={x}
                      y2={plotDimensions.height - plotDimensions.padding}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                    <line
                      x1={plotDimensions.padding}
                      y1={y}
                      x2={plotDimensions.width - plotDimensions.padding}
                      y2={y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                  </g>
                );
              })}

              {/* Axes */}
              <line
                x1={scales.x(0)}
                y1={plotDimensions.padding}
                x2={scales.x(0)}
                y2={plotDimensions.height - plotDimensions.padding}
                stroke="#9ca3af"
                strokeWidth="2"
              />
              <line
                x1={plotDimensions.padding}
                y1={scales.y(0)}
                x2={plotDimensions.width - plotDimensions.padding}
                y2={scales.y(0)}
                stroke="#9ca3af"
                strokeWidth="2"
              />

              {/* Decision boundary background (if predictions available) */}
              {predictions && predictions.length > 0 && (
                <g opacity="0.2">
                  {predictions.map((pred, i) => (
                    <circle
                      key={`pred-${i}`}
                      cx={scales.x(pred.x)}
                      cy={scales.y(pred.y)}
                      r="3"
                      fill={CLASS_COLORS[pred.predictedClass % CLASS_COLORS.length]}
                    />
                  ))}
                </g>
              )}

              {/* Data points */}
              {data.map((point, i) => (
                <g
                  key={i}
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={scales.x(point.x)}
                    cy={scales.y(point.y)}
                    r={hoveredPoint === i ? 10 : 7}
                    fill={CLASS_COLORS[point.class % CLASS_COLORS.length]}
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-md transition-all duration-200"
                  />
                  {hoveredPoint === i && (
                    <>
                      <circle
                        cx={scales.x(point.x)}
                        cy={scales.y(point.y)}
                        r="14"
                        fill="none"
                        stroke={CLASS_COLORS[point.class % CLASS_COLORS.length]}
                        strokeWidth="2"
                        opacity="0.5"
                        className="animate-ping-slow"
                      />
                      <title>
                        Class {point.class}: ({point.x.toFixed(2)}, {point.y.toFixed(2)})
                      </title>
                    </>
                  )}
                </g>
              ))}

              {/* Axis labels */}
              <text
                x={plotDimensions.width / 2}
                y={plotDimensions.height - 10}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
                fontWeight="600"
              >
                Feature 1 (x)
              </text>
              <text
                x={15}
                y={plotDimensions.height / 2}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
                fontWeight="600"
                transform={`rotate(-90, 15, ${plotDimensions.height / 2})`}
              >
                Feature 2 (y)
              </text>

              {/* Tick labels */}
              {[-4, -2, 0, 2, 4].map(val => (
                <g key={`tick-${val}`}>
                  <text
                    x={scales.x(val)}
                    y={plotDimensions.height - plotDimensions.padding + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#9ca3af"
                  >
                    {val}
                  </text>
                  <text
                    x={plotDimensions.padding - 10}
                    y={scales.y(val)}
                    textAnchor="end"
                    fontSize="10"
                    fill="#9ca3af"
                    alignmentBaseline="middle"
                  >
                    {val}
                  </text>
                </g>
              ))}
            </svg>

            {/* Instructions */}
            {onPointClick && (
              <p className="text-xs text-center text-muted-foreground mt-2">
                Click anywhere on the plot to test your model at that point
              </p>
            )}
          </div>

          {/* Class Legend */}
          {Object.keys(classCounts).length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(classCounts).map(([classNum, count]) => (
                <div
                  key={classNum}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border"
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow"
                    style={{
                      backgroundColor: CLASS_COLORS[parseInt(classNum) % CLASS_COLORS.length],
                    }}
                  ></div>
                  <span className="text-xs font-medium text-gray-700">
                    Class {classNum}: {count} points
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {data.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Upload className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm font-medium">No data to display</p>
              <p className="text-xs mt-1">Generate sample data or upload your own</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

