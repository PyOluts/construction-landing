import { ClipboardList, MessageSquare, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Design Consultation",
    description:
      "Contact us and we'll schedule a no-obligation site visit. We assess your backyard, discuss your vision, and provide a detailed written quote.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Design & Approval",
    description:
      "We walk you through the design and material options, finalize the layout and timeline. No hidden fees — ever. You approve before we break ground.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Expert Construction",
    description:
      "Our certified crew builds your deck with precision. We protect your property, maintain a clean job site, and keep you updated throughout the build.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Final Walkthrough",
    description:
      "Once complete, we do a full walkthrough together, clean up every scrap, and hand over your warranty documentation and care guide.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-brown font-semibold uppercase tracking-widest text-sm">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            Our Process
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            From first call to finished deck — a simple, transparent process
            designed around your schedule and vision.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brand-brown/30 z-0" />

          {steps.map((s) => (
            <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
              {/* Number bubble */}
              <div className="w-20 h-20 rounded-full bg-brand-brown flex items-center justify-center shadow-lg mb-6">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-brand-brown font-bold text-xs tracking-widest uppercase mb-1">
                Step {s.step}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
