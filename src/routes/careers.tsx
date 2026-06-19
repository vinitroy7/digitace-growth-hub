import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Briefcase, Heart, Coffee, Users, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the Digitace Team" },
      { name: "description", content: "Build your career at Digitace. Open roles in design, engineering, marketing, content, and account management." },
      { property: "og:title", content: "Careers | Digitace" },
      { property: "og:description", content: "Join a team building digital growth engines for ambitious brands." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const ROLES = [
  { title: "Senior Performance Marketer", team: "Marketing", location: "Mumbai · Hybrid", type: "Full-time" },
  { title: "React/Next.js Developer", team: "Engineering", location: "Bangalore · Remote", type: "Full-time" },
  { title: "UI/UX Designer", team: "Design", location: "Delhi · Hybrid", type: "Full-time" },
  { title: "SEO Strategist", team: "Marketing", location: "Mumbai · Hybrid", type: "Full-time" },
  { title: "Content Writer", team: "Content", location: "Remote", type: "Full-time" },
  { title: "Account Manager", team: "Operations", location: "Mumbai · Hybrid", type: "Full-time" },
  { title: "Mobile App Developer (Flutter)", team: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Motion Graphics Designer", team: "Design", location: "Mumbai · On-site", type: "Full-time" },
];

const BENEFITS = [
  { icon: Heart, title: "Health insurance", desc: "Comprehensive cover for you and dependents." },
  { icon: Coffee, title: "Flexible hours", desc: "Async-friendly culture, focus blocks protected." },
  { icon: Users, title: "Annual offsites", desc: "We work hard and travel together every year." },
  { icon: Sparkles, title: "Learning budget", desc: "₹50,000/yr for courses, books, and conferences." },
];

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Careers</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Build the <span className="text-gradient">future of digital</span> with us</h1>
          <p className="text-white/75 text-lg">We're hiring across design, engineering, marketing, content, and operations. Come build with us.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Open Positions</div>
          <h2 className="text-3xl md:text-4xl font-bold">{ROLES.length} roles open</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {ROLES.map((r) => (
            <div key={r.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-smooth flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold group-hover:text-primary transition-smooth">{r.title}</div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {r.team}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {r.location}</span>
                  <span>· {r.type}</span>
                </div>
              </div>
              <a href="#apply" className="inline-flex items-center h-10 px-5 rounded-lg bg-gradient-brand text-white text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth">Apply</a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-px mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Life at Digitace</div>
            <h2 className="text-3xl md:text-4xl font-bold">Benefits & perks</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-card border border-border">
                <b.icon className="h-8 w-8 text-primary mb-3" />
                <div className="font-display font-semibold mb-1">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="container-px mx-auto py-20">
        <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card">
          <h2 className="font-display text-3xl font-bold mb-2">Don't see a role? Pitch us.</h2>
          <p className="text-muted-foreground mb-6">Tell us how you'd contribute. We hire on talent and trajectory, not just listings.</p>
          {submitted ? (
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold">
              Thanks! We'll review and get back within 5 working days.
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
                <input required type="email" placeholder="Email" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              </div>
              <input placeholder="Role you're applying for" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              <input placeholder="Portfolio / LinkedIn URL" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              <textarea required rows={5} placeholder="A few lines about you and why Digitace" className="p-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              <button className="h-12 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth">Submit application</button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
