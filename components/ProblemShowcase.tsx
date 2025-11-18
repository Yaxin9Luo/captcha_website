import React, { useState } from 'react';
import { CAPTCHA_TYPES } from '../constants';
import { MousePointer2, RefreshCw, Eye, Bot, Scan } from 'lucide-react';

const CaptchaVisual: React.FC<{ type: string; agentView: boolean }> = ({ type, agentView }) => {
  
  const Overlay = () => (
     <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-2 left-2 bg-ai-600/90 text-white text-[10px] px-1 font-mono">
            CONF: 0.87
        </div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBWMGg0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSwgOTIsIDI0NiwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-50" />
     </div>
  );

  switch (type) {
    case 'slide':
      return (
        <div className="relative w-full h-64 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 group">
          {agentView && <Overlay />}
          <div className="absolute inset-0 bg-[url('https://picsum.photos/800/400?grayscale')] opacity-50 bg-cover" />
          
          {/* The Hole */}
          <div className={`absolute top-1/2 left-2/3 w-12 h-12 bg-black/60 border transform -translate-y-1/2 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] ${agentView ? 'border-ai-500' : 'border-white/30'}`}>
             {agentView && <div className="absolute -top-6 left-0 text-[10px] text-ai-400 bg-black/80 px-1">TARGET_LOC: {`{x:66%, y:50%}`}</div>}
          </div>
          
          {/* The Piece */}
          <div className={`absolute top-1/2 left-10 w-12 h-12 bg-brand-500/80 border-2 transform -translate-y-1/2 shadow-xl cursor-grab active:cursor-grabbing group-hover:translate-x-32 transition-transform duration-1000 ease-in-out z-10 flex items-center justify-center ${agentView ? 'border-ai-400' : 'border-white'}`}>
            <div className="w-4 h-4 bg-white/20 rounded-full" />
             {agentView && <div className="absolute -bottom-6 left-0 text-[10px] text-ai-400 bg-black/80 px-1">DRAGGABLE</div>}
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-brand-500 group-hover:w-3/4 transition-all duration-1000 ease-in-out" />
          </div>
        </div>
      );
    case 'rotate':
      return (
        <div className="relative w-full h-64 bg-zinc-800 rounded-lg flex items-center justify-center gap-12 border border-zinc-700">
          {agentView && <Overlay />}
          <div className="flex flex-col items-center gap-2 relative">
             <span className="text-xs text-zinc-400">Reference</span>
             <div className={`w-24 h-24 border-2 border-dashed rounded flex items-center justify-center ${agentView ? 'border-ai-500' : 'border-zinc-500'}`}>
                <div className="w-0 h-0 border-l-[14px] border-l-transparent border-b-[28px] border-b-zinc-300 border-r-[14px] border-r-transparent transform rotate-45" />
             </div>
             {agentView && <div className="absolute top-0 -right-12 text-[9px] text-ai-400 bg-black/80 px-1">ANGLE: 45deg</div>}
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-brand-400">Interactive</span>
            <div className={`w-28 h-28 bg-zinc-900 rounded-full border flex items-center justify-center relative group cursor-pointer ${agentView ? 'border-ai-500' : 'border-zinc-600'}`}>
               {agentView && <div className="absolute inset-0 border border-ai-500/30 rounded-full" />}
               <div className="w-0 h-0 border-l-[16px] border-l-transparent border-b-[32px] border-b-brand-500 border-r-[16px] border-r-transparent transform -rotate-45 group-hover:rotate-45 transition-transform duration-700 ease-in-out" />
               <RefreshCw className="absolute -bottom-8 text-zinc-500 w-5 h-5" />
            </div>
          </div>
        </div>
      );
    case 'select':
       return (
         <div className="w-full h-64 bg-zinc-800 rounded-lg p-4 border border-zinc-700 relative">
            {agentView && <Overlay />}
            <div className="grid grid-cols-3 gap-4 h-full">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`rounded-lg border ${i === 2 ? 'border-brand-500 bg-brand-500/10 cursor-pointer' : 'border-zinc-600 bg-zinc-900 opacity-60'} flex items-center justify-center relative overflow-hidden group hover:border-white transition-colors`}>
                    {agentView && <div className="absolute top-1 left-1 bg-ai-600 text-white text-[8px] px-1 font-mono z-30">ID: {i}</div>}
                    {agentView && i !== 2 && <div className="absolute inset-0 border border-ai-500/20 z-20" />}
                    
                    {i === 2 && <div className="absolute inset-0 flex items-center justify-center z-10"><div className="w-2 h-2 bg-brand-500 rounded-full animate-ping" /></div>}
                   <img src={`https://picsum.photos/150/150?random=${i}`} className="opacity-50 object-cover w-full h-full" alt="" />
                </div>
              ))}
            </div>
         </div>
       );
    case 'click':
        return (
            <div className="w-full h-64 bg-zinc-800 rounded-lg p-6 border border-zinc-700 flex flex-col gap-6 relative">
                 {agentView && <Overlay />}
                 
                 {/* Reference Sequence */}
                 <div className={`p-3 rounded border ${agentView ? 'border-ai-500 bg-ai-900/20' : 'border-zinc-600 bg-zinc-900'}`}>
                    <div className="text-[10px] uppercase text-zinc-500 mb-2">Sequence</div>
                    <div className="flex gap-4">
                        {['A', 'B', 'C'].map((char, idx) => (
                            <div key={idx} className="w-8 h-8 bg-zinc-700 rounded flex items-center justify-center font-mono text-white font-bold">{char}</div>
                        ))}
                    </div>
                 </div>

                 {/* Interactive Area */}
                 <div className="flex-1 relative bg-zinc-900/50 rounded border border-zinc-700/50">
                    {agentView && <div className="absolute top-1 right-1 text-[9px] text-ai-400">MEMORY_STATE: RESET</div>}
                    <div className="absolute top-4 left-10 w-10 h-10 bg-zinc-700 rounded flex items-center justify-center hover:bg-brand-500 cursor-pointer transition-colors">B</div>
                    <div className="absolute bottom-8 left-1/2 w-10 h-10 bg-zinc-700 rounded flex items-center justify-center hover:bg-brand-500 cursor-pointer transition-colors">A</div>
                    <div className="absolute top-10 right-12 w-10 h-10 bg-zinc-700 rounded flex items-center justify-center hover:bg-brand-500 cursor-pointer transition-colors">C</div>
                 </div>
            </div>
        )
    default:
      return null;
  }
}

const ProblemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CAPTCHA_TYPES[0].id);
  const [agentView, setAgentView] = useState(false);

  return (
    <section className="py-24 bg-dark-800 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Challenge Landscape</h2>
                <p className="text-zinc-400 max-w-xl">
                    Modern CAPTCHAs are dynamic and interactive. Explore 4 of the 20 types from our benchmark.
                </p>
            </div>
            
            <div className="flex items-center gap-3 bg-black/40 p-1.5 rounded-lg border border-white/10">
                <button 
                    onClick={() => setAgentView(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${!agentView ? 'bg-zinc-700 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    <Eye size={16} />
                    Human View
                </button>
                <button 
                    onClick={() => setAgentView(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${agentView ? 'bg-ai-600 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                    <Scan size={16} />
                    Agent View
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {CAPTCHA_TYPES.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group ${
                  activeTab === item.id
                    ? 'bg-white/10 border-brand-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === item.id ? 'bg-brand-500 text-white' : 'bg-zinc-800 text-zinc-400 group-hover:text-white'}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-medium ${activeTab === item.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>{item.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                    item.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' : 
                    item.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Display */}
          <div className="lg:col-span-8">
            <div className="h-full bg-dark-900 rounded-2xl p-1 border border-white/10 shadow-2xl relative overflow-hidden">
              {agentView && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ai-500 via-purple-400 to-ai-500 animate-gradient-x" />}
              
              <div className="h-full bg-zinc-900/50 rounded-xl p-8 flex flex-col justify-between">
                
                <div className="mb-6 flex justify-between items-start">
                  <div>
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        {CAPTCHA_TYPES.find(t => t.id === activeTab)?.name}
                        {agentView && <span className="text-xs bg-ai-600 text-white px-2 py-0.5 rounded font-mono">ANALYZING...</span>}
                     </h3>
                     <p className="text-zinc-400 mt-2">{CAPTCHA_TYPES.find(t => t.id === activeTab)?.description}</p>
                  </div>
                  <div className={`p-2 rounded-full ${agentView ? 'bg-ai-500/20 text-ai-400 animate-pulse' : 'bg-zinc-800 text-zinc-500'}`}>
                      {agentView ? <Bot size={20} /> : <MousePointer2 size={20} />}
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center my-4">
                   <CaptchaVisual type={activeTab} agentView={agentView} />
                </div>

                <div className={`p-4 rounded-lg border transition-colors ${agentView ? 'bg-ai-900/20 border-ai-500/30' : 'bg-black/30 border-white/5'}`}>
                    <div className="flex items-start gap-3">
                        <div className={`mt-1 font-mono text-xs ${agentView ? 'text-ai-400' : 'text-zinc-500'}`}>
                            {agentView ? 'AGENT_LOGS >' : 'STATUS:'}
                        </div>
                        <p className={`text-sm ${agentView ? 'text-ai-100 font-mono text-xs' : 'text-zinc-400 italic'}`}>
                            {activeTab === 'slide' && (agentView ? "ERROR: calc_drag_distance(): precision drift detected. Visual artifact confusion." : "Understands goal, but struggles to compute precise pixel drag distance.")}
                            {activeTab === 'rotate' && (agentView ? "FAILURE: spatial_transform(): mental rotation check failed. Brute force attempting..." : "Fails to mentally rotate the object to match reference angle.")}
                            {activeTab === 'select' && (agentView ? "WARN: semantic_mismatch(): 'wrong head' concept ambiguous. Low confidence." : "Recognizes objects but misses subtle semantic cues (e.g., 'wrong head').")}
                            {activeTab === 'click' && (agentView ? "CRITICAL: state_lost(): context reset on click. Sequence memory flushed." : "Resets context after every click, losing track of the required sequence.")}
                        </p>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemShowcase;