import React, { useState } from 'react';
import { Bot, Send, User, Sparkles, CheckCircle2, ArrowRight, RefreshCw, Cpu } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agentforce';
  text: string;
  timestamp: string;
  actionDetails?: {
    topic: string;
    actionName: string;
    invocableClass: string;
    groundedRecord: string;
  };
}

const SAMPLE_QUESTIONS = [
  'Check status for order ORD-1024',
  'Track shipment for ORD-8492',
  'When will order ORD-3091 arrive?',
  'Return policy for recent orders',
];

export const AgentforceDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'agentforce',
      text: 'Hello! I am your autonomous Salesforce Agentforce support agent. I have real-time access to your orders, shipping carriers, and account entitlements. How can I assist you today?',
      timestamp: '10:00 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsProcessing(true);

    setTimeout(() => {
      let reply = '';
      let actionDetails: ChatMessage['actionDetails'] | undefined;

      const lower = query.toLowerCase();
      if (lower.includes('1024')) {
        reply =
          'Order #ORD-1024 is currently **Dispatched** via FedEx Express (Tracking #FX-88910432). Estimated delivery is tomorrow by 4:30 PM. A delivery confirmation signature is required.';
        actionDetails = {
          topic: 'Order Inquiries & Tracking',
          actionName: 'GetOrderStatusAction',
          invocableClass: 'GetOrderStatusAction.cls',
          groundedRecord: 'Order__c: ORD-1024 (Status: In_Transit, Carrier: FedEx)',
        };
      } else if (lower.includes('8492')) {
        reply =
          'Order #ORD-8492 has been **Delivered** today at 9:15 AM to the front reception desk. Signed by: M. Jenkins. Would you like a copy of the delivery receipt sent to your email?';
        actionDetails = {
          topic: 'Order Inquiries & Tracking',
          actionName: 'GetOrderStatusAction',
          invocableClass: 'GetOrderStatusAction.cls',
          groundedRecord: 'Order__c: ORD-8492 (Status: Delivered, Carrier: DHL)',
        };
      } else if (lower.includes('3091')) {
        reply =
          'Order #ORD-3091 is currently in **Processing & Packing** at the central fulfillment warehouse. It is scheduled to ship out tomorrow morning with estimated arrival on Thursday.';
        actionDetails = {
          topic: 'Order Inquiries & Tracking',
          actionName: 'GetOrderStatusAction',
          invocableClass: 'GetOrderStatusAction.cls',
          groundedRecord: 'Order__c: ORD-3091 (Status: Processing)',
        };
      } else if (lower.includes('return') || lower.includes('exchange')) {
        reply =
          'Eligible items can be returned or exchanged within 30 days of delivery. For orders delivered within that window, I can generate a prepaid return label directly from your account.';
        actionDetails = {
          topic: 'Returns & Exchange Policy',
          actionName: 'QueryReturnEntitlement',
          invocableClass: 'ReturnPolicyService.cls',
          groundedRecord: 'KnowledgeArticle: KA-00912 (Standard Return Guidelines)',
        };
      } else {
        reply =
          `I checked your inquiry regarding "${query}". Based on your Salesforce CRM account records, all active services are in good standing. If you have an order number (e.g., ORD-1024 or ORD-8492), I can fetch live shipment coordinates.`;
        actionDetails = {
          topic: 'General Customer Care',
          actionName: 'AccountLookupAction',
          invocableClass: 'AccountService.cls',
          groundedRecord: 'Account: Universal Containers (SLA: Platinum)',
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agentforce',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionDetails,
        },
      ]);
      setIsProcessing(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'agentforce',
        text: 'Hello! I am your autonomous Salesforce Agentforce support agent. I have real-time access to your orders, shipping carriers, and account entitlements. How can I assist you today?',
        timestamp: '10:00 AM',
      },
    ]);
  };

  return (
    <div className="rounded-2xl border border-sky-500/30 bg-slate-950 shadow-2xl overflow-hidden flex flex-col h-[520px]">
      {/* Console Header */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
            <Bot size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-tight">Agentforce Service Agent</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Prototype
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Topic: Order Inquiries · Apex: GetOrderStatusAction.cls
            </div>
          </div>
        </div>

        <button
          onClick={resetChat}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Reset conversation"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400">
              {msg.sender === 'agentforce' ? (
                <>
                  <Sparkles size={11} className="text-sky-400" />
                  <span className="font-semibold text-sky-400">Agentforce</span>
                </>
              ) : (
                <>
                  <User size={11} />
                  <span>You (Customer)</span>
                </>
              )}
              <span>· {msg.timestamp}</span>
            </div>

            <div
              className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-sky-500 text-slate-950 font-medium'
                  : 'bg-slate-900 border border-slate-800 text-slate-200'
              }`}
            >
              {msg.text}
            </div>

            {/* Invocable Reasoning Card */}
            {msg.actionDetails && (
              <div className="mt-2 max-w-[85%] p-2.5 rounded-lg bg-slate-900/90 border border-sky-500/20 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1 text-sky-400 font-semibold mb-1">
                  <Cpu size={12} />
                  <span>Agentforce Execution Pipeline:</span>
                </div>
                <div className="grid grid-cols-1 gap-1 text-[10px]">
                  <div>
                    <span className="text-slate-400">Matched Topic:</span> {msg.actionDetails.topic}
                  </div>
                  <div>
                    <span className="text-slate-400">Apex Action:</span>{' '}
                    <code className="text-sky-300">@{msg.actionDetails.actionName}</code>
                  </div>
                  <div>
                    <span className="text-slate-400">Grounded Data:</span> {msg.actionDetails.groundedRecord}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {isProcessing && (
          <div className="flex items-center gap-2 text-xs text-sky-400 font-mono p-2">
            <RefreshCw size={13} className="animate-spin" />
            <span>Evaluating Topic & invoking GetOrderStatusAction...</span>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2 bg-slate-900/70 border-t border-slate-800 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] text-slate-400 shrink-0 font-mono">Try prompt:</span>
        {SAMPLE_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 whitespace-nowrap shrink-0 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask Agentforce (e.g. Check order ORD-1024)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isProcessing}
          className="px-3 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 font-semibold text-xs flex items-center gap-1 transition-colors"
        >
          <span>Send</span>
          <Send size={12} />
        </button>
      </form>
    </div>
  );
};
