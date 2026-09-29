import React, { useState } from 'react';
import { GitBranch, Layers, CheckCircle2, ShieldCheck, ArrowRight, Terminal } from 'lucide-react';
import { SDLC_STEPS } from '../data/portfolioData';

export const SdlcSection: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(3); // Default to SIT & UAT

  const activeStep = SDLC_STEPS[activeStepIdx] || SDLC_STEPS[0];

  return (
    <section className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Governance & Delivery</span>
            <span>·</span>
            <span>Enterprise ALM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deployment & SDLC Workflow
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A disciplined path from user story grooming and developer sandboxes through Git branching,
            SIT/UAT package verification, and zero-defect production releases.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {SDLC_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIdx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-500/15 border-sky-400/60 shadow-lg shadow-sky-500/10 ring-1 ring-sky-400/30'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-sky-400 mb-1">
                  Step {step.stepNumber}
                </div>
                <div className="text-xs font-bold text-white tracking-tight line-clamp-1">
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-sky-500/25 bg-slate-900/80 backdrop-blur-md shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Step {activeStep.stepNumber}
                </span>
                <span className="text-xs text-slate-400 font-mono">· {activeStep.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">{activeStep.title}</h3>
            </div>

            <span className="text-xs font-mono text-slate-400">
              SDLC Enterprise Phase
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {activeStep.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <h4 className="text-xs font-bold text-sky-400 uppercase font-mono tracking-wider mb-3">
                Key Developer Responsibilities
              </h4>
              <div className="space-y-2">
                {activeStep.responsibilities.map((resp) => (
                  <div key={resp} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider mb-3">
                Tooling & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStep.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
