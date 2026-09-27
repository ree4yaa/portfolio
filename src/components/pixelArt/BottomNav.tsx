import { Home, User, Sword, Trophy, Briefcase, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', icon: Home },
  { id: 'about', label: 'ABOUT ME', icon: User },
  { id: 'skills', label: 'SKILLS', icon: Sword },
  { id: 'projects', label: 'PROJECTS', icon: Trophy },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
  { id: 'contact', label: 'CONTACT', icon: Mail },
];

interface BottomNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function BottomNav({ activeSection, onNavigate }: BottomNavProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Mobile expand toggle */}
      <button
        className="sm:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-50 font-pixel text-[8px] text-retro-bg bg-retro-yellow border-4 border-retro-dark px-4 py-2 rounded-none"
        style={{ boxShadow: '0 0 0 4px #ffe600' }}
        onClick={() => setExpanded((e) => !e)}
        aria-label="Toggle navigation"
      >
        {expanded ? '▼ CLOSE' : '▲ MENU'}
      </button>

      <nav
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-200 ${
          expanded ? 'translate-y-0' : 'translate-y-full sm:translate-y-0'
        }`}
      >
        <div
          className="bg-retro-bg2 border-t-4 border-retro-dark"
          style={{ boxShadow: '0 -4px 0 4px #ff2e88, 0 -8px 20px rgba(255,46,136,0.2)' }}
        >
          <div className="max-w-5xl mx-auto px-2 py-2 sm:py-3 flex items-center justify-around gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setExpanded(false);
                  }}
                  className={`group relative flex flex-col items-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 border-2 transition-all duration-100 ${
                    isActive
                      ? 'border-retro-yellow bg-retro-panel2'
                      : 'border-transparent hover:border-retro-cyan/50'
                  }`}
                  style={{
                    boxShadow: isActive ? '0 0 12px rgba(255,230,0,0.4)' : 'none',
                  }}
                >
                  <Icon
                    size={18}
                    className={`transition-all duration-100 ${
                      isActive
                        ? 'text-retro-yellow'
                        : 'text-retro-gray group-hover:text-retro-cyan'
                    }`}
                    strokeWidth={2.5}
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <span
                    className={`font-pixel text-[6px] sm:text-[8px] transition-colors ${
                      isActive
                        ? 'text-retro-yellow'
                        : 'text-retro-gray group-hover:text-retro-cyan'
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-retro-yellow animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

/** Hook that tracks which section is currently in view */
export function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -30% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}
