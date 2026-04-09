const STATS = [
  { value: "5+", label: "Expert Courses" },
  { value: "2", label: "Industry Instructors" },
  { value: "100%", label: "Practical Focus" },
];

export default function Hero({ onEnroll }: { onEnroll: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-950 flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/banners/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-lg font-medium px-4 py-1.5 rounded-xl mb-8">
            AI Education for the Future
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Master AI Skills{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
              That Matter
            </span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            From AI fundamentals to advanced engineering, Akaris.ai delivers
            expert-led courses that give you real-world skills to thrive in the
            age of artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onEnroll}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base px-8 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25 text-center"
            >
              Enroll Now
            </button>
            <a
              href="#courses"
              className="border border-slate-600 hover:border-gold-500/60 text-slate-300 hover:text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all text-center"
            >
              Explore Courses -&gt;
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
