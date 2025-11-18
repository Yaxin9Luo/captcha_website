export interface ModelPerformance {
  name: string;
  passRate: number;
  cost: number;
  type: 'Human' | 'AI';
}

export interface CaptchaType {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface ReasoningStep {
  step: number;
  description: string;
  agent: 'Human' | 'AI';
  type: 'Visual' | 'Cognitive' | 'Motor';
}