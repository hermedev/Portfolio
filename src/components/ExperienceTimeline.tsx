import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { WORK_HISTORY } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-16 py-16 sm:py-20 bg-[#090a0f] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Work History &amp; Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Experience &amp; Background
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Professional track record developing commercial games at Carina Softlabs Inc, intensive software training at Brototype, and education.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 relative">
          {WORK_HISTORY.map((item, idx) => {
            const hasDetails = item.type !== 'Education' && Boolean(
              (item.summary && item.summary.trim().length > 0) ||
              (item.achievements && item.achievements.length > 0) ||
              (item.technologies && item.technologies.length > 0)
            );

            return (
              <div key={idx} className="relative z-10 pl-8 sm:pl-10 space-y-2">
                {/* Connecting line to next item (stops at the last card) */}
                {idx < WORK_HISTORY.length - 1 && (
                  <div className="absolute left-3 sm:left-4 top-6 -bottom-6 w-0.5 bg-slate-800 -translate-x-1/2 pointer-events-none" />
                )}

                {/* Timeline Point Node Icon */}
                <div
                  className={`absolute left-3 sm:left-4 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0c0e14] border-2 ring-4 ring-[#090a0f] flex items-center justify-center z-10 ${
                    item.type === 'Work'
                      ? 'border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.35)]'
                      : item.type === 'Course'
                      ? 'border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.35)]'
                      : 'border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.35)]'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.type === 'Work'
                        ? 'bg-cyan-400'
                        : item.type === 'Course'
                        ? 'bg-emerald-400'
                        : 'bg-amber-400'
                    }`}
                  />
                </div>

                <div className={`p-4 sm:p-5 bg-[#0c0e14] border border-slate-800 rounded-xl hover:border-slate-700 transition-colors ${hasDetails ? 'space-y-3' : 'space-y-0'}`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 ${hasDetails ? 'border-b border-slate-800/80 pb-2.5' : 'border-b-0 pb-0'}`}>
                    <div>
                      <div className="flex items-center gap-2">
                        {item.type === 'Work' && <Briefcase className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                        {item.type === 'Course' && <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        {item.type === 'Education' && <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                        <h3 className="text-base font-bold font-display text-white no-underline tracking-normal">
                          {item.role}
                        </h3>
                      </div>
                      <div className="text-xs font-medium text-cyan-400 mt-0.5 no-underline">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                        {item.period}
                      </span>
                      <span className="text-slate-600">&bull;</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                {hasDetails && item.summary && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                )}

                {/* Experience highlights */}
                {hasDetails && item.achievements.length > 0 && (
                  <div className="space-y-2 pt-0.5">
                    <ul className="space-y-2 text-xs text-slate-300">
                      {item.achievements.map((ach, aidx) => (
                        <li key={aidx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(6,182,212,0.5)]" />
                          <span className="flex-1">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {hasDetails && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
