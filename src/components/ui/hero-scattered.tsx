import { type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FloatingPhoto {
  src: string;
  alt: string;
}

export interface HeroGreenhouseProps {
  title: string;
  description: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  /** Besar — kiri atas */
  photoTopLeft: FloatingPhoto;
  /** Sedang — kanan atas */
  photoTopRight: FloatingPhoto;
  /** Sedang-besar — kanan bawah */
  photoBottomRight: FloatingPhoto;
  /** Badge mengambang kiri */
  badgeLeft?: { icon: ReactNode; label: string };
  /** Badge di antara dua foto atas */
  badgeTopCenter?: { icon: ReactNode; label: string };
  /** Badge kanan tengah */
  badgeRight?: { icon: ReactNode; label: string };
  /** Widget card kiri bawah */
  widgetLeft?: {
    initials: { letter: string; color: string }[];
    label: string;
    stat: string;
  };
}

// ─── Shared Ease ──────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// ─── Shared shadow (warm-tinted to bg) ────────────────────────────────────────

const PHOTO_SHADOW =
  "shadow-[0_16px_48px_rgba(30,26,20,0.15),0_4px_12px_rgba(30,26,20,0.08)]";
const CARD_SHADOW =
  "shadow-[0_6px_28px_rgba(30,26,20,0.10),0_1px_4px_rgba(30,26,20,0.06)]";

// ─── Animation Helpers ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 } as Transition,
  },
};

const textUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE } as Transition,
  },
};

function photoVariant(delay: number, x: number, y: number): Variants {
  return {
    hidden: { opacity: 0, x, y, scale: 0.93, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, delay, ease: EASE } as Transition,
    },
  };
}

function floatUp(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 30, scale: 0.93, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, delay, ease: EASE } as Transition,
    },
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Floating pill badge — icon slot accepts ReactNode (Lucide icon) */
function Badge({
  icon,
  label,
  className,
  animate,
  delay,
}: {
  icon: ReactNode;
  label: string;
  className?: string;
  animate: boolean;
  delay: number;
}) {
  const inner = (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl bg-white/95 backdrop-blur-sm px-3.5 py-2.5",
        CARD_SHADOW,
        "ring-1 ring-black/[0.05]",
        className,
      )}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-[12px] font-medium text-foreground/75 whitespace-nowrap leading-tight">
        {label}
      </span>
    </div>
  );

  if (!animate) return <>{inner}</>;

  return (
    <motion.div variants={floatUp(delay)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
      {inner}
    </motion.div>
  );
}

/** Small widget card with colored initials + stat */
function WidgetCard({
  initials,
  label,
  stat,
  animate,
  delay,
}: {
  initials: { letter: string; color: string }[];
  label: string;
  stat: string;
  animate: boolean;
  delay: number;
}) {
  const inner = (
    <div
      className={cn(
        "w-[190px] rounded-xl bg-white/95 backdrop-blur-sm p-3.5",
        CARD_SHADOW,
        "ring-1 ring-black/[0.05]",
      )}
    >
      <p className="text-[11px] font-medium text-foreground/60 mb-2.5">
        {label}
      </p>
      <div className="flex items-center -space-x-1.5 mb-3">
        {initials.map((av, i) => (
          <div
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white text-[11px] font-bold text-white"
            style={{ backgroundColor: av.color }}
          >
            {av.letter}
          </div>
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted ring-2 ring-white text-[10px] font-semibold text-foreground/50">
          +44
        </div>
      </div>
      <div className="inline-flex items-center rounded-lg bg-primary px-3 py-1.5">
        <span className="text-[10px] font-semibold text-white tracking-wide">
          {stat}
        </span>
      </div>
    </div>
  );

  if (!animate) return <>{inner}</>;

  return (
    <motion.div variants={floatUp(delay)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
      {inner}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function HeroScattered({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  photoTopLeft,
  photoTopRight,
  photoBottomRight,
  badgeLeft,
  badgeTopCenter,
  badgeRight,
  widgetLeft,
}: Readonly<HeroGreenhouseProps>) {
  const reduce = useReducedMotion();
  const a = !reduce;

  return (
    <section
      id="beranda"
      className="relative isolate w-full min-h-[100dvh] overflow-hidden bg-background"
      aria-label="Halaman utama Desa Cibangkong"
    >
      {/* Subtle warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(47,92,54,0.05),transparent)]"
      />

      {/* ────────────────────────────────────────────────────────
          FLOATING LAYER — hidden on mobile, visible from md (tablet) up
         ──────────────────────────────────────────────────────── */}
      <div className="hidden md:block" aria-hidden>
        {/* PHOTO: TOP-LEFT — BESAR (portrait 3:4) */}
        <motion.div
          className={cn(
            "absolute z-10",
            "left-[3%] top-[8%]",
            "left-[2%] top-[20%]",
            "lg:left-[3%] lg:top-[12%]",
            "xl:left-[5%] xl:top-[8%]",
            "w-[160px] lg:w-[240px] xl:w-[300px] 2xl:w-[340px]",
          )}
          variants={photoVariant(0.3, -40, -16)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div
            className={cn(
              "overflow-hidden rounded-2xl ring-2 ring-white/70",
              PHOTO_SHADOW,
            )}
          >
            <img
              src={photoTopLeft.src}
              alt={photoTopLeft.alt}
              loading="eager"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>

          {/* Badge: anchored to bottom-right of this photo */}
          {badgeLeft && (
            <div className="absolute -bottom-4 -right-4 lg:-right-8 z-20 scale-[0.8] lg:scale-100 origin-top-left">
              <Badge
                icon={badgeLeft.icon}
                label={badgeLeft.label}
                animate={a}
                delay={0.75}
              />
            </div>
          )}
        </motion.div>

        {/* WIDGET CARD: below the top-left photo cluster */}
        {widgetLeft && (
          <motion.div
            className={cn(
              "absolute z-20 scale-[0.85] lg:scale-100 origin-bottom-left",
              "left-[2%] bottom-[14%]",
              "lg:left-[4%] lg:bottom-[16%]",
              "xl:left-[5%] xl:bottom-[18%]",
            )}
            variants={floatUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <WidgetCard
              initials={widgetLeft.initials}
              label={widgetLeft.label}
              stat={widgetLeft.stat}
              animate={false}
              delay={0}
            />
          </motion.div>
        )}

        {/* BADGE: top-center (floating between the two top photos) */}
        {badgeTopCenter && (
          <motion.div
            className={cn(
              "absolute z-20 scale-[0.85] lg:scale-100 origin-top",
              "left-[32%] top-[14%]",
              "lg:left-[37%] lg:top-[8%]",
              "xl:left-[39%] xl:top-[10%]",
            )}
            variants={floatUp(0.85)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Badge
              icon={badgeTopCenter.icon}
              label={badgeTopCenter.label}
              animate={false}
              delay={0}
            />
          </motion.div>
        )}

        {/* PHOTO: TOP-RIGHT — SEDANG (landscape 4:3, higher up) */}
        <motion.div
          className={cn(
            "absolute z-10",
            "right-[4%] top-[22%]",
            "lg:right-[10%] lg:top-[12%]",
            "xl:right-[13%] xl:top-[10%]",
            "w-[140px] lg:w-[200px] xl:w-[240px] 2xl:w-[270px]",
          )}
          variants={photoVariant(0.4, 36, -24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div
            className={cn(
              "overflow-hidden rounded-2xl ring-2 ring-white/70",
              PHOTO_SHADOW,
            )}
          >
            <img
              src={photoTopRight.src}
              alt={photoTopRight.alt}
              loading="eager"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>

        {/* BADGE: right-center (anchored to right side) */}
        {badgeRight && (
          <motion.div
            className={cn(
              "absolute z-20 scale-[0.85] lg:scale-100 origin-right",
              "right-[2%] top-[50%]",
              "lg:right-[8%] lg:top-[42%]",
              "xl:right-[10%] xl:top-[40%]",
            )}
            variants={floatUp(0.95)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Badge
              icon={badgeRight.icon}
              label={badgeRight.label}
              animate={false}
              delay={0}
            />
          </motion.div>
        )}

        {/* PHOTO: BOTTOM-RIGHT — SEDANG-BESAR (landscape 4:3) */}
        <motion.div
          className={cn(
            "absolute z-10",
            "right-[2%] bottom-[10%]",
            "right-[2%] bottom-[10%]",
            "lg:right-[4%] lg:bottom-[12%]",
            "xl:right-[6%] xl:bottom-[14%]",
            "w-[180px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px]",
          )}
          variants={photoVariant(0.55, 44, 24)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div
            className={cn(
              "overflow-hidden rounded-2xl ring-2 ring-white/70",
              PHOTO_SHADOW,
            )}
          >
            <img
              src={photoBottomRight.src}
              alt={photoBottomRight.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────
          CENTER COPY — always visible, z-30 above photos
         ──────────────────────────────────────────────────────── */}
      <div className="relative z-30 flex min-h-[100dvh] flex-col items-center justify-center text-center px-6 py-24 lg:px-[20%] xl:px-[28%] 2xl:px-[32%]">
        <motion.div
          className="flex max-w-[500px] xl:max-w-[580px] flex-col items-center gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Headline */}
          <motion.h1
            variants={textUp}
            className="font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.5rem] font-medium tracking-[-0.01em] text-foreground leading-[1.08]"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textUp}
            className="max-w-[420px] text-[0.9rem] sm:text-[0.95rem] leading-[1.7] text-foreground"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              variants={textUp}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-7 shadow-[0_4px_16px_rgba(47,92,54,0.28)] hover:shadow-[0_6px_24px_rgba(47,92,54,0.38)] transition-shadow"
                >
                  <a href={primaryCTA.link}>{primaryCTA.text}</a>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 border-foreground/12 text-foreground/75 hover:bg-foreground/[0.04]"
                >
                  <a href={secondaryCTA.link}>{secondaryCTA.text}</a>
                </Button>
              )}
            </motion.div>
          )}

          {/* ────────────────────────────────────────────────────────
              MOBILE IMAGES GRID — visible only on md:hidden
             ──────────────────────────────────────────────────────── */}
          <motion.div
            variants={textUp}
            className="mt-10 flex w-full max-w-[400px] flex-col gap-4 md:hidden"
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Image 1: Full width on mobile */}
              <div className={cn("col-span-2 relative overflow-hidden rounded-2xl ring-2 ring-white/70", PHOTO_SHADOW)}>
                <img
                  src={photoTopLeft.src}
                  alt={photoTopLeft.alt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>

              {/* Image 2: Half width */}
              <div className={cn("col-span-1 relative overflow-hidden rounded-2xl ring-2 ring-white/70", PHOTO_SHADOW)}>
                <img
                  src={photoTopRight.src}
                  alt={photoTopRight.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Image 3: Half width */}
              <div className={cn("col-span-1 relative overflow-hidden rounded-2xl ring-2 ring-white/70", PHOTO_SHADOW)}>
                <img
                  src={photoBottomRight.src}
                  alt={photoBottomRight.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroScattered;
