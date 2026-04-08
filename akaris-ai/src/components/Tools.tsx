const Tools = () => {
  // Tool stack with actual image icons
  const toolStack = [
    {
      name: "ChatGPT",
      brand: "Core LLM",
      image: "/assets/tools/chatgpt-icon.png",
    },
    {
      name: "Gemini",
      brand: "Google AI",
      image: "/assets/tools/google-gemini-icon.png",
    },
    {
      name: "Claude",
      brand: "Anthropic",
      image: "/assets/tools/claude-ai-icon.png",
    },
    {
      name: "Grok",
      brand: "xAI",
      image: "/assets/tools/grok-icon.png",
    },
    {
      name: "VS Code",
      brand: "Developer",
      image: "/assets/tools/visual-studio-code-icon.png",
    },
    {
      name: "Cursor",
      brand: "AI IDE",
      image: "/assets/tools/cursor-ai-code-icon.png",
    },
    {
      name: "Nano Banana",
      brand: "AI Agent",
      image: "/assets/tools/nano-banana.png",
    },
    {
      name: "Copilot",
      brand: "Auto-dev",
      image: "/assets/tools/copilot-icon.png",
    },
    {
      name: "Perplexity",
      brand: "Search",
      image: "/assets/tools/perplexity-ai-icon.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-yellow-500/30 overflow-x-hidden relative">
      {/* Blueprint Grid Background - Matches FB Cover */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Corner Brackets */}
        <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-slate-700" />
        <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-slate-700" />
        <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-slate-700" />
        <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-slate-700" />
      </div>

      <section className="relative z-10 pt-24 pb-32 px-6 max-w-6xl mx-auto">
        {/* Header - Styled to match the FB Cover Typography */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 border-l border-white/5 pl-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
                — AI EDUCATION PLATFORM —
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-4 tracking-tight">
              Akaris<span className="text-yellow-500">.ai</span>
            </h1>
            <p className="text-slate-400 text-xl font-light italic">
              Master AI skills{" "}
              <span className="text-slate-200">
                without the tech overwhelm.
              </span>
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
              {/* <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" /> */}
              <span className="text-lg font-black uppercase tracking-widest text-slate-400">
                AI TOOLS & PLATFORMS WE TEACH
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Context Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-white/10 relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 blur-[80px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-6">
                  The Elite Stack.
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  We've curated an integrated ecosystem of industry-standard
                  tools to ensure you build production-ready AI solutions from
                  day one.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 rounded border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    Starter
                  </div>
                  <div className="px-3 py-1 rounded border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    Intermediate
                  </div>
                  <div className="px-3 py-1 rounded border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-500 border-yellow-500/50 text-yellow-500">
                    Builder
                  </div>
                </div>
              </div>
            </div>

            {/* <button className="w-full p-6 rounded-2xl bg-yellow-500 text-black flex items-center justify-between group hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-500/10">
              <span className="font-black uppercase tracking-widest text-sm italic">
                Enroll In Next Cohort
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button> */}
          </div>

          {/* Icon-Style Tool Grid - Perfectly following the FB Cover Layout */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-10 gap-x-6">
              {toolStack.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Tool Icon with Image */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 relative overflow-hidden border border-white/10 bg-white/5 p-2">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Tool Label */}
                  <div className="mt-4 text-center">
                    <div className="text-[10px] font-black text-white uppercase tracking-tighter opacity-80 group-hover:opacity-100 group-hover:text-yellow-500 transition-all">
                      {tool.name}
                    </div>
                    <div className="text-[8px] font-bold text-slate-600 uppercase tracking-widest mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      {tool.brand}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-footer inside grid */}
            {/* <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase">
                <span>OpenAI</span>
                <span>Anthropic</span>
                <span>Google</span>
              </div>
              <div className="flex items-center gap-2 text-[9px] font-bold text-yellow-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                Full Tech Specs
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Decorative Branding from FB cover */}
      <div className="fixed bottom-10 left-10 z-20 hidden lg:block">
        <span className="text-[10px] font-black text-slate-800 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
          AKARIS.AI
        </span>
      </div>
    </div>
  );
};

export default Tools;
