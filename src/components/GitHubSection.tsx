import React from 'react';
import { Github, Star, GitFork, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GITHUB_REPOSITORIES, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <span>Open Source & Prototypes</span>
              <span>·</span>
              <span>Transparent Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Building in Public
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Explore open repositories containing clean Apex architectures, LWC wire implementations,
              and Agentforce AI prototypes.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors self-start md:self-auto"
          >
            <Github size={15} />
            <span>Follow on GitHub</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {GITHUB_REPOSITORIES.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-sky-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-white font-mono text-sm font-bold group-hover:text-sky-300 transition-colors">
                    <FolderGit2 size={16} className="text-sky-400" />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star size={12} className="text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span>{repo.updated}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
