import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, Download, CheckCircle, ExternalLink, FileText, X } from 'lucide-react';


export const About: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [showCvModal, setShowCvModal] = useState(false);

  const keyStrengths = [
    { name: 'Frontend Dev', desc: 'React, Vite, Next.js' },
    { name: 'Web Design', desc: 'UI/UX & Design Systems' },
    { name: 'Clean Code', desc: 'Readable & Maintainable' },
    { name: 'Fast Learner', desc: 'Adaptif & Selalu Berkembang' },
    { name: 'High Performance', desc: 'Optimasi Web Vitals' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Saya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400"
          >
            Mengenal lebih dekat siapa saya, keahlian, dan dedikasi saya dalam dunia pengembangan web.
          </motion.p>
        </div>

        {/* 2-Column Layout matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: User Mirror Selfie Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-[#06203d] via-[#04162b] to-[#020b17] border border-cyan-500/25 shadow-2xl shadow-cyan-950/50 flex-1 flex flex-col justify-between overflow-hidden">
              {/* Aquatic corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#020d1c]">
                <img
                  src="/avatar.jpg"
                  alt="Foto Profil All"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Submarine Glass & Ambient Glow Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1c] via-transparent to-cyan-950/20 pointer-events-none" />

                {/* Floating pill badge on photo bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#031326]/85 backdrop-blur-md border border-cyan-400/30 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">Web Developer | UI/UX</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-700/50">
                    IDN
                  </span>
                </div>
              </div>

              {/* Bottom Quick Card Note */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#020e1f]/70 border border-cyan-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Siap Membantu Proyek Impian Anda</span>
                </div>
                <span className="text-xs text-cyan-400 font-semibold cursor-pointer hover:underline" onClick={onContactClick}>
                  Mulai Diskusi &rarr;
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051c36] via-[#03152b] to-[#020b17] border border-cyan-500/25 shadow-2xl shadow-cyan-950/40 h-full flex flex-col justify-between">
              <div>
                {/* Intro Greeting */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Halo, Saya <span className="text-cyan-400">All.</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                    Web Developer
                  </span>
                </div>

                {/* Paragraphs matching reference style */}
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  <p>
                    Saya adalah seorang <strong className="text-cyan-200">web developer</strong> yang berdedikasi dengan fokus pada pengembangan antarmuka pengguna yang modern, intuitif, dan responsif. Berpengalaman dalam mengubah ide dan desain kompleks menjadi kode yang bersih, efisien, dan mudah dipelihara.
                  </p>
                  <p className="text-slate-400">
                    Saya selalu bersemangat mempelajari teknologi baru dan menerapkannya dalam proyek nyata untuk memberikan solusi digital terbaik. Mengutamakan performa aplikasi, estetika visual yang memanjakan mata, serta struktur kode terorganisir demi kenyamanan pengguna dan skalabilitas sistem jangka panjang.
                  </p>
                </div>

                {/* Badges / Key Strengths Grid */}
                <div className="mb-8">
                  <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                    Keahlian & Karakteristik Utama
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {keyStrengths.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-3.5 py-2 rounded-xl bg-[#061d36]/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all text-xs flex items-center gap-2 group"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="font-semibold text-slate-200 block">{item.name}</span>
                          <span className="text-[10px] text-slate-400">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: CV & Contact */}
              <div className="pt-6 border-t border-cyan-900/40 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowCvModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Lihat & Unduh CV</span>
                </button>

                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-[#06213f]/80 hover:bg-[#0a2e57] border border-cyan-500/30 hover:border-cyan-400/60 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Konsultasi Proyek</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {showCvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-[#04172e] border border-cyan-400/40 p-6 shadow-2xl shadow-cyan-950/80 text-white relative"
            >
              <button
                onClick={() => setShowCvModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Curriculum Vitae - ALL</h4>
                  <p className="text-xs text-cyan-300">Web Developer & Frontend Specialist</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#020b17] border border-cyan-950 text-xs text-slate-300 space-y-2 mb-6">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Nama Lengkap:</span>
                  <span className="font-semibold text-white">ALL.</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Peran:</span>
                  <span className="text-cyan-300 font-semibold">Web Developer / Frontend</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Keahlian Inti:</span>
                  <span className="text-white">React, Tailwind CSS, TypeScript</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Status Ketersediaan:</span>
                  <span className="text-emerald-400 font-semibold">Tersedia untuk Freelance / Fulltime</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowCvModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
                >
                  Tutup
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setShowCvModal(false);
                    onContactClick();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-cyan-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30"
                >
                  Hubungi Langsung
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
