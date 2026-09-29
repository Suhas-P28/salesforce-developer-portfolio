import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, CheckCircle2, Download, ArrowDownToLine, Sparkles } from 'lucide-react';
import { ArchitectureCanvas } from './ArchitectureCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const TECH_BADGES = [
  'Agentforce',
  'Apex',
  'LWC',
  'Flow',
  'SOQL',
  'REST APIs',
  'Integrations',
  'Salesforce Admin',
  'Data Cloud',
  'JavaScript',
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDirectResumeDownload = () => {
    const resumeHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Suhas P - Salesforce Developer Resume (4x Certified)</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #0f172a; max-width: 800px; margin: 0 auto; line-height: 1.5; }
    h1 { color: #032D60; margin-bottom: 4px; }
    .sub { color: #00A1E0; font-weight: 700; margin-bottom: 20px; }
    .section-title { font-size: 13px; font-weight: 800; text-transform: uppercase; color: #032D60; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 4px; margin: 20px 0 10px; }
    ul { padding-left: 20px; }
    li { margin-bottom: 4px; }
  </style>
</head>
<body>
  <h1>SUHAS P</h1>
  <div class="sub">Salesforce Developer | 4x Certified | IBM (2025 – Present)</div>
  <p><strong>Email:</strong> ${PERSONAL_INFO.email} | <strong>Location:</strong> Bengaluru, India | <strong>LinkedIn:</strong> linkedin.com/in/suhas-p-5a273424a | <strong>GitHub:</strong> github.com/Suhas-P28</p>
  
  <div class="section-title">Professional Summary</div>
  <p>Salesforce Developer at IBM with 1.8 years of professional enterprise experience and 4x Salesforce Certifications. Proven track record across Apex, Lightning Web Components, Flow Automation, REST Integrations, and Agentforce AI Agents.</p>

  <div class="section-title">Certifications</div>
  <ul>
    <li><strong>Salesforce Certified Agentforce Specialist</strong> (2025)</li>
    <li><strong>Salesforce Certified Platform Developer I</strong> (2024)</li>
    <li><strong>Salesforce Certified Administrator</strong> (2024)</li>
    <li><strong>Salesforce Certified Associate</strong> (2023)</li>
  </ul>

  <div class="section-title">Professional Experience</div>
  <p><strong>Salesforce Developer — IBM</strong> (2025 – Present · 1.8 Years Professional Experience)</p>
  <ul>
    <li>Developed and enhanced custom Salesforce functionality using Apex and LWC based on user stories.</li>
    <li>Built bulkified Apex triggers and service classes enforcing WITH USER_MODE security.</li>
    <li>Implemented complex declarative automations including Record-Triggered Flows and Validation Rules.</li>
    <li>Supported SIT and UAT deployment releases, executing data fixes and validating change sets.</li>
  </ul>
</body>
</html>`;

    const blob = new Blob([resumeHtmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Suhas_P_Salesforce_Developer_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background radial gradients for rich dark depth */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Personal Branding & Details */}
          <div className="lg:col-span-6 space-y-6 min-w-0 w-full">
            {/* Experience & Status Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-medium shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Salesforce Developer @ IBM</span>
                <span className="text-slate-500">·</span>
                <span className="text-white font-semibold">4x Certified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-medium shadow-xs">
                <Sparkles size={12} className="text-amber-400" />
                <span>Double Star Ranger</span>
                <span>·</span>
                <span>Agentblazer Legend</span>
              </div>
            </div>

            {/* Main Greeting & Headline */}
            <div>
              <p className="text-sm font-semibold tracking-wider text-sky-400 uppercase mb-2 font-mono">
                Hi, I'm Suhas 👋
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Salesforce Developer
              </h1>
              <p className="mt-3 text-lg font-medium text-sky-200/90 flex items-center gap-2 flex-wrap">
                <span>IBM · 1.8 Years of Professional Experience</span>
                <span className="text-slate-500">·</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 font-mono">
                  Agentforce Specialist
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-slate-300 leading-relaxed max-w-xl text-balance">
              I build Salesforce solutions that combine configuration, automation and custom
              development to solve real business problems. Focused on Apex, Lightning Web Components,
              Flow automation, integrations, and autonomous Agentforce CRM solutions.
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-sky-400/60 hover:text-sky-300 transition-colors shadow-xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-lg shadow-sky-500/25 active:scale-98"
              >
                <span>Explore My Work</span>
                <ArrowDown size={15} />
              </a>

              {/* Direct Download Button */}
              <button
                type="button"
                onClick={handleDirectResumeDownload}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-slate-900/90 border border-sky-500/40 hover:border-sky-400 hover:bg-slate-800 text-white transition-all active:scale-98 shadow-md shadow-sky-500/10 cursor-pointer"
                title="Download formatted resume directly"
              >
                <ArrowDownToLine size={16} className="text-sky-400" />
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Resume'}</span>
              </button>

              {/* View Online Resume Modal */}
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <FileText size={15} />
                <span>View CV</span>
              </button>

              <div className="flex items-center gap-2 text-slate-400 pl-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-400/50 hover:text-sky-400 hover:bg-slate-900 transition-colors"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-400/50 hover:text-sky-400 hover:bg-slate-900 transition-colors"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-sky-400/50 hover:text-sky-400 hover:bg-slate-900 transition-colors"
                  aria-label="Email Suhas P"
                  title="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Hero Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-white tracking-tight tabular-nums">
                  1.8+
                </div>
                <div className="text-xs text-slate-400">Years @ IBM</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-sky-400 tracking-tight tabular-nums">
                  4x
                </div>
                <div className="text-xs text-slate-400">Salesforce Certified</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-extrabold text-amber-400 tracking-tight flex items-center gap-1">
                  <span>2★ Ranger</span>
                </div>
                <div className="text-xs text-slate-400">Trailhead (200+ Badges)</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1">
                  <Sparkles size={16} className="text-sky-400" />
                  <span>Agentblazer</span>
                </div>
                <div className="text-xs text-slate-400">Legend Badge Earner</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Solution Visualizer */}
          <div className="lg:col-span-6 min-w-0 w-full">
            <ArchitectureCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
