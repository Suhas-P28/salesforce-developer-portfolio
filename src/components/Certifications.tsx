import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, X, Sparkles, Star, Zap, Flame, Trophy } from 'lucide-react';
import { CERTIFICATIONS_DATA, TRAILHEAD_DATA } from '../data/portfolioData';
import { Certification } from '../types/portfolio';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 font-mono">
            <span>Verified Credentials & Ecosystem Recognition</span>
            <span>·</span>
            <span>4x Certified & Trailhead Leader</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Trailhead Achievements
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Official proctored certifications and high-tier Trailhead credentials validating expertise across
            autonomous Agentforce AI, programmatic Apex & LWC development, and enterprise administration.
          </p>
        </div>

        {/* 4 Official Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isAgentforce = cert.id === 'agentforce-specialist';
            return (
              <div
                key={cert.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between p-6 shadow-xl relative overflow-hidden group ${
                  isAgentforce
                    ? 'border-sky-400/50 bg-gradient-to-b from-sky-950/40 via-slate-900/80 to-slate-900/90 ring-1 ring-sky-400/30'
                    : 'border-slate-800 bg-slate-900/60 hover:border-sky-500/40 hover:bg-slate-900/90'
                }`}
              >
                {isAgentforce && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-sky-500 to-blue-600 text-slate-950 text-[10px] font-extrabold uppercase font-mono tracking-wider rounded-bl-lg shadow-sm">
                    Featured
                  </div>
                )}

                <div>
                  {/* Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isAgentforce
                          ? 'bg-sky-500/20 border-sky-400/40 text-sky-300 shadow-md shadow-sky-500/20'
                          : 'bg-slate-800/80 border-slate-700/60 text-sky-400'
                      }`}
                    >
                      {isAgentforce ? <Sparkles size={24} /> : <Award size={24} />}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 size={11} />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="text-[11px] font-mono text-slate-400 mb-1">{cert.issuer}</div>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Description preview */}
                  <p className="mt-2.5 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Validated Skills Tags */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">Core Skills</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsValidated.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Metadata and Verification Modal Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{cert.issueDate}</span>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>Verify ID</span>
                    <ShieldCheck size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trailhead & Agentblazer Legend Showcase Card */}
        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/20 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-sky-400 to-indigo-500" />

          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left: Trailhead Rank & Stats */}
            <div className="lg:col-span-4 space-y-4 min-w-0 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold">
                <Trophy size={14} className="text-amber-400" />
                <span>Trailhead Elite Ranking</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Double Star Ranger</span>
                  <span className="inline-flex items-center text-amber-400 text-lg">
                    <Star size={20} className="fill-amber-400" />
                    <Star size={20} className="fill-amber-400" />
                  </span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Demonstrating continuous hands-on learning and technical excellence across the Salesforce ecosystem.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Badges Earned</div>
                  <div className="text-xl font-black text-white mt-0.5">{TRAILHEAD_DATA.badgesCount}</div>
                  <div className="text-[10px] text-sky-400 font-mono mt-0.5">High Milestones</div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Trailhead Points</div>
                  <div className="text-xl font-black text-white mt-0.5">{TRAILHEAD_DATA.pointsCount}</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Double Star Tier</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={TRAILHEAD_DATA.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors w-full justify-center shadow-xs"
                >
                  <ExternalLink size={13} className="text-sky-400" />
                  <span>View Official Trailhead Profile</span>
                </a>
              </div>
            </div>

            {/* Right: Featured Agentblazer Legend Badge */}
            <div className="lg:col-span-8 min-w-0 w-full">
              <div className="p-6 rounded-2xl border border-sky-400/40 bg-slate-950/80 backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20 flex items-center justify-center">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-300">
                        <Sparkles size={28} className="text-sky-300 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-black text-white tracking-tight">
                          Agentblazer Legend
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                          Special Honor
                        </span>
                      </div>
                      <div className="text-xs font-mono text-sky-400 mt-0.5">
                        Premier Salesforce AI & Agentforce Credential Badge
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
                    Verified Earner
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {TRAILHEAD_DATA.featuredBadge.description}
                </p>

                {/* Verified Skills Grid */}
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">
                    Verified Agentblazer Capabilities
                  </div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {TRAILHEAD_DATA.featuredBadge.keySkills.map((skill) => (
                      <div
                        key={skill}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-200 flex items-center gap-1.5"
                      >
                        <Zap size={12} className="text-sky-400 shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Superbadges bar */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="text-slate-400">Accomplished Superbadges:</span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/25">
                    Apex Specialist
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                    Process Automation Specialist
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/25">
                    Developer Super Set
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credential Verification Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs"
              onClick={() => setSelectedCert(null)}
            />
            <div className="relative w-full max-w-md rounded-2xl border border-sky-500/30 bg-slate-950 p-6 shadow-2xl z-10 modal-container">
              <div className="flex items-start justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{selectedCert.name}</h4>
                    <span className="text-xs text-emerald-400 font-mono">Status: Verified Active</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300 mb-6">
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Credential ID:</span>
                  <span className="text-white font-semibold">{selectedCert.credentialId}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Issuing Body:</span>
                  <span className="text-sky-300">Salesforce / Webassessor</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Holder:</span>
                  <span className="text-white font-semibold">Suhas P</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400">Trailhead Rank:</span>
                  <span className="text-amber-300 font-semibold">Double Star Ranger (2★)</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs text-center transition-colors shadow-md"
                >
                  Trailhead Verification Portal
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="py-2 px-4 rounded-xl border border-slate-800 text-slate-300 hover:text-white text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
