export default function CTA({
  onEnroll,
}: {
  onEnroll: (course: string, type: string) => void;
}) {
  return (
    <section id="enroll" className="bg-navy-950 py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative bg-navy-900 border border-gold-500/20 rounded-3xl p-10 sm:p-16 overflow-hidden text-center">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
                Business Consultation?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of founders already building smarter businesses with
              Akaris.ai. Book a consultation to get a clear, practical AI
              roadmap tailored to your goals.
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.75fr_1fr] items-start mb-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_35px_80px_-50px_rgba(212,175,55,0.5)] backdrop-blur-xl">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-gold-500/10 px-3 py-1.5 text-gold-300 text-xs font-semibold uppercase tracking-[0.24em]">
                      Strategy Session
                    </span>
                    <span className="text-slate-400 text-sm">
                      Get actionable recommendations and business automation focus.
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-800 bg-navy-950/80 p-5">
                      <p className="text-slate-400 text-[11px] uppercase tracking-[0.24em] font-semibold">
                        Duration
                      </p>
                      <p className="mt-3 text-white text-2xl font-semibold">1 hour</p>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-navy-950/80 p-5">
                      <p className="text-slate-400 text-[11px] uppercase tracking-[0.24em] font-semibold">
                        Price
                      </p>
                      <p className="mt-3 text-white text-2xl font-semibold">AUD 250</p>
                      <p className="mt-2 text-slate-500 text-xs line-through">AUD 300</p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-800 bg-navy-950/80 p-5 text-slate-300">
                    <p className="text-sm leading-6">
                      You'll leave with a practical action plan, AI use cases,
                      and a revenue-focused growth path for your next steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[2rem] border border-gold-500/20 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/5 p-8 text-center shadow-[0_30px_80px_-55px_rgba(212,175,55,0.45)]">
                <div>
                  <p className="text-slate-300 text-sm uppercase tracking-[0.24em] font-semibold mb-4">
                    Ready when you are
                  </p>
                  <p className="text-white text-lg font-semibold mb-6">
                    One session, clear direction, faster momentum.
                  </p>
                </div>
                <button
                  onClick={() => onEnroll("Business AI Consultation", "consultation")}
                  className="mb-4 rounded-full bg-gold-500 px-10 py-4 text-base font-bold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
                >
                  Book Consultation
                </button>
                <a
                  href="#courses"
                  className="text-slate-200 text-sm font-semibold border border-slate-700 px-6 py-3 rounded-full transition hover:border-gold-500/60 hover:text-white"
                >
                  View All Courses
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
