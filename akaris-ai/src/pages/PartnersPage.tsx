const PARTNERSHIP_TYPES = [
  {
    icon: '🎓',
    title: 'Education Partners',
    description:
      'Collaborate with Akaris.ai to co-deliver AI curriculum, workshops, and certification programs. Ideal for universities, colleges, and training organisations looking to lead in AI education.',
    benefits: ['Co-branded AI courses', 'Joint workshop delivery', 'Curriculum co-development', 'Student pathway programs'],
  },
  {
    icon: '📊',
    title: 'Business Partners',
    description:
      'Partner with us to bring AI consulting, workforce upskilling, and AI adoption strategies to your clients. Perfect for consulting firms, enterprises, and HR solution providers.',
    benefits: ['AI workforce training', 'White-label programs', 'Corporate consulting referrals', 'Joint go-to-market'],
  },
  {
    icon: '⚙️',
    title: 'Technology Partners',
    description:
      'Integrate your AI tools, platforms, or APIs into our curriculum and reach a growing community of AI practitioners and learners across the Asia-Pacific region.',
    benefits: ['Product integration', 'Co-marketing opportunities', 'Developer community access', 'Technical workshops'],
  },
];

interface Props {
  onEnroll: () => void;
  onNavigateHome: () => void;
}

export default function PartnersPage({ onEnroll, onNavigateHome }: Props) {
  return (
    <div className="bg-navy-950 min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-navy-950 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
            Partnership Opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Grow Together with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Akaris.ai
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We partner with educational institutions, businesses, and technology companies to
            accelerate AI adoption and education across the Asia-Pacific region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@smarteduglobe.com?subject=Partnership Enquiry — Akaris.ai"
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Contact Us for Partnership
            </a>
            <button
              onClick={onNavigateHome}
              className="border border-slate-600 hover:border-gold-500/60 text-slate-300 hover:text-white font-semibold text-base px-10 py-4 rounded-full transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partnership Models</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Three flexible models designed to create mutual value and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERSHIP_TYPES.map((type) => (
              <div
                key={type.title}
                className="bg-navy-950 border border-navy-800 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/5 flex flex-col gap-5"
              >
                <span className="text-4xl" aria-hidden="true">{type.icon}</span>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">{type.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{type.description}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {type.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-navy-900 border border-gold-500/20 rounded-3xl p-10 sm:p-16 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Partner With Us?
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Let's explore how we can collaborate to build the AI-ready workforce of tomorrow.
                Reach out and let's start the conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@smarteduglobe.com?subject=Partnership Enquiry — Akaris.ai"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base px-10 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
                >
                  Contact Us for Partnership
                </a>
                <button
                  onClick={onEnroll}
                  className="border border-slate-600 hover:border-gold-500/60 text-slate-300 hover:text-white font-semibold text-base px-10 py-4 rounded-full transition-all"
                >
                  Explore Our Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
