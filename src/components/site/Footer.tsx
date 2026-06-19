import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
      <div className="container-px mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 relative">
        <div className="lg:col-span-2 max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-brand grid place-items-center shadow-glow">
              <span className="font-display text-white font-bold">D</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white">Digitace Tech Solutions</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Pvt Ltd</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A full-service digital agency helping ambitious brands grow through web, mobile, marketing, branding, and performance marketing.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Mumbai · Delhi · Bangalore · Remote</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@digitace.in</div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full glass grid place-items-center text-white hover:bg-gradient-brand transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display font-semibold text-white mb-4">Services</div>
          <ul className="space-y-2 text-sm text-white/70">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary transition-smooth">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold text-white mb-4">Industries</div>
          <ul className="space-y-2 text-sm text-white/70">
            {INDUSTRIES.slice(0, 8).map((i) => (
              <li key={i.slug} className="hover:text-primary transition-smooth">{i.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold text-white mb-4">Company</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-smooth">Portfolio</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary transition-smooth">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-smooth">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-smooth">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
          </ul>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-wider text-white/60 mb-2">Newsletter</div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
              />
              <button className="px-4 rounded-lg bg-gradient-brand text-white text-sm font-semibold">Join</button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 container-px mx-auto flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50 relative">
        <div>© 2026 Digitace Tech Solutions Pvt Ltd. All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
