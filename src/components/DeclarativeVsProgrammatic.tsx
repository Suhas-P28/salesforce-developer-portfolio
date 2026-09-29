import React, { useState } from 'react';
import { Settings, Code2, ArrowLeftRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface DecisionScenario {
  id: string;
  scenario: string;
  recommendation: 'Declarative (Clicks)' | 'Programmatic (Code)' | 'Hybrid (Clicks + Code)';
  tool: string;
  reasoning: string;
}

const SCENARIOS: DecisionScenario[] = [
  {
    id: 's1',
    scenario: 'Enforce that Closed Won Opportunities must have an approved discount code and valid billing address.',
    recommendation: 'Declarative (Clicks)',
    tool: 'Validation Rule',
    reasoning: 'Clean, immediate user feedback in UI with zero Apex test class maintenance or deployment overhead.',
  },
  {
    id: 's2',
    scenario: 'Send an email alert to the Account Owner and create a follow-up Task when a high-value Opportunity is created.',
    recommendation: 'Declarative (Clicks)',
    tool: 'Record-Triggered Flow (After Save)',
    reasoning: 'Standard declarative pattern easily maintained and tweaked by CRM administrators without code changes.',
  },
  {
    id: 's3',
    scenario: 'Perform complex aggregate multi-tiered commission calculations across 50,000 historical invoice line items.',
    recommendation: 'Programmatic (Code)',
    tool: 'Batch Apex (Database.Batchable)',
    reasoning: 'Exceeds Flow CPU and heap boundaries; requires asynchronous batch chunking to respect Governor limits.',
  },
  {
    id: 's4',
    scenario: 'Build a drag-and-drop custom lead qualification matrix with real-time reactive calculations and external mapping.',
    recommendation: 'Programmatic (Code)',
    tool: 'Lightning Web Component (LWC)',
    reasoning: 'Demands custom DOM manipulation, reactive client-side wire caching, and interactive SLDS visual styling.',
  },
  {
    id: 's5',
    scenario: 'Automate customer support ticket triage with Account SLA entitlement lookup and priority calculation.',
    recommendation: 'Hybrid (Clicks + Code)',
    tool: 'Record-Triggered Flow + Invocable Apex',
    reasoning: 'The Flow manages trigger orchestration and criteria; Invocable Apex handles complex matrix calculations.',
  },
];

export const DeclarativeVsProgrammatic: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState('s1');

  const selectedScenario =
    SCENARIOS.find((s) => s.id === selectedScenarioId) || SCENARIOS[0];

  const declarativeItems = [
    { title: 'Validation Rules', desc: 'Real-time data integrity & conditional field validation' },
    { title: 'Salesforce Flows', desc: 'Record-Triggered, Screen, and Auto-launched automations' },
    { title: 'Page Layouts & FlexiPages', desc: 'Lightning Record Pages, component visibility filters' },
    { title: 'Reports & Dashboards', desc: 'Summary/matrix analytics and dynamic dashboard filters' },
    { title: 'Permission Sets & OWD', desc: 'Role hierarchy, object security, field-level security' },
    { title: 'Data Management Tools', desc: 'Data Loader, Workbench, duplicate rules, import wizards' },
  ];

  const programmaticItems = [
    { title: 'Apex Triggers & Handlers', desc: 'Bulkified event-driven logic with one-trigger-per-object pattern' },
    { title: 'Lightning Web Components', desc: 'Modern web standards, reactive wire service, SLDS styling' },
    { title: 'SOQL / SOSL Queries', desc: 'WITH USER_MODE, aggregate calculations, parent-child joins' },
    { title: 'Async Apex & Batch', desc: 'Queueable, Batchable, Schedulable for high data volumes' },
    { title: 'REST API & Callouts', desc: 'Named Credentials, HTTP handlers, webhook receivers' },
    { title: 'Unit Tests & Mocking', desc: '85%+ code coverage with positive, negative, and bulk tests' },
  ];

  return (
    <section className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Engineering Philosophy</span>
            <span>·</span>
            <span>Clicks & Code Harmony</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Declarative + Programmatic Balance
          </h2>
          <p className="mt-3 text-base text-slate-300">
            "I choose configuration where it provides a maintainable solution and custom development when requirements
            require additional flexibility, performance, or algorithmic complexity."
          </p>
        </div>

        {/* Two-Column Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Declarative */}
          <div className="p-6 sm:p-8 rounded-2xl border border-sky-500/20 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Declarative Capabilities
                </h3>
                <span className="text-xs font-mono text-sky-400">Low-Code / Configuration First</span>
              </div>
            </div>

            <div className="space-y-3">
              {declarativeItems.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/50 flex items-start gap-3"
                >
                  <CheckCircle2 size={15} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Programmatic */}
          <div className="p-6 sm:p-8 rounded-2xl border border-indigo-500/20 bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Programmatic Capabilities
                </h3>
                <span className="text-xs font-mono text-indigo-400">Pro-Code / Custom Architecture</span>
              </div>
            </div>

            <div className="space-y-3">
              {programmaticItems.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/50 flex items-start gap-3"
                >
                  <CheckCircle2 size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architect's Decision Matrix (Interactive) */}
        <div className="p-6 sm:p-8 rounded-2xl border border-sky-500/25 bg-slate-900/80">
          <div className="flex items-center gap-2 mb-2">
            <ArrowLeftRight size={18} className="text-sky-400" />
            <h3 className="text-base font-bold text-white">Architect's Decision Matrix</h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 ml-2">
              Trade-off Evaluation
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Click an enterprise business scenario to see how I determine the right tool for the job:
          </p>

          <div className="grid lg:grid-cols-12 gap-6 items-start w-full">
            {/* Scenarios list */}
            <div className="lg:col-span-6 space-y-2 min-w-0 w-full">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs cursor-pointer ${
                    sc.id === selectedScenarioId
                      ? 'bg-sky-500/15 border-sky-400 text-white font-medium shadow-xs'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-950'
                  }`}
                >
                  {sc.scenario}
                </button>
              ))}
            </div>

            {/* Decision output card */}
            <div className="lg:col-span-6 p-5 rounded-xl border border-slate-800 bg-slate-950 min-w-0 w-full">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Architectural Recommendation:</span>
                <span className="font-bold text-sky-400">{selectedScenario.recommendation}</span>
              </div>

              <div className="mb-4">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  Selected Platform Tool:
                </span>
                <span className="text-sm font-bold text-white">{selectedScenario.tool}</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  Architectural Rationale:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedScenario.reasoning}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
