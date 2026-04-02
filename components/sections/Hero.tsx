import { MapPin, Hammer, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/title.jpg')] bg-cover bg-center"
    >
      {/* Dark overlay — keeps text readable over any photo */}
      <div className="absolute inset-0 bg-slate-900/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-24">
        <span className="inline-block bg-brand-brown/25 text-amber-200 border border-brand-brown/50 text-sm font-semibold uppercase tracking-widest px-4 py-1 rounded-full">
          Licensed &amp; Insured
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Custom Deck &amp;{" "}
          <span className="text-brand-brown-light">Porch Builders</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Transforming backyards and front porches into stunning outdoor living
          spaces. Trusted by homeowners across the region for &nbsp;years.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-brand-brown-dark hover:bg-brand-brown text-white px-10 py-4 text-lg font-bold rounded-lg shadow-xl transition-all duration-200 hover:scale-105"
          >
            Get a Free Estimate
          </a>
          <a
            href="#services"
            className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/30 px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
          >
            Our Services ↓
          </a>
        </div>

        {/* Trust bar — text badges without numbers */}
        <div className="pt-10 md:pt-14 pb-10 md:pb-0 grid grid-cols-3 gap-2 sm:gap-4 text-white border-t border-white/10 mt-8 px-2 md:px-4">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <MapPin className="w-5 h-5 md:w-7 md:h-7 text-brand-brown-light" />
            <div className="font-bold text-[10px] md:text-sm leading-snug text-center">Locally Owned<br />&amp; Operated</div>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <Hammer className="w-5 h-5 md:w-7 md:h-7 text-brand-brown-light" />
            <div className="font-bold text-[10px] md:text-sm leading-snug text-center">Built to Last<br />for Years</div>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <Star className="w-5 h-5 md:w-7 md:h-7 text-brand-brown-light" />
            <div className="font-bold text-[10px] md:text-sm leading-snug text-center">Professional<br />Installation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
