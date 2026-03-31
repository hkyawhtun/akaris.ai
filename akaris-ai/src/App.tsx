import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WorkshopSection from './components/WorkshopSection';
import WhyAkaris from './components/WhyAkaris';
import Instructors from './components/Instructors';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EnrollModal from './components/EnrollModal';
import PartnersPage from './pages/PartnersPage';

type Page = 'home' | 'partners';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [page, setPage] = useState<Page>('home');

  const openEnroll = (course = '') => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onEnroll={() => openEnroll()} onNavigate={navigate} activePage={page} />

      {page === 'home' ? (
        <main>
          <Hero onEnroll={() => openEnroll()} />
          <Courses onEnroll={openEnroll} />
          <WorkshopSection onEnroll={() => openEnroll()} />
          <WhyAkaris />
          <Instructors />
          <CTA onEnroll={() => openEnroll()} />
        </main>
      ) : (
        <PartnersPage onEnroll={() => openEnroll()} onNavigateHome={() => navigate('home')} />
      )}

      <Footer onNavigate={navigate} />

      <EnrollModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </>
  );
}

export default App;
