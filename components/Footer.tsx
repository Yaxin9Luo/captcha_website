import React from 'react';
import { Github, FileText, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="text-white font-bold text-lg mb-1">Open CaptchaWorld</h4>
          <p className="text-zinc-500 text-sm">VILA Lab, MBZUAI & MetaAgentX</p>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://github.com/MetaAgentX/OpenCaptchaWorld" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            <FileText size={18} />
            <span>Read Paper</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-12 text-center text-zinc-600 text-xs">
         <p>Yaxin Luo*, Zhaoyi Li*, Jiacheng Liu, Jiacheng Cui, Xiaohan Zhao, Zhiqiang Shen</p>
         <p className="mt-2">Reimagined as a web narrative.</p>
      </div>
    </footer>
  );
};

export default Footer;
