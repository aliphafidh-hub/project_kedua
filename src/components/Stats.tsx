import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Clock, ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react';


export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Layers,
      value: '5+',
      label: 'Proyek Selesai',
      sublabel: 'Web app, landing page & sistem informasi',
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/20',
      border: 'hover:border-cyan-400/50',
    },
    {
      icon: Clock,
      value: '800+',
      label: 'Jam Eksplorasi & Coding',
      sublabel: 'Pengembangan skill & riset arsitektur web',
      color: 'from-blue-500 to-indigo-500',
      glow: 'shadow-blue-500/20',
      border: 'hover:border-blue-400/50',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Komitmen & Ketepatan',
      sublabel: 'Menyelesaikan deliverables sesuai tenggat waktu',
      color: 'from-teal-500 to-emerald-500',
      glow: 'shadow-emerald-500/20',
      border: 'hover:border-emerald-400/50',
    },
    {
      icon: HeartHandshake,
      value: '99.9%',
      label: 'Kepuasan & Feedback Positif',
      sublabel: 'Komunikasi transparan dan hasil berkualitas tinggi',
      color: 'from-sky-500 to-cyan-500',
      glow: 'shadow-sky-500/20',
      border: 'hover:border-sky-400/50',
    },
  ];

  return (
    <section id="stats" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Pencapaian Nyata</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Statistik <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Proyek & Dedikasi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-400"
          >
            ukur konsistensi, integritas, dan kualitas karya yang saya bangun.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-2xl p-6 bg-gradient-to-b from-[#061d36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/20 backdrop-blur-md ${item.border} ${item.glow} transition-all duration-300 group overflow-hidden`}
              >
                {/* Aquatic corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all pointer-events-none" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#031122] border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-all shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Metric Value */}
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 flex items-baseline gap-1">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-200">
                    {item.value}
                  </span>
                </div>

                {/* Label & Description */}
                <h3 className="text-sm sm:text-base font-bold text-cyan-100 mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
