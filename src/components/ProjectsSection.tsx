import React, { useState } from 'react';
import { Gamepad2, Youtube, Globe, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenVideo: (videoUrl: string, title: string) => void;
  onViewAllGames?: () => void;
  isTeaser?: boolean;
}

type Filter = 'All' | 'Studio Games' | 'Multiplayer' | 'WebGL / Playable' | '3D Games' | '2D Games';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenVideo,
  onViewAllGames,
  isTeaser = false
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All');

  // In teaser mode, show the strongest professional work first.
  const displayProjects = isTeaser
    ? PROJECTS.slice(0, 3)
    : PROJECTS.filter((p) => {
        if (selectedFilter === 'All') return true;
        if (selectedFilter === 'Studio Games') return p.category === 'Studio Project';
        if (selectedFilter === 'Multiplayer') {
          return p.platforms.includes('Multiplayer') || p.techStack.some(t => t.toLowerCase().includes('fusion') || t.toLowerCase().includes('pun') || t.toLowerCase().includes('mirror'));
        }
        if (selectedFilter === 'WebGL / Playable') {
          return p.platforms.some(plat => plat.toLowerCase().includes('webgl')) || p.links.some(l => l.type === 'webgl' || l.type === 'unityplay');
        }
        if (selectedFilter === '3D Games') {
          return p.genre.includes('3D') || p.platforms.includes('3D Physics');
        }
        if (selectedFilter === '2D Games') {
          return p.genre.includes('2D') || p.platforms.includes('2D Platformer');
        }
        return true;
      });

  return (
    <section id="games" className="py-14 sm:py-20 bg-[#090a0f] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" />
              <span>{isTeaser ? 'Featured Work' : 'Projects'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {isTeaser ? 'Professional Projects' : 'Games & Prototypes'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              A focused look at Unity work across studio projects, playable WebGL builds, and learning prototypes.
            </p>
          </div>

          {/* Filter Bar (Only in full view) */}
          {!isTeaser ? (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
              {(['All', 'Studio Games', 'Multiplayer', 'WebGL / Playable', '3D Games', '2D Games'] as Filter[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedFilter === tab
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          ) : (
            onViewAllGames && (
              <button
                onClick={onViewAllGames}
                className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )
          )}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => {
            const youtubeLink = project.links.find(l => l.type === 'youtube');
            const webglLink = project.links.find(l => l.type === 'webgl' || l.type === 'unityplay');

            return (
              <div
                key={project.id}
                className="group bg-[#0c0e14] border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Media Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border backdrop-blur ${
                      project.category === 'Studio Project'
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60 font-semibold'
                        : 'bg-slate-950/80 text-slate-300 border-slate-800'
                    }`}>
                      {project.company || project.category}
                    </span>
                  </div>

                  {/* Genre Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-400 font-semibold truncate max-w-[70%]">{project.genre}</span>
                    <span className="text-slate-300 text-[10px] bg-black/60 px-1.5 py-0.5 rounded">{project.platforms[0]}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold font-display text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] text-slate-500 font-mono self-center">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      {/* Play WebGL Button */}
                      {webglLink && (
                        <a
                          href={webglLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 px-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Play WebGL</span>
                        </a>
                      )}

                      {/* Watch Video Button */}
                      {youtubeLink && (
                        <button
                          onClick={() => onOpenVideo(youtubeLink.url, project.title)}
                          className="flex-1 py-1.5 px-2.5 bg-red-600/90 hover:bg-red-500 text-white font-semibold rounded text-xs flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          <span>Watch Video</span>
                        </button>
                      )}

                      {/* Details Button */}
                      <button
                        onClick={() => onSelectProject(project.id)}
                        className={`py-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-medium rounded transition-colors ${
                          !webglLink && !youtubeLink ? 'w-full' : ''
                        }`}
                      >
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner in Teaser mode */}
        {isTeaser && onViewAllGames && (
          <div className="pt-2 flex justify-center">
            <button
              onClick={onViewAllGames}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-400 hover:text-cyan-300 font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Explore All Projects &rarr;</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
