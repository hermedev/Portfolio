import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Youtube, Globe } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'contributions'>('overview');
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0c0e14] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e111a] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold font-display text-white truncate max-w-md">
              {project.title}
            </h2>
            <span className="hidden sm:inline text-xs text-cyan-400 font-mono">
              ({project.company ? project.company : project.category})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Hero Banner Visual */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 bg-slate-950/85 backdrop-blur border border-slate-800 rounded text-xs font-mono text-cyan-400">
                {project.genre}
              </span>
              <div className="flex gap-2">
                {project.platforms.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 bg-slate-900/90 border border-slate-800 rounded text-[11px] font-mono text-slate-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'overview'
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'contributions'
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Contributions
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase text-slate-400">About the Project</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-3 pt-1">
                <h3 className="text-xs font-mono uppercase text-slate-400">Development Notes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architectureHighlights.map((arch, i) => (
                    <div key={i} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
                      <h4 className="text-xs font-bold text-cyan-400 font-display">{arch.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{arch.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-mono uppercase text-slate-400">Technologies Used</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Project contributions */}
          {activeTab === 'contributions' && (
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase text-slate-400">What I Worked On</h3>
              <ul className="space-y-2.5 text-xs text-slate-200">
                {project.keyContributions.map((contrib, i) => (
                  <li key={i} className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0">&bull;</span>
                    <span className="leading-relaxed">{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External Links Bar */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.links.map((lnk, idx) => {
                const isYoutube = lnk.type === 'youtube';
                const isWebgl = lnk.type === 'webgl' || lnk.type === 'unityplay';

                return (
                  <a
                    key={idx}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                      isYoutube
                        ? 'bg-red-600/20 text-red-300 border-red-500/40 hover:bg-red-600/30'
                        : isWebgl
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
                        : 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {isYoutube && <Youtube className="w-3.5 h-3.5 text-red-400" />}
                    {isWebgl && <Globe className="w-3.5 h-3.5 text-cyan-400" />}
                    <span>{lnk.label}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
