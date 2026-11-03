import React, { useState } from 'react';
import { X, Printer, Copy, Check, Phone, Mail, MapPin, Download } from 'lucide-react';
import { MIDHUN_INFO, WORK_HISTORY, PROJECTS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const featuredProjects = PROJECTS.filter((project) => project.featured).slice(0, 4);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const resumeText = [
      MIDHUN_INFO.name,
      MIDHUN_INFO.title,
      `Phone: ${MIDHUN_INFO.phone} | Email: ${MIDHUN_INFO.email}`,
      `LinkedIn: ${MIDHUN_INFO.linkedIn} | GitHub: ${MIDHUN_INFO.github}`,
      '',
      'PROFILE SUMMARY',
      MIDHUN_INFO.summary,
      '',
      'EXPERIENCE',
      ...WORK_HISTORY.map((item) => {
        const lines = [`${item.role}, ${item.company} (${item.period}) | ${item.location}`];
        if (item.summary) lines.push(item.summary);
        item.achievements.forEach((achievement) => lines.push(`- ${achievement}`));
        return lines.join('\n');
      }),
      '',
      'SKILLS',
      ...TECHNICAL_SKILLS.map((category) => `${category.category}: ${category.skills.join(', ')}`),
      '',
      'PROJECTS',
      ...featuredProjects.map((project) => {
        const lines = [`${project.title} - ${project.genre}`, project.tagline];
        project.keyContributions.slice(0, 2).forEach((item) => lines.push(`- ${item}`));
        return lines.join('\n');
      })
    ].join('\n');

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0c0e14] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col text-slate-100">
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e111a]/95 border-b border-slate-800 shrink-0 relative">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">Resume / CV</span>
            <span className="text-xs text-cyan-400 font-mono">Midhun Babu B</span>
          </div>

          <div className="flex items-center gap-2">
                        <a
              href={MIDHUN_INFO.resumePdf}
              download="MIDHUN_BABU_Resume.pdf"
              className="px-2.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded transition-colors flex items-center gap-1.5 text-xs font-mono shadow-sm hover-lift"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
<button
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors hidden sm:flex items-center gap-1.5 text-xs font-mono hover-lift"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors flex items-center gap-1.5 text-xs font-mono hover-lift"
              title="Copy Text Resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#090a0f]/95 text-slate-200 text-xs sm:text-sm relative">
          <div className="border-b border-slate-800 pb-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  {MIDHUN_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 font-mono">
                  {MIDHUN_INFO.title}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-300 space-y-0.5 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  <span>{MIDHUN_INFO.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span>{MIDHUN_INFO.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{MIDHUN_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              {MIDHUN_INFO.summary}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Experience
            </h2>
            <div className="space-y-3">
              {WORK_HISTORY.map((item) => (
                <div key={`${item.role}-${item.company}`} className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg space-y-2 hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white text-sm">{item.role}, {item.company}</span>
                    <span className="text-xs font-mono text-slate-400">{item.period} | {item.location}</span>
                  </div>
                  {item.summary && <p className="text-xs text-slate-300">{item.summary}</p>}
                  {item.achievements.length > 0 && (
                    <ul className="space-y-1 text-slate-300 list-disc list-inside">
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {TECHNICAL_SKILLS.map((category) => (
                <div key={category.category} className="p-2.5 bg-slate-900/50 border border-slate-800 rounded hover-lift">
                  <strong className="text-white block font-mono text-[11px] text-cyan-300">{category.category}</strong>
                  <span className="text-slate-300 text-xs">{category.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Selected Projects
            </h2>
            <div className="space-y-3 text-xs">
              {featuredProjects.map((project) => (
                <div key={project.id} className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1 hover-lift">
                  <div className="font-bold text-white text-xs">{project.title} - {project.genre}</div>
                  <p className="text-slate-300">{project.tagline}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0e111a]/95 border-t border-slate-800 shrink-0 text-xs relative">
          <span className="text-slate-400 font-mono truncate">
            {MIDHUN_INFO.email} | {MIDHUN_INFO.phone}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
