import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-4/40 bg-surface-0 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-violet flex items-center justify-center font-display font-extrabold text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                N
              </div>
              <span className="font-display font-bold text-lg">
                Nik's <span className="text-brand-500">Consulting</span>
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed max-w-sm">
              Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies that turn complexity into growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-ink-100 mb-2">Company</h4>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-400 hover:text-brand-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-semibold text-ink-100 mb-2">Connect</h4>
            <a href="mailto:info@niksconsulting.vercel.app" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">
              hello@niksconsulting.com
            </a>
            <Link href="/contact" className="text-sm text-ink-400 hover:text-brand-500 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-4/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Nik's Consulting. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-ink-500 hover:text-ink-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-ink-500 hover:text-ink-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
