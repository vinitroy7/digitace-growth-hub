import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Target, Award } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Results from Digitace" },
      { name: "description", content: "In-depth case studies across EV, real estate, e-commerce, travel, and interior design — see strategy, execution, and ROI." },
      { property: "og:title", content: "Case Studies | Digitace" },
      { property: "og:description", content: "How we drive measurable business growth for our clients." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    industry: "EV Industry", client: "EcoCharge Mobility",
    challenge: "A new EV brand entering a noisy market with low awareness and zero organic presence.",
    strategy: "Brand repositioning, SEO foundation, Meta + Google performance campaigns, and influencer-led launches.",
    results: [
      { kpi: "Pre-bookings", value: "5,000+" },
      { kpi: "CAC reduction", value: "−47%" },
      { kpi: "ROAS", value: "6.8x" },
      { kpi: "Organic traffic", value: "+412%" },
    ],
    hue: "from-emerald-500 to-cyan-500",
  },
  {
    industry: "Real Estate", client: "Skyline Realty",
    challenge: "High CPL on Meta and Google with poor lead quality. Sales team overwhelmed with junk leads.",
    strategy: "Funnel rebuild, landing page CRO, lead scoring with HubSpot, and qualified-lead-only ad creative.",
    results: [
      { kpi: "Qualified leads", value: "1.2L+" },
      { kpi: "CPL", value: "−62%" },
      { kpi: "Site visits booked", value: "+340%" },
      { kpi: "Closures", value: "+78%" },
    ],
    hue: "from-violet-500 to-fuchsia-500",
  },
  {
    industry: "E-commerce", client: "NovaWear Apparel",
    challenge: "Stagnating D2C revenue and rising CAC on Meta. Conversion rate stuck at 1.1%.",
    strategy: "Shopify Plus rebuild, Klaviyo retention flows, Meta creative refresh, and post-purchase referral loop.",
    results: [
      { kpi: "Revenue", value: "+240%" },
      { kpi: "Conv. rate", value: "3.4%" },
      { kpi: "AOV", value: "+38%" },
      { kpi: "Repeat orders", value: "+62%" },
    ],
    hue: "from-rose-500 to-orange-500",
  },
  {
    industry: "Interior Design", client: "Urbano Living",
    challenge: "Beautiful work but no brand system or digital presence to match.",
    strategy: "Brand identity refresh, photoshoot, Instagram-first content engine, and SEO-led blog launch.",
    results: [
      { kpi: "Instagram DMs", value: "3x" },
      { kpi: "Followers", value: "+85K" },
      { kpi: "Inbound projects", value: "+210%" },
      { kpi: "Avg ticket size", value: "+34%" },
    ],
    hue: "from-orange-500 to-red-500",
  },
  {
    industry: "Travel", client: "WanderTrails Co.",
    challenge: "Seasonal demand fluctuations and unpredictable ad performance.",
    strategy: "Year-round content engine, Meta+Google retargeting, partner influencer trips, and WhatsApp nurture.",
    results: [
      { kpi: "ROAS", value: "8.4x" },
      { kpi: "Bookings", value: "+186%" },
      { kpi: "Email LTV", value: "+92%" },
      { kpi: "Off-season revenue", value: "+140%" },
    ],
    hue: "from-amber-500 to-pink-500",
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Case Studies</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Real brands. <span className="text-gradient">Real results.</span></h1>
          <p className="text-white/75 text-lg">Detailed breakdowns of the strategy, execution, and ROI we've delivered for our clients.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-20 space-y-12">
        {CASES.map((c) => (
          <article key={c.client} className="rounded-3xl overflow-hidden bg-card border border-border shadow-card">
            <div className={`bg-gradient-to-br ${c.hue} p-10 text-white relative`}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white, transparent 60%)" }} />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest opacity-90">{c.industry}</div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">{c.client}</h2>
              </div>
            </div>
            <div className="p-8 md:p-10 grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2"><Target className="h-4 w-4" /> Challenge</div>
                  <p className="text-muted-foreground">{c.challenge}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2"><TrendingUp className="h-4 w-4" /> Strategy</div>
                  <p className="text-muted-foreground">{c.strategy}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold mb-4"><Award className="h-4 w-4" /> Results</div>
                <div className="grid grid-cols-2 gap-3">
                  {c.results.map((r) => (
                    <div key={r.kpi} className="p-5 rounded-xl bg-muted/50 border border-border">
                      <div className="text-2xl font-bold font-display text-gradient">{r.value}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{r.kpi}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTASection title="Want results like these?" />
    </SiteLayout>
  );
}
