import React from 'react';
import { Code, Settings, Rocket, Sparkles, CheckCircle2, Bot, Globe } from 'lucide-react';

export const About: React.FC = () => {

  const workWithCards = [
    {
      title: 'Apex, LWC & Agentforce',
      icon: <Code size={20} className="text-sky-400" />,
      skills: ['Apex Triggers & Handlers', 'Lightning Web Components (LWC)', 'Agentforce Topics & Invocables', 'SOQL/SOSL (USER_MODE)'],
      description: 'Building custom programmatic logic, reactive wire adapters, autonomous Agentforce actions, and bulkified Governor-safe services.',
    },
    {
      title: 'Salesforce Administration',
      icon: <Settings size={20} className="text-blue-400" />,
      skills: ['Record-Triggered Flows', 'Validation Rules & Formulas', 'Page Layouts & FlexiPages', 'Reports & Dashboards'],
      description: 'Configuring enterprise declarative capabilities to deliver maintainable solutions with zero unnecessary code debt.',
    },
    {
      title: 'REST APIs & Integrations',
      icon: <Globe size={20} className="text-emerald-400" />,
      skills: ['HTTP Callouts & Webhooks', 'Named Credentials', 'JSON Parsing & DTOs', 'Integration_Log__c Auditing'],
      description: 'Hands-on architectural experience connecting Salesforce with external fulfillment backends and third-party web services.',
    },
    {
      title: 'Testing & Release Support',
      icon: <Rocket size={20} className="text-indigo-400" />,
      skills: ['SIT / UAT Deployment Support', 'Data Loader / Record Fixes', 'Change Sets & DevOps Tools', 'Apex Unit Testing (85%+)'],
      description: 'Partnering directly with business analysts and QA testers to investigate defects, seed test data, and deploy packages safely.',
    },
  ];

  const currentlyExploring = [
    { name: 'Data Cloud Architecture', desc: 'DLO/DMO mapping, unified customer profiles, real-time data streaming & calculated insights' },
    { name: 'Advanced LWC Architecture', desc: 'Lightning Message Service (LMS), headless components, custom property editors for Flows' },
    { name: 'Large Data Volumes (LDV)', desc: 'Custom skinny tables, index optimization, BigObjects, asynchronous Queueable chaining' },
    { name: 'OAuth 2.0 JWT Bearer Flows', desc: 'Server-to-server automated headless authentication without interactive user prompts' },
    { name: 'Event-Driven Architectures', desc: 'High-volume Platform Events, Change Data Capture (CDC), Pub/Sub API streaming' },
    { name: 'Enterprise Multi-Tier Patterns', desc: 'Application service layers, selector patterns, domain object frameworks (fflib)' },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 font-mono">
            <span>Core Profile</span>
            <span>·</span>
            <span>4x Certified Enterprise Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="mt-4 space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              I’m a <strong className="text-white font-semibold">Salesforce Developer at IBM (2025 – Present) with 1.8 years of enterprise experience</strong> and{' '}
              <strong className="text-sky-300 font-semibold">4x Salesforce Certifications</strong> (Agentforce Specialist, Platform Developer I, Administrator, and Associate). My experience includes building and enhancing
              Salesforce solutions using Apex, Lightning Web Components, Flow, integration patterns, and Agentforce autonomous reasoning.
            </p>
            <p>
              I have worked with business and testing teams to understand requirements, implement changes,
              troubleshoot issues, perform data fixes, prepare SIT/UAT deployments and support Salesforce enhancements.
            </p>
            <p className="text-sky-200/90 font-medium">
              I enjoy understanding how a business process works end-to-end and translating that requirement into scalable,
              maintainable Salesforce solutions.
            </p>
          </div>
        </div>

        {/* What I Work With Card Grid */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <span>What I Work With</span>
            <span className="text-xs font-normal text-slate-400 font-mono">/ Hands-on Production Competencies</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workWithCards.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-sky-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700/60">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{card.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {card.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 size={12} className="text-sky-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Exploring Grid */}
        <div className="p-8 rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-950/30 via-slate-900/60 to-blue-950/30">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={18} className="text-sky-400" />
            <h3 className="text-base font-bold text-white">Currently Exploring</h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 ml-2">
              Next-Gen Salesforce Architecture
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Deepening expertise in high-scale data volumes, headless OAuth, and Data Cloud unified customer graphs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyExploring.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-sky-500/30 transition-colors"
              >
                <div className="text-sm font-semibold text-white mb-1 flex items-center justify-between">
                  <span>{item.name}</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
