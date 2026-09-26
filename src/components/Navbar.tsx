import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Sparkles, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Capabilities', href: '#capabilities' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#09090b]/85 backdrop-blur-xl border-b border-white/8 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Left: Studio Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white uppercase"
            data-cursor="pointer"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black text-xs font-black transition-transform group-hover:rotate-45">
              F
            </span>
            <span className="tracking-widest">FORMA</span>
            <span className="font-code text-[10px] text-zinc-500 font-normal">STUDIO</span>
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 rounded-full border border-white/8 bg-white/4 px-6 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-code text-xs tracking-wider text-zinc-300 transition-colors hover:text-white"
                data-cursor="pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="font-code text-xs tracking-wider text-zinc-400 hover:text-white transition-colors"
              data-cursor="pointer"
            >
              Contact
            </a>

            <MagneticButton
              onClick={onOpenInquiry}
              dataCursor="cta"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-code font-semibold tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:border-white"
            >
              <span>START A PROJECT</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="rounded-full bg-white px-3 py-1.5 text-[11px] font-code font-bold text-black"
            >
              START
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-49 flex flex-col justify-between bg-[#09090b] px-6 pt-28 pb-10 md:hidden"
          >
            <div className="space-y-6">
              <div className="font-code text-xs tracking-widest text-[#ff477e] uppercase">
                // NAVIGATION
              </div>

              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="flex items-center justify-between font-display text-3xl font-bold tracking-tight text-white uppercase hover:text-[#ff477e]"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-5 w-5 text-zinc-600" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between text-xs font-code text-zinc-400">
                <span>TWO FOUNDERS</span>
                <span>BUILD × MARKET × GROW</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-code text-xs font-bold tracking-widest text-black uppercase"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center gap-6 font-code text-xs text-zinc-500">
                <a href="mailto:founders@formastudio.dev" className="hover:text-white">
                  founders@formastudio.dev
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
