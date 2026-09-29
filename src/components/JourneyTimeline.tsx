import React, { useState } from 'react';
import { Calendar, Briefcase, Code2, Award, Zap, ChevronRight, CheckCircle } from 'lucide-react';

interface TimelineStage {
  id: string;
  year: string;
  phase: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  skills: string[];
  keyHighlights: string[];
  color: string;
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 'stage-1',
    year: '2023 - 2024',
    phase: 'Phase 01',
    title: 'Foundations & Salesforce Administration',
    icon: <Calendar size={18} className="text-sky-400" />,
    summary:
      'Immersed in Salesforce CRM architecture, multi-tenant database models, security rules, and core declarative automation.',
    skills: ['Salesforce Administration', 'CRM Fundamentals', 'Reports & Dashboards', 'Flow Automation', 'Security & Sharing'],
    keyHighlights: [
      'Mastered Standard Objects (Lead, Account, Contact, Opportunity, Case)',
      'Constructed Record-Triggered Flows and Validation Rules',
      'Configured Organization-Wide Defaults, Profiles, and Permission Sets',
    ],
    color: '#0284c7',
  },
  {
    id: 'stage-2',
    year: '2024 - 2025',
    phase: 'Phase 02',
    title: 'Professional Salesforce Experience — IBM',
    icon: <Briefcase size={18} className="text-blue-400" />,
    summary:
      'Delivered business-aligned user stories at IBM, supported SIT/UAT testing cycles, performed critical record data fixes, and resolved production defects.',
    skills: ['IBM Engagements', 'User Stories', 'Salesforce Enhancements', 'Validation Rules', 'Page Layouts & FlexiPages', 'SIT/UAT Support', 'Data Fixes'],
    keyHighlights: [
      'Joined IBM delivering Salesforce CRM enhancements and enterprise client automations',
      'Partnered with Business Analysts to refine functional acceptance criteria',
      'Prepared change set packages and validated deployment manifests in sandbox',
      'Assisted QA testers by diagnosing record relationship anomalies and seeding test accounts',
    ],
    color: '#2563eb',
  },
  {
    id: 'stage-3',
    year: '2025',
    phase: 'Phase 03',
    title: 'Programmatic Developer Growth',
    icon: <Code2 size={18} className="text-indigo-400" />,
    summary:
      'Advanced from declarative capabilities into full-stack programmatic Salesforce development using Apex, SOQL, and Lightning Web Components.',
    skills: ['Apex Triggers & Handlers', 'LWC Reactive UI', 'SOQL/SOSL Optimization', 'JavaScript ES6+', 'Governor Limits Discipline'],
    keyHighlights: [
      'Built bulkified trigger frameworks with zero SOQL inside loops',
      'Developed responsive LWC components utilizing wire adapters and custom events',
      'Maintained 85%+ test class coverage with robust positive and negative assertions',
    ],
    color: '#6366f1',
  },
  {
    id: 'stage-4',
    year: '2024 - 2025',
    phase: 'Phase 04',
    title: '4x Salesforce Certifications Earned',
    icon: <Award size={18} className="text-amber-400" />,
    summary:
      'Formalized platform knowledge through 4 official Salesforce certifications verifying autonomous Agentforce AI specialization, programmatic development, and administrative mastery.',
    skills: [
      'Agentforce Specialist',
      'Platform Developer I (PDI)',
      'Salesforce Certified Administrator',
      'Salesforce Certified Associate',
    ],
    keyHighlights: [
      'Earned Salesforce Certified Agentforce Specialist verifying autonomous AI architecture',
      'Verified deep understanding of Apex design patterns and Lightning Web Components (PDI)',
      'Proved administrative mastery in security, data integrity, and Flow logic (Administrator)',
      'Validated foundational CRM ecosystem knowledge and data relationships (Associate)',
    ],
    color: '#f59e0b',
  },
  {
    id: 'stage-5',
    year: 'Current & Beyond',
    phase: 'Phase 05',
    title: 'Current Focus & Enterprise Scale',
    icon: <Zap size={18} className="text-emerald-400" />,
    summary:
      'Advancing autonomous Agentforce deployments in production, enterprise Data Cloud unified modeling, and high-volume REST integration patterns.',
    skills: ['Advanced Agentforce Actions', 'Data Cloud DLO/DMO', 'Named Credentials & REST APIs', 'Advanced LWC', 'Large Data Volumes'],
    keyHighlights: [
      'Prototyping Invocable Apex Actions grounded by CRM records for Agentforce reasoning',
      'Designing robust HTTP callout handlers with custom error logging and retry mechanisms',
      'Studying Large Data Volume (LDV) indexing and async Queueable chaining',
    ],
    color: '#10b981',
  },
];

export const JourneyTimeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('stage-2');

  const selectedStage = TIMELINE_STAGES.find((s) => s.id === activeStageId) || TIMELINE_STAGES[1];

  return (
    <section id="journey" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Career Evolution</span>
            <span>·</span>
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Salesforce Journey
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A structured path from CRM fundamentals to enterprise declarative automation, programmatic development,
            and modern AI integrations.
          </p>
        </div>

        {/* Desktop / Tablet Timeline Stepper */}
        <div className="grid lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left: Stage selector list */}
          <div className="lg:col-span-5 space-y-3 min-w-0 w-full">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-500/15 border-sky-400/60 shadow-md shadow-sky-500/10'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        color: stage.color,
                      }}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-sky-400">{stage.year}</span>
                        <span className="text-[10px] text-slate-400">· {stage.phase}</span>
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">{stage.title}</div>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform text-slate-400 ${
                      isActive ? 'translate-x-1 text-sky-400' : ''
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Stage Card */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <div className="p-8 rounded-2xl border border-sky-500/25 bg-slate-900/80 backdrop-blur-md shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: selectedStage.color }}
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-300">
                    {selectedStage.phase} ({selectedStage.year})
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Milestone Details
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{selectedStage.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedStage.summary}</p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Key Accomplishments & Focus
                </h4>
                <div className="space-y-2.5">
                  {selectedStage.keyHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle size={15} className="text-sky-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills mastered in this phase */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Skills & Concepts Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStage.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
