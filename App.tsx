import React from 'react';
import Hero from './components/Hero';
import ProblemShowcase from './components/ProblemShowcase';
import ReasoningDepth from './components/ReasoningDepth';
import ChartsSection from './components/Charts';
import Footer from './components/Footer';
import { Quote } from 'lucide-react';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-brand-500/30 font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
           <div className="font-bold text-white tracking-tight flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
              Open CaptchaWorld
           </div>
           <a href="https://github.com/MetaAgentX/OpenCaptchaWorld" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full">
             MetaAgentX / OpenCaptchaWorld
           </a>
        </div>
      </nav>
      
      <Hero />
      
      {/* Abstract Narrative Section */}
      <section className="py-20 bg-dark-800 border-b border-white/5">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <Quote className="mx-auto text-zinc-600 mb-6" size={32} />
            <p className="text-xl md:text-2xl text-zinc-200 font-serif italic leading-relaxed mb-8">
               "CAPTCHAs have been a critical bottleneck for deploying web agents in real-world applications... preventing agents from completing real tasks on high-value sites."
            </p>
            <div className="text-sm text-zinc-500 font-mono uppercase tracking-widest">From the Abstract</div>
         </div>
         
         <div className="max-w-5xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-4xl font-bold text-white mb-2">225</div>
                <div className="text-zinc-400 text-sm">Diverse CAPTCHA Puzzles across 20 Types</div>
            </div>
             <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-4xl font-bold text-brand-500 mb-2">93.3%</div>
                <div className="text-zinc-400 text-sm">Human Success Rate (Near Perfect)</div>
            </div>
             <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="text-4xl font-bold text-ai-500 mb-2">40.0%</div>
                <div className="text-zinc-400 text-sm">Top Agent (o3) Success Rate</div>
            </div>
         </div>
      </section>

      <ReasoningDepth />
      <ProblemShowcase />
      <ChartsSection />
      
      <section className="py-24 bg-zinc-900/30 border-b border-white/5">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Why This Matters</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
               For agent-based systems to be truly deployable in the wild (e.g., booking tickets, e-commerce), solving CAPTCHAs autonomously must become a core capability. 
               <span className="text-white font-semibold block mt-2">Open CaptchaWorld provides the first robust diagnostic tool to measure this specific gap.</span>
            </p>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;