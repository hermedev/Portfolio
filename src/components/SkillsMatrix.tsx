import React from 'react';
import { Cpu, Terminal, Radio, Gauge, Boxes, GitBranch, Layers } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Terminal className="w-4 h-4 text-emerald-400" />; // Programming
      case 1: return <Radio className="w-4 h-4 text-cyan-400" />; // Networking & Multiplayer
      case 2: return <Boxes className="w-4 h-4 text-purple-400" />; // Unity Skill Set
      case 3: return <Gauge className="w-4 h-4 text-amber-400" />; // Performance and Optimization
      case 4: return <GitBranch className="w-4 h-4 text-blue-400" />; // Version Control
      case 5: return <Layers className="w-4 h-4 text-rose-400" />; // Other Engines
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-16 py-16 sm:py-20 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Practical skills applied across commercial game releases at Carina Softlabs Inc and independent prototypes.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0c0e14] border border-slate-800 rounded-xl space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(idx)}
                  <h3 className="text-sm font-bold font-display text-white">{cat.category}</h3>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-2.5 py-1 bg-slate-900 border border-slate-800/80 rounded text-xs font-mono text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
