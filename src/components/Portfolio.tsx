import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Eye, X, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Project {
  id: string;
  title: string;
  category: 'webapp' | 'landing' | 'dashboard';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  features: string[];
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
}

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Desain GUI Aplikasi Parkir dan Kasir',
      category: 'webapp',
      categoryLabel: 'GUI & POS System',
      description: 'Sistem antarmuka GUI modern untuk operasional parkir dan kasir terpadu dengan monitoring denah parkir real-time, tarif otomatis, dan cetak tiket.',
      fullDescription: 'Perancangan antarmuka pengguna (GUI) sistem parkir pintar dan kasir terintegrasi. Dilengkapi dengan denah visualisasi okupansi slot kendaraan real-time, feed kamera pengenal plat nomor (LPR), penghitungan durasi parkir otomatis, modul pembayaran multimetode (Cash, Card, QRIS), dan cetak struk transaksi instan.',
      features: [
        'Live Parking Map & pemantauan okupansi slot kendaraan bertingkat',
        'Kalkulasi tarif parkir otomatis berdasarkan durasi waktu nyata',
        'Simulasi feed kamera License Plate Recognition (LPR)',
        'Ticket print preview, QR barcode scanner, dan ringkasan pendapatan harian',
      ],
      tags: ['GUI Design', 'React', 'Tailwind CSS', 'POS System', 'Real-time UI'],
      imageUrl: '/projects/parking-pos.jpg',
      githubUrl: 'https://github.com',
    },
    {
      id: '2',
      title: 'KlikGalaxy.com',
      category: 'webapp',
      categoryLabel: 'E-Commerce Platform',
      description: 'Platform website e-commerce dan layanan produk digital KlikGalaxy.com untuk top-up game, voucher, paket data, dan layanan teknologi.',
      fullDescription: 'Pengembangan platform web e-commerce bertema antariksa futuristik untuk KlikGalaxy.com. Menghadirkan pengalaman belanja produk digital kilat seperti top-up akun game online, voucher streaming hiburan, cloud hosting, dan layanan keamanan digital dengan integrasi sistem keranjang belanja instan.',
      features: [
        'Katalog produk digital dengan sistem filtering dan pencarian cepat',
        'Keranjang belanja mengapung (Interactive Sliding Cart) responsif',
        'Desain bernuansa galactic modern dengan micro-interactions halus',
        'Dukungan integrasi notifikasi konfirmasi pembelian otomatis',
      ],
      tags: ['KlikGalaxy', 'Next.js', 'React', 'Tailwind CSS', 'E-Commerce'],
      imageUrl: '/projects/klikgalaxy.jpg',
      liveUrl: 'https://klikgalaxy.com',
      githubUrl: 'https://github.com',
    },
    {
      id: '3',
      title: 'Entry Data',
      category: 'dashboard',
      categoryLabel: 'Management System',
      description: 'Aplikasi web entri data dan verifikasi record dokumen dengan validasi otomatis, tabel data berdensitas tinggi, dan sistem audit.',
      fullDescription: 'Sistem web khusus yang dirancang untuk mempercepat proses input dan verifikasi data dalam jumlah besar (batch data). Dilengkapi validasi otomatis format data saat diketik, tabel antrean verifikasi berstatus warna, pencarian filter rentang tanggal dinamis, dan analitik produktivitas entri harian.',
      features: [
        'Drawer form input cepat dengan validasi regex & auto-detection error',
        'Tabel Verification Queue dengan status Pending, Verified, dan Error',
        'Pencarian cerdas multi-kolom dan export data laporan',
        'Grafik analitik kecepatan verifikasi dokumen secara real-time',
      ],
      tags: ['Entry Data', 'React', 'TypeScript', 'Data Tables', 'Clean Code'],
      imageUrl: '/projects/entry-data.jpg',
      githubUrl: 'https://github.com',
    },
    {
      id: '4',
      title: 'sibina.nusatama.co',
      category: 'webapp',
      categoryLabel: 'Enterprise Portal',
      description: 'SIBINA (Sistem Informasi Bina Nusatama) - Portal web manajemen perusahaan enterprise untuk monitoring proyek, operasional armada, dan pelaporan cabang regional.',
      fullDescription: 'Pengembangan portal sistem informasi terpadu SIBINA (Bina Nusatama) berskala perusahaan. Menghubungkan pelaporan progres fisik proyek infrastruktur, monitoring utilisasi armada alat berat, peta operasional cabang regional se-Indonesia, dan dashboard indikator performa pendapatan finansial.',
      features: [
        'Operations Overview Dashboard dengan KPI metrik proyek aktif',
        'Diagram Gantt timeline eksekusi dan pencapaian fase proyek',
        'Peta interaktif sebaran cabang regional di seluruh Indonesia',
        'Pelacakan status operasional armada dan alat berat secara live',
      ],
      tags: ['SIBINA', 'Enterprise Portal', 'Dashboard', 'React', 'REST API'],
      imageUrl: '/projects/sibina-nusatama.jpg',
      liveUrl: 'https://sibina.nusatama.co',
      githubUrl: 'https://github.com',
    },
    {
      id: '5',
      title: 'Desain Website',
      category: 'landing',
      categoryLabel: 'Web Development',
      description: 'Perancangan dan pengembangan website profesional untuk profil perusahaan, agensi digital, dan bisnis dengan visual modern dan SEO optimal.',
      fullDescription: 'Layanan desain website komprehensif yang memadukan estetika visual mutakhir, tipografi modern, copywriting persuasif, dan optimasi Core Web Vitals. Membantu menaikkan kredibilitas brand di ranah digital dengan kecepatan akses tinggi di semua perangkat.',
      features: [
        'Tata letak responsif pixel-perfect (Desktop, Laptop, Tablet, Mobile)',
        'Skor performa Google Lighthouse 95+ dengan waktu muat di bawah 1 detik',
        'Struktur semantik HTML5 ramah optimasi mesin pencari (SEO)',
        'Efek transisi dan interaksi hover halus yang meningkatkan engagement',
      ],
      tags: ['Web Design', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive', 'SEO'],
      imageUrl: '/projects/website-design.svg',
      githubUrl: 'https://github.com',
    },
    {
      id: '6',
      title: 'Desain UI/UX untuk Website',
      category: 'dashboard',
      categoryLabel: 'UI/UX & Design System',
      description: 'Perancangan sistem desain (Design System), wireframe interaktif, dan mockup UI/UX high-fidelity yang ergonomis serta ramah pengguna.',
      fullDescription: 'Proses desain UI/UX mendalam mulai dari riset kebutuhan pengguna, wireframing arsitektur informasi, penyusunan tokens desain (palet warna, skala tipografi, state tombol), hingga prototipe interaktif web dan aplikasi mobile yang siap diserahkan ke tim developer.',
      features: [
        'Design tokens terstandarisasi (Color Palette, Typography hierarchy, Button States)',
        'Prototipe interaktif alur pengguna desktop dan mobile viewport',
        'Kepatuhan standar aksesibilitas kontras warna WCAG AAA',
        'Dokumentasi hand-off desain rapi untuk mempermudah slicing kode',
      ],
      tags: ['UI/UX Design', 'Figma', 'Wireframing', 'Design System', 'Prototyping'],
      imageUrl: '/projects/ui-ux-design.svg',
      githubUrl: 'https://github.com',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya &amp; Portofolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Portfolio &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Proyek Nyata</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-400"
          >
            Koleksi proyek nyata yang pernah saya kembangkan dengan performa tinggi dan desain berkelas.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'Semua Proyek (6)' },
            { key: 'webapp', label: 'Aplikasi Web &amp; GUI' },
            { key: 'dashboard', label: 'Sistem &amp; UI/UX' },
            { key: 'landing', label: 'Desain Website' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              dangerouslySetInnerHTML={{ __html: cat.label }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-cyan-950 shadow-md shadow-cyan-500/30 scale-105'
                  : 'bg-[#04162b]/80 text-slate-300 border border-cyan-500/15 hover:border-cyan-400/40 hover:text-white'
              }`}
            />
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-md shadow-xl shadow-cyan-950/40 flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Project Image Preview matching the project */}
                <div className="relative h-48 w-full bg-[#020c1a] border-b border-cyan-900/30 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031427] via-transparent to-black/30 pointer-events-none" />

                  {/* Badges on Top of Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#031326]/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 shadow-md">
                      {project.categoryLabel}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-200 bg-cyan-950/70 border border-cyan-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-900/60">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-cyan-900/30 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2 rounded-xl text-xs font-semibold text-center text-cyan-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:shadow-md hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Lihat Detail</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-[#061e38] border border-cyan-500/20 text-cyan-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                          title="Buka Website Langsung"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#061e38] border border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                        title="Lihat Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal with Full Project Image */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-3xl bg-[#04172e] border border-cyan-400/40 p-6 shadow-2xl shadow-cyan-950/80 text-white relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full Image in Modal */}
              <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-5 border border-cyan-500/30 bg-[#020b17]">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-700/50 mb-2">
                {selectedProject.categoryLabel}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-semibold text-cyan-400 tracking-wider mb-3">
                  Fitur Unggulan Proyek
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-2">
                  Stack Teknologi
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-950/80 border border-cyan-700/50 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-cyan-900/40">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white cursor-pointer"
                >
                  Tutup
                </button>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-[#061e38] border border-cyan-500/30 hover:border-cyan-400"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>

                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30 hover:shadow-cyan-400/50"
                  >
                    <span>Buka URL Langsung</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-950 bg-gradient-to-r from-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30"
                  >
                    <span>Minta Demo Serupa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
