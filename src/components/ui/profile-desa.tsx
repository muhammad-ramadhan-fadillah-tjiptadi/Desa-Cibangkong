"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Info, BookOpen, Target, Lightbulb, MapPin, Maximize2, Recycle, Leaf
} from "lucide-react";
import { cn } from "@/lib/utils";

import { InteractiveMap } from "@/components/ui/interactive-map";

type TabValue = "sejarah" | "visi-misi" | "potensi" | "peta";

const tabs: { id: TabValue; label: string; icon: React.ElementType }[] = [
  { id: "sejarah", label: "Sejarah", icon: BookOpen },
  { id: "visi-misi", label: "Visi & Misi", icon: Target },
  { id: "potensi", label: "Potensi Desa", icon: Lightbulb },
  { id: "peta", label: "Peta Interaktif", icon: MapPin },
];

export const ProfileDesa = () => {
  const [activeTab, setActiveTab] = useState<TabValue>("sejarah");

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden" id="profil-desa">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white mb-6 shadow-sm">
              <Info size={14} />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase">Profil Desa Cibangkong</span>
            </div>
            <h2 className="font-serif text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-medium text-foreground leading-[1.08] tracking-[-0.01em]">
              Mengenal Lembur, Sejarah, & Kebudayaan Cibangkong
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground text-[0.95rem] md:text-base leading-relaxed">
              Pusat informasi desa mengenai sejarah persatuan warga, arah pembangunan visi-misi, potensi ekonomi kreatif berbasis lingkungan, serta peta wilayah.
            </p>
          </div>
        </div>

        {/* Segmented Control / Tab Bar */}
        <div className="w-full overflow-x-auto pb-2 mb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="bg-white/60 border border-border/50 p-2 rounded-2xl inline-flex flex-nowrap gap-2 backdrop-blur-sm shadow-sm min-w-max">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} 
                className={cn(
                  "whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2.5 transition-all duration-300", 
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-md scale-100" 
                    : "text-muted-foreground hover:bg-black/5 hover:text-foreground scale-[0.98]"
                )}
              >
                <tab.icon size={16} strokeWidth={activeTab === tab.id ? 2 : 1.5} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* SEJARAH TAB */}
            {activeTab === "sejarah" && (
              <motion.div 
                key="sejarah"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-8 flex flex-col gap-8">
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] w-full shadow-sm ring-1 ring-black/5">
                    <img 
                      src="/balai-desa.png" 
                      alt="Balai Desa Cibangkong" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-[0.8rem] md:text-sm font-medium tracking-wide">
                      Napak Tilas Pusaka Adat Cibangkong — Jawa Barat
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-[1.08] tracking-[-0.01em] mb-6">
                      Napak Tilas Asal Usul & Kebudayaan Cibangkong
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base max-w-[65ch]">
                      <p>
                        Nama <strong className="text-foreground font-semibold">Cibangkong</strong> berasal dari gabungan kata bahasa lokal yang melambangkan keharmonisan antara ekosistem air dan kearifan masyarakat agraris. Sejak berabad-abad lalu, wilayah ini dikenal sebagai pusat pertemuan warga dari berbagai pelosok lereng pegunungan.
                      </p>
                      <p>
                        Secara historis, Cibangkong terbentuk dari penyatuan beberapa rukun warga yang memiliki visi sama dalam mempertahankan tata ruang hijau. Di masa kini, nilai gotong royong peninggalan leluhur bertransformasi menjadi kesadaran kolektif modern dalam mengelola limbah dan menjaga kelestarian lingkungan hidup.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="bg-primary rounded-3xl p-8 text-white h-fit shadow-lg">
                    <div className="mb-10">
                      <div className="text-[10px] font-bold text-white/60 tracking-wider uppercase mb-3">Geografi Adat</div>
                      <div className="text-3xl lg:text-4xl font-bold font-serif mb-2 flex items-center gap-3">
                        <Maximize2 size={24} className="text-white/80" /> 1,85 km²
                      </div>
                      <div className="text-xs text-white/70">Luas Wilayah Resmi Data Desa</div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-white/60 tracking-wider uppercase mb-6 flex items-center gap-2">
                        <BookOpen size={14} /> Linimasa Adat & Sejarah
                      </div>
                      <div className="space-y-6">
                        <div className="grid grid-cols-[60px_1fr] gap-4">
                          <div className="font-bold text-sm">1800-an</div>
                          <div className="text-xs text-white/80 leading-relaxed">Pembukaan lahan pertama oleh tetua adat di sekitar mata air utama.</div>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] gap-4">
                          <div className="font-bold text-sm">1980-an</div>
                          <div className="text-xs text-white/80 leading-relaxed">Pertanian intensif dimulai, Cibangkong menjadi lumbung pangan lokal.</div>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] gap-4">
                          <div className="font-bold text-sm">2002</div>
                          <div className="text-xs text-white/80 leading-relaxed">Peresmian status administrasi menjadi Desa Cibangkong secara utuh.</div>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] gap-4">
                          <div className="font-bold text-sm">2026</div>
                          <div className="text-xs text-white/80 leading-relaxed">Pionir Desa Bebas Sampah dengan ekosistem daur ulang warga.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VISI & MISI TAB */}
            {activeTab === "visi-misi" && (
              <motion.div 
                key="visi-misi"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24"
              >
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                      <span className="w-8 h-px bg-primary/30"></span>
                      Visi Pembangunan
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-[1.08] tracking-[-0.01em]">
                      Mewujudkan Desa yang mandiri, sejahtera, dan berbudaya lingkungan.
                    </h3>
                  </div>

                </div>
                
                <div className="lg:w-1/2">
                   <div className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                      <span className="w-8 h-px bg-primary/30"></span>
                      Misi Prioritas
                    </div>
                   <div className="flex flex-col">
                      <div className="group border-t border-border/60 py-6">
                        <div className="flex gap-6">
                           <span className="text-primary font-serif italic text-2xl font-light mt-0.5">01.</span>
                           <div>
                             <h4 className="font-medium text-foreground text-lg mb-2">Tata Kelola Lingkungan Terpadu</h4>
                             <p className="text-sm text-muted-foreground leading-relaxed">Membangun ekosistem pengelolaan limbah dan sampah terpadu (Bank Sampah) di setiap wilayah RT/RW.</p>
                           </div>
                        </div>
                      </div>
                      
                      <div className="group border-t border-border/60 py-6">
                        <div className="flex gap-6">
                           <span className="text-primary font-serif italic text-2xl font-light mt-0.5">02.</span>
                           <div>
                             <h4 className="font-medium text-foreground text-lg mb-2">Pemberdayaan Ekonomi Sirkular</h4>
                             <p className="text-sm text-muted-foreground leading-relaxed">Meningkatkan kapasitas UMKM warga melalui pemanfaatan hasil daur ulang limbah menjadi kriya kreatif bernilai ekonomis tinggi.</p>
                           </div>
                        </div>
                      </div>

                      <div className="group border-t border-b border-border/60 py-6">
                        <div className="flex gap-6">
                           <span className="text-primary font-serif italic text-2xl font-light mt-0.5">03.</span>
                           <div>
                             <h4 className="font-medium text-foreground text-lg mb-2">Pelayanan Desa Digital</h4>
                             <p className="text-sm text-muted-foreground leading-relaxed">Mewujudkan pelayanan desa yang transparan, cepat, dan mudah diakses oleh seluruh warga melalui digitalisasi.</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* POTENSI DESA TAB */}
            {activeTab === "potensi" && (
              <motion.div 
                key="potensi"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[600px]"
              >
                {/* Big Card - Left */}
                <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden group min-h-[400px] lg:min-h-0">
                  <img src="/hero-bank-sampah.png" alt="Bank Sampah" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    <div className="text-primary bg-white/95 px-4 py-2 rounded-full w-fit mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                      <Recycle size={14}/> Sirkular Ekonomi
                    </div>
                    <h4 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-[1.1]">Bank Sampah Terpadu</h4>
                    <p className="text-white/80 max-w-md leading-relaxed text-sm md:text-base">Sistem daur ulang aktif yang menukar limbah sampah rumah tangga menjadi nilai ekonomi produktif bagi kesejahteraan warga.</p>
                  </div>
                </div>

                {/* Right Column (Stacked) */}
                <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
                  {/* Top Right Card */}
                  <div className="relative flex-1 rounded-[2rem] overflow-hidden group min-h-[280px]">
                    <img src="/hero-gang-bersih.png" alt="Gang Hijau" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="text-primary bg-white/95 px-4 py-2 rounded-full w-fit mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                          <Leaf size={14}/> Ruang Asri
                        </div>
                        <h4 className="font-serif text-2xl text-white mb-2 leading-[1.1]">Gang Hijau & Pekarangan</h4>
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm">Penghijauan lorong desa yang menciptakan ruang lingkungan asri, sejuk, dan bernilai estetis tinggi.</p>
                    </div>
                  </div>

                  {/* Bottom Right Box */}
                  <div className="bg-white rounded-[2rem] p-8 ring-1 ring-black/5 flex-1 flex flex-col justify-center">
                    <h4 className="font-serif text-xl font-medium text-foreground mb-6">Penggerak Potensi Lainnya</h4>
                    <ul className="space-y-5">
                        <li className="flex gap-4 items-start group">
                          <span className="text-primary font-serif italic text-lg font-light mt-0.5">01.</span>
                          <div>
                            <strong className="block text-foreground text-sm mb-1 group-hover:text-primary transition-colors">Kerajinan Kriya Daur Ulang</strong>
                            <span className="text-xs text-muted-foreground leading-relaxed block">Produksi tas dan anyaman bernilai jual dari bahan limbah plastik.</span>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                          <span className="text-primary font-serif italic text-lg font-light mt-0.5">02.</span>
                          <div>
                            <strong className="block text-foreground text-sm mb-1 group-hover:text-primary transition-colors">Koperasi Simpan Pinjam Warga</strong>
                            <span className="text-xs text-muted-foreground leading-relaxed block">Wadah mandiri yang dikelola oleh paguyuban ibu-ibu PKK desa.</span>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start group">
                          <span className="text-primary font-serif italic text-lg font-light mt-0.5">03.</span>
                          <div>
                            <strong className="block text-foreground text-sm mb-1 group-hover:text-primary transition-colors">Pusat Literasi Publik</strong>
                            <span className="text-xs text-muted-foreground leading-relaxed block">Perpustakaan desa dan ruang belajar gratis bagi anak usia sekolah.</span>
                          </div>
                        </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PETA INTERAKTIF TAB */}
            {activeTab === "peta" && (
              <motion.div 
                key="peta"
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }} 
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <InteractiveMap />
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
