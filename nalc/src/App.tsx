import { useEffect, useState } from 'react';
import { Navbar, type PageId } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { StructurePage } from '@/pages/StructurePage';
import { TeamPage } from '@/pages/TeamPage';
import { ChargesPage } from '@/pages/ChargesPage';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [page]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar current={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <HomePage onNavigate={setPage} />}
        {page === 'about' && <AboutPage />}
        {page === 'structure' && <StructurePage />}
        {page === 'team' && <TeamPage />}
        {page === 'charges' && <ChargesPage />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}
