import { motion } from "motion/react";
import { Store } from "lucide-react";

export const UmkmDesa = () => {
  const products = [
    {
      id: 1,
      name: "Kopi Robusta Cibangkong",
      category: "Kopi & Minuman",
      price: "Rp 35.000",
      image: "/umkm-1.png",
      description: "Biji kopi pilihan hasil panen petani lokal dengan proses roasting tradisional."
    },
    {
      id: 2,
      name: "Kerajinan Anyaman Bambu",
      category: "Kriya & Kesenian",
      price: "Rp 85.000",
      image: "/umkm-2.png",
      description: "Wadah serbaguna ramah lingkungan karya pengerajin terampil desa."
    },
    {
      id: 3,
      name: "Keripik Singkong Organik",
      category: "Makanan Ringan",
      price: "Rp 15.000",
      image: "/umkm-3.png",
      description: "Camilan renyah tanpa pengawet dari singkong hasil kebun warga."
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden" id="umkm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
            >
              <Store size={14} />
              PRODUK UNGGULAN UMKM
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-foreground leading-[1.15] tracking-tight mb-6"
            >
              Karya Asli Warga Desa
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base leading-relaxed"
            >
              Dukung perekonomian lokal dengan membeli produk langsung dari para pengrajin dan petani Desa Cibangkong. 100% otentik dan berkualitas tinggi.
            </motion.p>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-zinc-50 rounded-[2rem] overflow-hidden border border-border/40 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-zinc-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center mt-auto pt-4 border-t border-border/50">
                  <span className="text-lg font-bold text-foreground">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
