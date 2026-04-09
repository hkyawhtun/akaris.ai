import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import UserMenu from "./UserMenu";

type Page = "home" | "partners";

const SERVICES = [
  { label: "AI Courses", href: "#courses", icon: "🎓" },
  { label: "AI Business Consultation", href: "#enroll", icon: "📊" },
  { label: "AI Agents", href: "#enroll", icon: "🤖" },
  { label: "AI Chatbots", href: "#enroll", icon: "💬" },
];

interface Props {
  onNavigate: (page: Page) => void;
  activePage: Page;
  onResourcesClick: () => void;
}

export default function Navbar({
  onNavigate,
  activePage,
  onResourcesClick,
}: Props) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleAnchorClick = (anchorId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(anchorId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({
        pathname: "/",
        hash: `#${anchorId}`,
      });
    }
  };

  const handlePartners = () => {
    onNavigate("partners");
    handleNavClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHome = () => {
    onNavigate("home");
    handleNavClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleHome}
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <img
              src="/assets/icon.png"
              alt=""
              className="h-16 w-16 object-contain"
            />
            <span className="text-gold-500 font-bold text-xl tracking-wide">
              Akaris<span className="text-white">.ai</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Courses */}
            {activePage === "home" && (
              <button
                onClick={() => handleAnchorClick("courses")}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Courses
              </button>
            )}

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((o) => !o)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-navy-900 border border-navy-700 rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50"
                  role="menu"
                >
                  {SERVICES.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => {
                        setServicesOpen(false);
                        handleAnchorClick(s.href.substring(1)); // Remove # from href
                      }}
                      role="menuitem"
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none text-left"
                    >
                      <span className="text-base" aria-hidden="true">
                        {s.icon}
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Workshops */}
            {activePage === "home" && (
              <button
                onClick={() => handleAnchorClick("workshops")}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Workshops
              </button>
            )}

            {/* Instructors */}
            {activePage === "home" && (
              <button
                onClick={() => handleAnchorClick("instructors")}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Instructors
              </button>
            )}

            {/* Resources */}
            {user ? (
              <button
                onClick={() => navigate("/resources")}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Resources
              </button>
            ) : (
              <button
                onClick={onResourcesClick}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Resources
              </button>
            )}

            {/* Partners */}
            <button
              onClick={handlePartners}
              className={`text-sm font-medium transition-colors focus:outline-none ${
                activePage === "partners"
                  ? "text-gold-400"
                  : "text-slate-300 hover:text-gold-400"
              }`}
            >
              Partners
            </button>

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center gap-2">
                <UserMenu onLogout={() => navigate("/")} />
              </div>
            ) : (
              <button
                onClick={onResourcesClick}
                className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium focus:outline-none"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 py-4 flex flex-col gap-1">
          {activePage === "home" && (
            <>
              <button
                onClick={() => {
                  handleAnchorClick("courses");
                  handleNavClick();
                }}
                className="w-full text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors focus:outline-none"
              >
                Courses
              </button>
              <button
                onClick={() => {
                  handleAnchorClick("workshops");
                  handleNavClick();
                }}
                className="w-full text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors focus:outline-none"
              >
                Workshops
              </button>
              <button
                onClick={() => {
                  handleAnchorClick("instructors");
                  handleNavClick();
                }}
                className="w-full text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors focus:outline-none"
              >
                Instructors
              </button>

              {user && (
                <button
                  onClick={() => {
                    handleNavClick();
                    navigate("/resources");
                  }}
                  className="w-full text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors focus:outline-none"
                >
                  Resources
                </button>
              )}
            </>
          )}

          {/* Mobile Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="w-full flex items-center justify-between text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-navy-700 pl-4">
                {SERVICES.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => {
                      handleAnchorClick(s.href.substring(1)); // Remove # from href
                      handleNavClick();
                    }}
                    className="flex items-center gap-2 text-slate-400 hover:text-white text-sm py-2 transition-colors text-left focus:outline-none"
                  >
                    <span aria-hidden="true">{s.icon}</span>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handlePartners}
            className="text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors"
          >
            Partners
          </button>

          {user && (
            <button
              onClick={() => {
                handleNavClick();
                navigate("/profile");
              }}
              className="text-left text-slate-300 hover:text-gold-400 text-sm font-medium py-2.5 px-2 rounded-lg hover:bg-navy-800 transition-colors flex items-center gap-2"
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              My Profile
            </button>
          )}

          <div className="pt-2 mt-1 border-t border-navy-800">
            {user ? (
              <UserMenu
                onLogout={() => {
                  handleNavClick();
                  navigate("/");
                }}
              />
            ) : (
              <button
                onClick={() => {
                  handleNavClick();
                  onResourcesClick();
                }}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-full text-center transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
