export default function CTA({ onEnroll }: { onEnroll: () => void }) {
  return (
    <section id="enroll" className="bg-navy-950 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-900 border border-gold-500/20 rounded-3xl p-10 sm:p-16 overflow-hidden text-center">
          {/* Background blobs */}
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
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                AI Journey?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              Join hundreds of learners already building their future with Akaris.ai. Start with
              any course — no experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onEnroll}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Get Started Today
              </button>
              <a
                href="#courses"
                className="border border-slate-600 hover:border-gold-500/60 text-slate-300 hover:text-white font-semibold text-base px-10 py-4 rounded-full transition-all"
              >
                View All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
