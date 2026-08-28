"use client";

import { useState } from "react";
import { Check, Map, Camera, Lightbulb, ShieldAlert, Navigation, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const rwData = [
  { id: "RW 01", area: "0.35 km²", pop: "450 jiwa", rumah: "115 unit", color: "rgba(59, 130, 246, 0.15)", hoverColor: "rgba(59, 130, 246, 0.35)", stroke: "#3b82f6", points: "0,60 25,55 40,75 50,100 0,100", labelX: 20, labelY: 75, textColor: "text-blue-600" },
  { id: "RW 02", area: "0.40 km²", pop: "520 jiwa", rumah: "130 unit", color: "rgba(168, 85, 247, 0.15)", hoverColor: "rgba(168, 85, 247, 0.35)", stroke: "#a855f7", points: "40,0 75,0 80,35 70,55 45,45 35,25", labelX: 55, labelY: 20, textColor: "text-purple-600" },
  { id: "RW 03", area: "0.25 km²", pop: "310 jiwa", rumah: "80 unit",  color: "rgba(236, 72, 153, 0.15)", hoverColor: "rgba(236, 72, 153, 0.35)", stroke: "#ec4899", points: "0,0 40,0 35,25 45,45 25,55 0,60", labelX: 20, labelY: 25, textColor: "text-pink-600" },
  { id: "RW 04", area: "0.55 km²", pop: "600 jiwa", rumah: "150 unit", color: "rgba(249, 115, 22, 0.15)", hoverColor: "rgba(249, 115, 22, 0.35)", stroke: "#f97316", points: "75,0 100,0 100,50 70,55 80,35", labelX: 85, labelY: 25, textColor: "text-orange-600" },
  { id: "RW 05", area: "0.45 km²", pop: "480 jiwa", rumah: "125 unit", color: "rgba(16, 185, 129, 0.15)", hoverColor: "rgba(16, 185, 129, 0.35)", stroke: "#10b981", points: "25,55 45,45 70,55 100,50 100,100 50,100 40,75", labelX: 70, labelY: 75, textColor: "text-emerald-600" },
];

const markers = [
  { type: "fasum", x: 45, y: 55, label: "Balai Desa", icon: Building2, color: "bg-primary text-white" },
  { type: "fasum", x: 65, y: 35, label: "Masjid Raya", icon: Building2, color: "bg-primary text-white" },
  { type: "fasum", x: 75, y: 65, label: "Klinik", icon: Building2, color: "bg-primary text-white" },
  { type: "cctv", x: 50, y: 48, label: "CCTV Simpang", icon: Camera, color: "bg-red-500 text-white" },
  { type: "cctv", x: 70, y: 50, label: "CCTV Utama", icon: Camera, color: "bg-red-500 text-white" },
  { type: "cctv", x: 90, y: 75, label: "CCTV Batas", icon: Camera, color: "bg-red-500 text-white" },
  { type: "pju", x: 30, y: 50, label: "PJU 01", icon: Lightbulb, color: "bg-orange-500 text-white" },
  { type: "pju", x: 60, y: 70, label: "PJU 02", icon: Lightbulb, color: "bg-orange-500 text-white" },
];

export const InteractiveMap = () => {
  const [showRW, setShowRW] = useState(true);
  const [showFasum, setShowFasum] = useState(true);
  const [showCCTV, setShowCCTV] = useState(true);
  const [showPJU, setShowPJU] = useState(true);
  
  const [hoveredRW, setHoveredRW] = useState<string | null>(null);

  const FilterButton = ({ active, onClick, label, icon: Icon }: any) => (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all",
        active ? "bg-primary text-white" : "bg-white text-muted-foreground hover:bg-accent border border-border/50"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon size={16} />
        <span>{label}</span>
      </div>
      {active && <Check size={16} />}
    </button>
  );

  return (
    <div className="bg-[#F9F8F6] rounded-[2rem] p-4 lg:p-6 ring-1 ring-black/5 grid grid-cols-1 xl:grid-cols-[350px_1fr] gap-6 w-full min-h-[600px]">
      
      {/* Left Sidebar Control */}
      <div className="flex flex-col gap-6">
        <div>
          <div className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <Navigation size={12} /> GIS Digital Cibangkong
          </div>
          <h3 className="font-serif text-2xl font-medium text-foreground mb-3">Peta Wilayah Interaktif</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Filter tampilan batas administrasi RW, fasilitas umum, kamera pengawas CCTV, dan status alarm warga secara real-time.
          </p>
        </div>

        {/* Security Status */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5">
          <div className="flex gap-3 items-start mb-4">
            <div className="bg-primary text-white p-2 rounded-lg shrink-0">
              <ShieldAlert size={18} />
            </div>
            <div>
              <strong className="block text-foreground text-sm mb-1">Sistem Keamanan Aman</strong>
              <span className="text-xs text-muted-foreground leading-relaxed block">Seluruh titik pemukiman dan batas RW dalam kondisi tertib.</span>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors">
            Simulasikan Alarm SOS Warga
          </button>
        </div>

        {/* Layers */}
        <div>
          <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mb-3">
            Filter Tampilan Layer Peta
          </div>
          <div className="space-y-2">
            <FilterButton active={showRW} onClick={() => setShowRW(!showRW)} label="Batas Wilayah RW & RT" icon={Map} />
            <FilterButton active={showFasum} onClick={() => setShowFasum(!showFasum)} label="Fasilitas Umum (Aset Desa)" icon={Building2} />
            <FilterButton active={showCCTV} onClick={() => setShowCCTV(!showCCTV)} label="CCTV Pengawas Publik" icon={Camera} />
            <FilterButton active={showPJU} onClick={() => setShowPJU(!showPJU)} label="PJU (Penerangan Jalan)" icon={Lightbulb} />
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative bg-white rounded-3xl overflow-hidden border border-border/50 aspect-square w-full max-h-[700px] mx-auto group">
        <img 
          src="/gis-map.png" 
          alt="Base Map" 
          className="absolute inset-0 w-full h-full object-fill opacity-90 grayscale-[0.2]"
        />

        {/* Top Left Coordinate overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/50 shadow-sm flex items-center gap-2 pointer-events-none z-20">
           <Navigation size={12} className="text-primary" />
           <span className="text-[10px] font-mono font-bold tracking-widest">N 7°13'40" E 107°54'31"</span>
        </div>

        {/* SVG RW Boundaries */}
        {showRW && (
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            {rwData.map((rw) => (
              <g key={rw.id}>
                <polygon
                  points={rw.points}
                  fill={hoveredRW === rw.id ? rw.hoverColor : rw.color}
                  stroke={rw.stroke}
                  strokeWidth={hoveredRW === rw.id ? "0.8" : "0.5"}
                  strokeDasharray="1.5,1.5"
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredRW(rw.id)}
                  onMouseLeave={() => setHoveredRW(null)}
                />
              </g>
            ))}
          </svg>
        )}

        {/* RW Badges (HTML Overlay) */}
        {showRW && rwData.map(rw => (
          <div 
            key={`badge-${rw.id}`}
            className={cn(
              "absolute z-20 px-2.5 py-1 rounded-md shadow-sm border border-white/60 bg-white/80 backdrop-blur-md text-[9px] font-bold tracking-wider pointer-events-none transition-all duration-300",
              rw.textColor,
              hoveredRW === rw.id ? "scale-110 shadow-md bg-white text-[10px]" : "scale-100"
            )}
            style={{ left: `${rw.labelX}%`, top: `${rw.labelY}%`, transform: 'translate(-50%, -50%)' }}
          >
            {rw.id}
          </div>
        ))}

        {/* Hover Tooltip */}
        {hoveredRW && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/50 z-30 min-w-[180px] pointer-events-none transition-all">
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm border-b pb-2">
              <Map size={14} className="text-primary" /> {hoveredRW}
            </h4>
            {rwData.find(r => r.id === hoveredRW) && (() => {
              const data = rwData.find(r => r.id === hoveredRW)!;
              return (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luas Wilayah</span>
                    <strong className="text-foreground">{data.area}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Populasi</span>
                    <strong className="text-foreground">{data.pop}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jumlah Rumah</span>
                    <strong className="text-foreground">{data.rumah}</strong>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Markers */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {markers.map((marker, idx) => {
            if (marker.type === "fasum" && !showFasum) return null;
            if (marker.type === "cctv" && !showCCTV) return null;
            if (marker.type === "pju" && !showPJU) return null;

            return (
              <div 
                key={idx} 
                className="absolute flex flex-col items-center pointer-events-auto group/marker"
                style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className={cn("p-1.5 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer border-2 border-white", marker.color)}>
                  <marker.icon size={12} />
                </div>
                {/* Marker Tooltip on Hover */}
                <div className="absolute top-full mt-1 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                  {marker.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
