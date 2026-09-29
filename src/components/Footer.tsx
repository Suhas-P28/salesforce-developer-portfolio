import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-lg font-bold text-white tracking-tight">Suhas P</div>
            <div className="text-xs text-sky-400 font-mono mt-0.5">Salesforce Developer @ IBM (2025 – Present)</div>
            <p className="text-xs text-slate-500 mt-1">
              Apex · LWC · Flow · Agentforce Specialist · Integrations
            </p>
          </div>

          {/* Social and quick links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-sky-400 transition-colors"
            >
              Email
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2026 Suhas P. All rights reserved.</div>
          <div className="font-mono">
            Built with React, TypeScript & Tailwind CSS · Enterprise Salesforce Aesthetic
          </div>
        </div>
      </div>
    </footer>
  );
};
