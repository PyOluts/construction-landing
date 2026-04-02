import { ShieldCheck, Clock, Star, Users } from "lucide-react";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Decking & Materials Warranty",
    description:
      "We back every deck with a written warranty on both composite materials and workmanship. If something fails, we fix it — no questions asked.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your schedule. Our crews arrive on time and complete projects within the agreed timeline — your backyard is never a construction zone for long.",
  },
  {
    icon: Star,
    title: "Premium Composite Materials",
    description:
      "High-quality composite decking built for durability, low maintenance, and long-term performance. Only materials that look stunning for decades.",
  },
  {
    icon: Users,
    title: "Experienced Expert Team",
    description:
      "Our crew brings years of combined decking expertise. Fully licensed, insured, and trained to bring even the most ambitious outdoor designs to life.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: photo */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/deck1.jpg"
            alt="Custom deck built by Premier Deck & Porch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-brown/10" />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-xl">
            <div className="text-lg font-extrabold text-slate-900 leading-tight">High-Quality<br />Craftsmanship</div>
          </div>
        </div>

        {/* Right: advantages list */}
        <div>
          <span className="text-brand-brown-light font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
            Quality That Homeowners Trust
          </h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            We&apos;re not just deck builders — we&apos;re your long-term partner in
            creating the outdoor space you&apos;ve always dreamed of. Here&apos;s what sets us apart:
          </p>

          <div className="mt-10 space-y-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-brown/20 flex items-center justify-center">
                  <adv.icon className="w-6 h-6 text-brand-brown-light" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{adv.title}</h3>
                  <p className="text-slate-400 mt-1 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-block bg-brand-brown hover:bg-brand-brown-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg hover:scale-105"
          >
            Get Your Free Estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
