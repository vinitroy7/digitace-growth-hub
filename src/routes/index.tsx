import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, ShoppingCart, Smartphone, Search, Share2, Megaphone,
  Palette, Newspaper, Database, TrendingUp, ArrowRight, CheckCircle2,
  Building2, Hammer, HeartPulse, Home as HomeIcon, Plane, Factory,
  GraduationCap, Zap, Banknote, Star, Quote
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { CLIENTS, STATS, INDUSTRIES, SERVICES } from "@/lib/site-data";
import heroImg from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digitace Tech Solutions — Digital Marketing, Web & App Development Agency" },
      { name: "description", content: "Full-service digital agency: Website development, SEO, social media, Google & Meta ads, mobile apps, branding and performance marketing." },
      { property: "og:title", content: "Digitace Tech Solutions" },
      { property: "og:description", content: "Transforming businesses through digital innovation." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICE_CARDS = [
  { icon: Globe, title: "Website Development", desc: "Custom, fast, conversion-focused websites." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Shopify, WooCommerce, and custom stores." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS, Android, Flutter & React Native." },
  { icon: Search, title: "SEO Services", desc: "Rank higher and earn organic traffic that compounds." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build a brand people follow and buy from." },
  { icon: Megaphone, title: "Google Ads", desc: "High-intent search traffic with measurable ROAS." },
  { icon: TrendingUp, title: "Meta Ads", desc: "Scroll-stopping creatives that print pipeline." },
  { icon: Palette, title: "Branding & Design", desc: "Identity systems that earn premium pricing." },
  { icon: Newspaper, title: "PR & Influencer", desc: "Earned media and creator partnerships at scale." },
  { icon: Database, title: "CRM & ERP Solutions", desc: "Automate operations and scale revenue ops." },
];

const INDUSTRY_ICONS: Record<string, typeof Building2> = {
  construction: Hammer, "interior-design": HomeIcon, healthcare: HeartPulse,
  "real-estate": Building2, travel: Plane, ecommerce: ShoppingCart,
  manufacturing: Factory, education: GraduationCap, ev: Zap, finance: Banknote,
};

const WHY = [
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "12+", label: "Industries Served" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "100%", label: "Transparent Reporting" },
  { value: "ROI", label: "Result Driven" },
];

const TESTIMONIALS = [
  { name: "Aarav Mehta", role: "Founder, EcoCharge EV", quote: "Digitace rebuilt our site and ad funnels. We tripled qualified leads in 4 months." },
  { name: "Priya Sharma", role: "Marketing Head, Urbano Interiors", quote: "Their content and SEO turned our blog into a real lead-gen channel." },
  { name: "Rohan Iyer", role: "CEO, NovaBuild", quote: "From branding to performance marketing — one team, real results." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-mesh-dark text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-px mx-auto relative grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-32">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white/90 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Digital Marketing · Web · Apps · Branding
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Transforming<br /> Businesses Through<br />
              <span className="text-gradient">Digital Innovation</span>
            </h1>
            <p className="text-lg text-white/75 max-w-xl mb-8">
              Website Development, Digital Marketing, Mobile Apps, Branding & Performance Marketing solutions that drive real business growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border border-white/25 text-white hover:bg-white/10 font-semibold transition-smooth">
                View Portfolio
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white font-display">{s.value}</div>
                  <div className="uppercase tracking-wider text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-6 bg-gradient-brand rounded-3xl blur-2xl opacity-30" />
            <img
              src={heroImg}
              alt="Digital marketing dashboards and mobile app screens"
              width={1600}
              height={1200}
              className="relative rounded-2xl shadow-elegant border border-white/10"
            />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-glow animate-float">
              <div className="text-xs uppercase tracking-widest text-white/70">ROAS</div>
              <div className="text-3xl font-bold text-white font-display">7.4x</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-glow animate-float [animation-delay:1.5s]">
              <div className="text-xs uppercase tracking-widest text-white/70">Organic ↑</div>
              <div className="text-3xl font-bold text-white font-display">+312%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="border-y border-border bg-muted/40 py-10 overflow-hidden">
        <div className="container-px mx-auto">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by businesses worldwide
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <div key={i} className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/60 hover:text-foreground transition-smooth">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto py-24">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A full-stack growth partner</h2>
          <p className="text-muted-foreground text-lg">Everything you need to build, launch, and scale — under one roof.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICE_CARDS.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-smooth">
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-white mb-4 group-hover:scale-110 transition-smooth">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold mb-1">{s.title}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container-px mx-auto py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Why Digitace</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Results you can measure. Partners you can trust.</h2>
              <p className="text-white/75 text-lg mb-8">
                We blend creativity with analytics. Every campaign, design, and line of code is built to move a real business metric.
              </p>
              <div className="space-y-3">
                {["Multi-industry expertise","Dedicated account team","Transparent weekly reporting","Result-driven, KPI-aligned"].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {WHY.map((w) => (
                <div key={w.label} className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-smooth">
                  <div className="text-3xl font-bold font-display text-gradient">{w.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{w.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-px mx-auto py-24">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Industries</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Industry expertise that compounds</h2>
          <p className="text-muted-foreground text-lg">We've delivered for these sectors and built playbooks that work.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((i) => {
            const Icon = INDUSTRY_ICONS[i.slug] ?? Building2;
            return (
              <div key={i.slug} className="group p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-card text-center transition-smooth">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 text-primary grid place-items-center mb-3 group-hover:bg-gradient-brand group-hover:text-white transition-smooth">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-display font-semibold">{i.name}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="bg-muted/30 py-24">
        <div className="container-px mx-auto">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Selected Work</div>
              <h2 className="text-3xl md:text-5xl font-bold">Featured projects</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-semibold">View all <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: "E-commerce", title: "NovaWear Apparel", metric: "+240% revenue in 6 months", hue: "from-rose-500 to-orange-500" },
              { tag: "EV Brand", title: "EcoCharge Mobility", metric: "5,000+ pre-bookings", hue: "from-emerald-500 to-cyan-500" },
              { tag: "Real Estate", title: "Skyline Realty", metric: "1.2L+ qualified leads", hue: "from-violet-500 to-fuchsia-500" },
              { tag: "Travel", title: "WanderTrails Co.", metric: "8.4x ROAS on Meta", hue: "from-amber-500 to-pink-500" },
              { tag: "Healthcare", title: "MedCore Clinics", metric: "+512% organic traffic", hue: "from-sky-500 to-indigo-500" },
              { tag: "Interior", title: "Urbano Living", metric: "Brand revamp + 3x DMs", hue: "from-orange-500 to-red-500" },
            ].map((p) => (
              <div key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-smooth">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.hue} relative grid place-items-center`}>
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage:"radial-gradient(circle at 30% 30%, white, transparent 50%)"}} />
                  <div className="relative text-white text-center px-6">
                    <div className="text-xs uppercase tracking-widest opacity-80">{p.tag}</div>
                    <div className="font-display font-bold text-2xl mt-1">{p.title}</div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{p.metric}</div>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto py-24">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Testimonials</div>
          <h2 className="text-3xl md:text-5xl font-bold">Loved by founders & marketers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth">
              <Quote className="h-7 w-7 text-primary mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
// Reference SERVICES to avoid unused import in dev
void SERVICES;
