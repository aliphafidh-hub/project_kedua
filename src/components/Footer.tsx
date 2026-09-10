import React from 'react';
import { ArrowUp, Waves } from 'lucide-react';


export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-cyan-950/80 bg-[#01050d] overflow-hidden">
      {/* Background aquatic subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cyan-950/60">
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Waves className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-white">
              <span>ALL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                DEV
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">Tentang</a>
            <a href="#stats" className="hover:text-cyan-300 transition-colors">Statistik</a>
            <a href="#tech" className="hover:text-cyan-300 transition-colors">Tech Stack</a>
            <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Kontak</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#04162b] border border-cyan-500/20 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 text-xs transition-all cursor-pointer group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ALL.DEV. Semua Hak Cipta Dilindungi.
          </p>
          <p className="flex items-center gap-1">
            <span>Didesain dengan nuansa</span>
            <span className="text-cyan-400 font-medium">Underwater Abyss</span>
            <span>&bull; React, Tailwind CSS, & Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
