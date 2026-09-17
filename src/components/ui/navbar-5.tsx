"use client";

import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar5 = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const informasiDesa = [
    {
      title: "Aparatur",
      description: "Struktur organisasi dan pemerintahan desa",
      href: "#aparatur",
    },
    {
      title: "Statistik",
      description: "Data kependudukan dan demografi desa",
      href: "#statistik",
    },
    {
      title: "Berita",
      description: "Kabar dan pengumuman terbaru desa",
      href: "#berita",
    },
    {
      title: "CCTV",
      description: "Pantauan langsung kondisi area desa",
      href: "#cctv",
    },
  ];

  const navItemStyles = cn(
    navigationMenuTriggerStyle(),
    "bg-transparent text-primary-foreground hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white data-[state=open]:bg-white/20 data-[active]:bg-white/20"
  );

  return (
    <section className="sticky top-0 z-50 py-4 w-full bg-primary/95 text-primary-foreground backdrop-blur-md border-b border-primary-foreground/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Desa Cibangkong
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#beranda" className={navItemStyles} onClick={handleScroll}>
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#profil-desa" className={navItemStyles} onClick={handleScroll}>
                  Profile
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#bank-sampah" className={navItemStyles} onClick={handleScroll}>
                  Bank Sampah
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemStyles}>Informasi</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-primary text-white border-white/10">
                  <div className="grid w-[500px] grid-cols-2 p-3 gap-2">
                    {informasiDesa.map((item, index) => (
                      <NavigationMenuLink
                        href={item.href}
                        key={index}
                        onClick={handleScroll}
                        className="block rounded-md p-3 transition-colors hover:bg-white/10"
                      >
                        <div>
                          <p className="mb-1 font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-sm text-white/70">
                            {item.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#umkm" className={navItemStyles} onClick={handleScroll}>
                  UMKM
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#layanan" className={navItemStyles} onClick={handleScroll}>
                  Layanan
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold shadow-sm">Login Admin</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold tracking-tighter">
                      Desa Cibangkong
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-4 mt-4">
                  <a href="#beranda" onClick={handleScroll} className="font-medium text-lg hover:text-muted-foreground transition-colors">Beranda</a>
                  <a href="#profil-desa" onClick={handleScroll} className="font-medium text-lg hover:text-muted-foreground transition-colors">Profile</a>
                  <a href="#bank-sampah" onClick={handleScroll} className="font-medium text-lg hover:text-muted-foreground transition-colors">Bank Sampah</a>
                </div>
                <Accordion type="single" collapsible className="mb-2">
                  <AccordionItem value="informasi" className="border-none">
                    <AccordionTrigger className="text-lg font-medium hover:no-underline py-4">
                      Informasi
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-2">
                        {informasiDesa.map((item, index) => (
                          <a
                            href={item.href}
                            key={index}
                            onClick={handleScroll}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70 flex flex-col"
                          >
                            <span className="mb-1 font-semibold text-foreground">
                              {item.title}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {item.description}
                            </span>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-4">
                  <a href="#umkm" onClick={handleScroll} className="font-medium text-lg hover:text-muted-foreground transition-colors">UMKM</a>
                  <a href="#layanan" onClick={handleScroll} className="font-medium text-lg hover:text-muted-foreground transition-colors">Layanan</a>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <Button>Login Admin</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};
