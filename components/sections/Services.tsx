import {
  Hammer,
  Home,
  RefreshCw,
  Wrench,
  Layers,
  Shield,
  ArrowUpNarrowWide,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Custom Deck Construction",
    description:
      "Fully custom-designed decks built to your exact vision — from material selection to final finish. Every plank placed with precision.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: Home,
    title: "Porch Design & Build",
    description:
      "Beautiful front and back porches that blend seamlessly with your home's architecture and elevate your curb appeal.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: RefreshCw,
    title: "Deck Replacement & Rebuild",
    description:
      "Aging or unsafe deck? We demo the old structure and rebuild it stronger, safer, and more attractive — on time and on budget.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: Wrench,
    title: "Deck Repair & Restoration",
    description:
      "Board replacements, structural repairs, and full refurbishments. We restore decks to like-new condition quickly and affordably.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: Layers,
    title: "Composite & Wood Deck Installation",
    description:
      "Industry-leading composite boards and premium hardwoods installed with expert craftsmanship — low maintenance, long lifespan.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: Shield,
    title: "Deck Maintenance & Protection",
    description:
      "Seasonal cleaning, re-sealing, staining, and protective coatings that extend the life of your deck for decades.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
  {
    icon: ArrowUpNarrowWide,
    title: "Stairs & Multi-Level Decks",
    description:
      "Elegant staircases and multi-level deck systems that maximise your outdoor square footage and create stunning transitions.",
    color: "bg-brand-brown/10 text-brand-brown",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-24 px-4 bg-white mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-brown font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            Our Services
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            From custom wood decks to composite patios and multi-level builds —
            we handle every aspect of your outdoor living project.
          </p>
        </div>

        {/* Cards — flex-wrap so the orphan 7th card is centred */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] flex flex-col p-5 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl flex-shrink-0 ${svc.color}`}
              >
                <svc.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-slate-500 leading-relaxed text-sm flex-1">
                {svc.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto pt-4 text-brand-brown font-semibold text-sm group-hover:underline inline-block"
              >
                Get a Free Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
