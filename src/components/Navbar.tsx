import React, { useState } from 'react';
import { Menu, X, Gamepad2, ArrowUpRight, FileText, User, Mail } from 'lucide-react';
import { MIDHUN_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeView: 'about' | 'games';
  onSelectView: (view: 'about' | 'games', scrollToId?: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onSelectView,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#08090d]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onSelectView('about')}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Gamepad2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-bold block leading-none">Midhun Babu</span>
            <span className="text-[10px] font-mono text-cyan-400 font-normal">Unity Game Developer</span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSelectView('about')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeView === 'about'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </button>

          <button
            onClick={() => onSelectView('games')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeView === 'games'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Games</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={MIDHUN_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            Resume
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile View Toggle & Menu */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={() => onSelectView(activeView === 'about' ? 'games' : 'about')}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex items-center gap-1"
          >
            {activeView === 'about' ? <Gamepad2 className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            <span>{activeView === 'about' ? 'Games' : 'About Me'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c0e14] px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            <button
              onClick={() => {
                onSelectView('about');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 ${
                activeView === 'about'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </button>

            <button
              onClick={() => {
                onSelectView('games');
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 ${
                activeView === 'games'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Games</span>
            </button>
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <a
              href={MIDHUN_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>View Resume / CV</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact / Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
