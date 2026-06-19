import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Digitace Tech Solutions" },
      { name: "description", content: "A selection of our recent work across websites, e-commerce, mobile apps, SEO, branding, and social media campaigns." },
      { property: "og:title", content: "Portfolio | Digitace" },
      { property: "og:description", content: "Selected work across web, mobile, branding, and marketing." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const CATEGORIES = ["All", "Websites", "E-commerce", "Mobile Apps", "SEO", "Branding", "Social Media"] as const;

const PROJECTS = [
  { title: "NovaWear Apparel", cat: "E-commerce", tag: "Shopify Plus", metric: "+240% revenue", hue: "from-rose-500 to-orange-500" },
  { title: "EcoCharge Mobility", cat: "Websites", tag: "EV Brand", metric: "5,000+ pre-bookings", hue: "from-emerald-500 to-cyan-500" },
  { title: "Skyline Realty", cat: "SEO", tag: "Real Estate", metric: "+512% organic", hue: "from-violet-500 to-fuchsia-500" },
  { title: "WanderTrails", cat: "Social Media", tag: "Travel", metric: "8.4x ROAS", hue: "from-amber-500 to-pink-500" },
  { title: "MedCore Clinics", cat: "Websites", tag: "Healthcare", metric: "+312% leads", hue: "from-sky-500 to-indigo-500" },
  { title: "Urbano Living", cat: "Branding", tag: "Interior", metric: "Full rebrand", hue: "from-orange-500 to-red-500" },
  { title: "FinNudge", cat: "Mobile Apps", tag: "Fintech", metric: "1.2M downloads", hue: "from-indigo-500 to-purple-500" },
  { title: "BuildPro CRM", cat: "Mobile Apps", tag: "Construction", metric: "Productivity +40%", hue: "from-slate-600 to-zinc-700" },
  { title: "PureEarth Foods", cat: "E-commerce", tag: "D2C", metric: "+185% AOV", hue: "from-lime-500 to-emerald-500" },
  { title: "AvenueX", cat: "Branding", tag: "Real Estate", metric: "Identity system", hue: "from-stone-500 to-amber-600" },
  { title: "TrekIndia", cat: "SEO", tag: "Travel", metric: "Top-3 for 80 terms", hue: "from-teal-500 to-sky-500" },
  { title: "Sparq Salons", cat: "Social Media", tag: "Beauty", metric: "+45K followers", hue: "from-pink-500 to-fuchsia-500" },
];

function PortfolioPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Portfolio</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Work we're <span className="text-gradient">proud of</span></h1>
          <p className="text-white/75 text-lg">A selection of recent projects across web, mobile, branding, and marketing.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-smooth ${
                active === c
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "bg-muted text-foreground hover:bg-muted/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-smooth">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.hue} relative grid place-items-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
                <div className="relative text-white text-center px-6">
                  <div className="text-xs uppercase tracking-widest opacity-80">{p.tag}</div>
                  <div className="font-display font-bold text-2xl mt-1">{p.title}</div>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.cat}</div>
                  <div className="text-sm font-semibold">{p.metric}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-smooth" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Want to be next?" subtitle="Let's craft a case study for your brand." />
    </SiteLayout>
  );
}
