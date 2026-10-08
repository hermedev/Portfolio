import React from 'react';
import { FileText, Mail, MapPin, Github, Linkedin, Gamepad2, ArrowUpRight } from 'lucide-react';
import { MIDHUN_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onViewGames?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume, onViewGames }) => {
  return (
    <section id="about" className="relative py-14 sm:py-20 bg-engine-grid border-b border-slate-800/80 overflow-hidden">
      {/* Subtle calm ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo & Identity Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
            {/* Photo */}
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/20 relative z-10">
                <img
                  src={MIDHUN_INFO.photo}
                  alt={MIDHUN_INFO.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl blur-lg -z-0" />
            </div>
          </div>

          {/* Bio & Intro Details */}
          <div className="lg:col-span-8 space-y-5 text-center sm:text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">
                Hello, I'm
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
                {MIDHUN_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl text-cyan-400 font-semibold font-display">
                Unity Game Developer &middot; Mobile &amp; WebGL Specialist
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {MIDHUN_INFO.summary}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Trivandrum, India</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              {onViewGames ? (
                <button
                  onClick={onViewGames}
                  className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-950/40 transition-colors inline-flex items-center gap-2 text-xs hover-lift"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>View Games</span>
                </button>
              ) : (
                <a
                  href="#games"
                  className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-950/40 transition-colors inline-flex items-center gap-2 text-xs hover-lift"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>View Games</span>
                </a>
              )}

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold rounded-lg transition-colors inline-flex items-center gap-2 text-xs hover-lift"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>View CV / Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 text-slate-300 hover:text-white text-xs font-semibold transition-colors inline-flex items-center gap-1"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Key profile links */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
              <a
                href={`mailto:${MIDHUN_INFO.email}`}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email</span>
              </a>

              <a
                href={MIDHUN_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={MIDHUN_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

