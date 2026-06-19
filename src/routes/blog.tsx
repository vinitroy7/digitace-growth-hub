import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Insights on SEO, PPC, Branding & Business Growth | Digitace" },
      { name: "description", content: "Actionable insights and playbooks on SEO, PPC, social media, web development, branding, AI marketing, and business growth." },
      { property: "og:title", content: "Digitace Blog" },
      { property: "og:description", content: "Insights and playbooks from our team of strategists and marketers." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "SEO", "PPC", "Social Media", "Web Dev", "Branding", "Business Growth", "AI Marketing"];

const POSTS = [
  { title: "How we lowered Meta CPL by 62% for a real-estate brand", cat: "PPC", date: "Jun 10, 2026", read: "8 min", hue: "from-violet-500 to-fuchsia-500" },
  { title: "The 2026 SEO playbook for D2C brands", cat: "SEO", date: "Jun 04, 2026", read: "12 min", hue: "from-rose-500 to-orange-500" },
  { title: "AI in marketing: hype, reality, and what to actually deploy", cat: "AI Marketing", date: "May 28, 2026", read: "10 min", hue: "from-indigo-500 to-purple-500" },
  { title: "Building a brand system that scales with your team", cat: "Branding", date: "May 20, 2026", read: "7 min", hue: "from-amber-500 to-pink-500" },
  { title: "5 Instagram content formats that drive saves & shares", cat: "Social Media", date: "May 12, 2026", read: "6 min", hue: "from-pink-500 to-fuchsia-500" },
  { title: "Core Web Vitals in 2026: still the #1 SEO lever", cat: "Web Dev", date: "May 04, 2026", read: "9 min", hue: "from-sky-500 to-indigo-500" },
  { title: "When to invest in performance vs brand marketing", cat: "Business Growth", date: "Apr 28, 2026", read: "11 min", hue: "from-emerald-500 to-cyan-500" },
  { title: "Shopify Plus vs Headless: a decision framework", cat: "Web Dev", date: "Apr 20, 2026", read: "13 min", hue: "from-teal-500 to-sky-500" },
  { title: "Google Ads scripts that save us hours every week", cat: "PPC", date: "Apr 12, 2026", read: "7 min", hue: "from-slate-600 to-zinc-700" },
];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = POSTS.filter((p) => (cat === "All" || p.cat === cat) && p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Blog</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Insights from the <span className="text-gradient">growth front lines</span></h1>
          <p className="text-white/75 text-lg">Real lessons from real campaigns — written by our team for marketers and founders.</p>
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="w-full h-12 pl-11 pr-4 rounded-xl glass text-white placeholder:text-white/50 focus:outline-none focus:border-primary" />
          </div>
        </div>
      </section>

      <section className="container-px mx-auto py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${cat === c ? "bg-gradient-brand text-white shadow-glow" : "bg-muted text-foreground hover:bg-muted/60"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-smooth">
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.hue} relative`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs uppercase tracking-wider text-white font-semibold">{p.cat}</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold leading-snug mb-3 group-hover:text-primary transition-smooth">{p.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span>{p.read}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-semibold">Read article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" /></div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-16">No articles match your search.</div>
        )}
      </section>

      <CTASection eyebrow="Newsletter" title="Get our best playbooks in your inbox" subtitle="One email a month. Real tactics. No fluff." />
    </SiteLayout>
  );
}
