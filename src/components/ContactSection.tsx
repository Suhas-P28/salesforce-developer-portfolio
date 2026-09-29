import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, Check, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Discuss Salesforce Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFullMessage, setCopiedFullMessage] = useState(false);

  const subjectOptions = [
    'Discuss Salesforce Opportunity',
    'Consulting / Project Inquiry',
    'Technical Interview Invitation',
    'General Networking',
  ];

  const getGmailUrl = () => {
    const su = encodeURIComponent(`[Salesforce Inquiry] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Suhas,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n--\nSent from Suhas P Salesforce Developer Portfolio`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=suhas123.p@gmail.com&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(`[Salesforce Inquiry] ${formData.subject} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Suhas,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    return `mailto:suhas123.p@gmail.com?subject=${su}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mail client launch
    window.location.href = getMailtoUrl();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('suhas123.p@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: suhas123.p@gmail.com\nFrom: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedFullMessage(true);
    setTimeout(() => setCopiedFullMessage(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 font-mono">
                <span>Start a Conversation</span>
                <span>·</span>
                <span>Direct Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Interested in Salesforce development, CRM automation, integrations, or AI-powered
                Agentforce solutions? Get in touch directly at{' '}
                <strong className="text-white font-semibold">suhas123.p@gmail.com</strong>.
              </p>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl border border-sky-500/25 bg-sky-950/20 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-sky-300 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Salesforce Developer at IBM (2025 - Present)</span>
              </div>
              <p className="text-slate-400">
                1.8 Years Experience · Bengaluru, India (Open to Remote, Hybrid, or Relocation).
              </p>
            </div>

            {/* Direct Contact links */}
            <div className="space-y-3 pt-2">
              {/* Email row with quick copy and mailto */}
              <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/70 flex items-center justify-between shadow-xs min-w-0 w-full gap-2">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <a
                      href="mailto:suhas123.p@gmail.com"
                      className="text-xs font-semibold text-white hover:text-sky-300 transition-colors truncate block"
                    >
                      suhas123.p@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={12} className="text-emerald-400" /> : 'Copy'}
                  </button>
                  <a
                    href="mailto:suhas123.p@gmail.com"
                    className="p-1.5 rounded-md text-[11px] font-mono border border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 transition-colors"
                    title="Open mail client"
                  >
                    <Send size={12} />
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/suhas-p-5a273424a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/70 hover:border-sky-500/40 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                      linkedin.com/in/suhas-p-5a273424a
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-white" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Suhas-P28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/70 hover:border-sky-500/40 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                      github.com/Suhas-P28
                    </div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-sky-500/25 bg-slate-900/90 backdrop-blur-md shadow-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Email Prompt Prepared!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message to <strong className="text-white">suhas123.p@gmail.com</strong> has been initiated. If your mail app did not open automatically, choose one of the direct options below:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {/* Open in Gmail web */}
                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                    >
                      <Mail size={14} />
                      <span>Open Directly in Gmail</span>
                      <ExternalLink size={12} />
                    </a>

                    {/* Open default mail client */}
                    <a
                      href={getMailtoUrl()}
                      className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <span>Default Mail App</span>
                    </a>

                    {/* Copy text */}
                    <button
                      onClick={handleCopyFullMessage}
                      className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedFullMessage ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      <span>{copiedFullMessage ? 'Copied Details' : 'Copy Message'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-sky-400 hover:underline inline-block cursor-pointer"
                    >
                      ← Edit message details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-white">Direct Message to Suhas</h3>
                      <p className="text-xs text-slate-400">Delivered directly to suhas123.p@gmail.com</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Active Inbox
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Inquiry Topic / Subject
                    </label>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {subjectOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: opt })}
                          className={`p-2 rounded-lg text-left text-[11px] font-mono transition-colors border ${
                            formData.subject === opt
                              ? 'bg-sky-500/20 border-sky-400 text-sky-200 font-semibold'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project scope, role requirements, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-sky-500/20"
                    >
                      <Send size={13} />
                      <span>Send to suhas123.p@gmail.com</span>
                    </button>

                    <a
                      href={getGmailUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl border border-sky-500/40 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Mail size={13} className="text-sky-400" />
                      <span>Open in Gmail</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
