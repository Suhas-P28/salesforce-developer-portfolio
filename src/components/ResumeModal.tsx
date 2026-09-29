import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Sparkles, ArrowDownToLine, ExternalLink, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const generateResumeHtml = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suhas P - Salesforce Developer Resume (IBM)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #ffffff;
      color: #0f172a;
      line-height: 1.45;
      padding: 30px;
    }
    .resume-container {
      max-width: 820px;
      margin: 0 auto;
      background: #ffffff;
    }
    .header {
      border-bottom: 2.5px solid #032D60;
      padding-bottom: 14px;
      margin-bottom: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: 12px;
    }
    h1 {
      font-size: 26px;
      font-weight: 800;
      color: #032D60;
      letter-spacing: -0.5px;
    }
    .title-sub {
      font-size: 13px;
      font-weight: 700;
      color: #00A1E0;
      margin-top: 3px;
    }
    .contact-info {
      font-size: 11px;
      color: #475569;
      font-family: 'JetBrains Mono', monospace;
      text-align: right;
    }
    .section {
      margin-bottom: 16px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #032D60;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 3px;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 11.5px;
      color: #334155;
      line-height: 1.5;
    }
    .competency-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 14px;
      font-size: 11px;
      color: #334155;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 13px;
      font-weight: 700;
      color: #0f172a;
    }
    .exp-sub {
      font-size: 11px;
      color: #0284c7;
      font-weight: 600;
      margin-bottom: 6px;
    }
    ul {
      list-style-position: inside;
      font-size: 11px;
      color: #334155;
      padding-left: 2px;
    }
    li {
      margin-bottom: 3.5px;
    }
    .certs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px 14px;
      font-size: 11px;
      color: #334155;
    }
    @media print {
      body { background: white; padding: 0; }
      @page { margin: 1.5cm; }
    }
  </style>
</head>
<body>
  <div class="resume-container">
    <div class="header">
      <div>
        <h1>SUHAS P</h1>
        <div class="title-sub">Salesforce Developer | 4x Certified | IBM (2025 – Present)</div>
      </div>
      <div class="contact-info">
        <div>Email: suhas123.p@gmail.com</div>
        <div>LinkedIn: linkedin.com/in/suhas-p-5a273424a</div>
        <div>GitHub: github.com/Suhas-P28</div>
        <div>Location: Bengaluru, India</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Professional Summary</div>
      <p class="summary-text">
        Salesforce Developer at <strong>IBM</strong> with <strong>1.8 years of professional enterprise experience</strong> and <strong>4x Salesforce Certifications</strong> (Agentforce Specialist, Platform Developer I, Administrator, and Associate). Proven engineering expertise across Apex, Lightning Web Components (LWC), Flow Automation, Integrations, and Agentforce autonomous reasoning. Collaborated directly with cross-functional business analysts and QA teams to support SIT/UAT deployments, resolve data issues, and deliver maintainable CRM enhancements.
      </p>
    </div>

    <div class="section">
      <div class="section-title">Technical Competencies</div>
      <div class="competency-grid">
        <div><strong>Salesforce Development:</strong> Apex (Triggers, Service classes, Batch), LWC, Wire Adapters, SOQL/SOSL (WITH USER_MODE), JavaScript ES6+</div>
        <div><strong>AI & Agentforce:</strong> Agentforce Specialist, Topics, Invocable Apex Actions, Prompt Builder, CRM Grounding</div>
        <div><strong>Salesforce Administration:</strong> Validation Rules, Page Layouts, Lightning FlexiPages, Reports & Dashboards, Permission Sets</div>
        <div><strong>Integrations & APIs:</strong> REST API Callouts, JSON Serialization, Named Credentials, Webhooks, Integration Logging</div>
        <div><strong>Testing & Release:</strong> Git, Azure DevOps, Change Sets, Workbench, Data Loader, Test Classes (85%+ Coverage)</div>
        <div><strong>SDLC Governance:</strong> Agile/Scrum, User Stories Refinement, SIT/UAT Staging, Production Verification</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Professional Experience</div>
      <div class="exp-header">
        <span>Salesforce Developer</span>
        <span>2025 – Present</span>
      </div>
      <div class="exp-sub">IBM · Enterprise Salesforce Engagements (1.8 Years Professional Experience)</div>
      <ul>
        <li>Developed and enhanced custom Salesforce functionality using Apex and LWC based on user stories and business acceptance criteria.</li>
        <li>Implemented bulkified Apex triggers and service classes ensuring compliance with Governor limits and WITH USER_MODE security.</li>
        <li>Configured complex declarative automations including Record-Triggered Flows, Validation Rules, and dynamic FlexiPages.</li>
        <li>Supported sandbox SIT and UAT deployment releases using Change Sets and metadata packages; performed smoke testing.</li>
        <li>Conducted data investigations and executed critical record data fixes using Data Loader and Workbench.</li>
        <li>Collaborated continuously with Business Analysts, QA testers, and release engineers throughout the entire SDLC.</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Selected Portfolio Implementations</div>
      <ul>
        <li><strong>AI Customer Support Agent (Agentforce):</strong> Autonomous customer agent resolving order and shipment queries using Topics and Invocable Apex Actions grounded by Order__c records.</li>
        <li><strong>Sales Operations Management System:</strong> Full-stack workspace with an interactive LWC Kanban board, Wire Service, and LeadService Apex layer.</li>
        <li><strong>Smart Case Management & Priority Engine:</strong> Service Cloud solution evaluating Account SLA tiers via an Invocable Apex engine linked to Record-Triggered Flows.</li>
        <li><strong>External Order Integration:</strong> Bi-directional REST API integration utilizing Named Credentials, robust JSON parsing, and Integration_Log__c audit logging.</li>
      </ul>
    </div>

    <div class="section">
      <div class="section-title">Official Salesforce Certifications & Trailhead Credentials</div>
      <div class="certs-grid">
        <div>• <strong>Salesforce Certified Agentforce Specialist</strong> (2025)</div>
        <div>• <strong>Salesforce Certified Platform Developer I</strong> (2024)</div>
        <div>• <strong>Salesforce Certified Administrator</strong> (2024)</div>
        <div>• <strong>Salesforce Certified Associate</strong> (2023)</div>
        <div>• <strong>Trailhead Double Star Ranger</strong> (2★ · 200+ Badges · 100k+ Points)</div>
        <div>• <strong>Agentblazer Legend Badge</strong> (Premier Salesforce AI Recognition)</div>
      </div>
      <div style="margin-top: 8px; font-size: 11px; color: #334155;">
        <strong>Education:</strong> Bachelor of Engineering (B.E.) in Computer Science & Engineering
      </div>
    </div>
  </div>
</body>
</html>`;

  const handlePrintPdf = () => {
    // Open isolated printable window so browser's native print-to-PDF works reliably without modal clipping
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }
    printWindow.document.write(generateResumeHtml());
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 350);
  };

  const handleDownloadHtmlResume = () => {
    const blob = new Blob([generateResumeHtml()], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Suhas_P_Salesforce_Developer_IBM_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleCopyText = () => {
    const text = `SUHAS P - SALESFORCE DEVELOPER (4X CERTIFIED)
Company: IBM (2025 – Present) | Experience: 1.8 Years
Email: suhas123.p@gmail.com | Location: Bengaluru, India
LinkedIn: https://www.linkedin.com/in/suhas-p-5a273424a
GitHub: https://github.com/Suhas-P28

OFFICIAL SALESFORCE CERTIFICATIONS & TRAILHEAD
1. Salesforce Certified Agentforce Specialist (2025)
2. Salesforce Certified Platform Developer I (2024)
3. Salesforce Certified Administrator (2024)
4. Salesforce Certified Associate (2023)
5. Trailhead Double Star Ranger (2★ · 200+ Badges · 100k+ Points)
6. Agentblazer Legend Badge (Premier Salesforce AI Recognition)

PROFESSIONAL SUMMARY
Salesforce Developer at IBM with 1.8 years of hands-on experience and 4x Salesforce Certifications. Proven track record building and enhancing solutions across Apex, Lightning Web Components (LWC), Flow Automation, Integrations, and Agentforce AI Agents. Experienced in requirement refinement, data fixes, SIT/UAT deployment support, and delivering maintainable CRM enhancements.

CORE COMPETENCIES
- Salesforce Development: Apex (Triggers, Services, Batch), LWC, Wire Adapters, SOQL/SOSL (WITH USER_MODE), JavaScript ES6+
- AI & Agentforce: Agentforce Specialist, Topics, Invocable Apex Actions, Prompt Builder, CRM Grounding
- Salesforce Administration: Validation Rules, Page Layouts, FlexiPages, Reports, Dashboards, Permission Sets
- Integrations: REST API Callouts, Named Credentials, JSON Parsing, Integration Logging
- Release & Tools: Git, Azure DevOps, Change Sets, Workbench, Data Loader

PROFESSIONAL EXPERIENCE
Salesforce Developer — IBM
2025 – Present (1.8 Years Professional Experience)
- Developed and enhanced custom Salesforce functionality using Apex and LWC based on business user stories.
- Configured declarative automations including Record-Triggered Flows and complex Validation Rules.
- Supported SIT and UAT deployment releases, executing data fixes and validating packages.
- Collaborated with QA testers and business analysts to investigate data anomalies and defect tickets.

EDUCATION
- Bachelor of Engineering (B.E.) in Computer Science & Engineering`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-sky-500/30 bg-slate-950 shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Toolbar */}
        <div className="p-4 px-6 border-b border-slate-800 bg-slate-900 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-sky-400">
              SUHAS_P_IBM_RESUME
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-300 border border-sky-500/25">
              IBM · 2025 – Present
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save to PDF */}
            <button
              onClick={handlePrintPdf}
              className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-sky-500/20 active:scale-95 cursor-pointer"
              title="Print directly or save as PDF"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            {/* Direct Download File Button */}
            <button
              onClick={handleDownloadHtmlResume}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer"
              title="Download standalone resume file"
            >
              <ArrowDownToLine size={13} className="text-sky-400" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download HTML'}</span>
            </button>

            {/* Copy Text */}
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 ml-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 font-sans text-xs leading-relaxed space-y-6">
          <div className="p-6 sm:p-10 rounded-xl bg-slate-900 border border-sky-500/20 text-slate-200 shadow-2xl">
            {/* Header */}
            <div className="pb-4 mb-5 border-b-2 border-sky-500/40 flex flex-col sm:flex-row justify-between sm:items-end gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  SUHAS P
                </h1>
                <p className="text-sm font-bold mt-0.5 text-sky-400">
                  Salesforce Developer | 4x Certified
                </p>
                <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                  <Building size={12} className="text-sky-400" />
                  <span>IBM (2025 – Present) · Apex · LWC · Flow · Agentforce</span>
                </div>
              </div>
              <div className="text-[11px] sm:text-right space-y-0.5 font-mono text-slate-400">
                <div>Email: {PERSONAL_INFO.email}</div>
                <div>Location: Bengaluru, India</div>
                <div className="text-emerald-400 font-semibold">● 4x Salesforce Certified</div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 text-sky-300">
                Professional Summary
              </h2>
              <p className="text-slate-300">
                Salesforce Developer at <strong>IBM (2025 – Present)</strong> with{' '}
                <strong>1.8 years of professional enterprise experience</strong> and{' '}
                <strong>4x Salesforce Certifications</strong> (Agentforce Specialist, Platform Developer I,
                Administrator, and Associate). Proven engineering capability building and enhancing solutions across
                Apex, Lightning Web Components (LWC), Flow, and Integration patterns. Hands-on experience collaborating
                with business and testing teams, troubleshooting defects, performing data fixes, and supporting SIT/UAT
                deployments while strictly adhering to platform Governor limits and modern security standards (`WITH USER_MODE`).
              </p>
            </div>

            {/* Core Technical Competencies */}
            <div className="mb-5">
              <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 text-sky-300">
                Technical Competencies
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-slate-300">
                <div>
                  <strong>Salesforce Development:</strong> Apex (Triggers, Service classes, Batch), LWC, Wire Adapters,
                  SOQL/SOSL, JavaScript ES6+
                </div>
                <div>
                  <strong>AI & Agentforce:</strong> Agentforce Specialist, Topics, Invocable Apex Actions, Prompt
                  Templates, CRM Grounding
                </div>
                <div>
                  <strong>Administration & Config:</strong> Validation Rules, Page Layouts, Lightning FlexiPages,
                  Reports, Dashboards, Permission Sets
                </div>
                <div>
                  <strong>Integrations:</strong> REST API Callouts, JSON Serialization, Named Credentials, Webhooks,
                  Integration Logging
                </div>
                <div>
                  <strong>Release & Testing:</strong> Change Sets, Git, Azure DevOps, Workbench, Data Loader, Unit
                  Tests (85%+ Coverage)
                </div>
                <div>
                  <strong>SDLC Practice:</strong> Agile/Scrum, User Stories Refinement, SIT/UAT Staging, Defect Triage
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 text-sky-300">
                Professional Experience
              </h2>
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-sm text-white">
                    Salesforce Developer — IBM
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-sky-400">
                    2025 – Present
                  </span>
                </div>
                <p className="text-[11px] font-medium mb-2 text-slate-400">
                  Enterprise Salesforce Engagements · 1.8 Years Professional Experience
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>
                    Developed and enhanced custom Salesforce functionality using Apex and LWC based on business user
                    stories.
                  </li>
                  <li>
                    Built bulkified Apex triggers and service classes ensuring strict adherence to platform Governor
                    limits and WITH USER_MODE security.
                  </li>
                  <li>
                    Configured declarative automations including Record-Triggered Flows and complex Validation Rules.
                  </li>
                  <li>
                    Supported SIT and UAT deployment releases, executing data fixes and validating change sets.
                  </li>
                  <li>
                    Collaborated with QA testers and business analysts to investigate data anomalies and defect tickets.
                  </li>
                  <li>
                    Optimized SOQL and SOSL queries applying WITH USER_MODE and security checks on all operations.
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications & Education */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-slate-800 pb-1 mb-2 text-sky-300">
                Official Salesforce Certifications & Trailhead Recognition
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 mb-3 text-slate-300">
                <div className="flex items-center gap-1.5 font-semibold text-sky-400">
                  <span>★</span>
                  <span>Salesforce Certified Agentforce Specialist (2025)</span>
                </div>
                <div>• Salesforce Certified Platform Developer I (2024)</div>
                <div>• Salesforce Certified Administrator (2024)</div>
                <div>• Salesforce Certified Associate (2023)</div>
                <div className="text-amber-400 font-semibold">• Trailhead Double Star Ranger (2★ · 200+ Badges)</div>
                <div className="text-sky-300 font-semibold">• Agentblazer Legend Badge (AI Honor)</div>
              </div>
              <div className="text-slate-400">
                <strong>Education:</strong> Bachelor of Engineering (B.E.) in Computer Science & Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
