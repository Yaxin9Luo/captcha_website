import React, { useState } from 'react';
import { REASONING_STEPS_HUMAN, REASONING_STEPS_AI, ATOMIC_STEPS_INFO } from '../constants';
import { Brain, Eye, Hand, AlertCircle, Divide, Plus, Sigma } from 'lucide-react';

const StepCard: React.FC<{ step: any; active: boolean }> = ({ step, active }) => {
  const Icon = step.type === 'Visual' ? Eye : step.type === 'Cognitive' ? Brain : Hand;
  return (
    <div className={`relative p-4 rounded-lg border transition-all duration-500 ${
      active 
        ? step.agent === 'Human' ? 'bg-brand-900/20 border-brand-500/50 translate-x-2' : 'bg-ai-900/20 border-ai-500/50 translate-x-2' 
        : 'bg-zinc-900/50 border-zinc-800 opacity-50'
    }`}>
      <div className="flex items-center gap-3">
         <div className={`p-2 rounded-md ${active ? (step.agent === 'Human' ? 'bg-brand-500 text-white' : 'bg-ai-500 text-white') : 'bg-zinc-800 text-zinc-500'}`}>
            <Icon size={16} />
         </div>
         <div>
            <div className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-0.5 flex items-center gap-2">
                <span>Step {step.step}</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px]">{step.type}</span>
            </div>
            <div className={`text-sm font-medium ${active ? 'text-zinc-200' : 'text-zinc-500'}`}>{step.description}</div>
         </div>
      </div>
      {active && <div className={`absolute left-0 top-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${step.agent === 'Human' ? 'bg-brand-500' : 'bg-ai-500'}`} />}
    </div>
  )
}

const ReasoningDepth: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'Human' | 'AI' | null>(null);

  return (
    <section className="py-24 bg-dark-900 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reasoning Depth</h2>
                <p className="text-zinc-400 text-lg mb-8">
                    We introduce <span className="text-white font-semibold">CAPTCHA Reasoning Depth</span>, a task-agnostic metric quantifying the cognitive and motor steps required to solve a puzzle.
                </p>
                
                <div className="p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 mb-8">
                    <h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">Definition</h4>
                    <div className="text-2xl font-mono text-white flex items-center gap-3 mb-2">
                        <span>D(T) = </span>
                        <div className="flex items-center">
                            <Sigma className="w-6 h-6" />
                            <span className="text-sm ml-1 text-zinc-400">i=1..N</span>
                        </div>
                        <span className="italic text-brand-400">I [ s_i ∈ S_T ]</span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-2">
                        Where <span className="font-mono text-zinc-300">s_i</span> represents an atomic reasoning or interaction step from our checklist.
                    </p>
                </div>

                <h4 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">Atomic Steps Checklist</h4>
                <div className="space-y-3">
                    {ATOMIC_STEPS_INFO.map((item) => (
                        <div key={item.type} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                            <div className="p-2 bg-zinc-800 rounded text-zinc-400">{item.icon}</div>
                            <div>
                                <div className="text-white font-medium text-sm">{item.type}</div>
                                <div className="text-zinc-500 text-xs">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-7">
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-white">Case Study: Sequence Matching</h3>
                    <p className="text-sm text-zinc-400">Why AI agents assign higher reasoning depth scores than humans.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-transparent" />

                  {/* Human Side */}
                  <div 
                    className="space-y-4 relative"
                    onMouseEnter={() => setHoveredSide('Human')}
                    onMouseLeave={() => setHoveredSide(null)}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-500/20">
                        <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center font-bold">H</div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Human</h4>
                            <p className="text-xs text-zinc-400">Holistic Perception</p>
                        </div>
                        <div className="text-2xl font-mono font-bold text-brand-500">3</div>
                    </div>
                    
                    <div className="space-y-3 relative pl-4 border-l border-zinc-800">
                       {REASONING_STEPS_HUMAN.map((step) => (
                          <StepCard key={step.step} step={step} active={hoveredSide === 'Human' || hoveredSide === null} />
                       ))}
                    </div>
                    <div className="mt-4 p-4 bg-brand-900/10 border border-brand-500/20 rounded-lg text-xs text-brand-300">
                        Humans compress low-level perception and memory into intuitive, seamless behavior.
                    </div>
                  </div>

                  {/* AI Side */}
                  <div 
                    className="space-y-4 relative"
                    onMouseEnter={() => setHoveredSide('AI')}
                    onMouseLeave={() => setHoveredSide(null)}
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ai-500/20 flex-row-reverse text-right">
                        <div className="w-10 h-10 rounded-full bg-ai-500/20 text-ai-500 flex items-center justify-center font-bold">AI</div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white">Agent (o3)</h4>
                            <p className="text-xs text-zinc-400">Over-Segmentation</p>
                        </div>
                        <div className="text-2xl font-mono font-bold text-ai-500">6</div>
                    </div>

                    <div className="space-y-3 relative pl-4 border-l border-zinc-800 md:border-l-0 md:border-r md:pr-4 md:pl-0">
                        {REASONING_STEPS_AI.map((step) => (
                          <StepCard key={step.step} step={step} active={hoveredSide === 'AI' || hoveredSide === null} />
                       ))}
                    </div>
                    
                     <div className="mt-4 p-4 bg-ai-900/10 border border-ai-500/20 rounded-lg text-xs text-ai-300 flex gap-2 items-start">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        Agents "overthink", treating every sub-action as a distinct reasoning unit.
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReasoningDepth;