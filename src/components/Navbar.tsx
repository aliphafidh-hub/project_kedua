import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, Waves, Send } from 'lucide-react';


interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Statistik', href: '#stats' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['home', 'about', 'stats', 'tech', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#031326]/85 backdrop-blur-xl border-cyan-500/25 shadow-2xl shadow-cyan-950/40'
              : 'bg-[#041a33]/50 backdrop-blur-md border-cyan-500/15'
          }`}
        >
          {/* Logo with Aquatic Glow */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Waves className="w-5 h-5 text-cyan-100" />
              <div className="absolute -inset-0.5 rounded-full bg-cyan-400 opacity-20 blur group-hover:opacity-60 transition-opacity" />
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-lg text-white">
              <span>ALL</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/40">
                DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 bg-[#020b18]/60 px-3 py-1.5 rounded-full border border-cyan-950/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-cyan-200 bg-cyan-500/15 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-cyan-400/10 pointer-events-none"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Button & Status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tersedia Proyek</span>
            </div>

            <button
              onClick={() => {
                if (onContactClick) onContactClick();
                else scrollTo('#contact');
              }}
              className="relative group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full text-cyan-950 bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span>Hubungi Saya</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#061e38] border border-cyan-500/20 text-slate-200 hover:text-cyan-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl bg-[#03152b]/95 backdrop-blur-2xl border border-cyan-500/30 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                >
                  <span>{link.name}</span>
                  <Compass className="w-4 h-4 text-cyan-500/50" />
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-cyan-900/40 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-cyan-950 bg-gradient-to-r from-cyan-300 to-sky-400 shadow-md shadow-cyan-500/30"
                >
                  Hubungi Saya Langsung
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
