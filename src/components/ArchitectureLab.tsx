import React, { useState } from 'react';
import { Layers, Code2, Zap, Database, Globe, Bot, Radio, CheckCircle2, Copy, Check } from 'lucide-react';
import { ARCHITECTURE_LAB_COMPONENTS } from '../data/portfolioData';

export const ArchitectureLab: React.FC = () => {
  const [activeComponentId, setActiveComponentId] = useState('lwc');
  const [copied, setCopied] = useState(false);

  const activeComp =
    ARCHITECTURE_LAB_COMPONENTS.find((c) => c.id === activeComponentId) ||
    ARCHITECTURE_LAB_COMPONENTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeComp.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getComponentIcon = (id: string) => {
    switch (id) {
      case 'lwc':
        return <Layers size={16} />;
      case 'apex':
        return <Code2 size={16} />;
      case 'flow':
        return <Zap size={16} />;
      case 'objects':
        return <Database size={16} />;
      case 'platform-events':
        return <Radio size={16} />;
      case 'rest-api':
        return <Globe size={16} />;
      case 'agentforce':
        return <Bot size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  return (
    <section id="architecture-lab" className="py-20 relative border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Engineering Discipline</span>
            <span>·</span>
            <span>Interactive Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Salesforce Architecture Lab
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A developer understands when to choose LWC vs. Flow vs. Apex vs. Platform Events.
            Inspect the foundational pillars of scalable Salesforce solution design.
          </p>
        </div>

        {/* Interactive Lab Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column: Component Selector Nav */}
          <div className="lg:col-span-4 space-y-2.5 min-w-0 w-full">
            {ARCHITECTURE_LAB_COMPONENTS.map((comp) => {
              const isActive = comp.id === activeComponentId;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveComponentId(comp.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-500/15 border-sky-400/60 shadow-lg shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive
                          ? 'bg-sky-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {getComponentIcon(comp.id)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">
                        {comp.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {comp.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-300'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    Inspect
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Component Card */}
          <div className="lg:col-span-8 min-w-0 w-full">
            <div className="p-6 sm:p-8 rounded-2xl border border-sky-500/30 bg-slate-900/80 backdrop-blur-md shadow-2xl">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/30">
                    {getComponentIcon(activeComp.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeComp.name}</h3>
                    <span className="text-xs font-mono text-sky-400">{activeComp.category}</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Salesforce Core Pattern
                </span>
              </div>

              {/* Purpose & When to Use Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Core Purpose
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{activeComp.purpose}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1.5">
                    When to Use It
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">{activeComp.whenToUse}</p>
                </div>
              </div>

              {/* Real World Example */}
              <div className="mb-6 p-3.5 rounded-xl border border-slate-800 bg-slate-950/40">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Enterprise Example
                </span>
                <span className="text-xs text-white font-medium">{activeComp.example}</span>
              </div>

              {/* Best Practices */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Enterprise Best Practices
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeComp.bestPractices.map((bp) => (
                    <div
                      key={bp}
                      className="p-2.5 rounded-lg border border-slate-800/80 bg-slate-950/50 text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 size={13} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono text-slate-400">
                  <span>Architecture Code Reference:</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs overflow-x-auto max-w-full min-w-0">
                  <pre className="text-sky-200 leading-relaxed whitespace-pre min-w-0">
                    <code>{activeComp.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
