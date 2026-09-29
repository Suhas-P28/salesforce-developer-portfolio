import React, { useState } from 'react';
import { ArrowUpRight, Play, Github, Code, Layers, Bot, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { PortfolioProject, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: ProjectCategory[] = ['all', 'Salesforce', 'Apex', 'LWC', 'Agentforce', 'Integration'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category.includes(activeCategory);
  });

  const getProjectIcon = (category: ProjectCategory[]) => {
    if (category.includes('Agentforce')) return <Bot size={18} className="text-sky-400" />;
    if (category.includes('Integration')) return <Globe size={18} className="text-emerald-400" />;
    if (category.includes('LWC')) return <Layers size={18} className="text-indigo-400" />;
    return <Code size={18} className="text-sky-400" />;
  };

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <span>Technical Portfolios</span>
              <span>·</span>
              <span>End-to-End Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Salesforce Projects
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Complete Salesforce applications, Service Cloud frameworks, Agentforce AI prototypes, and LWC analytics.
              Transparently labeled as self-created portfolio demonstrations.
            </p>
          </div>

          {/* Interactive Project Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer capitalize ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-sky-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div className="p-6">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getProjectIcon(project.category)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View Details & Demo</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-2">
                  {project.demoType && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs flex items-center gap-1 transition-colors"
                      title="Launch interactive demo"
                    >
                      <Play size={11} className="fill-current" />
                      <span className="text-[10px] font-mono">Demo</span>
                    </button>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="View repository on GitHub"
                    title="View GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
