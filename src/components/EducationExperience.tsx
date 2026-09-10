import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';


export const EducationExperience: React.FC = () => {
  const education = [
    {
      period: '2024 - Sekarang',
      title: 'Siswa SMK Jurusan RPL',
      institution: 'Sekolah Menengah Kejuruan',
      desc: 'Mendalami dasar-dasar pemrograman, logika algoritma, rekayasa perangkat lunak, struktur data, dan arsitektur web modern.',
      skills: ['Algoritma & Pemrograman', 'Basis Data', 'Web Fundamental'],
    },
    {
      period: '2026', 
      title: 'Sertifikasi & Bootcamp Frontend Modern',
      institution: 'Online Learning Platform & Coding Academy',
      desc: 'Pelatihan intensif spesialisasi React.js, Tailwind CSS, TypeScript, dan state management modern serta clean architecture.',
      skills: ['React', 'Responsive UI', 'Modern JavaScript'],
    },
    {
      period: '2024 - Berkelanjutan',
      title: 'Eksplorasi Otodidak & Proyek Open-Source',
      institution: 'Self-Driven Learning & Tech Community',
      desc: 'Mengeksplorasi Framer Motion untuk micro-interactions, Next.js untuk SSR/SSG, dan performa web sesuai standar Core Web Vitals.',
      skills: ['Framer Motion', 'Next.js', 'Web Vitals'],
    },
  ];

  const experience = [
    {
      period: '2026',
      role: 'Web Developer & Platform Digital',
      company: 'klikgalaxy.com & Proyek Mandiri',
      desc: 'Merancang dan mengembangkan platform e-commerce produk digital, integrasi sistem transaksi instan, antarmuka responsif, dan optimasi performa web.',
      tags: ['KlikGalaxy', 'React', 'Next.js', 'Tailwind CSS', 'E-Commerce'],
    },
    {
      period: '2024',
      role: 'Desainer GUI Aplikasi Parkir, Kasir & Entry Data',
      company: 'Proyek Sistem Informasi & POS',
      desc: 'Membangun desain antarmuka GUI modern untuk operasional parkir pintar, sistem kasir (POS), dan modul entri data berdensitas tinggi dengan validasi cepat.',
      tags: ['GUI Parkir', 'POS Kasir', 'Data Entry', 'React', 'TypeScript'],
    },
    {
      period: '2024-2026',
      role: 'Frontend & UI/UX Developer',
      company: 'sibina.nusatama.co & Desain Website Klien',
      desc: 'Mengembangkan portal sistem enterprise SIBINA (Bina Nusatama) untuk monitoring proyek serta mendesain prototipe UI/UX website yang ergonomis di Figma.',
      tags: ['SIBINA', 'UI/UX Design', 'Figma', 'Web Design', 'Enterprise'],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jejak Langkah</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Pendidikan & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Pengalaman</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-400"
          >
            Fondasi akademik dan pengalaman praktis dalam menghasilkan produk digital.
          </motion.p>
        </div>

        {/* 2 Cards Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card 1: Riwayat Pendidikan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/25 shadow-xl shadow-cyan-950/40 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cyan-900/40">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Riwayat Pendidikan</h3>
                <p className="text-xs text-slate-400">Jalur akademik dan sertifikasi kompetensi</p>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-cyan-600/40 before:to-transparent">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-9 group">
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#031326] border-2 border-cyan-400 shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition-transform" />

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-700/50 mb-1.5">
                    {item.period}
                  </span>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs font-medium text-cyan-400/90 mb-2">
                    {item.institution}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] text-slate-300 bg-[#06213f] border border-cyan-900/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Pengalaman Kerja & Proyek */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/25 shadow-xl shadow-cyan-950/40 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cyan-900/40">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pengalaman Kerja & Proyek</h3>
                <p className="text-xs text-slate-400">Portofolio komersial & kontribusi nyata</p>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-cyan-600/40 before:to-transparent">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-9 group">
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#031326] border-2 border-cyan-400 shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition-transform" />

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-700/50 mb-1.5">
                    {item.period}
                  </span>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h4>
                  <div className="text-xs font-medium text-cyan-400/90 mb-2">
                    {item.company}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/40"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
