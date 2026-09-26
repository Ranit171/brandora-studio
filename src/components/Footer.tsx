import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    // Check if Lenis instance is globally available
    const lenis = (window as unknown as { __lenisInstance?: { scrollTo: (target: number) => void } }).__lenisInstance;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About Studio', href: '#about' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Selected Works', href: '#work' },
    { label: 'Sprint Process', href: '#process' },
    { label: 'Results & Standards', href: '#capabilities' }
  ];

  const socialLinks = [
    { label: 'X (Twitter)', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' }
  ];

  return (
    <footer className="relative border-t border-white/8 bg-[#070709] py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Studio Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-white uppercase">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-black shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <img
                  src="/brandora-logo.png"
                  alt="Brandora Studio"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="tracking-widest font-heading font-extrabold">BRANDORA STUDIO</span>
            </div>

            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-zinc-400 font-sans">
              A specialized two-person digital studio uniting modern full-stack web engineering, social media strategy, and data-driven brand growth to build enduring commercial value.
            </p>

            <div className="pt-2">
              <div className="font-code text-[11px] text-zinc-500 uppercase">
                DIRECT FOUNDER PARTNERSHIP
              </div>
              <div className="font-code text-xs text-zinc-300 mt-1">
                Alex Vance (Tech) × Elena Vance (Growth)
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-code text-xs tracking-widest text-[#ff477e] uppercase">
              // INDEX
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-code text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-code text-xs tracking-widest text-zinc-400 uppercase">
              // CONNECT
            </div>
            <ul className="space-y-2.5">
              {socialLinks.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-code text-xs text-zinc-400 transition-colors hover:text-white"
                  >
                    <span>{soc.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="font-code text-xs font-bold text-white underline underline-offset-4 hover:text-[#ff477e] transition-colors"
              >
                Start a Project Brief →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/8 pt-8">
          <div className="font-code text-[11px] text-zinc-500">
            © {new Date().getFullYear()} BRANDORA STUDIO. ALL RIGHTS RESERVED.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 font-code text-[11px] text-zinc-400 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            data-cursor="pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
