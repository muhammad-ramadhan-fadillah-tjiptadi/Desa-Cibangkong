"use client";

import { MenuIcon } from "lucide-react";
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
  const informasiDesa = [
    {
      title: "Aparatur",
      description: "Struktur organisasi dan pemerintahan desa",
      href: "#",
    },
    {
      title: "Statistik",
      description: "Data kependudukan dan demografi desa",
      href: "#",
    },
    {
      title: "Berita",
      description: "Kabar dan pengumuman terbaru desa",
      href: "#",
    },
    {
      title: "CCTV",
      description: "Pantauan langsung kondisi area desa",
      href: "#",
    },
  ];

  return (
    <section className="py-4 w-full">
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
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Profile
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Informasi</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] grid-cols-2 p-3 gap-2">
                    {informasiDesa.map((item, index) => (
                      <NavigationMenuLink
                        href={item.href}
                        key={index}
                        className="block rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div>
                          <p className="mb-1 font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  UMKM
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Layanan
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button>Login Admin</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
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
                  <a href="#" className="font-medium text-lg hover:text-muted-foreground transition-colors">Beranda</a>
                  <a href="#" className="font-medium text-lg hover:text-muted-foreground transition-colors">Profile</a>
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
                  <a href="#" className="font-medium text-lg hover:text-muted-foreground transition-colors">UMKM</a>
                  <a href="#" className="font-medium text-lg hover:text-muted-foreground transition-colors">Layanan</a>
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
