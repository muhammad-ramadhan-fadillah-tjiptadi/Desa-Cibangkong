import { Button } from "@/components/ui/button"

export interface CtaProps {
  ctaEnabled?: boolean
  text?: string
  link?: string
  variant?: 'default' | 'link' | 'outline' | 'secondary' | 'ghost' | 'destructive'
}

export function Cta({ cta }: { cta: CtaProps }) {
  if (!cta.ctaEnabled) return null;

  return (
    <Button variant={cta.variant ?? "default"} asChild>
      <a href={cta.link ?? "#"}>{cta.text}</a>
    </Button>
  )
}
