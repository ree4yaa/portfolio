import { useState, useCallback } from 'react';
import { Hero } from '@/components/pixelArt/Hero';
import { BottomNav, useActiveSection } from '@/components/pixelArt/BottomNav';
import { About } from '@/components/pixelArt/About';
import { Skills } from '@/components/pixelArt/Skills';
import { Projects } from '@/components/pixelArt/Projects';
import { Experience } from '@/components/pixelArt/Experience';
import { Resume } from '@/components/pixelArt/Resume';
import { Contact } from '@/components/pixelArt/Contact';
import { Footer } from '@/components/pixelArt/Footer';

function App() {
  const [started, setStarted] = useState(false);
  const activeSection = useActiveSection();

  const handleStart = useCallback(() => {
    setStarted(true);
    // Smooth scroll to about section after the transition
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen bg-retro-dark text-retro-white">
      {/* CRT / Scanline overlays */}
      <div className="crt-overlay" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />

      {/* Hero / Start screen */}
      <Hero onStart={handleStart} />

      {/* Main content — revealed after START */}
      <main className={started ? 'opacity-100' : 'opacity-30 pointer-events-none'}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom game navigation */}
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Bottom padding so content isn't hidden behind nav */}
      <div className="h-20 sm:h-24" />
    </div>
  );
}

export default App;
