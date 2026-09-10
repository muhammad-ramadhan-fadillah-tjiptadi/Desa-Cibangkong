"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const aparatur = [
  {
    id: 1,
    name: "Bpk. Suryana, S.E.",
    role: "Kepala Desa",
    image: "/kades.png",
  },
  {
    id: 2,
    name: "Ibu Rina Marlina",
    role: "Sekretaris Desa",
    image: "/sekdes.png",
  },
  {
    id: 3,
    name: "Bpk. Ahmad Fauzi",
    role: "Kasi Pemerintahan",
    image: "/kasi.png",
  },
  {
    id: 4,
    name: "Ibu Siti Aisyah",
    role: "Kaur Keuangan",
    image: "/kaur.png",
  },
];

export const AparaturDesa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % aparatur.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + aparatur.length) % aparatur.length);

  return (
    <section className="relative w-full bg-background py-24 overflow-hidden" id="aparatur">
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
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Pelayan Masyarakat</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight m-0"
            >
              Aparatur Desa Cibangkong
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md lg:pb-2"
          >
            Berdedikasi untuk memberikan pelayanan terbaik, transparan, dan inovatif demi mewujudkan kesejahteraan seluruh warga desa.
          </motion.p>
        </div>

        {/* Desktop Team Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {aparatur.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
                <img src={person.image} alt={`Foto ${person.name}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Mail size={18} /></button>
                  <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Phone size={18} /></button>
                </div>
              </div>
              <div className="p-6 text-center bg-white flex-1 flex flex-col justify-center">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{person.name}</h3>
                <p className="text-sm font-medium text-primary">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden relative w-full overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {aparatur.map((person) => (
              <div key={person.id} className="w-full min-w-full px-2 flex-shrink-0">
                <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-md border border-border/40 max-w-sm mx-auto">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
                    <img src={person.image} alt={`Foto ${person.name}`} className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-center gap-3 bg-gradient-to-t from-black/60 to-transparent">
                      <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-sm"><Mail size={18} /></button>
                      <button className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-sm"><Phone size={18} /></button>
                    </div>
                  </div>
                  <div className="p-6 text-center bg-white flex-1 flex flex-col justify-center">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">{person.name}</h3>
                    <p className="text-sm font-medium text-primary">{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-border/50 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors active:scale-95"
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2.5">
              {aparatur.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-8' : 'bg-primary/20'}`}
                  aria-label={`Lihat profil ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-border/50 flex items-center justify-center text-primary shadow-sm hover:bg-primary hover:text-white transition-colors active:scale-95"
              aria-label="Selanjutnya"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
