import { useNavigate } from "react-router-dom";

export default function AIAutomationMasteryLogisticsPage() {
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
            AI Automation Mastery
          </h1>
          <p className="text-xl text-slate-300">
            Build powerful automation pipelines and custom business solutions.
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
              For entrepreneurs, operations managers, and tech-savvy
              professionals looking to scale their impact through intelligent
              systems. Build powerful automation pipelines and custom business
              solutions using modern AI tools and no-code platforms that
              transform how you work.
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
                  Week 1: Automation Fundamentals
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Process Analysis & Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>No-Code Platform Mastery</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>API Integration Basics</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Master the foundations of AI-powered
                      automation
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 2: Advanced Workflows
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Multi-Tool Integration</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Conditional Logic & Triggers</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Error Handling & Monitoring</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build complex automation workflows
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 3: Custom Solutions
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Business Process Reengineering</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Custom AI Agent Development</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Scalable Architecture Design</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Create custom automation solutions
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 4: Deployment & Scaling
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Production Deployment</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Performance Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Team Training & Handover</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Deploy and scale automation solutions
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
              This course utilizes a project-based learning approach with
              intensive hands-on development.
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
                      Technical Workshops
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      3 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Platform tutorials and tool integration
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Project Labs
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      4 sessions/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Build and test automation projects
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Code Reviews
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      2 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Peer review and optimization sessions
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
                    Basic Computer Skills
                  </h4>
                  <p className="text-slate-300">
                    Comfortable with web applications and basic workflows
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Business Process
                  </h4>
                  <p className="text-slate-300">
                    Identify a process you want to automate
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Tool Access</h4>
                  <p className="text-slate-300">
                    Sign up for automation platforms (Zapier, Make, etc.)
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
                  What automation tools will I learn?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  You'll master Zapier, Make, Microsoft Power Automate, and
                  custom AI integrations.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do I need programming skills?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  No coding required. We focus on no-code and low-code
                  automation platforms.
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
                <p className="text-white font-semibold">4 weeks</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Level</p>
                <p className="text-white font-semibold">Intermediate</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Investment</p>
                <div>
                  <p className="text-gold-400 font-bold text-lg">AUD 690</p>
                  <p className="text-slate-500 text-sm">(Save AUD 110)</p>
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
