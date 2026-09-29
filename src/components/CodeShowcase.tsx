import React, { useState } from 'react';
import { Code, Copy, Check, Github, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { CODE_SNIPPETS } from '../data/portfolioData';

export const CodeShowcase: React.FC = () => {
  const [activeSnippetId, setActiveSnippetId] = useState(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    CODE_SNIPPETS.find((s) => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineCount = activeSnippet.code.split('\n').length;

  return (
    <section id="code" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <span>Code Craft</span>
              <span>·</span>
              <span>Enterprise Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Code I Write
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Clean, production-grade Apex, Lightning Web Components, and Invocable Actions adhering to
              Salesforce security checks (`WITH USER_MODE`), bulkification, and error governance.
            </p>
          </div>

          <a
            href="https://github.com/suhasp-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors shrink-0"
          >
            <Github size={15} />
            <span>View GitHub Repositories</span>
          </a>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-800 overflow-x-auto">
          {CODE_SNIPPETS.map((snippet) => (
            <button
              key={snippet.id}
              onClick={() => setActiveSnippetId(snippet.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap cursor-pointer transition-colors flex items-center gap-2 ${
                activeSnippetId === snippet.id
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Code size={13} />
              <span>{snippet.title.split('—')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Code Editor Container */}
        <div className="rounded-2xl border border-sky-500/25 bg-slate-950 shadow-2xl overflow-hidden">
          {/* Editor Top Bar */}
          <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-medium text-white pl-2 border-l border-slate-700">
                {activeSnippet.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase">
                {activeSnippet.language}
              </span>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          {/* Code Window with Line Numbers */}
          <div className="p-4 sm:p-6 font-mono text-xs overflow-x-auto flex max-w-full min-w-0">
            {/* Line numbers column */}
            <div className="select-none text-right pr-4 text-slate-600 font-mono text-xs border-r border-slate-800/80 mr-4 shrink-0">
              {Array.from({ length: lineCount }).map((_, i) => (
                <div key={i} className="leading-6">
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code lines */}
            <pre className="text-sky-200 leading-6 flex-1 font-mono text-xs min-w-0 overflow-x-auto">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Best practices inspection banner */}
          <div className="px-6 py-4 bg-slate-900/80 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-sky-400 uppercase font-mono">
              <ShieldCheck size={14} />
              <span>Salesforce Best Practices Incorporated:</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {activeSnippet.bestPractices.map((bp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
