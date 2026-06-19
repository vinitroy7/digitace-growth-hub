import { createFileRoute } from "@tanstack/react-router";
import {
  Hammer, Home as HomeIcon, HeartPulse, Building2, Plane,
  ShoppingCart, Factory, GraduationCap, Zap, Banknote
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Digitace Tech Solutions" },
      { name: "description", content: "Specialized marketing and tech solutions for construction, real estate, EV, healthcare, travel, e-commerce, and more." },
      { property: "og:title", content: "Industries | Digitace" },
      { property: "og:description", content: "Industry-specific playbooks built from years of experience." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const ICONS: Record<string, typeof HomeIcon> = {
  construction: Hammer, "interior-design": HomeIcon, healthcare: HeartPulse,
  "real-estate": Building2, travel: Plane, ecommerce: ShoppingCart,
  manufacturing: Factory, education: GraduationCap, ev: Zap, finance: Banknote,
};

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Industries</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Industry expertise that <span className="text-gradient">compounds</span></h1>
          <p className="text-white/75 text-lg">We bring playbooks honed across 12+ industries — so we ship faster, smarter, and with fewer assumptions.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((i) => {
            const Icon = ICONS[i.slug] ?? Building2;
            return (
              <div key={i.slug} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-smooth">
                <div className="h-14 w-14 rounded-xl bg-gradient-brand grid place-items-center text-white mb-5 group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-display text-xl font-semibold mb-2">{i.name}</div>
                <p className="text-sm text-muted-foreground">{i.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection title="Don't see your industry?" subtitle="We adapt fast. Talk to us about your sector." />
    </SiteLayout>
  );
}
