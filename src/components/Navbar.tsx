import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Architecture Lab', href: '#architecture-lab' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors flex items-center gap-2"
          >
            <span className="text-white font-extrabold">Suhas P</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Salesforce Dev
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 transition-colors hover:text-sky-400 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-slate-300 transition-colors hover:text-sky-400 whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-sky-500/30 text-sky-400 bg-sky-500/5 hover:bg-sky-500/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              Resume
              <ArrowUpRight size={13} />
            </button>

            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors whitespace-nowrap shadow-xs font-semibold"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b px-6 py-5 bg-slate-950/95 border-slate-800">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800/50 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-center py-2 text-xs font-medium rounded-lg border border-sky-500/30 text-sky-400 bg-sky-500/5"
                >
                  View Formatted Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
