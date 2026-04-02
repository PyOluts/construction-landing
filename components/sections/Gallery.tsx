import Link from "next/link";

const galleryItems = [
  {
    src: "/1.jpg",
    alt: "Custom deck installation project",
    tag: "Deck Installation",
  },
  {
    src: "/2.jpg",
    alt: "Beautiful outdoor porch build",
    tag: "Porch Build",
  },
  {
    src: "/3.jpg",
    alt: "Wood deck construction",
    tag: "Custom Wood Deck",
  },
  {
    src: "/4.jpg",
    alt: "Outdoor living space project",
    tag: "Outdoor Living Space",
  },
  {
    src: "/5.jpg",
    alt: "Custom composite deck",
    tag: "Composite Deck",
  },
  {
    src: "/6.jpg",
    alt: "Deck with elegant railings",
    tag: "Custom Railings",
  },
  {
    src: "/8.jpg",
    alt: "Premium backyard deck",
    tag: "Backyard Deck",
  },
  {
    src: "/deck2.jpg",
    alt: "Spacious patio deck",
    tag: "Patio Deck",
  },
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-brown font-semibold uppercase tracking-widest text-sm">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            Project Portfolio
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            A selection of completed deck and porch projects we&apos;re proud
            of — every job built to last.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
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

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-10 py-3 rounded-lg font-bold transition-all duration-200 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
