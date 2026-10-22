import { useState, useCallback, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { BottomNav, useActiveSection } from '@/components/pixelArt/BottomNav';
import { About } from '@/components/pixelArt/About';
import { Skills } from '@/components/pixelArt/Skills';
import { Projects } from '@/components/pixelArt/Projects';
import { Experience } from '@/components/pixelArt/Experience';
import { Resume } from '@/components/pixelArt/Resume';
import { Contact } from '@/components/pixelArt/Contact';
import { Footer } from '@/components/pixelArt/Footer';
import { DancingHero } from './components/pixelArt/Hero';

type Theme = 'dark' | 'light';

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('retro-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem('retro-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}

function App() {
  const [started, setStarted] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggle } = useTheme();

  const handleStart = useCallback(() => {
    setStarted(true);
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen bg-retro-bg text-retro-white">
      {/* CRT / Scanline overlays */}
      <div className="crt-overlay" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />

      {/* Theme toggle */}
      <button
        className="theme-toggle fixed top-3 right-3 z-[100] font-pixel text-[8px] text-retro-dark"
        onClick={toggle}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{ boxShadow: '0 0 0 3px var(--retro-cyan)' }}
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-retro-yellow" strokeWidth={2.5} />
        ) : (
          <Moon size={18} className="text-retro-purple" strokeWidth={2.5} />
        )}
      </button>

      {/* Hero / Start screen */}
      <DancingHero onStart={handleStart} />

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
