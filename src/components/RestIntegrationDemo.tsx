import React, { useState } from 'react';
import { Globe, ArrowRight, CheckCircle2, ShieldCheck, RefreshCw, Terminal, AlertTriangle } from 'lucide-react';

export const RestIntegrationDemo: React.FC = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedOrderId, setSelectedOrderId] = useState('ORD-9821');

  const executeCallout = () => {
    setIsCalling(true);
    setSyncStatus('idle');

    setTimeout(() => {
      setIsCalling(false);
      setSyncStatus('success');
    }, 800);
  };

  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 p-5 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-sky-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              External REST API Callout & Audit Logger
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Named Credentials + DTO
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Architecture: E-Commerce API → callout:Order_API → ExternalOrderService.cls → Integration_Log__c
          </p>
        </div>

        <button
          onClick={executeCallout}
          disabled={isCalling}
          className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-colors"
        >
          {isCalling ? (
            <>
              <RefreshCw size={12} className="animate-spin" />
              <span>Invoking Callout...</span>
            </>
          ) : (
            <>
              <span>Execute Mock Sync</span>
              <ArrowRight size={13} />
            </>
          )}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Outbound Request View */}
        <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>HTTP Request Payload & Headers</span>
            <span className="text-sky-400">GET (Named Credential)</span>
          </div>

          <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`GET /v1/orders/${selectedOrderId} HTTP/1.1
Host: callout:ECommerce_Fulfillment_API
Authorization: Bearer [OAuth2 Injected via Named Credential]
Accept: application/json
Timeout: 15000ms`}
          </pre>
        </div>

        {/* Inbound Response & Audit Log */}
        <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
            <span>HTTP Response & CRM Log</span>
            <span className="text-emerald-400">Status: 200 OK</span>
          </div>

          <pre className="text-emerald-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "orderId": "${selectedOrderId}",
  "externalStatus": "SHIPPED_FEDEX",
  "carrierTracking": "FX-99214481",
  "estimatedDelivery": "2026-10-02T16:00:00Z",
  "syncedAt": "2026-09-29T02:00:00Z"
}`}
          </pre>
        </div>
      </div>

      {/* Integration_Log__c record simulation */}
      <div className="mt-4 p-3 rounded-xl border border-slate-800/80 bg-slate-900/40">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
          <span className="flex items-center gap-1.5 text-sky-400">
            <Terminal size={13} />
            Integration_Log__c Record Created:
          </span>
          <span className="text-[10px] text-slate-400">Apex Class: IntegrationLogger.cls</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-slate-300">
          <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">HTTP Code:</span>
            <span className="text-emerald-400 font-bold">200 OK</span>
          </div>
          <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Duration:</span>
            <span className="text-white">248 ms</span>
          </div>
          <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Record Updated:</span>
            <span className="text-sky-300">Order__c (ORD-9821)</span>
          </div>
          <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">Retry Count:</span>
            <span className="text-white">0 / 3 max</span>
          </div>
        </div>
      </div>
    </div>
  );
};
