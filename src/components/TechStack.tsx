import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Palette, Terminal, Sparkles } from 'lucide-react';


interface TechItem {
  name: string;
  category: 'frontend' | 'styling' | 'tools';
  level: number;
  levelLabel: string;
  desc: string;
  iconBg: string;
  badgeColor: string;
}

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'styling' | 'tools'>('all');

  const technologies: TechItem[] = [
    {
      name: 'React',
      category: 'frontend',
      level: 95,
      levelLabel: 'Advanced',
      desc: 'Pengembangan Single Page Application (SPA), Custom Hooks, Reusable Components, dan optimalisasi re-render.',
      iconBg: 'from-cyan-500/20 to-blue-500/20 text-cyan-400',
      badgeColor: 'border-cyan-400/40 text-cyan-300 bg-cyan-950/60',
    },
    {
      name: 'Tailwind CSS',
      category: 'styling',
      level: 95,
      levelLabel: 'Expert',
      desc: 'Utility-first styling, glassmorphism, responsive grid, dynamic dark-mode, dan arsitektur desain sistem modern.',
      iconBg: 'from-sky-500/20 to-teal-500/20 text-sky-400',
      badgeColor: 'border-sky-400/40 text-sky-300 bg-sky-950/60',
    },
    {
      name: 'Framer Motion',
      category: 'styling',
      level: 90,
      levelLabel: 'Advanced',
      desc: 'Animasi antarmuka halus, transisi layout dinamis, gesture interaction, dan efek scroll berbasis fisika.',
      iconBg: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
      badgeColor: 'border-indigo-400/40 text-indigo-300 bg-indigo-950/60',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 88,
      levelLabel: 'Advanced',
      desc: 'Pengetikan statis, generic types, interfaces, pencegahan bug runtime, dan arsitektur kode berskala besar.',
      iconBg: 'from-blue-500/20 to-cyan-500/20 text-blue-400',
      badgeColor: 'border-blue-400/40 text-blue-300 bg-blue-950/60',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      level: 85,
      levelLabel: 'Proficient',
      desc: 'App router, Server-Side Rendering (SSR), Static Site Generation (SSG), dan optimasi SEO mesin pencari.',
      iconBg: 'from-slate-500/20 to-zinc-500/20 text-white',
      badgeColor: 'border-slate-400/40 text-slate-200 bg-slate-900/60',
    },
    {
      name: 'Vite',
      category: 'tools',
      level: 92,
      levelLabel: 'Expert',
      desc: 'Pembangunan proyek modern berbasis ES modules, Hot Module Replacement (HMR) instan, dan optimasi bundling.',
      iconBg: 'from-purple-500/20 to-amber-500/20 text-amber-400',
      badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-950/60',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 95,
      levelLabel: 'Expert',
      desc: 'Async/Await, closures, DOM manipulation, promises, modular patterns, dan manipulasi data tingkat lanjut.',
      iconBg: 'from-yellow-500/20 to-amber-500/20 text-yellow-400',
      badgeColor: 'border-yellow-400/40 text-yellow-300 bg-yellow-950/60',
    },
    {
      name: 'HTML5 & CSS3',
      category: 'styling',
      level: 98,
      levelLabel: 'Expert',
      desc: 'Semantik web ramah SEO, CSS Grid & Flexbox, aksesibilitas (a11y), SVG, dan custom CSS properties.',
      iconBg: 'from-orange-500/20 to-rose-500/20 text-orange-400',
      badgeColor: 'border-orange-400/40 text-orange-300 bg-orange-950/60',
    },
    {
      name: 'Node.js & Express',
      category: 'tools',
      level: 80,
      levelLabel: 'Intermediate',
      desc: 'Pembuatan RESTful APIs, integrasi database, penanganan autentikasi JWT, dan backend middleware sederhana.',
      iconBg: 'from-emerald-500/20 to-green-500/20 text-emerald-400',
      badgeColor: 'border-emerald-400/40 text-emerald-300 bg-emerald-950/60',
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      level: 90,
      levelLabel: 'Advanced',
      desc: 'Version control kolaboratif, branch workflow, pull requests, resolving merge conflicts, dan GitHub Actions dasar.',
      iconBg: 'from-rose-500/20 to-red-500/20 text-rose-400',
      badgeColor: 'border-rose-400/40 text-rose-300 bg-rose-950/60',
    },
    {
      name: 'Figma',
      category: 'styling',
      level: 85,
      levelLabel: 'Proficient',
      desc: 'Perancangan UI/UX, wireframing, high-fidelity mockups, interaksi prototipe, dan ekstrasi aset siap coding.',
      iconBg: 'from-pink-500/20 to-purple-500/20 text-pink-400',
      badgeColor: 'border-pink-400/40 text-pink-300 bg-pink-950/60',
    },
    {
      name: 'REST API & Fetch',
      category: 'frontend',
      level: 92,
      levelLabel: 'Advanced',
      desc: 'Integrasi third-party endpoints, penanganan error state, loading skeletons, dan optimasi payload.',
      iconBg: 'from-cyan-500/20 to-teal-500/20 text-cyan-300',
      badgeColor: 'border-cyan-400/40 text-cyan-300 bg-cyan-950/60',
    },
  ];

  const filteredTechnologies = technologies.filter((tech) => {
    if (activeTab === 'all') return true;
    return tech.category === activeTab;
  });

  return (
    <section id="tech" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Peralatan</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Teknologi & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Keahlian Teknis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-400"
          >
            Kumpulan teknologi modern yang saya gunakan untuk membangun antarmuka web berkinerja tinggi.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Semua Stack', icon: Sparkles },
            { key: 'frontend', label: 'Frontend', icon: Layers },
            { key: 'styling', label: 'Styling & Motion', icon: Palette },
            { key: 'tools', label: 'Tools & DevOps', icon: Terminal },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-cyan-950 shadow-md shadow-cyan-500/30 scale-105'
                    : 'bg-[#04162b]/80 text-slate-300 border border-cyan-500/15 hover:border-cyan-400/40 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredTechnologies.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-5 bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 shadow-lg shadow-cyan-950/30 group"
              >
                {/* Header item: Icon & Name */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tech.iconBg} border border-cyan-400/20 flex items-center justify-center font-bold font-mono text-sm`}>
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 capitalize">{tech.category}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${tech.badgeColor}`}>
                    {tech.levelLabel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {tech.desc}
                </p>

                {/* Proficiency Progress Bar */}
                <div className="w-full bg-[#020d1c] h-1.5 rounded-full overflow-hidden border border-cyan-950">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400 shadow-[0_0_8px_#22d3ee]"
                  />
                </div>
                <div className="flex justify-between items-center mt-1 text-[10px] text-slate-500 font-mono">
                  <span>Proficiency</span>
                  <span className="text-cyan-400">{tech.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
