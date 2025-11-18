import React from 'react';
import { ModelPerformance, ReasoningStep } from './types';
import { Move, Grid3X3, RotateCw, MousePointerClick, Eye, Brain, Hand } from 'lucide-react';

export const PERFORMANCE_DATA: ModelPerformance[] = [
  { name: 'Human', passRate: 93.3, cost: 0, type: 'Human' },
  { name: 'OpenAI o3', passRate: 40.0, cost: 66.4, type: 'AI' },
  { name: 'Gemini 2.5 Pro', passRate: 25.0, cost: 18.1, type: 'AI' },
  { name: 'GPT-4.1', passRate: 25.0, cost: 16.7, type: 'AI' },
  { name: 'Claude 3.7', passRate: 20.0, cost: 18.7, type: 'AI' },
  { name: 'DeepSeek V3', passRate: 20.0, cost: 7.3, type: 'AI' },
  { name: 'Claude 3.5 Haiku', passRate: 15.0, cost: 9.3, type: 'AI' },
  { name: 'Claude 3.5 Sonnet', passRate: 10.0, cost: 21.9, type: 'AI' },
  { name: 'GPT-4o', passRate: 5.7, cost: 25.8, type: 'AI' },
  { name: 'OpenAI o1', passRate: 5.0, cost: 94.6, type: 'AI' },
];

export const REASONING_STEPS_HUMAN: ReasoningStep[] = [
  { step: 1, description: "Identify target icons order (Duck -> Umbrella).", agent: 'Human', type: 'Visual' },
  { step: 2, description: "Locate icons in grid.", agent: 'Human', type: 'Visual' },
  { step: 3, description: "Click icons in sequence & Submit.", agent: 'Human', type: 'Motor' },
];

export const REASONING_STEPS_AI: ReasoningStep[] = [
  { step: 1, description: "Visually recognize four distinct icons.", agent: 'AI', type: 'Visual' },
  { step: 2, description: "Memorize reference sequence.", agent: 'AI', type: 'Cognitive' },
  { step: 3, description: "Plan exact order of clicks.", agent: 'AI', type: 'Cognitive' },
  { step: 4, description: "Execute click on icon #1.", agent: 'AI', type: 'Motor' },
  { step: 5, description: "Verify interface feedback.", agent: 'AI', type: 'Visual' },
  { step: 6, description: "Execute click on icon #2...", agent: 'AI', type: 'Motor' },
];

export const CAPTCHA_TYPES = [
  {
    id: 'slide',
    name: 'Slide Puzzle',
    description: 'Drag a slider to align a puzzle piece into a hole. Requires precise motor control and visual alignment.',
    icon: <Move className="w-6 h-6" />,
    difficulty: 'Medium'
  },
  {
    id: 'rotate',
    name: 'Rotation Match',
    description: 'Rotate an object to match the reference orientation. Requires spatial reasoning and mental rotation.',
    icon: <RotateCw className="w-6 h-6" />,
    difficulty: 'Hard'
  },
  {
    id: 'select',
    name: 'Select Animal',
    description: 'Select the animal with specific features (e.g., "wrong head"). Tests semantic understanding.',
    icon: <Grid3X3 className="w-6 h-6" />,
    difficulty: 'Easy'
  },
  {
    id: 'click',
    name: 'Click Order',
    description: 'Click icons in a specific order shown in a reference. Challenges short-term memory and planning.',
    icon: <MousePointerClick className="w-6 h-6" />,
    difficulty: 'Medium'
  },
];

export const ATOMIC_STEPS_INFO = [
  { type: 'Visual', icon: <Eye size={16}/>, desc: "Locate objects, read text, detect orientation." },
  { type: 'Cognitive', icon: <Brain size={16}/>, desc: "Plan order, infer rules, memorize cues." },
  { type: 'Motor', icon: <Hand size={16}/>, desc: "Click, drag-and-drop, hold button." },
];