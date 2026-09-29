import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory =
      activeCategory === 'all' || skill.category === activeCategory;
    const matchesGroup = activeGroup === 'all' || skill.group === activeGroup;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesGroup && matchesSearch;
  });

  const categoryCounts = {
    all: SKILLS_DATA.length,
    'hands-on': SKILLS_DATA.filter((s) => s.category === 'hands-on').length,
    'working-knowledge': SKILLS_DATA.filter((s) => s.category === 'working-knowledge').length,
    'currently-exploring': SKILLS_DATA.filter((s) => s.category === 'currently-exploring').length,
  };

  const getCategoryBadge = (category: SkillCategory) => {
    switch (category) {
      case 'hands-on':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
            <CheckCircle2 size={12} />
            <span>Hands-on</span>
          </span>
        );
      case 'working-knowledge':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-400">
            <BookOpen size={12} />
            <span>Working Knowledge</span>
          </span>
        );
      case 'currently-exploring':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-400">
            <Sparkles size={12} />
            <span>Currently Exploring</span>
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <span>Capabilities Matrix</span>
            <span>·</span>
            <span>Transparent Depth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Accurately delineated across hands-on enterprise application, working knowledge, and active technology explorations.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 mb-8">
          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'All Skills', count: categoryCounts.all },
              { id: 'hands-on', label: 'Hands-on', count: categoryCounts['hands-on'] },
              { id: 'working-knowledge', label: 'Working Knowledge', count: categoryCounts['working-knowledge'] },
              { id: 'currently-exploring', label: 'Currently Exploring', count: categoryCounts['currently-exploring'] },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-sky-500 text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-sm ${
                    activeCategory === tab.id
                      ? 'bg-slate-950/20 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-auto min-w-0 md:min-w-[220px]">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search skill (e.g. Apex, LWC, Flow)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white tracking-tight">{skill.name}</h4>
                  {skill.tag && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-slate-800 text-sky-300 border border-slate-700/70">
                      {skill.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{skill.description}</p>
              </div>

              <div className="pt-2.5 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">{skill.group}</span>
                {getCategoryBadge(skill.category)}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 p-6 rounded-xl border border-slate-800 bg-slate-900/20 text-slate-400 text-xs">
            No matching skills found for "{searchQuery}". Try searching for Apex, Flow, LWC, or REST.
          </div>
        )}
      </div>
    </section>
  );
};
