import Link from "next/link";

const allProjects = [
  {
    src: "/1.jpg",
    alt: "Custom deck installation",
    tag: "Deck Installation",
  },
  {
    src: "/2.jpg",
    alt: "Outdoor porch build",
    tag: "Porch Build",
  },
  {
    src: "/3.jpg",
    alt: "Wood deck construction",
    tag: "Custom Wood Deck",
  },
  {
    src: "/4.jpg",
    alt: "Outdoor living space",
    tag: "Outdoor living space",
  },
  {
    src: "/5.jpg",
    alt: "Patio restoration",
    tag: "Patio Build",
  },
  {
    src: "/6.jpg",
    alt: "Deck project 6",
    tag: "Wood Restoration",
  },
  {
    src: "/8.jpg",
    alt: "Custom deck project",
    tag: "Deck & Porch",
  },
  {
    src: "/deck1.jpg",
    alt: "Beautiful backyard deck",
    tag: "Backyard Deck",
  },
  {
    src: "/deck2.jpg",
    alt: "Spacious patio deck",
    tag: "Patio Deck",
  },
  {
    src: "/deck3.jpg",
    alt: "Custom deck stairs",
    tag: "Deck Stairs",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page hero banner */}
      <div className="bg-slate-900 pt-24 pb-16 px-4 text-center">
        <span className="inline-block text-brand-brown font-semibold uppercase tracking-widest text-sm mb-3">
          Our Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          All Projects
        </h1>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
          Browse every deck, porch, and outdoor living space we&apos;ve
          completed — built to last, designed to impress.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Gallery grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((item) => (
            <div
              key={item.alt}
              className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/3]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/55 transition-all duration-300 flex items-end p-6">
                <span className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-brand-brown text-white text-sm font-bold px-4 py-2 rounded-full">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/#contact"
            className="bg-brand-brown hover:bg-brand-brown-dark text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-200 hover:scale-105 inline-block"
          >
            Get a Free Estimate →
          </Link>
        </div>
      </section>
    </main>
  );
}
