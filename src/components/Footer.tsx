import React from 'react';
import { Gamepad2, Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { MIDHUN_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold font-display text-sm tracking-wide">
                Midhun Babu B
              </div>
              <div className="text-[11px] text-cyan-400/90 font-mono">
                Unity Game Developer &middot; Trivandrum, India
              </div>
            </div>
          </div>

          {/* Direct Contact & Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${MIDHUN_INFO.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300"
              title="Email Midhun"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{MIDHUN_INFO.email}</span>
            </a>

            <a
              href={`tel:${MIDHUN_INFO.phone}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300"
              title="Call Midhun"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{MIDHUN_INFO.phone}</span>
            </a>

            <a
              href="https://wa.me/917560855307"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 text-emerald-400 transition-colors flex items-center gap-1.5"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={MIDHUN_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a
              href={MIDHUN_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 shrink-0"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 mt-6 border-t border-slate-800/60 text-center text-[11px] text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Midhun Babu B &middot; Portfolio for Unity Game Development
        </div>
      </div>
    </footer>
  );
};
