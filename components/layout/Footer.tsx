import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/17M1Azn6Cf/?mibextid=wwXIfr", label: "Facebook" },
];

export default function Footer() {

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/logo-icon.png"
                alt="Premier Icon"
                width={112}
                height={112}
                className="object-contain bg-white p-2 w-16 h-16 md:w-24 md:h-24 rounded-lg"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl md:text-2xl font-extrabold tracking-wider leading-none text-white">
                  PREMIER
                </span>
                <span className="text-[10px] md:text-xs font-bold text-brand-brown tracking-[0.2em] uppercase mt-1">
                  — DECK &amp; PORCH —
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Licensed &amp; insured deck and patio contractors serving
              the Northwest Suburbs of Chicago and surrounding areas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-brand-brown transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <p className="text-sm">
              <a
                href="tel:+17084909665"
                className="hover:text-brand-brown transition-colors"
              >
                (708) 490 9665
              </a>
            </p>
            <p className="text-sm mt-1">
              <a
                href="mailto:premierdeckandporch@gmail.com"
                className="hover:text-brand-brown transition-colors"
              >
                premierdeckandporch@gmail.com
              </a>
            </p>
            <p className="text-sm mt-1">Serving the Northwest Suburbs of Chicago and surrounding areas</p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-brown transition-colors duration-200"
                >
                  <s.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>&copy; Premier Deck &amp; Porch. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-brand-brown transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-brand-brown transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
