import { useNavigate } from "react-router-dom";

export default function AIEngineerLogisticsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 mt-12"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </button>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Become an AI Engineer
          </h1>
          <p className="text-xl text-slate-300">
            Master AI engineering from theory to production deployment.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              About This Course
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              This advanced course is designed for software developers and
              technical professionals ready to transition into the role of AI
              Engineer. Follow a comprehensive roadmap from foundational theory
              to deploying production-grade AI systems at scale.
            </p>
          </div>
        </section>

        {/* Syllabus Section */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Course Syllabus
            </h2>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 1: AI Engineering Foundations
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Machine Learning Theory & Mathematics</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Deep Learning Architecture</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Model Training & Validation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build strong theoretical foundations
                      in AI engineering
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 2: Model Development & Optimization
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Advanced Model Architectures</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Hyperparameter Tuning</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Model Compression & Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Master model development and
                      performance optimization
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 3: Agentic Frameworks
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Autonomous Agent Design</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Multi-Agent Systems</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Decision-Making Algorithms</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build intelligent autonomous systems
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 4: Scalable Deployment
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>MLOps & Model Deployment</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Cloud Infrastructure for AI</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Monitoring & Maintenance</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Deploy and maintain AI systems at
                      scale
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 5: Advanced Applications
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Computer Vision Systems</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Natural Language Processing</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Reinforcement Learning</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Master advanced AI application domains
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 6 */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 6: Production Excellence
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>AI System Architecture</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Ethical AI & Bias Mitigation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Future-Proof AI Engineering</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Achieve production excellence in AI
                      engineering
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Course Logistics */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Course Logistics & Learning Format
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              This course utilizes an intensive research and development-focused
              learning model for advanced practitioners.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-navy-700 rounded-lg">
                <thead>
                  <tr className="bg-navy-800">
                    <th className="border border-navy-700 px-6 py-4 text-left text-white font-semibold">
                      Component
                    </th>
                    <th className="border border-navy-700 px-6 py-4 text-left text-white font-semibold">
                      Commitment
                    </th>
                    <th className="border border-navy-700 px-6 py-4 text-left text-white font-semibold">
                      Focus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Technical Lectures
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      3 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Deep theoretical foundations and concepts
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Lab Sessions
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      4 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Hands-on model development and experimentation
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Project Work
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      6 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Build and deploy production AI systems
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pre-Course Requirements */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Pre-Course Requirements
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              To ensure you are ready for Day 1, please complete the following
              preparations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Strong Programming
                  </h4>
                  <p className="text-slate-300">
                    Expert-level Python and software engineering skills required
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Mathematics Background
                  </h4>
                  <p className="text-slate-300">
                    Linear algebra, calculus, and statistics proficiency
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Development Tools
                  </h4>
                  <p className="text-slate-300">
                    Experience with TensorFlow, PyTorch, or similar frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What's the prerequisite experience level?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  3+ years of software development experience with strong Python
                  skills required.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Will I build production systems?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes, you'll deploy multiple AI systems to production
                  environments during the course.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-400/10 border border-gold-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Enroll Today</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-slate-400 text-sm">Duration</p>
                <p className="text-white font-semibold">6 weeks</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Level</p>
                <p className="text-white font-semibold">Advanced</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Investment</p>
                <div>
                  <p className="text-gold-400 font-bold text-lg">AUD 1300</p>
                  <p className="text-slate-500 text-sm">(Save AUD 200)</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/register")}
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get Started — Visit Course Home
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
