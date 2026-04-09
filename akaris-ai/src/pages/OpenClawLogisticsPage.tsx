import { useNavigate } from "react-router-dom";

export default function OpenClawLogisticsPage() {
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
            Open Claw: The Complete Mastery
          </h1>
          <p className="text-xl text-slate-300">
            Master Open Claw through a non-technical lens for practical
            automation.
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
              Master Open Claw through a non-technical lens. This course
              translates complex concepts into practical, everyday tools,
              empowering you to automate workflows and lead tech-driven projects
              with confidence and ease.
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
                  Week 1: Open Claw Fundamentals
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Open Claw Architecture Overview</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Core Component Understanding</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>Basic Configuration & Setup</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build foundational knowledge of Open
                      Claw systems
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 2: Workflow Integration
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Process Automation Design</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Data Flow Management</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>Integration Patterns</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Design and implement automated
                      workflows
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 3: Advanced Automation
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Complex Workflow Orchestration</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Error Handling & Recovery</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>Performance Optimization</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Master advanced automation techniques
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 4 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 4: Custom Solutions
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Custom Component Development</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>API Integration & Extensions</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div>Scalable Architecture Design</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Build custom automation solutions
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 5: Enterprise Deployment
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Large-Scale Implementation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Team Collaboration Features</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div>Governance & Compliance</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Deploy enterprise-grade automation
                      systems
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 6 */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 6: Mastery & Leadership
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Automation Strategy Leadership</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Change Management</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div>Future Automation Trends</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    <div className="text-gold-400 font-medium">
                      Learning Objective: Lead automation initiatives and drive
                      organizational change
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
              This course utilizes a practical, application-focused learning
              model designed for business professionals.
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
                      Concept Sessions
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      2 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Understanding Open Claw without technical jargon
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Practical Labs
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      3 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Hands-on workflow building and testing
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Strategy Sessions
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      2 hours/week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Business application and leadership development
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
                    Business Acumen
                  </h4>
                  <p className="text-slate-300">
                    Understanding of business processes and workflow
                    optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Basic Computer Skills
                  </h4>
                  <p className="text-slate-300">
                    Comfortable with web applications and business software
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Problem-Solving Mindset
                  </h4>
                  <p className="text-slate-300">
                    Ability to identify automation opportunities
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
                  Do I need technical skills?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  No technical background required. This course focuses on
                  practical application and strategy.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What industries benefit most?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  All industries can benefit, especially those with repetitive
                  processes and workflow inefficiencies.
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
                <p className="text-white font-semibold">Intermediate</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Investment</p>
                <div>
                  <p className="text-gold-400 font-bold text-lg">AUD 350</p>
                  <p className="text-slate-500 text-sm">(Save AUD 50)</p>
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
