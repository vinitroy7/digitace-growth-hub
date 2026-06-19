import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { STATS } from "@/lib/site-data";
import aboutImg from "@/assets/about-vision.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Digitace — Full-Service Digital Agency" },
      { name: "description", content: "Meet the team behind Digitace. Our mission, vision, values, and the story of how we help brands grow." },
      { property: "og:title", content: "About Digitace Tech Solutions" },
      { property: "og:description", content: "A team of strategists, designers, developers and marketers building digital growth engines." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Result-Obsessed", desc: "We measure ourselves by your KPIs, not our deliverables." },
  { icon: Heart, title: "Partner Mindset", desc: "Long-term thinking. Skin in the game on every account." },
  { icon: Rocket, title: "Move Fast", desc: "Bias for shipping. Test, learn, iterate weekly." },
  { icon: Award, title: "Craft First", desc: "Design and engineering excellence on every deliverable." },
];

const TIMELINE = [
  { year: "2018", title: "Founded", desc: "Started as a 3-person web studio in Mumbai." },
  { year: "2020", title: "Performance Marketing", desc: "Expanded into Google & Meta ads, scaling D2C brands." },
  { year: "2022", title: "Mobile & Product", desc: "Launched mobile and SaaS engineering teams." },
  { year: "2024", title: "Pan-India", desc: "Offices across Mumbai, Delhi, and Bangalore. 80+ team members." },
  { year: "2026", title: "Global", desc: "Serving clients across India, MENA, US and UK." },
];

const TEAM = [
  { name: "Karan Verma", role: "Founder & CEO", initial: "K" },
  { name: "Sneha Iyer", role: "Head of Strategy", initial: "S" },
  { name: "Rahul Khanna", role: "Head of Engineering", initial: "R" },
  { name: "Anika Bose", role: "Head of Design", initial: "A" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">About Us</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            We build <span className="text-gradient">digital growth engines</span> for ambitious brands
          </h1>
          <p className="text-white/75 text-lg">
            Digitace Tech Solutions is a team of 80+ strategists, designers, engineers and marketers — obsessed with one outcome: real business growth for our clients.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Our Story</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">From a studio of three to a 80+ person agency</h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            We started in 2018 with a simple belief: agencies should be measured by client outcomes, not awards. Eight years later, we've delivered 500+ projects across 12 industries — but that belief hasn't changed.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Today, Digitace is a full-service partner: from the first wireframe to the last optimized ad campaign. One team, one accountable point of contact, end-to-end results.
          </p>
        </div>
        <img src={aboutImg} alt="Abstract shapes representing growth" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-elegant" />
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-px mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-card border border-border">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted growth partner for ambitious businesses — combining strategy, creativity, and engineering to deliver measurable outcomes.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-card border border-border">
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A future where every great business — regardless of size — has access to world-class digital capabilities under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto py-24">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Core Values</div>
          <h2 className="text-3xl md:text-5xl font-bold">What we believe</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-card transition-smooth">
              <v.icon className="h-9 w-9 text-primary mb-3" />
              <div className="font-display font-semibold mb-2">{v.title}</div>
              <div className="text-sm text-muted-foreground">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-50" />
        <div className="container-px mx-auto relative">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Timeline</div>
            <h2 className="text-3xl md:text-5xl font-bold">Our journey of growth</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {TIMELINE.map((t) => (
              <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-2xl font-display font-bold text-gradient">{t.year}</div>
                <div className="glass rounded-2xl p-5">
                  <div className="font-display font-semibold mb-1">{t.title}</div>
                  <div className="text-sm text-white/70">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto py-24">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Leadership</div>
          <h2 className="text-3xl md:text-5xl font-bold">The team behind your growth</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m) => (
            <div key={m.name} className="p-8 rounded-2xl bg-card border border-border text-center hover:shadow-elegant transition-smooth">
              <div className="h-20 w-20 mx-auto rounded-full bg-gradient-brand grid place-items-center text-white text-3xl font-bold font-display mb-4">
                {m.initial}
              </div>
              <div className="font-display font-semibold">{m.name}</div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="p-8 rounded-2xl bg-card border border-border text-center">
              <div className="text-4xl font-bold font-display text-gradient">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Let's grow together" subtitle="Tell us about your business. We'll share what's working for similar brands today." />
    </SiteLayout>
  );
}
void Users;
