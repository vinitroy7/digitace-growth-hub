import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/site-data";
import servicesImg from "@/assets/services-collage.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Digital Marketing, Web, App, Branding | Digitace" },
      { name: "description", content: "Explore Digitace's full suite of services: SEO, social, paid ads, web & app development, branding, PR, and CRM/ERP." },
      { property: "og:title", content: "Digitace Services" },
      { property: "og:description", content: "One agency. Every digital capability." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Services</div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Everything you need to <span className="text-gradient">grow online</span></h1>
            <p className="text-white/75 text-lg">From the first line of code to the last optimized ad — one accountable team, end-to-end execution.</p>
          </div>
          <img src={servicesImg} alt="Services collage" width={1400} height={1000} loading="lazy" className="rounded-2xl shadow-elegant" />
        </div>
      </section>

      <section className="container-px mx-auto py-24 space-y-16">
        {SERVICE_CATEGORIES.map((cat) => {
          const items = SERVICES.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <div key={cat}>
              <div className="flex items-end justify-between mb-6 border-b border-border pb-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">{cat}</div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">{items.length} {cat} services</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-glow transition-smooth"
                  >
                    <div className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">{s.title}</div>
                    <div className="text-sm text-muted-foreground mb-4 line-clamp-2">{s.description}</div>
                    <div className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CTASection />
    </SiteLayout>
  );
}
