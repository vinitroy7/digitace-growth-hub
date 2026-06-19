import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

export function CTASection({
  eyebrow = "Let's build something",
  title = "Ready to grow your business?",
  subtitle = "Book a free 30-minute strategy call. We'll audit your current funnel and share an action plan — no obligations.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-px mx-auto py-20">
      <div className="relative overflow-hidden rounded-3xl bg-secondary p-10 md:p-16 text-white">
        <img
          src={ctaBg}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-transparent" />
        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-4">
            <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{title}</h2>
          <p className="text-white/80 text-lg mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-lg bg-gradient-brand text-white font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-lg border border-white/30 text-white hover:bg-white/10 font-semibold transition-smooth"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
