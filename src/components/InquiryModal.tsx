import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Mail, Send } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Flagship Website',
  'High-Velocity Landing Page',
  'Headless E-commerce',
  'Modern Web App',
  'Interactive & 3D WebGL',
  'Organic SEO Architecture',
  'Performance Paid Media',
  'Conversion Rate Optimization (CRO)',
  'Full-Funnel Package (Web + Growth)'
];

const BUDGET_OPTIONS = [
  '₹50,000 — ₹1.5 Lakh',
  '₹1.5 Lakh — ₹3.5 Lakhs',
  '₹3.5 Lakhs — ₹7 Lakhs',
  '₹7 Lakhs+'
];

const TIMELINE_OPTIONS = [
  'ASAP (< 3 weeks)',
  '1 — 2 months',
  '3+ months',
  'Ongoing Growth Retainer'
];

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    services: ['Flagship Website'],
    budget: '₹1.5 Lakh — ₹3.5 Lakhs',
    timeline: '1 — 2 months',
    projectDetails: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    const lenis = (window as unknown as { __lenisInstance?: { stop: () => void; start: () => void } }).__lenisInstance;
    lenis?.stop();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      const lenis = (window as unknown as { __lenisInstance?: { stop: () => void; start: () => void } }).__lenisInstance;
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service)
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/12 bg-[#101014] p-6 sm:p-10 shadow-2xl text-white"
          >
            {/* Ambient subtle glow inside dialog */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-3xl" />

            {/* Header */}
            <div className="relative flex items-start justify-between border-b border-white/8 pb-6">
              <div>
                <div className="flex items-center gap-2 font-code text-xs tracking-widest text-zinc-400 uppercase">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#ff477e]" />
                  PROJECT INQUIRY × DIRECT FOUNDERS
                </div>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  START A PROJECT
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Tell us about your brand vision. You speak directly with the two founders—no account managers.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Body */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="mt-5 font-display text-2xl font-bold text-white">
                  INQUIRY RECEIVED
                </h4>
                <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Both Ranit (Engineering) and Arnab (Growth) will review your project and get back to you within 24 hours.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:founders@brandorastudio.dev?subject=Direct%20Inquiry%20from%20Brandora%20Studio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-code tracking-wider text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    SEND DIRECT EMAIL INSTEAD
                  </a>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-code font-semibold tracking-wider text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    RETURN TO SITE
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative mt-6 space-y-6">
                {/* Discipline & Service Selection */}
                <div>
                  <label className="block font-code text-xs font-medium tracking-wider text-zinc-300 uppercase">
                    1. Select Desired Capabilities
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((service) => {
                      const selected = formData.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`rounded-full px-3.5 py-1.5 text-xs transition-all ${
                            selected
                              ? 'border-white bg-white text-black font-semibold shadow-md'
                              : 'border border-white/10 bg-white/4 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget and Timeline Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block font-code text-xs font-medium tracking-wider text-zinc-300 uppercase">
                      2. Approximate Investment
                    </label>
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      {BUDGET_OPTIONS.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`rounded-xl px-3 py-2 text-center text-xs transition-all ${
                            formData.budget === budget
                              ? 'border border-white bg-white/15 text-white font-medium'
                              : 'border border-white/8 bg-white/2 text-zinc-400 hover:border-white/15 hover:text-zinc-300'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-code text-xs font-medium tracking-wider text-zinc-300 uppercase">
                      3. Target Timeline
                    </label>
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      {TIMELINE_OPTIONS.map((timeline) => (
                        <button
                          type="button"
                          key={timeline}
                          onClick={() => setFormData({ ...formData, timeline })}
                          className={`rounded-xl px-3 py-2 text-center text-xs transition-all ${
                            formData.timeline === timeline
                              ? 'border border-white bg-white/15 text-white font-medium'
                              : 'border border-white/8 bg-white/2 text-zinc-400 hover:border-white/15 hover:text-zinc-300'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block font-code text-[11px] tracking-wider text-zinc-400 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
                    />
                  </div>

                  <div>
                    <label className="block font-code text-[11px] tracking-wider text-zinc-400 uppercase">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
                    />
                  </div>

                  <div>
                    <label className="block font-code text-[11px] tracking-wider text-zinc-400 uppercase">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nexa Digital / Stealth Co."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block font-code text-[11px] tracking-wider text-zinc-400 uppercase">
                    Brief Overview / Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're building, what's holding you back, and what success looks like..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Sparkles className="h-3.5 w-3.5 text-[#ff477e]" />
                    <span>Direct founder response within 24h</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-code font-bold tracking-widest text-black uppercase transition-all hover:bg-zinc-200 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'TRANSMITTING...'
                    ) : (
                      <>
                        <span>SUBMIT BRIEF</span>
                        <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
