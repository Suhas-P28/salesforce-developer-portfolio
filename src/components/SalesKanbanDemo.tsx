import React, { useState } from 'react';
import { ArrowRight, UserCheck, DollarSign, Building, Sparkles } from 'lucide-react';

interface KanbanLead {
  id: string;
  name: string;
  company: string;
  amount: number;
  status: 'Open - Not Contacted' | 'Working - Contacted' | 'Closed - Converted';
}

const INITIAL_LEADS: KanbanLead[] = [
  { id: 'lead-1', name: 'Jonathan Vance', company: 'Apex BioSciences', amount: 85000, status: 'Open - Not Contacted' },
  { id: 'lead-2', name: 'Elena Rostova', company: 'Nordic Logistics', amount: 120000, status: 'Open - Not Contacted' },
  { id: 'lead-3', name: 'Marcus Sterling', company: 'Sterling Capital', amount: 240000, status: 'Working - Contacted' },
  { id: 'lead-4', name: 'Priya Sharma', company: 'Indus Cloud Systems', amount: 160000, status: 'Working - Contacted' },
  { id: 'lead-5', name: 'Brian O\'Connor', company: 'Pacific Freight', amount: 310000, status: 'Closed - Converted' },
];

export const SalesKanbanDemo: React.FC = () => {
  const [leads, setLeads] = useState<KanbanLead[]>(INITIAL_LEADS);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const moveStatus = (leadId: string, targetStatus: KanbanLead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status: targetStatus } : lead))
    );
    setActionNotice(`LeadService.updateLeadStatus called: Lead #${leadId} transitioned to '${targetStatus}'`);
    setTimeout(() => setActionNotice(null), 3500);
  };

  const columns: { title: KanbanLead['status']; bg: string; border: string }[] = [
    { title: 'Open - Not Contacted', bg: 'bg-slate-900/50', border: 'border-slate-800' },
    { title: 'Working - Contacted', bg: 'bg-sky-950/20', border: 'border-sky-500/20' },
    { title: 'Closed - Converted', bg: 'bg-emerald-950/20', border: 'border-emerald-500/20' },
  ];

  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Interactive LWC Lead Kanban Workspace
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
              LeadService.cls + Reactive LWC
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Click stage arrows to simulate real-time @AuraEnabled DML state progression
          </p>
        </div>
      </div>

      {actionNotice && (
        <div className="mb-4 p-2.5 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
          ✓ {actionNotice}
        </div>
      )}

      {/* 3 Column Kanban Board */}
      <div className="grid md:grid-cols-3 gap-4">
        {columns.map((col) => {
          const colLeads = leads.filter((l) => l.status === col.title);
          return (
            <div
              key={col.title}
              className={`p-3.5 rounded-xl border ${col.border} ${col.bg} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/80">
                  <span className="text-xs font-bold text-white tracking-tight">{col.title}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-sm bg-slate-800 text-slate-300">
                    {colLeads.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {colLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3 rounded-lg border border-slate-700/80 bg-slate-900/90 hover:border-sky-500/40 transition-all shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{lead.name}</span>
                        <span className="text-[11px] font-mono font-semibold text-emerald-400">
                          ${(lead.amount / 1000).toFixed(0)}k
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-3">
                        <Building size={11} />
                        <span>{lead.company}</span>
                      </div>

                      {/* Progression controls */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                        <span className="text-[10px] text-slate-400 font-mono">Move stage:</span>
                        <div className="flex gap-1.5">
                          {lead.status !== 'Open - Not Contacted' && (
                            <button
                              onClick={() => moveStatus(lead.id, 'Open - Not Contacted')}
                              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-mono"
                            >
                              ← Open
                            </button>
                          )}
                          {lead.status === 'Open - Not Contacted' && (
                            <button
                              onClick={() => moveStatus(lead.id, 'Working - Contacted')}
                              className="px-2 py-0.5 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-[10px] font-mono"
                            >
                              Working →
                            </button>
                          )}
                          {lead.status === 'Working - Contacted' && (
                            <button
                              onClick={() => moveStatus(lead.id, 'Closed - Converted')}
                              className="px-2 py-0.5 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-mono"
                            >
                              Convert →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
