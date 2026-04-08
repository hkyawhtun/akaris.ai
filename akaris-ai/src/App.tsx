import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import WorkshopSection from "./components/WorkshopSection";
import WhyAkaris from "./components/WhyAkaris";
import Instructors from "./components/Instructors";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import EnrollModal from "./components/EnrollModal";
import LoginModal from "./components/LoginModal";
import ProtectedRoute from "./components/ProtectedRoute";
import PartnersPage from "./pages/PartnersPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./pages/ProfilePage";
import Tools from "./components/Tools";

type Page = "home" | "partners";

type RegisterLocationState = {
  from?: string;
};

function HomeContent({
  onEnroll,
}: {
  onEnroll: (course?: string, type?: string) => void;
}) {
  return (
    <main>
      <Hero onEnroll={() => onEnroll()} />
      <Courses onEnroll={onEnroll} />
      <WorkshopSection onEnroll={onEnroll} />
      <Tools />
      <WhyAkaris />
      <Instructors />
      <CTA onEnroll={(course, type) => onEnroll(course, type)} />
    </main>
  );
}

function App() {
  const location = useLocation();
  const routerNavigate = useNavigate();
  const modalOpen = location.pathname === "/register";
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const page: Page = location.pathname === "/partners" ? "partners" : "home";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const openEnroll = (course: string = "", type: string = "") => {
    console.log("Type : ", type, " : ", course);
    setSelectedCourse(course);
    setEnquiryType(type);
    if (location.pathname !== "/register") {
      routerNavigate("/register", { state: { from: location.pathname } });
    }
  };

  const navigateTo = (p: Page) => {
    const path = p === "partners" ? "/partners" : "/";
    routerNavigate(path);
  };

  const closeEnroll = () => {
    const state = location.state as RegisterLocationState | null;
    const fromPath = state?.from;
    if (fromPath && fromPath !== "/register") {
      routerNavigate(fromPath, { replace: true });
      return;
    }
    routerNavigate("/", { replace: true });
  };

  const handleResourcesClick = () => {
    setLoginModalOpen(true);
  };

  return (
    <>
      <Navbar
        onNavigate={navigateTo}
        activePage={page}
        onResourcesClick={handleResourcesClick}
      />

      <Routes>
        <Route path="/" element={<HomeContent onEnroll={openEnroll} />} />
        <Route
          path="/partners"
          element={
            <PartnersPage
              onEnroll={() => openEnroll()}
              onNavigateHome={() => navigateTo("home")}
            />
          }
        />
        <Route
          path="/register"
          element={<HomeContent onEnroll={openEnroll} />}
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <ResourcesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onNavigate={navigateTo} />

      <EnrollModal
        isOpen={modalOpen}
        onClose={closeEnroll}
        defaultCourse={selectedCourse}
        enquiryType={enquiryType}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </>
  );
}

export default App;
