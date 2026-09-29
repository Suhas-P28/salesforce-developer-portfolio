import React, { useState } from 'react';
import { User, LayoutGrid, Code2, Database, Globe, Cpu, ArrowRight, Bot, Sparkles } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  role: string;
  tech: string;
  detail: string;
  color: string;
}

const NODES: NodeDetail[] = [
  {
    id: 'user',
    name: 'Business User / Client',
    role: 'Presentation & Requests',
    tech: 'Sales & Service Cloud / Mobile',
    detail: 'Users and customers execute sales stage updates, case resolutions, order inquiries, and analytics dashboards through intuitive SLDS interfaces.',
    color: '#38bdf8',
  },
  {
    id: 'agentforce',
    name: 'Agentforce AI Agent',
    role: 'Autonomous Reasoning',
    tech: 'Topics, Prompts, Invocable Actions',
    detail: 'Autonomous reasoning layer that interprets natural language customer intents, identifies Topics, and securely triggers Invocable Apex Actions.',
    color: '#00A1E0',
  },
  {
    id: 'lwc',
    name: 'Lightning Web Components',
    role: 'Client UI Framework',
    tech: 'LWC, Wire Service, JavaScript ES6+',
    detail: 'Modular, reactive UI layer with client-side caching (@wire), custom events, and responsive Lightning Design System standards.',
    color: '#60a5fa',
  },
  {
    id: 'apex',
    name: 'Apex Controller & Service',
    role: 'Server-Side Processing',
    tech: 'with sharing, WITH USER_MODE, DML',
    detail: 'Enforces business logic, bulkified triggers, Governor limits discipline, and security checks before interacting with CRM records.',
    color: '#818cf8',
  },
  {
    id: 'data',
    name: 'Salesforce CRM Database',
    role: 'Relational Multi-Tenant Storage',
    tech: 'SOQL, SOSL, Standard & Custom Objects',
    detail: 'Multi-tenant relational database maintaining Leads, Opportunities, Cases, Accounts, Orders, and custom domain entities.',
    color: '#38bdf8',
  },
  {
    id: 'integration',
    name: 'Integration & REST APIs',
    role: 'External Connectivity',
    tech: 'Named Credentials, JSON, Webhooks',
    detail: 'Bi-directional HTTP callouts and inbound endpoints synchronizing external ERP systems, fulfillment tracking, and e-commerce orders.',
    color: '#34d399',
  },
];

export const ArchitectureCanvas: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeDetail>(NODES[1]); // Default to Agentforce

  return (
    <div className="relative w-full max-w-full min-w-0 rounded-2xl border border-sky-400/30 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 p-4 sm:p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
          <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono flex items-center gap-1.5">
            <span>Salesforce Solution Architecture</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-sky-500/10 text-sky-300 border border-sky-500/25">
              Live Pipeline
            </span>
          </span>
        </div>
        <span className="text-[11px] text-sky-400/80 font-mono">Click any layer to inspect</span>
      </div>

      {/* Interactive Node Flow Diagram */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 relative my-3">
        {NODES.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          return (
            <div key={node.id} className="relative flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedNode(node)}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500/20 border-sky-400 shadow-lg shadow-sky-500/20 ring-1 ring-sky-400/50 scale-102'
                    : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="p-1.5 rounded-lg"
                    style={{
                      backgroundColor: `${node.color}20`,
                      color: node.color,
                    }}
                  >
                    {node.id === 'user' && <User size={15} />}
                    {node.id === 'agentforce' && <Bot size={15} />}
                    {node.id === 'lwc' && <LayoutGrid size={15} />}
                    {node.id === 'apex' && <Code2 size={15} />}
                    {node.id === 'data' && <Database size={15} />}
                    {node.id === 'integration' && <Globe size={15} />}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
                </div>
                <div className="text-xs font-bold text-white tracking-tight line-clamp-1">
                  {node.name.split(' ')[0]}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{node.role}</div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Card of Selected Architecture Layer */}
      <div className="mt-4 p-4.5 rounded-xl border border-sky-500/25 bg-slate-950/90 shadow-inner">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shadow-sm"
              style={{ backgroundColor: selectedNode.color }}
            />
            <h4 className="text-sm font-bold text-white">{selectedNode.name}</h4>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 text-sky-300 border border-slate-700/80">
            {selectedNode.tech}
          </span>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed">{selectedNode.detail}</p>
      </div>

      {/* Central Cloud Engine Status Tagline */}
      <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 font-mono gap-2">
        <span className="flex items-center gap-1.5 text-sky-400">
          <Cpu size={13} />
          Multi-Tenant Lightning Platform
        </span>
        <span className="text-slate-400">Governor Limits: 100 SOQL / 150 DML</span>
      </div>
    </div>
  );
};
