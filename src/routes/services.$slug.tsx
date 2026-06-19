import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return {};
    return {
      meta: [
        { title: `${s.title} — Digitace Tech Solutions` },
        { name: "description", content: s.description },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.description },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-px py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-primary">Back to services →</Link>
      </div>
    </SiteLayout>
  ),
});

function ServiceDetailPage() {
  const { service: s } = Route.useLoaderData();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-mesh-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-px mx-auto max-w-4xl relative">
          <nav className="text-sm text-white/60 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{s.title}</span>
          </nav>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">{s.category}</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">{s.title}</h1>
          <p className="text-2xl text-gradient font-display font-semibold mb-4">{s.tagline}</p>
          <p className="text-white/75 text-lg max-w-3xl">{s.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-lg bg-gradient-brand text-white font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth">
              Get a Free Proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 h-12 px-7 rounded-lg border border-white/25 text-white hover:bg-white/10 font-semibold transition-smooth">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-px mx-auto py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Key Benefits</div>
          <h2 className="text-3xl md:text-4xl font-bold">What you'll get</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {s.benefits.map((b) => (
            <div key={b} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-smooth">
              <CheckCircle2 className="h-7 w-7 text-primary mb-3" />
              <div className="font-display font-semibold leading-snug">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-muted/40 py-20">
        <div className="container-px mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Features</div>
            <h2 className="text-3xl md:text-4xl font-bold">What's included</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-smooth">
                <div className="font-display text-lg font-semibold mb-2">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-px mx-auto py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Process</div>
          <h2 className="text-3xl md:text-4xl font-bold">How we deliver</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.process.map((p) => (
            <div key={p.step} className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden">
              <div className="absolute top-3 right-4 text-6xl font-display font-bold text-primary/10">{p.step}</div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 relative">Step {p.step}</div>
              <div className="font-display text-lg font-semibold mb-2 relative">{p.title}</div>
              <div className="text-sm text-muted-foreground relative">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">FAQs</div>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently asked</h2>
          </div>
          <div className="space-y-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-smooth">
                <summary className="cursor-pointer font-display font-semibold flex items-center justify-between">
                  {f.q}
                  <ChevronRight className="h-4 w-4 text-primary group-open:rotate-90 transition-smooth" />
                </summary>
                <div className="mt-3 text-muted-foreground">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to launch ${s.title}?`} subtitle="Book a free strategy call. We'll share what's working in your space right now." />
    </SiteLayout>
  );
}
