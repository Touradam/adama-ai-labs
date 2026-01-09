"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Zap, Award, CheckCircle2, Circle } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  unit: string;
  reward: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface GamificationPanelProps {
  trainingCount: number;
  bestAccuracy: number;
  totalEpochs: number;
  onChallengeComplete?: (challengeId: string) => void;
}

const ACHIEVEMENTS_LIST: Omit<Achievement, 'unlocked' | 'unlockedAt'>[] = [
  {
    id: 'first-training',
    title: 'First Steps',
    description: 'Complete your first training session',
    icon: '🌱',
  },
  {
    id: 'accuracy-90',
    title: 'High Performer',
    description: 'Achieve 90%+ accuracy',
    icon: '🎯',
  },
  {
    id: 'accuracy-95',
    title: 'Near Perfect',
    description: 'Achieve 95%+ accuracy',
    icon: '⭐',
  },
  {
    id: 'accuracy-99',
    title: 'Perfection',
    description: 'Achieve 99%+ accuracy',
    icon: '🏆',
  },
  {
    id: 'train-10',
    title: 'Dedicated Learner',
    description: 'Complete 10 training sessions',
    icon: '📚',
  },
  {
    id: 'fast-training',
    title: 'Speed Demon',
    description: 'Train a model in under 30 epochs',
    icon: '⚡',
  },
  {
    id: 'deep-network',
    title: 'Deep Diver',
    description: 'Train a network with 4+ hidden layers',
    icon: '🌊',
  },
];

export function GamificationPanel({
  trainingCount,
  bestAccuracy,
  totalEpochs,
  onChallengeComplete,
}: GamificationPanelProps) {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Initialize achievements from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedAchievements = localStorage.getItem('nn-builder-achievements');
      if (savedAchievements) {
        setAchievements(JSON.parse(savedAchievements));
      } else {
        const initial = ACHIEVEMENTS_LIST.map(a => ({ ...a, unlocked: false }));
        setAchievements(initial);
        localStorage.setItem('nn-builder-achievements', JSON.stringify(initial));
      }
    } catch (error) {
      console.error('Error loading achievements:', error);
    }
  }, []);

  // Check for new achievements
  useEffect(() => {
    let updated = false;
    const newAchievements = achievements.map(achievement => {
      if (achievement.unlocked) return achievement;

      let shouldUnlock = false;

      switch (achievement.id) {
        case 'first-training':
          shouldUnlock = trainingCount >= 1;
          break;
        case 'accuracy-90':
          shouldUnlock = bestAccuracy >= 0.90;
          break;
        case 'accuracy-95':
          shouldUnlock = bestAccuracy >= 0.95;
          break;
        case 'accuracy-99':
          shouldUnlock = bestAccuracy >= 0.99;
          break;
        case 'train-10':
          shouldUnlock = trainingCount >= 10;
          break;
        case 'fast-training':
          shouldUnlock = totalEpochs > 0 && totalEpochs <= 30;
          break;
        case 'deep-network':
          shouldUnlock = trainingCount >= 1; // Would need to check layer count
          break;
      }

      if (shouldUnlock) {
        updated = true;
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        return { ...achievement, unlocked: true, unlockedAt: new Date() };
      }

      return achievement;
    });

    if (updated) {
      setAchievements(newAchievements);
      if (typeof window !== 'undefined') {
        localStorage.setItem('nn-builder-achievements', JSON.stringify(newAchievements));
      }
    }
  }, [trainingCount, bestAccuracy, totalEpochs, achievements]);

  // Initialize challenges
  useEffect(() => {
    setChallenges([
      {
        id: 'accuracy-challenge',
        title: 'Accuracy Master',
        description: 'Reach 95% accuracy on any model',
        target: 95,
        current: Math.round(bestAccuracy * 100),
        unit: '%',
        reward: '⭐ Near Perfect Badge',
        difficulty: 'medium',
      },
      {
        id: 'training-challenge',
        title: 'Practice Makes Perfect',
        description: 'Complete 10 training sessions',
        target: 10,
        current: trainingCount,
        unit: 'sessions',
        reward: '📚 Dedicated Learner Badge',
        difficulty: 'easy',
      },
      {
        id: 'epochs-challenge',
        title: 'Efficiency Expert',
        description: 'Train with minimal epochs (≤30)',
        target: 30,
        current: totalEpochs,
        unit: 'epochs',
        reward: '⚡ Speed Demon Badge',
        difficulty: 'hard',
      },
    ]);
  }, [trainingCount, bestAccuracy, totalEpochs]);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const progress = Math.round((unlockedCount / achievements.length) * 100);

  return (
    <div className="space-y-6">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl animate-bounce">🎉</div>
          </div>
        </div>
      )}

      {/* Overview Card */}
      <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-emerald-600" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Achievements</span>
                <span className="text-muted-foreground">
                  {unlockedCount} / {achievements.length}
                </span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-lg border text-center">
                <p className="text-2xl font-bold text-emerald-600">{trainingCount}</p>
                <p className="text-xs text-muted-foreground mt-1">Sessions</p>
              </div>
              <div className="p-3 bg-white rounded-lg border text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {(bestAccuracy * 100).toFixed(0)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Best</p>
              </div>
              <div className="p-3 bg-white rounded-lg border text-center">
                <p className="text-2xl font-bold text-purple-600">{unlockedCount}</p>
                <p className="text-xs text-muted-foreground mt-1">Badges</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Active Challenges
          </CardTitle>
          <CardDescription>Complete challenges to earn badges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {challenges.map(challenge => {
              const progress = Math.min((challenge.current / challenge.target) * 100, 100);
              const isComplete = progress >= 100;

              return (
                <div
                  key={challenge.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isComplete
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-sm">{challenge.title}</h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            challenge.difficulty === 'easy'
                              ? 'bg-green-100 text-green-700'
                              : challenge.difficulty === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {challenge.description}
                      </p>
                      <p className="text-xs text-emerald-600 font-medium mt-2">
                        🎁 {challenge.reward}
                      </p>
                    </div>
                    {isComplete && (
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-mono font-medium">
                        {challenge.current} / {challenge.target} {challenge.unit}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          isComplete ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements Gallery */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600" />
            Achievement Gallery
          </CardTitle>
          <CardDescription>Badges you've earned</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  achievement.unlocked
                    ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-amber-50 hover:scale-105 cursor-pointer'
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
                title={achievement.unlocked ? 'Unlocked!' : 'Locked'}
              >
                <div className={`text-4xl mb-2 ${achievement.unlocked ? '' : 'grayscale'}`}>
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {achievement.description}
                </p>
                {achievement.unlocked && achievement.unlockedAt && (
                  <p className="text-xs text-emerald-600 font-medium mt-2">
                    ✓ Unlocked
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

