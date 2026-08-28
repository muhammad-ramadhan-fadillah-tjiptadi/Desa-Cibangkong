"use client";

import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Users, Wallet, Recycle } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Dummy Data ---
const recentActivities = [
  { id: 1, name: "Ibu Nurhayati (RT 02)", item: "5.2 kg Botol Plastik", value: "+ Rp 15.600", time: "2 jam yang lalu" },
  { id: 2, name: "Bpk. Suryaman (RT 01)", item: "12 kg Kardus Bekas", value: "+ Rp 18.000", time: "4 jam yang lalu" },
  { id: 3, name: "Karang Taruna RW 04", item: "Kolektif: 45 kg Kertas", value: "+ Rp 54.000", time: "1 hari yang lalu" },
  { id: 4, name: "Ibu Aisyah (RT 05)", item: "3.5 kg Minyak Jelantah", value: "+ Rp 17.500", time: "1 hari yang lalu" },
];

const monthlyTrend = [
  { month: "Jan", amount: 45 },
  { month: "Feb", amount: 52 },
  { month: "Mar", amount: 38 },
  { month: "Apr", amount: 65 },
  { month: "Mei", amount: 85 },
  { month: "Jun", amount: 100 }, // Peak
];

const MetricCard = ({ title, value, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-white rounded-3xl p-6 lg:p-8 border border-border/50 shadow-sm flex flex-col justify-between"
  >
    <div className="flex items-start justify-between mb-8">
      <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
        <TrendingUp size={12} strokeWidth={2.5} /> +12%
      </div>
    </div>
    <div>
      <h4 className="text-muted-foreground text-sm font-medium mb-2">{title}</h4>
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
        {value}
      </div>
    </div>
  </motion.div>
);

export const BankSampahDashboard = () => {
  return (
    <section className="relative w-full bg-[#F9F8F6] py-24 lg:py-32 overflow-hidden" id="bank-sampah">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Ekonomi Sirkular</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight m-0"
            >
              Dari Limbah Menjadi Berkah untuk Semua.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md lg:pb-2"
          >
            Sistem Bank Sampah terpadu Desa Cibangkong mengubah paradigma pembuangan sampah menjadi peluang ekonomi yang menguntungkan warga secara langsung.
          </motion.p>
        </div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <MetricCard title="Total Sampah Terselamatkan" value="12.4 Ton" icon={Recycle} delay={0.1} />
          <MetricCard title="Total Saldo Warga Aktif" value="Rp 45.5M" icon={Wallet} delay={0.2} />
          <MetricCard title="Partisipasi Kepala Keluarga" value="412 KK" icon={Users} delay={0.3} />
        </div>

        {/* Bottom Split Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Trend Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-primary rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-white"
          >
            <div className="mb-12">
              <h3 className="font-serif text-2xl mb-2">Tren Peningkatan</h3>
              <p className="text-white/70 text-sm">Volume sampah yang disetorkan warga (6 Bulan Terakhir)</p>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-2">
              {monthlyTrend.map((data, idx) => (
                <div key={data.month} className="flex flex-col items-center gap-4 flex-1 h-full">
                  <div className="w-full h-full flex items-end justify-center rounded-t-lg bg-white/5 relative overflow-hidden group">
                    <motion.div 
                      initial={{ height: "0%" }}
                      whileInView={{ height: `${data.amount}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                      className={cn(
                        "w-full rounded-t-lg transition-colors",
                        data.amount === 100 ? "bg-white" : "bg-white/20 group-hover:bg-white/40"
                      )}
                    />
                  </div>
                  <span className={cn(
                    "text-xs font-medium",
                    data.amount === 100 ? "text-white" : "text-white/50"
                  )}>{data.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity Log */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-border/50 shadow-sm flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl text-foreground">Aktivitas Terbaru</h3>
              <button className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
                Lihat Semua <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0 border border-border/50">
                    <Recycle size={16} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <strong className="text-sm font-semibold text-foreground truncate">{activity.name}</strong>
                      <span className="text-sm font-bold text-emerald-600 whitespace-nowrap">{activity.value}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground truncate">Menyetor {activity.item}</span>
                      <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">{activity.time}</span>
                    </div>
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
