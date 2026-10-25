import { useState } from 'react';
import { PixelArt } from '@/components/pixelArt';
import { useReveal } from '@/components/pixelArt/useReveal';
import { trophy, star, heart, sword, shield } from '@/components/pixelArt/sprites';
import { Trophy, Award, Medal, Flame, GitBranch, GraduationCap } from 'lucide-react';
import type { PixelGrid } from '@/components/pixelArt';

interface Achievement {
  title: string;
  desc: string;
  icon: typeof Trophy;
  badgeArt: PixelGrid;
  color: 'pink' | 'cyan' | 'green' | 'yellow' | 'purple';
}

const achievements: Achievement[] = [
  {
    title: 'HACKATHONS',
    desc: 'Participated in multiple hackathons, building projects under time pressure.',
    icon: Flame,
    category: 'HACKATHONS',
    badgeArt: trophy,
    color: 'yellow',
  },
  {
    title: 'WORKSHOPS',
    desc: 'Attended technical workshops on web dev, cybersecurity, and cloud computing.',
    category: 'WORKSHOPS',
    icon: GraduationCap,
    badgeArt: star,
    color: 'cyan',
  },
  {
    title: 'EVENTS',
    desc: 'Active participant in tech events, coding competitions, and meetups.',
    category: 'EVENTS',
    icon: Medal,
    badgeArt: heart,
    color: 'pink',
  },
  {
    title: 'OPEN SOURCE CONTRIBUTIONS',
    desc: 'Contributing to open-source projects and collaborating with the community.',
    category: 'OPEN SOURCE',
    icon: GitBranch,
    badgeArt: sword,
    color: 'purple',
  },
];

const colorHex: Record<string, string> = {
  pink: '#ff2e88',
  cyan: '#00f0ff',
  green: '#39ff14',
  yellow: '#ffe600',
  purple: '#9d4edd',
};

export function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-20 px-4 overflow-hidden bg-retro-bg2 pixel-noise"
    >
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-6 py-3 mb-4" style={{ boxShadow: '0 0 0 4px #ff2e88, 0 0 20px rgba(255,46,136,0.2)' }}>
          <span className="font-pixel text-[10px] sm:text-[14px] inline-flex items-center gap-2">
            <Trophy size={16} /> ACHIEVEMENT UNLOCKED
          </span>
        </div>
        <h2 className="font-pixel text-[16px] sm:text-[24px] md:text-[32px] text-retro-white text-pixel-shadow mb-3">
          EXPERIENCE
        </h2>
        <p className="font-mono text-lg text-retro-gray">~ Badges Earned ~</p>
      </div>

      <div ref={ref} className={`relative z-10 max-w-5xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((ach, i) => (
            <BadgeCard key={ach.title} achievement={ach} index={i} />
          ))}
        </div>

        {/* Achievement counter */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-retro-panel border-4 border-retro-dark px-6 py-4" style={{ boxShadow: '0 0 0 4px #ffe600, 0 0 20px rgba(255,230,0,0.2)' }}>
            <div className="font-pixel text-[20px] sm:text-[28px] text-retro-yellow animate-pulse-glow">
              {achievements.length}
            </div>
            <div className="font-pixel text-[7px] sm:text-[9px] text-retro-gray mt-2">
              ACHIEVEMENTS UNLOCKED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [unlocked, setUnlocked] = useState(false);
  const c = colorHex[achievement.color];
  const Icon = achievement.icon;

  return (
    <div
      className="relative bg-retro-panel border-4 border-retro-dark card-hover group p-4 text-center"
      style={{
        boxShadow: `0 0 0 2px ${c}33`,
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setUnlocked(true)}
      onMouseLeave={() => setUnlocked(false)}
    >
      {/* Badge art */}
      <div className="relative mx-auto mb-3 w-fit">
        <div
          className={`p-3 border-4 border-retro-dark transition-all duration-200 ${unlocked ? 'animate-pulse-glow' : ''}`}
          style={{
            backgroundColor: c + '22',
            boxShadow: unlocked ? `0 0 16px ${c}` : 'none',
            color: c,
          }}
        >
          <PixelArt grid={achievement.badgeArt} size={6} className="drop-shadow-[0_0_8px_currentColor]" />
        </div>
        {/* Sparkle effect */}
        {unlocked && (
          <div className="absolute -top-1 -right-1 animate-twinkle">
            <PixelArt grid={star} size={3} />
          </div>
        )}
      </div>

      {/* Category label */}
      <div className="font-pixel text-[6px] text-retro-gray mb-1">{achievement.category}</div>

      {/* Title */}
      <h3 className="font-pixel text-[8px] sm:text-[9px] mb-2" style={{ color: c }}>
        {achievement.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-sm text-retro-white/70 leading-snug mb-3">
        {achievement.desc}
      </p>

      {/* Icon + status */}
      <div className="flex items-center justify-center gap-2 pt-2 border-t border-retro-gray/20">
        <Icon size={12} style={{ color: c }} />
        <span className="font-pixel text-[6px]" style={{ color: c }}>
          UNLOCKED
        </span>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-1 right-1 font-pixel text-[5px] text-retro-gray/40">
        #{String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
}
