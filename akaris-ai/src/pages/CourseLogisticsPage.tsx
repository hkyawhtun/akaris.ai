import { useNavigate } from "react-router-dom";

export default function CourseLogisticsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mt-12 mb-4"
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
            AI Starter Course: Welcome to Your AI Journey
          </h1>
          <p className="text-xl text-slate-300">
            Build your AI literacy in just 3 weeks.
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
              This course is a welcoming entry point for individuals from any
              background curious about the world of Artificial Intelligence.
              Designed specifically for complete beginners, you will build a
              solid foundation in AI fundamentals through hands-on exercises
              that require{" "}
              <strong className="text-white">
                zero coding or technical experience.
              </strong>
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              By the end of this professional certificate program, you will move
              beyond basic chat interactions to mastering the{" "}
              <strong className="text-gold-400">4-Part Prompt Formula</strong>,
              allowing you to automate professional writing, summarize complex
              documents, and generate social media content with confidence.
            </p>
          </div>
        </section>

        {/* Syllabus Section */}
        <section className="mb-16">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Syllabus: What You Will Learn
            </h2>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 1: The Foundation of AI Interaction
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 1:</strong>{" "}
                      Understanding AI Basics – What is an LLM?
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 2:</strong> Your
                      First Conversations – Getting started with ChatGPT and
                      Gemini.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gold-400 font-medium">
                        Learning Objective:
                      </strong>{" "}
                      Overcome "blank page syndrome" and understand how to
                      navigate the main AI interfaces.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 2: From Basics to Application
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 3:</strong> The
                      Professional Prompt Formula – Role, Task, Context, and
                      Format.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 4:</strong>{" "}
                      Real-World Workflow – Using AI for emails, planning, and
                      document summarization.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gold-400 font-medium">
                        Learning Objective:
                      </strong>{" "}
                      Transition from casual use to professional-grade results
                      using structured frameworks.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Week 3 */}
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Week 3: Mastery and Project Showcase
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 5:</strong> Advanced
                      Iteration – Refining and troubleshooting AI outputs.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Module 6:</strong> Capstone
                      Project – Build your "Personal Prompt Pack" of 20+
                      reusable tools.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gold-400 font-medium">
                        Learning Objective:
                      </strong>{" "}
                      Consolidate your skills into a tangible portfolio of AI
                      tools ready for immediate use in your career.
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
              This course utilizes a{" "}
              <strong className="text-gold-400">
                high-engagement blended learning model
              </strong>{" "}
              designed to fit into a busy schedule while ensuring maximum skill
              retention.
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
                      Guided Video Lessons
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      40 mins / week
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      On-demand technical demos and core concept explanations.
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Live Virtual Sessions
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      2 sessions / week (75m)
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Hands-on application, instructor-led practice, and peer
                      debriefs.
                    </td>
                  </tr>
                  <tr className="hover:bg-navy-800/50">
                    <td className="border border-navy-700 px-6 py-4 text-slate-300 font-medium">
                      Daily Applied Lab
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      15–20 mins / day
                    </td>
                    <td className="border border-navy-700 px-6 py-4 text-slate-300">
                      Habit-building tasks to apply AI to your real-world daily
                      routine.
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
              To ensure you are ready for{" "}
              <strong className="text-gold-400">Day 1</strong>, please complete
              the following technical setup. Students who complete these steps
              early report a 2x increase in learning efficiency during the first
              week.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Account Provisioning
                  </h4>
                  <p className="text-slate-300">
                    Sign up for free accounts on{" "}
                    <strong className="text-white">ChatGPT</strong>,{" "}
                    <strong className="text-white">Google Gemini</strong>, and{" "}
                    <strong className="text-white">Canva</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Portfolio Setup
                  </h4>
                  <p className="text-slate-300">
                    Create a dedicated Google Doc titled{" "}
                    <strong className="text-white">"My AI Prompt Pack"</strong>{" "}
                    to store your curriculum work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-navy-800/50 rounded-lg border border-navy-700">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Community Access
                  </h4>
                  <p className="text-slate-300">
                    Join the private Support Group (WhatsApp/Discord) to engage
                    with your cohort and instructor.
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
                  Do I need a technical background?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  No. If you can use WhatsApp and Google Docs, you have all the
                  skills necessary to succeed.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Is there a cost for the tools used?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  We prioritize accessibility. All tools used in this course
                  (ChatGPT, Gemini, Canva) have free tiers that are fully
                  sufficient for all assignments.
                </p>
              </div>

              <div className="border-b border-navy-800 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is the "Human-in-the-Loop" policy?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  We teach a strict{" "}
                  <strong className="text-gold-400">
                    Read → Edit → Personalize
                  </strong>{" "}
                  process. AI is your assistant, but you remain the subject
                  matter expert and fact-checker.
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
                <p className="text-white font-semibold">3 Weeks</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Level</p>
                <p className="text-white font-semibold">
                  Beginner (No prerequisites)
                </p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Investment</p>
                <div>
                  <p className="text-gold-400 font-bold text-lg">AUD 300</p>
                  <p className="text-slate-500 text-sm">(Special Offer)</p>
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
