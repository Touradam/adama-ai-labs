// Neural Network Types

export type ActivationFunction = 'relu' | 'sigmoid' | 'tanh' | 'softmax' | 'linear';
export type LossFunction = 'meanSquaredError' | 'categoricalCrossentropy' | 'binaryCrossentropy';
export type OptimizerType = 'adam' | 'sgd' | 'rmsprop';
export type NormalizationType = 'none' | 'minmax' | 'zscore';

export interface NetworkConfig {
  inputLayers: number;
  hiddenLayers: number[];
  outputLayers: number;
  hiddenActivation: ActivationFunction;
  outputActivation: ActivationFunction;
  lossFunction: LossFunction;
  optimizer: OptimizerType;
  learningRate: number;
  epochs: number;
  batchSize: number;
  validationSplit: number;
  normalization: NormalizationType;
}

export interface SplitRatios {
  train: number;
  validation: number;
  test: number;
}

export interface TrainingMetrics {
  epoch: number;
  loss: number;
  accuracy: number;
  valLoss?: number;
  valAccuracy?: number;
  learningRate: number;
}

export interface EvaluationMetrics {
  loss: number;
  accuracy: number;
  predictions?: number[];
  trueLabels?: number[];
}

export interface TrainingSummary {
  finalTrainLoss: number;
  finalTrainAccuracy: number;
  finalValLoss: number;
  finalValAccuracy: number;
  testLoss: number;
  testAccuracy: number;
  totalEpochs: number;
  bestEpoch: number;
  trainingTime: number;
  earlyStopped: boolean;
  testMetrics: EvaluationMetrics;
}

export interface NormalizationScaler {
  method: NormalizationType;
  min?: number[];
  max?: number[];
  mean?: number[];
  std?: number[];
}

export interface PredictionResult {
  predictedClass: number;
  confidence: number;
  probabilities: number[];
}

export interface NetworkPreset {
  name: string;
  description: string;
  icon?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  useCase?: string;
  config: NetworkConfig;
}

