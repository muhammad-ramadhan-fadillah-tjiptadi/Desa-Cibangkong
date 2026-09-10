import { Navbar5 } from "@/components/ui/navbar-5";
import { HeroScattered } from "@/components/ui/hero-scattered";
import { ProfileDesa } from "@/components/ui/profile-desa";
import { BankSampahDashboard } from "@/components/ui/bank-sampah-dashboard";
import { AparaturDesa } from "@/components/ui/aparatur-desa";
import { StatistikDesa } from "@/components/ui/statistik-desa";
import { Recycle, Leaf, BarChart3 } from "lucide-react";

const DemoOne = () => {
  return (
    <div className="w-full">
      <Navbar5 />
      <HeroScattered
        title="Bersih, Hijau, dan Lestari bersama Desa Cibangkong."
        description="Sistem Bank Sampah, proses daur ulang terpadu, dan edukasi kebersihan warga — membangun lingkungan yang asri dan sehat untuk generasi mendatang."
        photoTopLeft={{
          src: "/hero-bank-sampah.png",
          alt: "Aktivitas Bank Sampah warga Desa Cibangkong",
        }}
        photoTopRight={{
          src: "/hero-gang-bersih.png",
          alt: "Gang bersih asri Desa Cibangkong",
        }}
        photoBottomRight={{
          src: "/hero-bebas-sampah.png",
          alt: "Ruang terbuka hijau Desa Cibangkong",
        }}
        badgeLeft={{
          icon: <Recycle size={15} strokeWidth={1.8} />,
          label: "Sampah jadi berkah",
        }}
        badgeTopCenter={{
          icon: <Leaf size={15} strokeWidth={1.8} />,
          label: "Program Desa Hijau",
        }}
        badgeRight={{
          icon: <BarChart3 size={15} strokeWidth={1.8} />,
          label: "Pantau data sampah real-time",
        }}
        widgetLeft={{
          initials: [
            { letter: "S", color: "#2F5C36" },
            { letter: "A", color: "#6B4F3A" },
            { letter: "R", color: "#3B7A45" },
          ],
          label: "Warga aktif bulan ini",
          stat: "47 partisipan aktif",
        }}
        primaryCTA={{ text: "Dashboard Bank Sampah", link: "#" }}
        secondaryCTA={{ text: "Panduan Daur Ulang", link: "#" }}
      />
      <ProfileDesa />
      <BankSampahDashboard />
      <AparaturDesa />
      <StatistikDesa />
    </div>
  );
};

export { DemoOne };

