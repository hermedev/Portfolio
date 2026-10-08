import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { MIDHUN_INFO, WORK_HISTORY, PROJECTS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const resumeText = `MIDHUN BABU B
Unity Game Developer
Phone: ${MIDHUN_INFO.phone} | Email: ${MIDHUN_INFO.email}
LinkedIn: ${MIDHUN_INFO.linkedIn} | GitHub: ${MIDHUN_INFO.github}

PROFILE SUMMARY:
Unity Game Developer with nearly 2 years of experience building 2D and 3D games for mobile and WebGL. Specializing in multiplayer architecture, networked gameplay, and performance optimization using C#, Photon Fusion, and Mirror.

PROFESSIONAL EXPERIENCE:
Unity Game Developer, Carina Softlabs Inc (11/2024 – 08/2026) | Indore, India

COURSES:
Unity Game Development, Brototype (2023 – 2024) | Trivandrum, India

EDUCATION:
Higher Secondary (Commerce), G.H.S.S. Kilimanoor (2021 – 2023) | Trivandrum, India

TECHNICAL SKILLS:
• Programming: C#, OOP, Data Structures & Algorithms
• Networking & Multiplayer: Photon PUN, Photon Fusion, Mirror
• Performance & Optimization: Unity Profiler, Object Pooling, Occlusion Culling, Addressables, Sprite Atlas
• Unity Skill Set: 2D/3D Game Development, Multiplayer, AR/VR, URP, HDRP, Cinemachine, Timeline, Animator
• Version Control: Git, GitHub, Perforce
• Other Engines: Terra Studio, Roblox

PROJECTS:
• Tokyo Ludo — Unity, Multiplayer Board Game, Carina Softlabs Inc.
  - Led the migration of the multiplayer architecture from Photon PUN (Master Client) to Photon Fusion Shared Mode, redesigning networked state synchronization, session management, and reconnection handling.
  - Built the full game UI and gameplay flow, including turn management and state transitions.
  - Fixed core multiplayer bugs, improving session stability.

• Warvox — Unity, MMORPG, Carina Softlabs Inc.
  - Built the Governor and Castle PvP system, including contract creation, defense terms, and validation.
  - Implemented zone-based dungeon instancing and a proximity-based voice chat system.
  - Worked on weapon skill balancing by adjusting gameplay values and integrating VFX/SFX.

• Cheezy Wheelz — Unity, 3D Open-World Delivery, Carina Softlabs Inc.
  - Built the core gameplay loop: a time-based food delivery system where delivery time and food temperature determine rewards.
  - Extended a third-party motorcycle physics package with wheelie and drift mechanics.
  - Developed AI pedestrian and traffic systems with intersection detection and dynamic path variation.
  - Designed a real-time GPS and minimap navigation system for delivery routes.
  - Optimized mobile performance using object pooling, Addressables, and dynamic NavMesh management.

• 2048 Game — Unity, 2D Board Game (WebGL)
  - Built a complete 2048 clone for WebGL with tile-merging logic, grid system, and keyboard controls.
  - Added high score tracking, game-over detection, restart handling, and smooth tile animations.
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0c0e14] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col text-slate-100">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e111a] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">Resume / CV</span>
            <span className="text-xs text-cyan-400 font-mono">Midhun Babu B</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors hidden sm:flex items-center gap-1.5 text-xs font-mono"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors flex items-center gap-1.5 text-xs font-mono"
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

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#090a0f] text-slate-200 text-xs sm:text-sm">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

            <div className="pt-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                Profile Summary
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unity Game Developer with nearly 2 years of experience building 2D and 3D games for mobile and WebGL. Specializing in multiplayer architecture, networked gameplay, and performance optimization using C#, Photon Fusion, and Mirror.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Experience
            </h2>
            <div className="p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-bold text-white text-sm">Unity Game Developer, Carina Softlabs Inc</span>
                <span className="text-xs font-mono text-slate-400">11/2024 – 08/2026 &middot; Indore, India</span>
              </div>
            </div>
          </div>

          {/* Courses & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Courses
              </h2>
              <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg">
                <div className="font-bold text-white text-xs">Unity Game Development, Brototype</div>
                <div className="text-[11px] font-mono text-slate-400">2023 – 2024 &middot; Trivandrum, India</div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Education
              </h2>
              <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg">
                <div className="font-bold text-white text-xs no-underline">Higher Secondary (Commerce), G.H.S.S. Kilimanoor</div>
                <div className="text-[11px] font-mono text-slate-400 no-underline">2021 – 2023 &middot; Trivandrum, India</div>
              </div>
            </div>
          </div>

          {/* Technical Skills from Resume */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Programming</strong>
                <span className="text-slate-300 text-xs">C#, OOP, Data Structures &amp; Algorithms</span>
              </div>
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Networking &amp; Multiplayer</strong>
                <span className="text-slate-300 text-xs">Photon PUN, Photon Fusion, Mirror</span>
              </div>
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Performance and Optimization</strong>
                <span className="text-slate-300 text-xs">Unity Profiler, Object Pooling, Occlusion Culling, Addressables, Sprite Atlas</span>
              </div>
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Unity Skill Set</strong>
                <span className="text-slate-300 text-xs">2D/3D Game Development, Multiplayer, AR/VR, URP, HDRP, Cinemachine, Timeline, Animator</span>
              </div>
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Version Control</strong>
                <span className="text-slate-300 text-xs">Git, GitHub, Perforce</span>
              </div>
              <div className="p-2.5 bg-slate-900/50 border border-slate-800 rounded">
                <strong className="text-white block font-mono text-[11px] text-cyan-300">Other Engines</strong>
                <span className="text-slate-300 text-xs">Terra Studio, Roblox</span>
              </div>
            </div>
          </div>

          {/* Key Projects from Resume */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Projects Highlighted on Resume
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
                <div className="font-bold text-white text-xs">Tokyo Ludo — Unity, Multiplayer Board Game, Carina Softlabs Inc.</div>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Led the migration of the multiplayer architecture from Photon PUN (Master Client) to Photon Fusion Shared Mode, redesigning networked state synchronization, session management, and reconnection handling.</li>
                  <li>Built the full game UI and gameplay flow, including turn management and state transitions.</li>
                  <li>Fixed core multiplayer bugs, improving session stability.</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
                <div className="font-bold text-white text-xs">Warvox — Unity, MMORPG, Carina Softlabs Inc.</div>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Built the Governor and Castle PvP system, including contract creation, defense terms, and validation.</li>
                  <li>Implemented zone-based dungeon instancing and a proximity-based voice chat system.</li>
                  <li>Worked on weapon skill balancing by adjusting gameplay values and integrating VFX/SFX.</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
                <div className="font-bold text-white text-xs">Cheezy Wheelz — Unity, 3D Open-World Delivery, Carina Softlabs Inc.</div>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Built the core gameplay loop: a time-based food delivery system where delivery time and food temperature determine rewards.</li>
                  <li>Extended a third-party motorcycle physics package with wheelie and drift mechanics.</li>
                  <li>Developed AI pedestrian and traffic systems with intersection detection and dynamic path variation.</li>
                  <li>Designed a real-time GPS and minimap navigation system for delivery routes.</li>
                  <li>Optimized mobile performance using object pooling, Addressables, and dynamic NavMesh management.</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1">
                <div className="font-bold text-white text-xs">2048 Game — Unity, 2D Board Game (WebGL)</div>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  <li>Built a complete 2048 clone for WebGL with tile-merging logic, grid system, and keyboard controls.</li>
                  <li>Added high score tracking, game-over detection, restart handling, and smooth tile animations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#0e111a] border-t border-slate-800 shrink-0 text-xs">
          <span className="text-slate-400 font-mono">
            Midhun Babu B &middot; {MIDHUN_INFO.email} &middot; {MIDHUN_INFO.phone}
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
