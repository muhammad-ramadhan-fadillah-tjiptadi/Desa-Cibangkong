import { motion } from "motion/react";
import { Camera, Radio, Maximize2, ShieldAlert } from "lucide-react";

export const CctvDesa = () => {
  const cctvs = [
    {
      id: "CAM-01",
      name: "Bank Sampah Unit Utama",
      status: "Online",
      image: "/cctv-1.png",
      viewers: 12
    },
    {
      id: "CAM-02",
      name: "Jalan Utama & Sawah",
      status: "Online",
      image: "/cctv-2.png",
      viewers: 5
    },
    {
      id: "CAM-03",
      name: "Pelataran Balai Desa",
      status: "Online",
      image: "/cctv-3.png",
      viewers: 8
    }
  ];

  return (
    <section className="relative w-full bg-zinc-950 py-24 overflow-hidden" id="cctv">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6 border border-red-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            LIVE MONITORING
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-white leading-[1.15] tracking-tight mb-6"
          >
            Pantauan CCTV Publik Desa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            Transparansi dan keamanan adalah prioritas kami. Warga dapat memantau kondisi fasilitas umum secara langsung selama 24 jam melalui sistem terintegrasi.
          </motion.p>
        </div>

        {/* CCTV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cctvs.map((cctv, i) => (
            <motion.div 
              key={cctv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden group relative shadow-2xl"
            >
              {/* CCTV Header */}
              <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <Camera size={14} className="text-zinc-300" />
                  <span className="text-zinc-300 text-xs font-mono">{cctv.id}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-black/50 px-2 py-1 rounded backdrop-blur-md">
                    <Radio size={12} className="text-red-500" />
                    {cctv.viewers}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                </div>
              </div>

              {/* Footage */}
              <div className="relative h-64 w-full overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={cctv.image} 
                  alt={cctv.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] sepia-[10%] contrast-[1.1]"
                />
                
                {/* Fake UI Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Crosshair */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-white"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-[1px] bg-white"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-white"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-white"></div>
                  </div>
                  {/* Timestamp */}
                  <div className="absolute bottom-4 left-4 text-white/70 font-mono text-[10px] tracking-wider z-20">
                    REC / {new Date().toISOString().split('T')[0]} / {new Date().toLocaleTimeString('id-ID')}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 flex justify-between items-center bg-zinc-900 border-t border-zinc-800">
                <h3 className="text-sm font-bold text-zinc-100">{cctv.name}</h3>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <Maximize2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3 text-xs text-zinc-500 bg-zinc-900/50 w-fit mx-auto px-4 py-2 rounded-full border border-zinc-800"
        >
          <ShieldAlert size={14} className="text-zinc-400" />
          Kamera diawasi langsung oleh Linmas dan Aparatur Keamanan Desa
        </motion.div>

      </div>
    </section>
  );
};
