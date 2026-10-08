import React, { useState } from 'react';
import { Mail, Phone, Check, Copy, Send, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { MIDHUN_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MIDHUN_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(MIDHUN_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Unity Game Dev Inquiry] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Midhun,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${MIDHUN_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="scroll-mt-16 py-16 sm:py-20 bg-[#08090d] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="space-y-1.5 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Contact &amp; Hire Me
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Interested in hiring me for a Unity Game Developer role or discussing game projects? Reach out directly via email, phone, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 bg-[#0c0e14] border border-slate-800 rounded-xl space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Email</span>
                <div className="flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg">
                  <a
                    href={`mailto:${MIDHUN_INFO.email}`}
                    className="font-mono text-xs text-cyan-400 hover:underline truncate"
                  >
                    {MIDHUN_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Phone &amp; WhatsApp</span>
                <div className="flex items-center justify-between p-2.5 bg-slate-900 border border-slate-800 rounded-lg">
                  <a
                    href={`tel:${MIDHUN_INFO.phone}`}
                    className="font-mono text-xs text-emerald-400 hover:underline"
                  >
                    {MIDHUN_INFO.phone}
                  </a>
                  <div className="flex items-center gap-1">
                    <a
                      href="https://wa.me/917560855307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-emerald-400 hover:text-white"
                      title="Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1 text-slate-400 hover:text-white"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{MIDHUN_INFO.location}</span>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Profiles</span>
                <div className="space-y-1.5">
                  <a
                    href={MIDHUN_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={MIDHUN_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-slate-300" />
                      <span>github.com/hermedev</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-6 bg-[#0c0e14] border border-slate-800 rounded-xl space-y-4"
            >
              <h3 className="text-base font-bold font-display text-white">
                Send a Message
              </h3>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, game project, or requirements..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-2.5 bg-emerald-950/40 border border-emerald-800 rounded-lg text-xs text-emerald-300 text-center font-mono">
                  Message prefilled! Opening your email client to send to {MIDHUN_INFO.email}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
