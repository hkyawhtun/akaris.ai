import FooterNewsletter from './FooterNewsletter';

type Page = 'home' | 'partners';

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: Props) {
  const goPartners = () => {
    onNavigate('partners');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 mb-3">
              <img src="/assets/icon.png" alt="" className="h-7 w-7 object-contain" />
              <span className="text-gold-500 font-bold text-xl tracking-wide">
                Akaris<span className="text-white">.ai</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Expert-led AI education to help you build real-world skills for the future.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Courses</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'AI Starter for Everyone',
                'AI Business Growth Accelerator',
                'AI Automation Mastery',
                'Vibe Coding',
                'Become an AI Engineer',
              ].map((label) => (
                <li key={label}>
                  <a href="#courses" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#why" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Why Akaris.ai</a></li>
              <li><a href="#workshops" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Workshops</a></li>
              <li><a href="#instructors" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Instructors</a></li>
              <li>
                <button onClick={goPartners} className="text-slate-500 hover:text-slate-300 text-sm transition-colors text-left">
                  Partners
                </button>
              </li>
              <li><a href="mailto:info@smarteduglobe.com" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterNewsletter />
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Akaris.ai. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">Built for the future of AI education.</p>
        </div>
      </div>
    </footer>
  );
}
