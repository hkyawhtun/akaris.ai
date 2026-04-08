import { PDFs, Videos } from "../data/resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gold-500">Learning</span>{" "}
            <span className="text-white">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Curated collection of tutorials, guides, and video resources to help
            you master AI technologies and build powerful AI agents.
          </p>
        </div>

        {/* PDF Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>📄</span> PDF Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PDFs.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-navy-900 border border-navy-800 rounded-xl p-6 hover:border-gold-500/50 transition-colors"
              >
                <div className="text-4xl mb-4">{pdf.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {pdf.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {pdf.description}
                </p>
                <a
                  href={pdf.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 16v-4m0 0V8m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Video Resources Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>🎥</span> Video Tutorials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Videos.map((video) => (
              <div key={video.id} className="flex flex-col">
                {/* Video Player */}
                <div className="relative w-full bg-black rounded-xl overflow-hidden mb-4">
                  {video.type === "youtube" ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ) : video.facebookUrl ? (
                    <div className="aspect-video flex items-center justify-center bg-slate-900">
                      <iframe
                        src={`https://www.facebook.com/plugins/video.php?height=500&href=${encodeURIComponent(video.facebookUrl)}&show_text=false&width=560&t=0`}
                        title={video.title}
                        style={{
                          border: "none",
                          overflow: "hidden",
                          width: "100%",
                          height: "100%",
                        }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  ) : null}
                </div>
                {/* Video Info */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 bg-gold-500/20 text-gold-400 text-xs font-semibold rounded-full">
                      {video.channel}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 p-8 bg-gradient-to-r from-gold-600/20 to-gold-500/10 border border-gold-500/30 rounded-xl text-center">
          <h3 className="text-white font-bold text-xl mb-2">
            Learn, Build, and Master AI
          </h3>
          <p className="text-slate-300 mb-4">
            These resources will help you get started with AI development and
            build your first AI agents.
          </p>
          <p className="text-slate-400 text-sm">
            More resources coming soon. Check back regularly for new tutorials
            and guides.
          </p>
        </section>
      </div>
    </main>
  );
}
