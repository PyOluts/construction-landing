import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Patterson",
    location: "Schaumburg, IL",
    rating: 5,
    text: "Premier Deck & Porch built us a stunning two-level composite deck. The crew was professional, the site was spotless when they left, and the quality is outstanding. Couldn't be happier!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sandra Williams",
    location: "Arlington Heights, IL",
    rating: 5,
    text: "Great experience from start to finish. The crew was on time, worked efficiently, and built a solid, good-looking deck. Everything turned out exactly how we wanted. Would definitely recommend.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Torres",
    location: "Elmwood Park, IL",
    rating: 5,
    text: "The whole process was smooth and professional. The team communicated clearly and delivered a high-quality deck right on schedule. Very satisfied with the final result.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brand-brown text-brand-brown" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-brown font-semibold uppercase tracking-widest text-sm">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            Client Testimonials
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            Don&apos;t take our word for it — here&apos;s what our customers
            have to say after working with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <StarRating count={t.rating} />
              <p className="mt-5 text-slate-600 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-slate-400 text-sm">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google badge — without "120+ verified reviews" */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm">
            ★★★★★&nbsp;&nbsp;5.0 rating on Google
          </p>
        </div>
      </div>
    </section>
  );
}
