import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home", hasMega: false },
  { to: "/about", label: "About", hasMega: false },
  { to: "/services", label: "Services", hasMega: true },
  { to: "/portfolio", label: "Portfolio", hasMega: false },
  { to: "/case-studies", label: "Case Studies", hasMega: false },
  { to: "/industries", label: "Industries", hasMega: false },
  { to: "/blog", label: "Blog", hasMega: false },
  { to: "/careers", label: "Careers", hasMega: false },
  { to: "/contact", label: "Contact", hasMega: false },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass-light shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center shadow-glow group-hover:scale-105 transition-smooth">
            <span className="font-display text-white font-bold">D</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-foreground">Digitace</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Tech Solutions</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.to}
              className="relative"
              onMouseEnter={() => item.hasMega && setMegaOpen(true)}
              onMouseLeave={() => item.hasMega && setMegaOpen(false)}
            >
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
                className="px-3 py-2 text-sm font-medium inline-flex items-center gap-1 transition-smooth"
              >
                {item.label}
                {item.hasMega && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.hasMega && megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] glass-light rounded-2xl shadow-elegant p-6 grid grid-cols-3 gap-4 animate-fade-up">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat}>
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{cat}</div>
                      <div className="space-y-1.5">
                        {SERVICES.filter((s) => s.category === cat).map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="block text-sm text-foreground/80 hover:text-primary transition-smooth"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex items-center h-10 px-5 rounded-lg bg-gradient-brand text-primary-foreground text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition-smooth"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-light border-t border-border animate-fade-up">
          <div className="container-px py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-11 rounded-lg bg-gradient-brand text-primary-foreground font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
