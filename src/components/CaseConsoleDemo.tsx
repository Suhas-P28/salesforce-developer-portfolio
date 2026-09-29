import React, { useState } from 'react';
import { AlertCircle, Clock, ShieldAlert, CheckCircle, RefreshCw, Send, ArrowRight } from 'lucide-react';

interface CaseItem {
  id: string;
  caseNumber: string;
  account: string;
  sla: 'Platinum' | 'Gold' | 'Silver' | 'Standard';
  subject: string;
  priority: 'High' | 'Medium' | 'Low';
  milestoneTime: string;
  status: 'New' | 'In Progress' | 'Escalated' | 'Resolved';
}

const SAMPLE_CASES: CaseItem[] = [
  {
    id: 'c1',
    caseNumber: '0004921',
    account: 'Universal Containers',
    sla: 'Platinum',
    subject: 'Production API Authentication Timeout',
    priority: 'High',
    milestoneTime: '45m remaining',
    status: 'In Progress',
  },
  {
    id: 'c2',
    caseNumber: '0004922',
    account: 'Starlight Retail',
    sla: 'Gold',
    subject: 'Bulk CSV Data Upload Format Error',
    priority: 'High',
    milestoneTime: '1h 30m remaining',
    status: 'New',
  },
  {
    id: 'c3',
    caseNumber: '0004923',
    account: 'Acme Hardware Inc',
    sla: 'Silver',
    subject: 'User Profile Permission Request',
    priority: 'Medium',
    milestoneTime: '3h 15m remaining',
    status: 'In Progress',
  },
  {
    id: 'c4',
    caseNumber: '0004924',
    account: 'Horizon Logistics',
    sla: 'Standard',
    subject: 'Monthly Report Schedule Configuration',
    priority: 'Low',
    milestoneTime: '7h 50m remaining',
    status: 'New',
  },
];

export const CaseConsoleDemo: React.FC = () => {
  const [cases, setCases] = useState<CaseItem[]>(SAMPLE_CASES);
  const [selectedSla, setSelectedSla] = useState<'Platinum' | 'Gold' | 'Silver' | 'Standard'>('Platinum');
  const [newSubject, setNewSubject] = useState('Payment Gateway Webhook 500 error');
  const [calculationLog, setCalculationLog] = useState<string | null>(null);

  const handleSimulateCaseCreation = () => {
    // Determine priority according to CasePriorityEngine logic
    let calculatedPriority: 'High' | 'Medium' | 'Low' = 'Low';
    let milestone = '8h 00m';

    if (selectedSla === 'Platinum' || selectedSla === 'Gold') {
      calculatedPriority = 'High';
      milestone = selectedSla === 'Platinum' ? '45m SLA Milestone' : '2h 00m SLA Milestone';
    } else if (selectedSla === 'Silver') {
      calculatedPriority = 'Medium';
      milestone = '4h 00m SLA Milestone';
    } else {
      calculatedPriority = 'Low';
      milestone = '8h 00m SLA Milestone';
    }

    const newCase: CaseItem = {
      id: Date.now().toString(),
      caseNumber: `000${Math.floor(1000 + Math.random() * 9000)}`,
      account: `Client Corp (${selectedSla} Tier)`,
      sla: selectedSla,
      subject: newSubject,
      priority: calculatedPriority,
      milestoneTime: milestone,
      status: 'New',
    };

    setCases([newCase, ...cases]);
    setCalculationLog(
      `CasePriorityEngine.cls invoked by Record-Triggered Flow: Evaluated SLA '${selectedSla}' → Calculated Priority: '${calculatedPriority}'`
    );
  };

  const getPriorityBadge = (p: CaseItem['priority']) => {
    switch (p) {
      case 'High':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Low':
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert size={16} className="text-sky-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Service Cloud Case Console & Priority Engine
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Flow + Invocable Apex
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Demonstrates real-time SLA calculation via CasePriorityEngine.cls
          </p>
        </div>
      </div>

      {/* Simulator Control Box */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-5">
        <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
          <span>Simulate Case Ingestion via Record-Triggered Flow</span>
        </div>
        <div className="grid sm:grid-cols-12 gap-3 items-end">
          <div className="sm:col-span-4">
            <label className="text-[10px] font-mono text-slate-400 block mb-1">
              Account SLA Tier:
            </label>
            <select
              value={selectedSla}
              onChange={(e) => setSelectedSla(e.target.value as any)}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
            >
              <option value="Platinum">Platinum (High Priority)</option>
              <option value="Gold">Gold (High Priority)</option>
              <option value="Silver">Silver (Medium Priority)</option>
              <option value="Standard">Standard (Low Priority)</option>
            </select>
          </div>

          <div className="sm:col-span-5">
            <label className="text-[10px] font-mono text-slate-400 block mb-1">
              Case Subject:
            </label>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white"
            />
          </div>

          <div className="sm:col-span-3">
            <button
              onClick={handleSimulateCaseCreation}
              className="w-full py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Create Case</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {calculationLog && (
          <div className="mt-3 p-2 rounded-lg bg-slate-950 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-center gap-2">
            <CheckCircle size={13} className="shrink-0" />
            <span>{calculationLog}</span>
          </div>
        )}
      </div>

      {/* Case List Grid */}
      <div className="space-y-2.5">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
          Active Support Cases in Queue ({cases.length})
        </div>

        {cases.map((c) => (
          <div
            key={c.id}
            className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-sky-400 font-semibold">
                  #{c.caseNumber}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.2 rounded-sm bg-slate-800 text-slate-300 border border-slate-700">
                  {c.sla} SLA
                </span>
                <span className="text-[11px] text-slate-400">· {c.account}</span>
              </div>
              <div className="text-xs font-semibold text-white">{c.subject}</div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Clock size={11} />
                  <span>{c.milestoneTime}</span>
                </div>
                <div className="text-[10px] text-slate-400">{c.status}</div>
              </div>

              <span
                className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${getPriorityBadge(
                  c.priority
                )}`}
              >
                {c.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
