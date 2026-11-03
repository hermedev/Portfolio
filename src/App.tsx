/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { VideoModal } from './components/VideoModal';
import { PROJECTS } from './data/portfolioData';
import { Mail } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'about' | 'games'>('about');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#games') {
        setActiveView('games');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#skills' || hash === '#experience' || hash === '#contact') {
        setActiveView('about');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectView = (view: 'about' | 'games', scrollToId?: string) => {
    setActiveView(view);
    if (view === 'games') {
      window.location.hash = '#games';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = scrollToId ? `#${scrollToId}` : '#about';
      if (scrollToId) {
        setTimeout(() => {
          const el = document.getElementById(scrollToId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenContact = () => {
    if (activeView !== 'about') {
      setActiveView('about');
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Navbar with Instant View Mode Switching */}
      <Navbar
        activeView={activeView}
        onSelectView={handleSelectView}
        onOpenContact={handleOpenContact}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'about' ? (
          /* ============================================================ */
          /* VIEW 1: ABOUT ME & PROFILE PAGE (Lightweight & Focused)      */
          /* ============================================================ */
          <>
            {/* Hero Intro */}
            <Hero
              onOpenContact={handleOpenContact}
                    onViewGames={() => handleSelectView('games')}
              onNavigateToSection={(id) => handleSelectView('about', id)}
            />

            {/* Featured Games Teaser */}
            <ProjectsSection
              onSelectProject={(id) => setSelectedProjectId(id)}
              onOpenVideo={(url, title) => setActiveVideo({ url, title })}
              onViewAllGames={() => handleSelectView('games')}
              isTeaser={true}
            />

            {/* Technical Skills */}
            <SkillsMatrix />

            {/* Work Experience & Education */}
            <ExperienceTimeline />

            {/* Contact & Inquiries */}
            <ContactSection />
          </>
        ) : (
          /* ============================================================ */
          /* VIEW 2: DEDICATED GAMES SHOWCASE PAGE                        */
          /* ============================================================ */
          <div className="space-y-12">
            {/* Full Games Grid with Filters, WebGL & Videos */}
            <ProjectsSection
              onSelectProject={(id) => setSelectedProjectId(id)}
              onOpenVideo={(url, title) => setActiveVideo({ url, title })}
              isTeaser={false}
            />

            {/* Bottom Quick Contact Callout */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
              <div className="p-6 bg-[#0c0e14] border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-base font-bold font-display text-white">
                    Need a Unity Game Developer for Your Studio or Project?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Experienced with Photon Fusion, Mirror, Mobile URP, and 2D/3D physics gameplay.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleSelectView('about', 'contact')}
                    className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Get in Touch with Midhun</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={handleOpenContact}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <VideoModal
        isOpen={activeVideo !== null}
        videoUrl={activeVideo?.url || null}
        title={activeVideo?.title || ''}
        onClose={() => setActiveVideo(null)}
      />


    </div>
  );
}
