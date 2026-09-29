import React, { useState } from 'react';
import { X, ExternalLink, Github, Layers, Code, Play, CheckCircle2, Cpu } from 'lucide-react';
import { PortfolioProject } from '../types/portfolio';
import { AgentforceDemo } from './AgentforceDemo';
import { OpportunityDashboardDemo } from './OpportunityDashboardDemo';
import { CaseConsoleDemo } from './CaseConsoleDemo';
import { SalesKanbanDemo } from './SalesKanbanDemo';
import { RestIntegrationDemo } from './RestIntegrationDemo';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'demo' | 'code'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-sky-500/30 bg-slate-950 shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-800 bg-slate-900/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/25">
                {project.badge}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400 font-mono">
                {project.category.join(' / ')}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2 bg-slate-900/40 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Solution' },
            { id: 'architecture', label: 'Architecture & Flow' },
            { id: 'demo', label: 'Interactive Live Demo', highlight: true },
            { id: 'code', label: 'Classes & LWC Components' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-sky-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.highlight && <Play size={10} className="fill-current" />}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem / Solution split */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-950/10">
                  <h4 className="text-xs font-bold text-rose-400 uppercase font-mono tracking-wider mb-2">
                    The Business Problem
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase font-mono tracking-wider mb-2">
                    The Salesforce Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Salesforce Concepts */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Salesforce Engineering Concepts
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.keyConcepts.map((concept) => (
                    <div
                      key={concept}
                      className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/40 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-sky-500/20 bg-slate-900/60">
                <h4 className="text-xs font-bold text-sky-400 uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
                  <Layers size={14} />
                  <span>Component Execution Pipeline</span>
                </h4>

                <div className="space-y-4">
                  {project.architecture.map((step, idx) => (
                    <div key={step.name} className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1 p-3 rounded-xl border border-slate-800 bg-slate-950/80">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-white">{step.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded-sm bg-slate-800 text-sky-300 border border-slate-700">
                            {step.layer}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE DEMO */}
          {activeTab === 'demo' && (
            <div>
              {project.demoType === 'agentforce' && <AgentforceDemo />}
              {project.demoType === 'lwc-dashboard' && <OpportunityDashboardDemo />}
              {project.demoType === 'case-console' && <CaseConsoleDemo />}
              {project.demoType === 'kanban' && <SalesKanbanDemo />}
              {project.demoType === 'rest-mock' && <RestIntegrationDemo />}
              {!project.demoType && (
                <div className="text-center py-10 text-xs text-slate-400">
                  Interactive simulation available in the other tabs.
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CODE & COMPONENTS */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              {project.apexClasses && project.apexClasses.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-sky-400 uppercase font-mono mb-2">
                    Apex Classes & Triggers
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.apexClasses.map((cls) => (
                      <div
                        key={cls}
                        className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 font-mono text-xs text-slate-200 flex items-center gap-2"
                      >
                        <Code size={14} className="text-sky-400" />
                        <span>{cls}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.lwcComponents && project.lwcComponents.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase font-mono mb-2">
                    Lightning Web Components (LWC)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.lwcComponents.map((lwc) => (
                      <div
                        key={lwc}
                        className="p-3 rounded-lg border border-slate-800 bg-slate-900/60 font-mono text-xs text-slate-200 flex items-center gap-2"
                      >
                        <Layers size={14} className="text-indigo-400" />
                        <span>c-{lwc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            {project.badge}: Self-engineered showcase
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
            >
              <Github size={14} />
              <span>View Repository</span>
            </a>
            <button
              onClick={() => setActiveTab('demo')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-colors"
            >
              <Play size={12} className="fill-current" />
              <span>Launch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
