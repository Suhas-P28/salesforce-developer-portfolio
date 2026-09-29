import React from 'react';
import { Briefcase, Building2, CheckCircle2, Users, Layers, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const responsibilities = [
    {
      category: 'Development & Customization',
      text: 'Developed and enhanced Salesforce functionality based on business requirements, writing clean Apex classes, triggers, and Lightning Web Components.',
    },
    {
      category: 'Declarative Configuration',
      text: 'Worked with Salesforce configuration including Validation Rules, Page Layouts, Reports, Dashboards, Flows, and Lightning Record Pages (FlexiPages).',
    },
    {
      category: 'Process Automation',
      text: 'Implemented and supported Salesforce automation using Record-Triggered Flows and automated notification alerts to streamline sales and operational flows.',
    },
    {
      category: 'Data Operations & Triage',
      text: 'Performed data fixes, record data reconciliations, and troubleshooting for Salesforce records using Data Loader and Workbench.',
    },
    {
      category: 'Requirement Discovery',
      text: 'Participated in requirement discussions with business analysts and QA testing teams to understand business processes and map user stories to technical designs.',
    },
    {
      category: 'SIT / UAT Deployment',
      text: 'Prepared deployment packages (Change Sets / metadata manifests) and supported SIT and UAT deployment activities, resolving deployment conflicts.',
    },
    {
      category: 'Process Investigation',
      text: 'Investigated and resolved issues related to Salesforce business processes, validation conflicts, and complex data relationships across standard and custom objects.',
    },
    {
      category: 'Integrations & Permissions',
      text: 'Worked with integration-related Salesforce configurations, Field-Level Security, Permission Sets, and Named Credentials for third-party connections.',
    },
    {
      category: 'Cross-Functional Collaboration',
      text: 'Collaborated actively with cross-functional teams across development, quality assurance, release management, and business stakeholders during the entire SDLC.',
    },
  ];

  const enterpriseHighlights = [
    {
      label: 'Cross-Functional Collaboration',
      icon: <Users size={16} className="text-sky-400" />,
      desc: 'Regular collaboration with QA testers and Business Analysts on sprint user stories and edge cases.',
    },
    {
      label: 'SIT / UAT Release Discipline',
      icon: <Layers size={16} className="text-blue-400" />,
      desc: 'Hands-on participation in sandbox staging, deployment package validation, and smoke testing.',
    },
    {
      label: 'Data Integrity & Troubleshooting',
      icon: <ShieldCheck size={16} className="text-emerald-400" />,
      desc: 'Executing record triage, root-cause defect analysis, and data fixes across enterprise accounts.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Career Record</span>
            <span>·</span>
            <span>Enterprise Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Real enterprise contribution across Salesforce configuration, custom programmatic development, data operations,
            and testing deployment cycles.
          </p>
        </div>

        {/* Enterprise Experience Card */}
        <div className="rounded-2xl border border-sky-500/25 bg-slate-900/70 backdrop-blur-md shadow-2xl p-6 sm:p-8 lg:p-10 mb-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-mono mb-2 border border-sky-500/20">
                <Building2 size={13} />
                <span>IBM · 2025 – Present</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Salesforce Developer
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1">
                <span className="font-semibold text-white">IBM</span>
                <span>·</span>
                <span>Enterprise Consulting & CRM Implementations</span>
                <span>·</span>
                <span className="text-sky-300 font-mono text-xs">1.8 Years Professional Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30">
                2025 – Present (Active)
              </span>
              <span className="text-[11px] text-slate-400 mt-1">Bengaluru, India</span>
            </div>
          </div>

          {/* Core Responsibilities Grid */}
          <div className="mb-10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">
              Key Contributions & Engineering Responsibilities
            </h4>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono font-medium text-sky-400 tracking-wide uppercase block mb-1.5">
                      {item.category}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Hands-on involvement</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Collaboration Highlights */}
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Cross-Functional Environment
            </h4>
            <div className="grid sm:grid-cols-3 gap-4">
              {enterpriseHighlights.map((hl) => (
                <div
                  key={hl.label}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/60 shrink-0 mt-0.5">
                    {hl.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{hl.label}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mt-1">{hl.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Authenticity Notice */}
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-slate-400 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Clear Attribution Policy: Professional experience reflects verified enterprise team involvement; portfolio projects are highlighted separately.
          </span>
          <a href="#projects" className="text-sky-400 hover:underline shrink-0 ml-4 font-medium">
            View Portfolio Projects →
          </a>
        </div>
      </div>
    </section>
  );
};
