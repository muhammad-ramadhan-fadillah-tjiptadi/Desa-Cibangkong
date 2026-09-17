import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, User, X } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Peresmian Bank Sampah Unit 2: Kolaborasi Warga Cibangkong Ciptakan Desa Mandiri",
    category: "Lingkungan",
    date: "12 Sep 2026",
    author: "Admin Desa",
    content: "Warga Desa Cibangkong kembali menunjukkan komitmennya terhadap kelestarian lingkungan dengan meresmikan Bank Sampah \"Hutan Lestari\" Unit 2. Fasilitas baru ini diharapkan mampu menampung kapasitas daur ulang yang lebih besar dan memberdayakan ekonomi warga sekitar melalui program tukar sampah jadi berkah. Acara peresmian ini dihadiri oleh Kepala Desa, perangkat desa, serta tokoh masyarakat setempat. Warga sangat antusias dan berjanji akan terus menjaga kebersihan lingkungan.",
    image: "/news-1.png",
    color: "bg-primary"
  },
  {
    id: 2,
    title: "Jadwal Edukasi Daur Ulang Pemuda Karang Taruna Bulan Ini",
    category: "Edukasi",
    date: "10 Sep 2026",
    author: "Admin Desa",
    content: "Karang Taruna Desa Cibangkong kembali mengadakan sesi edukasi daur ulang. Kegiatan ini bertujuan untuk membekali para pemuda dengan keterampilan mengolah limbah plastik menjadi barang bernilai guna tinggi, seperti kerajinan tangan dan pot tanaman. Diharapkan kegiatan ini menjadi langkah awal mencetak wirausahawan muda yang peduli lingkungan secara berkelanjutan.",
    image: "/news-2.png",
    color: "bg-[#6B4F3A]"
  },
  {
    id: 3,
    title: "Gotong Royong Bersihkan Saluran Air Sambut Musim Penghujan",
    category: "Kegiatan",
    date: "05 Sep 2026",
    author: "Admin Desa",
    content: "Menjelang musim penghujan, ratusan warga Desa Cibangkong turun tangan bergotong royong membersihkan saluran air (drainase) dan gorong-gorong. Kegiatan rutin tahunan ini adalah wujud nyata kekompakan warga dalam mencegah banjir dan menjaga asrinya pemandangan desa. Terima kasih kepada semua pihak yang telah berpartisipasi aktif dalam kegiatan mulia ini!",
    image: "/news-3.png",
    color: "bg-primary"
  }
];

export const BeritaDesa = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const handleOpenInfo = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedNews({
      type: 'info',
      title: "Halaman Semua Berita",
      content: "Fitur Indeks Semua Berita sedang dalam tahap pengembangan. Nantikan pembaruan sistem selanjutnya dari Desa Cibangkong!",
    });
  };

  const handleOpenNews = (e: React.MouseEvent, news: any) => {
    e.preventDefault();
    setSelectedNews({ type: 'news', ...news });
  };

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden" id="berita">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Kabar Desa</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight m-0"
            >
              Berita & Pengumuman
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button onClick={handleOpenInfo} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors">
              Lihat Semua Berita <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Headline News (Takes 7 cols on lg) */}
          {newsData.slice(0, 1).map((news) => (
            <motion.div 
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 group flex flex-col bg-white rounded-3xl border border-border/40 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={(e) => handleOpenNews(e, news)}
            >
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className={`absolute top-4 left-4 ${news.color} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                  {news.category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
                <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {news.date}</div>
                  <div className="flex items-center gap-1.5"><User size={14} /> {news.author}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-foreground/70 mb-6 line-clamp-2 md:line-clamp-3">
                  {news.content}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-primary flex items-center gap-2 group/link">
                    Baca Selengkapnya <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular News (Takes 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {newsData.slice(1).map((news, i) => (
              <motion.div 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl border border-border/40 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex-1 cursor-pointer"
                onClick={(e) => handleOpenNews(e, news)}
              >
                <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute top-4 left-4 sm:hidden ${news.color} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {news.category}
                  </div>
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col">
                  <div className={`hidden sm:inline-block ${news.color === 'bg-primary' ? 'bg-primary/10 text-primary' : 'bg-[#6B4F3A]/10 text-[#6B4F3A]'} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4`}>
                    {news.category}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5"><Calendar size={14} /> {news.date}</div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <div className="mt-auto">
                    <span className="text-sm font-bold text-primary flex items-center gap-2 group/link">
                      Baca <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup using Framer Motion */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/60 cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-black/20 text-foreground rounded-full transition-colors z-20"
              >
                <X size={16} />
              </button>
              
              {selectedNews.type === 'news' ? (
                <>
                  <div className="w-full h-56 sm:h-72 shrink-0 relative">
                    <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5"><Calendar size={14} /> {selectedNews.date}</div>
                      <div className="flex items-center gap-1.5"><User size={14} /> {selectedNews.author}</div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white ${selectedNews.color}`}>
                        {selectedNews.category}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      {selectedNews.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                      {selectedNews.content}
                    </p>
                  </div>
                </>
              ) : (
                <div className="p-8 md:p-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <ArrowRight size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {selectedNews.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedNews.content}
                  </p>
                  <button 
                    onClick={() => setSelectedNews(null)}
                    className="mt-8 bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Mengerti
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
