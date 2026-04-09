import { useNavigate } from "react-router-dom";

export default function VibeCodingLogisticsPage() {
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
            Vibe Coding for Modern Software Developers
          </h1>
          <p className="text-xl text-slate-300">
            Master AI-assisted development to ship code at record speeds.
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
              Tailored for experienced software developers, leverage high-level
              intent and AI-assisted tools to ship production software at record
              speeds. Master the art of Vibe Coding to transform modern
              development workflows using Claude Code and Codex.
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
                  Week 1: AI-Assisted Development Setup
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Claude Code & GitHub Copilot Setup</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Development Environment Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Prompt Engineering for Code</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Set up and master AI coding assistants
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 2: Modern Development Workflows
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Test-Driven Development with AI</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Code Review & Refactoring</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Documentation Generation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Integrate AI into development
                      lifecycle
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 3: Advanced AI Pair Programming
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Complex Feature Development</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Architecture Design Assistance</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Performance Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Master advanced AI-assisted
                      development
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 4: Full-Stack AI Development
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>End-to-End Application Building</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>AI-Generated Testing Suites</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Deployment Automation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build complete applications with AI
                      assistance
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 5: Team Collaboration
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>AI in Team Development</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Code Standards & Consistency</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Knowledge Sharing</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Scale AI practices across development
                      teams
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
                    <div>Production-Ready Code Generation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Security & Best Practices</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Continuous Integration with AI</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Achieve production excellence with AI
                      tools
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
              This course utilizes an intensive development-focused learning
              model for experienced programmers.
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
                      Coding Sessions
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      4 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Hands-on development with AI assistance
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Code Reviews
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      2 sessions/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      AI-assisted code review and optimization
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Project Work
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      3 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Build real applications and features
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
                    Programming Experience
                  </h4>
                  <p className="text-slate-300">
                    2+ years of software development experience required
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Development Tools
                  </h4>
                  <p className="text-slate-300">
                    Familiarity with Git, IDEs, and modern development practices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    AI Tool Access
                  </h4>
                  <p className="text-slate-300">
                    Access to Claude Code, GitHub Copilot, or similar AI coding
                    tools
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
                  What programming languages will we use?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Focus on modern languages: JavaScript/TypeScript, Python, and
                  Go with AI assistance.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Will I still need to write code manually?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes, but AI will dramatically accelerate your development
                  speed and quality.
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
                  <p className="text-gold-400 font-bold text-lg">AUD 890</p>
                  <p className="text-slate-500 text-sm">(Save AUD 100)</p>
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
