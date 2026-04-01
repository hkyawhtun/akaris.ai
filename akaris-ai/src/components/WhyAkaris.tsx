const FEATURES = [
  {
    icon: '🎯',
    title: 'Practical & Real-World',
    description:
      'Every course is built around hands-on projects that mirror real industry challenges — not just theory.',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Instructors',
    description:
      'Learn from AI engineers and practitioners with direct experience building production AI systems.',
  },
  {
    icon: '🌏',
    title: 'Locally Relevant',
    description:
      'Content crafted with local learners in mind, bridging global AI trends with regional business contexts.',
  },
  {
    icon: '⚡',
    title: 'Always Up-to-Date',
    description:
      'The AI landscape moves fast. Our curriculum is continuously updated to reflect the latest tools and techniques.',
  },
  {
    icon: '🏆',
    title: 'Career-Ready Skills',
    description:
      'Build a portfolio that stands out. Leave each course with projects and skills employers are actively looking for.',
  },
  {
    icon: '🤝',
    title: 'Supportive Community',
    description:
      'Join a growing network of AI learners, get help from instructors, and collaborate on real projects.',
  },
];

export default function WhyAkaris() {
  return (
    <section id="why" className="bg-navy-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Akaris.ai?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We believe AI education should be accessible, practical, and deeply relevant to where
            you are and where you want to go.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-navy-900 border border-navy-800 rounded-2xl p-6 hover:border-gold-500/30 transition-all"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
