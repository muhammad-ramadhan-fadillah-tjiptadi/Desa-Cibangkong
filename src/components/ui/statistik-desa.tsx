import { motion } from "motion/react";
import { Users, User, Maximize2, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export const StatistikDesa = () => {
  return (
    <section className="relative w-full bg-background py-24 overflow-hidden" id="statistik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Data & Fakta</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight m-0"
          >
            Demografi Cibangkong
          </motion.h2>
        </div>

        {/* Dashboard Grid */}
        <div className="flex flex-col gap-8">
          
          {/* Row 1: 4 Top Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Total Penduduk */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-border/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Total Penduduk</div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={18} />
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-1">
                  100 <span className="text-base font-normal text-muted-foreground tracking-normal">Jiwa</span>
                </div>
                <div className="text-sm font-medium text-primary">100 KK di 7 RW</div>
              </div>
            </motion.div>

            {/* Card 2: Sex Ratio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 border border-border/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Sex Ratio (Gender)</div>
                <div className="w-10 h-10 rounded-full bg-[#6B4F3A]/10 flex items-center justify-center text-[#6B4F3A]">
                  <User size={18} />
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
                  102 <span className="text-base font-normal text-muted-foreground tracking-normal">L/100 P</span>
                </div>
                {/* Progress Bar Split */}
                <div className="w-full flex h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-primary h-full" style={{ width: '51%' }}></div>
                  <div className="bg-[#6B4F3A] h-full" style={{ width: '49%' }}></div>
                </div>
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-primary">Pria: 51 (51%)</span>
                  <span className="text-[#6B4F3A]">Wanita: 49 (49%)</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Kepadatan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-border/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Kepadatan Penduduk</div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Maximize2 size={18} />
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-1">
                  44 <span className="text-base font-normal text-muted-foreground tracking-normal">Jiwa/km²</span>
                </div>
                <div className="text-sm font-medium text-primary">Wilayah: 2,31 km²</div>
              </div>
            </motion.div>

            {/* Card 4: Database Warga */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 border border-border/40 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Database Sistem</div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={18} />
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-1">
                  100 <span className="text-base font-normal text-muted-foreground tracking-normal">%</span>
                </div>
                <div className="text-sm font-medium text-primary">Telah Terverifikasi</div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Area Chart: Tren Laju Pertumbuhan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Tren Laju Pertumbuhan (2022 - 2026)</div>
                <div className="text-[10px] font-bold bg-[#6B4F3A]/10 text-[#6B4F3A] px-3 py-1 rounded-full">Total: 100 Jiwa</div>
              </div>
              
              <div className="relative h-64 md:h-72 lg:h-80 min-h-[250px] w-full flex-1 flex items-end mt-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pb-8">
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                </div>
                
                {/* CSS Area Chart */}
                <div className="absolute inset-0 pb-8 overflow-hidden z-10 flex items-end">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="areaGradientPrimary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2F5C36" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#2F5C36" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 100 L 0 30 Q 50 15 100 10 L 100 100 Z" 
                      fill="url(#areaGradientPrimary)" 
                    />
                    <path 
                      d="M 0 30 Q 50 15 100 10" 
                      fill="none" 
                      stroke="#2F5C36" 
                      strokeWidth="2" 
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-muted-foreground py-2 z-0">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                {/* X-Axis */}
                <div className="w-full h-8 flex justify-between items-end text-[10px] text-muted-foreground z-20 px-1 pt-2 border-t border-black/10 mt-auto">
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                  <span>2026</span>
                </div>
              </div>
            </motion.div>

            {/* Bar Chart: Kelahiran vs Kematian */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm flex flex-col"
            >
              <div className="mb-10">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Kelahiran VS Kematian</div>
              </div>

              <div className="relative h-64 md:h-72 lg:h-80 min-h-[250px] w-full flex-1 flex flex-col justify-end mt-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pb-8">
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                  <div className="border-b border-black/5 w-full flex-1 border-dashed"></div>
                </div>

                {/* Bars */}
                <div className="relative h-full pb-8 z-10 flex justify-between items-end px-4 md:px-8">
                  {[
                    { year: '2022', k: 50, d: 25 }, 
                    { year: '2023', k: 62.5, d: 37.5 },
                    { year: '2024', k: 75, d: 25 },
                    { year: '2025', k: 62.5, d: 25 },
                    { year: '2026', k: 50, d: 25 }
                  ].map((data, i) => (
                    <div key={i} className="flex gap-1 h-full items-end group">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${data.k}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="w-4 md:w-6 bg-primary rounded-t-sm"
                      />
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${data.d}%` }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                        className="w-4 md:w-6 bg-[#6B4F3A] rounded-t-sm"
                      />
                    </div>
                  ))}
                </div>

                {/* Y-Axis Labels */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-muted-foreground py-2 z-0">
                  <span>8</span>
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>
                </div>

                {/* X-Axis */}
                <div className="w-full h-8 flex justify-between items-end text-[10px] text-muted-foreground z-20 px-4 md:px-8 border-t border-black/10 mt-auto">
                  <span className="w-10 text-center">2022</span>
                  <span className="w-10 text-center">2023</span>
                  <span className="w-10 text-center">2024</span>
                  <span className="w-10 text-center">2025</span>
                  <span className="w-10 text-center">2026</span>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-xs font-bold text-foreground">Kelahiran</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#6B4F3A]"></div>
                  <span className="text-xs font-bold text-foreground">Kematian</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Row 3: Progress Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Tingkat Pendidikan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F6] flex items-center justify-center text-primary">
                  <FileText size={16} />
                </div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Tingkat Pendidikan Akhir</div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "SMA / SMK Sederajat", val: "45 Jiwa (45%)", pct: 45 },
                  { label: "Diploma & Sarjana", val: "15 Jiwa (15%)", pct: 15 },
                  { label: "SMP / Sederajat", val: "25 Jiwa (25%)", pct: 25 },
                  { label: "SD / Sederajat", val: "15 Jiwa (15%)", pct: 15 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-foreground/80">{item.label}</span>
                      <span className="text-primary">{item.val}</span>
                    </div>
                    <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mata Pencaharian */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F6] flex items-center justify-center text-[#6B4F3A]">
                  <Users size={16} />
                </div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Mata Pencaharian Utama</div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Petani & Nelayan", val: "40 Jiwa (40%)", pct: 40 },
                  { label: "Pedagang & UMKM", val: "30 Jiwa (30%)", pct: 30 },
                  { label: "Sektor Jasa & Swasta", val: "15 Jiwa (15%)", pct: 15 },
                  { label: "Lainnya", val: "15 Jiwa (15%)", pct: 15 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-foreground/80">{item.label}</span>
                      <span className="text-[#6B4F3A]">{item.val}</span>
                    </div>
                    <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-[#6B4F3A] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Row 4: Tables and Docs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Status Umur & Golongan Darah */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F9F8F6] flex items-center justify-center text-primary">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Umur & Golongan Darah</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Umur */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Kelompok Umur</div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">0-14 Thn</span>
                    <span className="font-bold text-primary">15 (15%)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">15-64 Thn</span>
                    <span className="font-bold text-primary">75 (75%)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-foreground/70">65+ Thn</span>
                    <span className="font-bold text-primary">10 (10%)</span>
                  </div>
                </div>

                {/* Agama */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Agama</div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">Islam</span>
                    <span className="font-bold text-primary">100%</span>
                  </div>
                </div>

                {/* Golongan Darah */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Golongan Darah</div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">O</span>
                    <span className="font-bold text-primary">40 (40%)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">A</span>
                    <span className="font-bold text-primary">25 (25%)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-border/40">
                    <span className="text-foreground/70">B</span>
                    <span className="font-bold text-primary">25 (25%)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-foreground/70">AB</span>
                    <span className="font-bold text-primary">10 (10%)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Administrasi Publik */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-border/40 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#6B4F3A]/10 flex items-center justify-center text-[#6B4F3A]">
                  <FileText size={16} />
                </div>
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Administrasi Publik</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-[calc(100%-3rem)] min-h-[140px]">
                
                <div className="bg-[#F9F8F6] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center border border-black/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-4 shadow-sm ring-1 ring-black/5">
                    <FileText size={18} />
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1">KTP Elektronik</div>
                  <div className="text-[10px] text-primary font-bold uppercase tracking-wider">100 Terdaftar</div>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center border border-black/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6B4F3A] mb-4 shadow-sm ring-1 ring-black/5">
                    <Users size={18} />
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1">Kartu Keluarga</div>
                  <div className="text-[10px] text-[#6B4F3A] font-bold uppercase tracking-wider">25 KK Unik</div>
                </div>

                <div className="bg-[#F9F8F6] rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center border border-black/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-4 shadow-sm ring-1 ring-black/5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="text-sm font-bold text-foreground mb-1">Akta Kelahiran</div>
                  <div className="text-[10px] text-primary font-bold uppercase tracking-wider">100 Terdaftar</div>
                </div>

              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
};
