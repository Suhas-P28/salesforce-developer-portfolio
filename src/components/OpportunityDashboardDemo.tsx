import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, DollarSign, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

interface OppRecord {
  id: string;
  name: string;
  account: string;
  amount: number;
  stage: 'Prospecting' | 'Value Proposition' | 'Proposal/Quote' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  closeDate: string;
  owner: string;
}

const INITIAL_OPPORTUNITIES: OppRecord[] = [
  { id: '0065000001', name: 'Cloud ERP Migration & License', account: 'Acme Global Corp', amount: 320000, stage: 'Proposal/Quote', closeDate: '2026-10-15', owner: 'Sarah Connor' },
  { id: '0065000002', name: 'Service Cloud Voice Integration', account: 'Apex Financial Services', amount: 180000, stage: 'Negotiation', closeDate: '2026-10-28', owner: 'David Miller' },
  { id: '0065000003', name: 'Marketing Automation & Journeys', account: 'Starlight Retail', amount: 95000, stage: 'Closed Won', closeDate: '2026-09-12', owner: 'Sarah Connor' },
  { id: '0065000004', name: 'Field Service Lightning Rollout', account: 'Zenith Logistics', amount: 410000, stage: 'Value Proposition', closeDate: '2026-11-05', owner: 'Alex Rivera' },
  { id: '0065000005', name: 'Agentforce Support Bot Expansion', account: 'Hyperion Health', amount: 240000, stage: 'Negotiation', closeDate: '2026-10-30', owner: 'Sarah Connor' },
  { id: '0065000006', name: 'B2B Commerce Portal Overhaul', account: 'Omni Retailers Group', amount: 155000, stage: 'Prospecting', closeDate: '2026-11-20', owner: 'David Miller' },
  { id: '0065000007', name: 'Experience Cloud Partner Portal', account: 'Summit Distribution', amount: 85000, stage: 'Closed Won', closeDate: '2026-09-24', owner: 'Alex Rivera' },
  { id: '0065000008', name: 'Data Cloud Unified Modeling', account: 'Quantum Tech Labs', amount: 290000, stage: 'Proposal/Quote', closeDate: '2026-11-14', owner: 'Sarah Connor' },
  { id: '0065000009', name: 'Legacy Siebel to Salesforce CRM', account: 'Borealis Telecom', amount: 520000, stage: 'Closed Lost', closeDate: '2026-08-18', owner: 'David Miller' },
];

export const OpportunityDashboardDemo: React.FC = () => {
  const [stageFilter, setStageFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<'amount' | 'closeDate'>('amount');
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 4;

  // Filtered & Sorted records
  const filteredRecords = useMemo(() => {
    return INITIAL_OPPORTUNITIES.filter((opp) => {
      const matchStage = stageFilter === 'All' || opp.stage === stageFilter;
      const matchSearch =
        opp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.account.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.owner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStage && matchSearch;
    }).sort((a, b) => {
      if (sortField === 'amount') {
        return sortAsc ? a.amount - b.amount : b.amount - a.amount;
      } else {
        return sortAsc
          ? a.closeDate.localeCompare(b.closeDate)
          : b.closeDate.localeCompare(a.closeDate);
      }
    });
  }, [stageFilter, searchQuery, sortField, sortAsc]);

  // Pagination
  const totalPages = Math.ceil(filteredRecords.length / pageSize) || 1;
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // KPIs
  const totalCount = INITIAL_OPPORTUNITIES.length;
  const openPipelineValue = INITIAL_OPPORTUNITIES.filter(
    (o) => o.stage !== 'Closed Won' && o.stage !== 'Closed Lost'
  ).reduce((sum, o) => sum + o.amount, 0);

  const closedWonValue = INITIAL_OPPORTUNITIES.filter((o) => o.stage === 'Closed Won').reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const closedLostValue = INITIAL_OPPORTUNITIES.filter((o) => o.stage === 'Closed Lost').reduce(
    (sum, o) => sum + o.amount,
    0
  );

  const totalClosed = INITIAL_OPPORTUNITIES.filter(
    (o) => o.stage === 'Closed Won' || o.stage === 'Closed Lost'
  ).length;

  const winRate =
    totalClosed > 0
      ? Math.round(
          (INITIAL_OPPORTUNITIES.filter((o) => o.stage === 'Closed Won').length / totalClosed) * 100
        )
      : 0;

  const avgDealSize = Math.round(
    INITIAL_OPPORTUNITIES.reduce((sum, o) => sum + o.amount, 0) / totalCount
  );

  const getStageBadgeClass = (stage: OppRecord['stage']) => {
    switch (stage) {
      case 'Closed Won':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Closed Lost':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Negotiation':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Proposal/Quote':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 shadow-2xl">
      {/* Console Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Opportunity Intelligence Workspace
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
              LWC + Aggregate SOQL
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Architecture: LWC wire adapter → OppDashboardController.cls → WITH USER_MODE
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-emerald-400 font-mono">● Real-time wire reactive</span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Total Deals</div>
          <div className="text-lg font-bold text-white mt-1 tabular-nums">{totalCount}</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Open Pipeline</div>
          <div className="text-lg font-bold text-sky-400 mt-1 tabular-nums">
            ${(openPipelineValue / 1000).toFixed(0)}k
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Closed Won</div>
          <div className="text-lg font-bold text-emerald-400 mt-1 tabular-nums">
            ${(closedWonValue / 1000).toFixed(0)}k
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Closed Lost</div>
          <div className="text-lg font-bold text-rose-400 mt-1 tabular-nums">
            ${(closedLostValue / 1000).toFixed(0)}k
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Win Rate</div>
          <div className="text-lg font-bold text-amber-400 mt-1 tabular-nums">{winRate}%</div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-mono">Avg Deal Size</div>
          <div className="text-lg font-bold text-white mt-1 tabular-nums">
            ${(avgDealSize / 1000).toFixed(0)}k
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-60">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by deal, account, owner..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
          </div>

          <select
            value={stageFilter}
            onChange={(e) => {
              setStageFilter(e.target.value);
              setCurrentPage(1);
            }}
            aria-label="Filter by stage"
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-400"
          >
            <option value="All">All Stages</option>
            <option value="Prospecting">Prospecting</option>
            <option value="Value Proposition">Value Proposition</option>
            <option value="Proposal/Quote">Proposal/Quote</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Closed Won">Closed Won</option>
            <option value="Closed Lost">Closed Lost</option>
          </select>
        </div>

        {/* Sorting trigger */}
        <div className="flex items-center gap-2 text-xs text-slate-400 self-end sm:self-auto">
          <span>Sort by:</span>
          <button
            onClick={() => {
              setSortField('amount');
              setSortAsc(!sortAsc);
            }}
            className={`px-2 py-1 rounded-md text-[11px] font-mono border ${
              sortField === 'amount'
                ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                : 'border-slate-800 text-slate-400'
            }`}
          >
            Amount {sortField === 'amount' && (sortAsc ? '↑' : '↓')}
          </button>
          <button
            onClick={() => {
              setSortField('closeDate');
              setSortAsc(!sortAsc);
            }}
            className={`px-2 py-1 rounded-md text-[11px] font-mono border ${
              sortField === 'closeDate'
                ? 'bg-sky-500/10 border-sky-500/30 text-sky-300'
                : 'border-slate-800 text-slate-400'
            }`}
          >
            Date {sortField === 'closeDate' && (sortAsc ? '↑' : '↓')}
          </button>
        </div>
      </div>

      {/* Lightning-Datatable Mock */}
      <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/40">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-slate-400 text-[11px] uppercase tracking-wider font-mono border-b border-slate-800">
              <tr>
                <th className="py-2.5 px-3">Opportunity Name</th>
                <th className="py-2.5 px-3">Account</th>
                <th className="py-2.5 px-3">Amount</th>
                <th className="py-2.5 px-3">Stage</th>
                <th className="py-2.5 px-3">Close Date</th>
                <th className="py-2.5 px-3">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {paginatedRecords.map((opp) => (
                <tr key={opp.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-2.5 px-3 font-medium text-white max-w-[200px] truncate">
                    {opp.name}
                  </td>
                  <td className="py-2.5 px-3 text-slate-300">{opp.account}</td>
                  <td className="py-2.5 px-3 font-mono font-semibold text-emerald-400 tabular-nums">
                    ${opp.amount.toLocaleString()}
                  </td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-sm text-[10px] font-mono border ${getStageBadgeClass(
                        opp.stage
                      )}`}
                    >
                      {opp.stage}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-400 font-mono tabular-nums">{opp.closeDate}</td>
                  <td className="py-2.5 px-3 text-slate-300">{opp.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {paginatedRecords.length === 0 && (
          <div className="p-8 text-center text-xs text-slate-400">
            No opportunities matched your search criteria.
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-3 mt-2 text-xs text-slate-400">
        <span className="font-mono">
          Showing {paginatedRecords.length} of {filteredRecords.length} records
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1 rounded-md bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-white"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="px-2 font-mono text-[11px]">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
