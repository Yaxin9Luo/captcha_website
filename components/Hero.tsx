import React from 'react';
import { ArrowDown, Bot, ShieldCheck, Github, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-dark-900 overflow-hidden text-center px-4 border-b border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-dark-900 to-dark-900 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-ai-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8 pt-20">
        <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in-down">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-mono tracking-wider border border-brand-500/20">
            ARXIV:2505.24878V1
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono tracking-wider border border-white/10">
            VILA LAB & METAAGENTX
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            Open
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">
            CaptchaWorld
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Benchmarking <span className="text-ai-400 font-semibold">Multimodal LLM Agents</span> against the interactive web's toughest gatekeepers.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
             <a 
                href="https://github.com/MetaAgentX/OpenCaptchaWorld" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 border border-white/10"
             >
                <Github size={20} />
                <span>View Code</span>
             </a>
             <a 
                href="https://arxiv.org/abs/2505.24878"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
             >
                <FileText size={20} />
                <span>Read Paper</span>
             </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-brand-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-400">Human Success Rate</h3>
                <p className="text-3xl font-bold text-white">93.3%</p>
              </div>
            </div>
            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-brand-500 w-[93.3%]" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-ai-500/30 transition-colors group">
             <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-ai-500/10 text-ai-500 group-hover:bg-ai-500 group-hover:text-white transition-colors">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-400">Best Agent (OpenAI o3)</h3>
                <p className="text-3xl font-bold text-white">40.0%</p>
              </div>
            </div>
             <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-ai-500 w-[40%]" />
            </div>
          </div>
        </div>

        <div className="pt-12 animate-bounce text-zinc-600">
          <ArrowDown size={24} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;