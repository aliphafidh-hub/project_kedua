import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio, onContactClick }) => {
  const roles = [
    'Web Developer',
    'Frontend Specialist',
    'UI/UX Enthusiast',
    'Clean Code Enthusiast',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Sonar Circles in Background centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[720px] h-[420px] sm:h-[580px] lg:h-[720px] pointer-events-none -z-10 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/10" />
        {/* Middle Ring with dashed radar feel */}
        <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-cyan-400/15" />
        {/* Inner Glowing Ring */}
        <div className="absolute inset-32 sm:inset-40 rounded-full border border-cyan-300/20 shadow-[0_0_50px_rgba(6,182,212,0.12)]" />
        {/* Radial Pulse */}
        <div className="w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Main Container - STRICTLY CENTERED VERTICAL STACK */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        
        {/* Top Tagline Pill - STRICTLY ABOVE "ALL." IN CENTER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span>Terbuka untuk Proyek Freelance &amp; Kolaborasi</span>
          </div>
        </motion.div>

        {/* Main Brand Title "ALL." - PERFECTLY CENTERED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full flex justify-center relative mb-3"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-cyan-200">
              ALL
            </span>
            <span className="text-cyan-400 drop-shadow-[0_0_25px_#22d3ee]">.</span>
          </h1>
        </motion.div>

        {/* Dynamic Typing Role - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full text-lg sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6 flex items-center justify-center gap-2 h-10"
        >
          <span>Seorang</span>
          <span className="text-cyan-400 font-bold drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
            {displayedText}
          </span>
          <span className="w-0.5 h-6 sm:h-8 bg-cyan-400 animate-pulse inline-block" />
        </motion.div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 text-center"
        >
          Membangun antarmuka web modern yang cepat, responsif, dan interaktif menggunakan teknologi terkini. 
          Spesialisasi dalam <span className="text-cyan-300 font-medium">Frontend</span>, 
          <span className="text-cyan-300 font-medium"> Desain Sistem</span>, 
          performa tinggi, dan <span className="text-cyan-300 font-medium">clean coding</span> di kedalaman dunia digital.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onExplorePortfolio}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-cyan-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Lihat Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200 bg-[#061e38]/70 hover:bg-[#092d52] border border-cyan-500/30 hover:border-cyan-400/60 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-950/40"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Hubungi Saya</span>
          </button>
        </motion.div>

        {/* 4 Bottom Metric Badges from Reference */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto"
        >
          <div className="glass-deep-sea rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-cyan-500/15 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-1.5 text-cyan-400 text-2xl sm:text-3xl font-black mb-1">
              <span>6+</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Proyek Selesai</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Produksi &amp; Personal</div>
          </div>

          <div className="glass-deep-sea rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-cyan-500/15 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-1.5 text-cyan-400 text-2xl sm:text-3xl font-black mb-1">
              <span>100%</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Kepuasan Seseorang</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Komitmen &amp; Mutu</div>
          </div>

          <div className="glass-deep-sea rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-cyan-500/15 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-1.5 text-cyan-400 text-xl sm:text-2xl font-black mb-1">
              <span>GUI &amp; Web</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Desain Modern</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Responsif &amp; Intuitif</div>
          </div>

          <div className="glass-deep-sea rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-cyan-500/15 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-1.5 text-emerald-400 text-2xl sm:text-3xl font-black mb-1">
              <span>Siap</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Kerja Sama Tim</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Fleksibel &amp; Adaptif</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Side Action Pill (WhatsApp Quick Chat) */}
      <motion.a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 items-center gap-2 px-3 py-2 rounded-full glass-deep-sea border border-cyan-500/30 text-xs text-cyan-300 hover:text-white hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all group"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="font-medium">Hubungi via WA</span>
      </motion.a>
    </section>
  );
};
