import * as tf from '@tensorflow/tfjs';
import {
  NetworkConfig,
  NormalizationType,
  NormalizationScaler,
  EvaluationMetrics,
} from './types';

/**
 * Normalize data using specified method
 */
export function normalizeData(
  data: number[][],
  method: NormalizationType
): { normalized: number[][]; scaler: NormalizationScaler } {
  if (method === 'none') {
    return { normalized: data, scaler: { method: 'none' } };
  }

  const numFeatures = data[0].length;
  const normalized: number[][] = [];

  if (method === 'minmax') {
    const min = new Array(numFeatures).fill(Infinity);
    const max = new Array(numFeatures).fill(-Infinity);

    // Find min and max for each feature
    for (const sample of data) {
      for (let i = 0; i < numFeatures; i++) {
        if (sample[i] < min[i]) min[i] = sample[i];
        if (sample[i] > max[i]) max[i] = sample[i];
      }
    }

    // Normalize
    for (const sample of data) {
      const normalizedSample = sample.map((value, i) => {
        const range = max[i] - min[i];
        return range === 0 ? 0 : (value - min[i]) / range;
      });
      normalized.push(normalizedSample);
    }

    return { normalized, scaler: { method: 'minmax', min, max } };
  }

  if (method === 'zscore') {
    const mean = new Array(numFeatures).fill(0);
    const std = new Array(numFeatures).fill(0);

    // Calculate mean
    for (const sample of data) {
      for (let i = 0; i < numFeatures; i++) {
        mean[i] += sample[i];
      }
    }
    for (let i = 0; i < numFeatures; i++) {
      mean[i] /= data.length;
    }

    // Calculate std
    for (const sample of data) {
      for (let i = 0; i < numFeatures; i++) {
        std[i] += Math.pow(sample[i] - mean[i], 2);
      }
    }
    for (let i = 0; i < numFeatures; i++) {
      std[i] = Math.sqrt(std[i] / data.length);
    }

    // Normalize
    for (const sample of data) {
      const normalizedSample = sample.map((value, i) => {
        return std[i] === 0 ? 0 : (value - mean[i]) / std[i];
      });
      normalized.push(normalizedSample);
    }

    return { normalized, scaler: { method: 'zscore', mean, std } };
  }

  return { normalized: data, scaler: { method: 'none' } };
}

/**
 * Denormalize data
 */
export function denormalizeData(
  data: number[][],
  scaler: NormalizationScaler
): number[][] {
  if (scaler.method === 'none') return data;

  const denormalized: number[][] = [];

  if (scaler.method === 'minmax' && scaler.min && scaler.max) {
    for (const sample of data) {
      const denormalizedSample = sample.map((value, i) => {
        const range = scaler.max![i] - scaler.min![i];
        return value * range + scaler.min![i];
      });
      denormalized.push(denormalizedSample);
    }
  }

  if (scaler.method === 'zscore' && scaler.mean && scaler.std) {
    for (const sample of data) {
      const denormalizedSample = sample.map((value, i) => {
        return value * scaler.std![i] + scaler.mean![i];
      });
      denormalized.push(denormalizedSample);
    }
  }

  return denormalized;
}

/**
 * Split data into train, validation, and test sets
 */
export function splitData(
  features: number[][],
  labels: number[][],
  trainRatio: number,
  valRatio: number,
  shuffle: boolean = true
): {
  trainX: number[][];
  trainY: number[][];
  valX: number[][];
  valY: number[][];
  testX: number[][];
  testY: number[][];
} {
  const numSamples = features.length;
  let indices = Array.from({ length: numSamples }, (_, i) => i);

  if (shuffle) {
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
  }

  const trainSize = Math.floor(numSamples * trainRatio);
  const valSize = Math.floor(numSamples * valRatio);

  const trainIndices = indices.slice(0, trainSize);
  const valIndices = indices.slice(trainSize, trainSize + valSize);
  const testIndices = indices.slice(trainSize + valSize);

  return {
    trainX: trainIndices.map(i => features[i]),
    trainY: trainIndices.map(i => labels[i]),
    valX: valIndices.map(i => features[i]),
    valY: valIndices.map(i => labels[i]),
    testX: testIndices.map(i => features[i]),
    testY: testIndices.map(i => labels[i]),
  };
}

/**
 * Create TensorFlow.js model
 */
export function createModel(
  config: NetworkConfig,
  inputSize: number,
  outputSize: number
): tf.Sequential {
  const model = tf.sequential();

  // Input layer
  model.add(
    tf.layers.dense({
      inputShape: [inputSize],
      units: config.hiddenLayers[0],
      activation: config.hiddenActivation,
    })
  );

  // Hidden layers
  for (let i = 1; i < config.hiddenLayers.length; i++) {
    model.add(
      tf.layers.dense({
        units: config.hiddenLayers[i],
        activation: config.hiddenActivation,
      })
    );
  }

  // Output layer
  model.add(
    tf.layers.dense({
      units: outputSize,
      activation: config.outputActivation,
    })
  );

  // Compile model
  model.compile({
    optimizer: tf.train[config.optimizer](config.learningRate),
    loss: config.lossFunction,
    metrics: ['accuracy'],
  });

  return model;
}

/**
 * Train model
 */
export async function trainModel(
  model: tf.Sequential,
  trainX: number[][],
  trainY: number[][],
  valX: number[][],
  valY: number[][],
  config: NetworkConfig,
  onEpochEnd: (epoch: number, logs: tf.Logs) => Promise<void>
): Promise<tf.History> {
  const xTrain = tf.tensor2d(trainX);
  const yTrain = tf.tensor2d(trainY);
  const xVal = tf.tensor2d(valX);
  const yVal = tf.tensor2d(valY);

  const history = await model.fit(xTrain, yTrain, {
    epochs: config.epochs,
    batchSize: config.batchSize,
    validationData: [xVal, yVal],
    shuffle: true,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        await onEpochEnd(epoch, logs || {});
      },
    },
  });

  xTrain.dispose();
  yTrain.dispose();
  xVal.dispose();
  yVal.dispose();

  return history;
}

/**
 * Calculate evaluation metrics
 */
export async function calculateMetrics(
  model: tf.Sequential,
  testX: number[][],
  testY: number[][]
): Promise<EvaluationMetrics> {
  const xTest = tf.tensor2d(testX);
  const yTest = tf.tensor2d(testY);

  const evaluation = model.evaluate(xTest, yTest) as tf.Tensor[];
  const [lossValue, accuracyValue] = await Promise.all([
    evaluation[0].data(),
    evaluation[1].data(),
  ]);

  // Get predictions
  const predictions = model.predict(xTest) as tf.Tensor;
  const predArray = await predictions.argMax(-1).data();
  const trueArray = await yTest.argMax(-1).data();

  xTest.dispose();
  yTest.dispose();
  evaluation.forEach(t => t.dispose());
  predictions.dispose();

  return {
    loss: lossValue[0],
    accuracy: accuracyValue[0],
    predictions: Array.from(predArray),
    trueLabels: Array.from(trueArray),
  };
}


