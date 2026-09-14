import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Clock, MessageSquare, CheckCircle2, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    // --- KONFIGURASI EMAILJS ANDA ---
    const serviceID = 'service_5piedwq'
    const templateID = 'template_5wbuee8';
    const publicKey = 'wFxslKYxg6CaZq0lQ';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Tanpa Subjek',
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);

        // Trigger konfeti perayaan
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22d3ee', '#06b6d4', '#38bdf8', '#ffffff'],
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        setTimeout(() => setIsSuccess(false), 6000);
      })
      .catch((error) => {
        console.error('Gagal mengirim email:', error);
        setIsSubmitting(false);
        setErrorMessage('Terjadi kesalahan saat mengirim pesan. Coba beberapa saat lagi.');
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Mulai Kolaborasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Hubungi <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Saya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-400"
          >
            Punya ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/25 shadow-xl shadow-cyan-950/40 relative overflow-hidden"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Informasi Kontak</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-8">
                Saya selalu terbuka untuk mendiskusikan peluang proyek baru, kerja sama tim, maupun konsultasi pengembangan web.
              </p>

              {/* Detail Items */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Email Resmi</span>
                    <a href="mailto:aliphafidh@gmail.com" className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                      aliphafidh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Lokasi</span>
                    <span className="text-sm font-semibold text-white">
                      Pelem,Kertosono,Nganjuk,Indonesia &bull; Remote
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Waktu Respon</span>
                    <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Cepat &bull; Biasanya dalam 1 - 2 Jam
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                Terhubung di Media Sosial
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/aliphafidh-hub' },
                  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-alify-017570435?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me//6285807223327' },
                  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/itsall_1?stkn=MWJ4amc4NGU5dzdhZQ==' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#061e38]/70 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-all group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform mb-1" />
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Card: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#051c36]/90 via-[#031427]/90 to-[#020b17]/90 border border-cyan-500/25 shadow-xl shadow-cyan-950/40 relative"
          >
            <h3 className="text-xl font-bold text-white mb-2">Kirim Pesan Langsung</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Isi form di bawah ini dan saya akan merespon pesan Anda secepatnya.
            </p>

            {/* Success Alert */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-xs sm:text-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Pesan berhasil dikirim! Silakan cek kotak masuk Gmail Anda.</span>
              </motion.div>
            )}

            {/* Error Alert */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Lengkap <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Contoh: alip tampan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#020d1c] border border-cyan-900/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Alamat Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nama@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#020d1c] border border-cyan-900/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subjek Proyek
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Pembuatan Website Bisnis / Diskusi Frontend"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#020d1c] border border-cyan-900/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pesan & Rincian Kebutuhan <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Ceritakan tentang proyek Anda, ekspektasi, atau pertanyaan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#020d1c] border border-cyan-900/60 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cyan-950 border-t-transparent rounded-full animate-spin" />
                    <span>Mengirim Pesan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};