import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Digitace — Get a Free Consultation" },
      { name: "description", content: "Talk to our team about web, app, marketing, branding, or growth. Free 30-minute consultation. Offices in Mumbai, Delhi, Bangalore." },
      { property: "og:title", content: "Contact Digitace Tech Solutions" },
      { property: "og:description", content: "Get in touch for a free strategy call." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="bg-mesh-dark text-white py-24">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Contact</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">Let's <span className="text-gradient">build something</span> great</h1>
          <p className="text-white/75 text-lg">Tell us about your project. We'll respond within one business day.</p>
        </div>
      </section>

      <section className="container-px mx-auto py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Mail className="h-7 w-7 text-primary mb-3" />
            <div className="font-display font-semibold mb-1">Email</div>
            <a href="mailto:hello@digitace.in" className="text-muted-foreground hover:text-primary">hello@digitace.in</a>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <Phone className="h-7 w-7 text-primary mb-3" />
            <div className="font-display font-semibold mb-1">Phone</div>
            <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 98765 43210</a>
          </div>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth">
            <MessageCircle className="h-7 w-7 text-[#25D366] mb-3" />
            <div className="font-display font-semibold mb-1">WhatsApp</div>
            <div className="text-muted-foreground">Chat with us 9 AM – 9 PM IST</div>
          </a>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <MapPin className="h-7 w-7 text-primary mb-3" />
            <div className="font-display font-semibold mb-1">Offices</div>
            <div className="text-muted-foreground text-sm space-y-1">
              <div>Mumbai · Bandra Kurla Complex</div>
              <div>Delhi · Cyber Hub, Gurugram</div>
              <div>Bangalore · Indiranagar</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card">
          <h2 className="font-display text-2xl font-bold mb-2">Get a free consultation</h2>
          <p className="text-muted-foreground mb-6">Share a few details — we'll come back with a customized plan.</p>
          {submitted ? (
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 text-primary font-semibold">
              Thanks! A team member will reach out within 1 business day.
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
                <input required type="email" placeholder="Work email" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Company" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
                <input placeholder="Phone / WhatsApp" className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              </div>
              <select className="h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary">
                <option>What can we help with?</option>
                <option>Website Development</option>
                <option>SEO / Content</option>
                <option>Paid Ads (Google/Meta)</option>
                <option>Mobile App Development</option>
                <option>Branding & Design</option>
                <option>Other</option>
              </select>
              <textarea required rows={5} placeholder="Tell us about your project, goals, and timeline" className="p-4 rounded-xl border border-input bg-background focus:outline-none focus:border-primary" />
              <button className="h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth">
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="container-px mx-auto pb-24">
        <div className="rounded-3xl overflow-hidden border border-border h-[400px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.825%2C19.05%2C72.875%2C19.10&layer=mapnik"
            title="Office location"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
