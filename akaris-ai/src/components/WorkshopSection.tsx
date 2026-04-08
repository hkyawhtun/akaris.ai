import { workshops } from "../data/workshops";
import type { Workshop } from "../data/workshops";

const STATUS_STYLES: Record<Workshop["status"], string> = {
  Open: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Coming Soon": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Planning: "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

function WorkshopCard({
  workshop,
  onEnroll,
}: {
  workshop: Workshop;
  onEnroll: (title: string, type: string) => void;
}) {
  const canEnroll = workshop.status === "Open";

  return (
    <div className="group bg-navy-950 border border-navy-800 rounded-2xl overflow-hidden flex flex-col gap-0 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5">
      {/* Cover Image */}
      <div className="relative w-full h-40 bg-navy-900 overflow-hidden">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-400 transition-colors leading-snug">
            {workshop.title}
          </h3>
          <div className="flex flex-col items-end gap-1.5">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_STYLES[workshop.status]}`}
            >
              {workshop.status === "Planning" ? "Planning" : workshop.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-slate-400 text-sm leading-relaxed">
            {workshop.description}
          </p>
        </div>

        {/* Price + Meta */}
        <div className="grid gap-4 md:grid-cols-[1fr_auto] text-sm text-slate-500 border-t border-navy-800 pt-4">
          <div className="flex flex-col gap-2">
            {workshop.price ? (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  AUD
                </span>
                <div>
                  <p className="text-white font-semibold">
                    {workshop.price.toLocaleString()}
                  </p>
                  {workshop.originalPrice ? (
                    <p className="text-slate-500 text-xs line-through">
                      {workshop.originalPrice.toLocaleString()}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {workshop.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {workshop.date}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onEnroll(workshop.title, "webinar")}
          disabled={!canEnroll}
          className={`w-full text-sm font-semibold py-2.5 rounded-full transition-all ${
            canEnroll
              ? "bg-gold-500 hover:bg-gold-400 text-navy-950 hover:shadow-md hover:shadow-gold-500/20"
              : "bg-navy-800 text-slate-500 cursor-not-allowed"
          }`}
        >
          {canEnroll
            ? "Register Now"
            : workshop.status === "Planning"
              ? "Planning in Progress"
              : "Notify Me"}
        </button>
      </div>
    </div>
  );
}

export default function WorkshopSection({
  onEnroll,
}: {
  onEnroll: () => void;
}) {
  const online = workshops.filter((w) => w.mode === "Online");
  const inPerson = workshops.filter((w) => w.mode === "In-Person");

  return (
    <section id="workshops" className="bg-navy-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium px-4 py-2 rounded-xl mb-6">
            {/* <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" /> */}
            Live & In-Person Events
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Upcoming Workshops
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Join our hands-on workshops online or in-person across the
            Asia-Pacific region.
          </p>
        </div>

        {/* Online Workshops */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
              Online
            </span>
            <div className="flex-1 h-px bg-navy-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {online.map((w) => (
              <WorkshopCard key={w.id} workshop={w} onEnroll={onEnroll} />
            ))}
          </div>
        </div>

        {/* In-Person Workshops */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
              In-Person
            </span>
            <div className="flex-1 h-px bg-navy-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inPerson.map((w) => (
              <WorkshopCard key={w.id} workshop={w} onEnroll={onEnroll} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
