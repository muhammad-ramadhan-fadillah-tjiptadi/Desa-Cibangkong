import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Shield, Clock, FileCheck, X, Send, MapPin } from "lucide-react";

export const LayananDesa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setTimeout(() => setIsSubmitted(false), 500);
    }, 2000);
  };

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden" id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#2F5C36] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
            >
              <FileText size={14} />
              LAYANAN PENGAJUAN DOKUMEN DIGITAL
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.15] tracking-tight mb-6"
            >
              Formulir Permohonan Surat Keterangan Desa Cibangkong
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed"
            >
              Ajukan pembuatan Surat Keterangan Domisili, SKU, SKTM, serta pengantar resmi Desa Cibangkong, secara mandiri, cepat, dan transparan.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="shrink-0"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0B4D36] hover:bg-[#0B4D36]/90 text-white font-bold px-6 py-3.5 rounded-full flex items-center gap-2 transition-colors shadow-sm"
            >
              <FileText size={18} />
              Buat Pengajuan Dokumen
            </button>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#FAFAFA] rounded-3xl p-8 border border-border/40 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Integrasi Data NIK Dukcapil</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verifikasi identitas pemohon dilakukan otomatis sesuai basis data kependudukan resmi tingkat kabupaten.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#FAFAFA] rounded-3xl p-8 border border-border/40 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Selesai Dalam 1x24 Jam</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dokumen surat ditandatangani secara elektronik (TTE) dan siap diunduh dalam format PDF resmi.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-[#FAFAFA] rounded-3xl p-8 border border-border/40 shadow-sm flex flex-col"
          >
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
              <FileCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Keabsahan QR Code Resmi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Setiap dokumen surat yang diterbitkan memiliki barcode verifikasi keaslian berkas dari Desa Cibangkong.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Popup Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 cursor-pointer"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl z-10 flex flex-col"
            >
              <div className="flex justify-between items-start p-6 md:p-8 border-b border-border/40 bg-[#FAFAFA]">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B4D36] text-white flex items-center justify-center shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Formulir Permohonan Surat Digital</h3>
                    <p className="text-sm text-muted-foreground mt-1">Layanan pengajuan dokumen administrasi resmi desa</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-foreground rounded-full transition-colors shrink-0"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 bg-[#FAFAFA]">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                      <Shield size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Pengajuan Berhasil!</h4>
                    <p className="text-muted-foreground text-sm">
                      Sistem sedang memverifikasi NIK Anda. Status dokumen dapat dicek melalui WhatsApp secara otomatis.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    {/* Jenis Surat */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="jenis" className="text-sm font-bold text-foreground">Pilih Jenis Dokumen Surat <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-green-700">
                          <FileText size={18} />
                        </div>
                        <select 
                          id="jenis" 
                          required
                          defaultValue=""
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer text-foreground font-medium"
                        >
                          <option value="" disabled>Pilih jenis surat...</option>
                          <option value="skd">Surat Keterangan Domisili (SKD)</option>
                          <option value="sktm">Surat Keterangan Tidak Mampu (SKTM)</option>
                          <option value="sku">Surat Keterangan Usaha (SKU)</option>
                          <option value="kematian">Surat Keterangan Kematian</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 1: Nama & NIK */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="nama" className="text-sm font-bold text-foreground">Nama Lengkap Pemohon <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          id="nama" 
                          required
                          placeholder="Sesuai KTP (Contoh: Ahmad Subagja)" 
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="nik" className="text-sm font-bold text-foreground">NIK KTP (16 Digit) <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          id="nik" 
                          required
                          placeholder="Contoh : 320501xxxxxxxxxx" 
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-mono text-foreground"
                          pattern="\d{16}"
                          maxLength={16}
                        />
                      </div>
                    </div>

                    {/* Row 2: KK & WA */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="kk" className="text-sm font-bold text-foreground">Nomor KK (16 Digit) <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          id="kk" 
                          required
                          placeholder="Contoh : 320501xxxxxxxxxx" 
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-mono text-foreground"
                          pattern="\d{16}"
                          maxLength={16}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="wa" className="text-sm font-bold text-foreground">No. WhatsApp Aktif <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          id="wa" 
                          required
                          placeholder="0812xxxxxxx" 
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-mono text-foreground"
                        />
                      </div>
                    </div>

                    {/* Row 3: Wilayah RW & RT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="rw" className="text-sm font-bold text-foreground">Wilayah Asal RW <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-green-700">
                            <MapPin size={18} />
                          </div>
                          <select 
                            id="rw" 
                            required
                            defaultValue=""
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm appearance-none cursor-pointer text-foreground font-medium"
                          >
                            <option value="" disabled>Pilih Wilayah RW...</option>
                            <option value="01">Wilayah RW 01 - Sukagalih</option>
                            <option value="02">Wilayah RW 02 - Sukamaju</option>
                            <option value="03">Wilayah RW 03 - Sukaresmi</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="rt" className="text-sm font-bold text-foreground">Nomor RT <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          id="rt" 
                          required
                          placeholder="RT 01" 
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground"
                        />
                      </div>
                    </div>

                    {/* Maksud & Keperluan */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="keperluan" className="text-sm font-bold text-foreground">Maksud & Keperluan Surat <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="keperluan" 
                        required
                        placeholder="Contoh: Syarat Pengajuan Kredit Usaha Bank / Beasiswa Pendidikan" 
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground"
                      />
                    </div>

                    {/* Catatan Tambahan */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="catatan" className="text-sm font-bold text-foreground">Catatan / Keterangan Tambahan <span className="text-muted-foreground font-normal">(Opsional)</span></label>
                      <textarea 
                        id="catatan" 
                        rows={3}
                        placeholder="Tambahkan keterangan pendukung jika ada..." 
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-foreground resize-none"
                      ></textarea>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-border/40">
                      <button 
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 rounded-xl font-bold text-foreground bg-[#F1F5F9] hover:bg-zinc-200 transition-colors text-sm"
                      >
                        Batal
                      </button>
                      <button 
                        type="submit"
                        className="bg-[#0B4D36] hover:bg-[#0B4D36]/90 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors text-sm"
                      >
                        <Send size={16} /> Kirim Pengajuan Surat
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
