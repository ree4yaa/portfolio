import { useState } from 'react';
import { PixelArt } from '@/components/PixelArt';
import { PixelButton } from '@/components/pixelArt/PixelButton';
import { useReveal } from '@/components/pixelArt/useReveal';
import { Github, ExternalLink, Eye, Swords, Heart } from 'lucide-react';
import type { PixelGrid } from '@/components/PixelArt';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  color: 'pink' | 'cyan' | 'green' | 'yellow' | 'purple';
  difficulty: string;
  bossArt: PixelGrid;
}

/* === Color palette for boss sprites === */
const _ = null;
const G = '#39ff14', Gd = '#1a8800', R = '#ff3344', Y = '#ffe600', Br = '#8b5a2b', Brd = '#5a3a1a';
const P = '#ff2e88', Pd = '#b01e60', C = '#00f0ff', Cd = '#0099aa', V = '#9d4edd', Vd = '#6a2d99';
const K = '#06060c', W = '#f0f0f8', Sk = '#ffccaa', Hr = '#3a1a00', Bl = '#2244aa', Bld = '#112266';

/* === BOSS SPRITES (pixel art thumbnails) === */
const floraBoss: PixelGrid = [
  [_, _, _, _, G, G, _, _, _, _],
  [_, _, _, G, G, Gd, G, _, _, _],
  [_, _, G, Gd, G, G, Gd, G, _, _],
  [_, G, G, Gd, R, Gd, G, Gd, G, _],
  [_, G, Gd, R, Y, R, Gd, G, G, _],
  [_, _, G, Gd, G, G, Gd, G, _, _],
  [_, _, _, G, Gd, G, G, _, _, _],
  [_, _, _, _, Br, Br, _, _, _, _],
  [_, _, _, Brd, Brd, Brd, _, _, _, _],
  [_, _, _, Brd, Brd, Brd, _, _, _, _],
];

const sayItBoss: PixelGrid = [
  [_, _, _, _, _, P, P, _, _, _],
  [_, _, _, _, P, P, P, P, _, _],
  [_, _, _, P, P, W, P, P, P, _],
  [_, _, P, P, W, K, W, P, P, P],
  [_, P, P, W, W, W, W, W, P, P],
  [_, P, P, W, K, W, K, W, P, P],
  [_, _, P, P, W, W, W, P, P, _],
  [_, _, _, P, P, W, P, P, _, _],
  [_, _, _, _, P, P, P, _, _, _],
  [_, _, _, _, _, P, _, _, _, _],
];

const synapzBoss: PixelGrid = [
  [_, _, _, C, _, _, _, C, _, _],
  [_, _, C, C, C, _, C, C, C, _],
  [_, C, Cd, C, C, C, C, C, Cd, C],
  [C, Cd, C, C, Cd, C, Cd, C, C, C],
  [C, C, Cd, C, C, C, C, C, Cd, C],
  [_, C, C, Cd, C, C, Cd, C, C, _],
  [_, _, C, C, Cd, Cd, C, C, _, _],
  [_, _, _, C, C, C, C, _, _, _],
  [_, _, _, _, C, C, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _],
];

const projects: Project[] = [
  {
    title: 'FLORA FRIEND',
    tagline: 'STAGE 01 — NATURE BOSS',
    description: 'A smart plant monitoring system using IoT sensors and mobile/web technology. Tracks soil moisture, temperature, and sunlight to keep plants healthy.',
    tech: ['IoT', 'Arduino', 'React', 'Mobile'],
    github: 'https://github.com/reeya',
    demo: 'https://florafriend.demo',
    color: 'green',
    difficulty: '★★☆',
    bossArt: floraBoss,
  },
  {
    title: 'SAY IT BACK',
    tagline: 'STAGE 02 — COMM BOSS',
    description: 'An interactive communication-focused web project. Features real-time feedback and engaging conversation mechanics for better user interaction.',
    tech: ['JavaScript', 'WebRTC', 'Node.js', 'CSS'],
    github: 'https://github.com/reeya',
    demo: 'https://sayitback.demo',
    color: 'pink',
    difficulty: '★★☆',
    bossArt: sayItBoss,
  },
  {
    title: 'SYNAPZ',
    tagline: 'STAGE 03 — SOCIAL BOSS',
    description: 'A social and interactive web experience built with React. Connects users through engaging UI patterns and real-time interaction features.',
    tech: ['React', 'TypeScript', 'Tailwind', 'API'],
    github: 'https://github.com/reeya',
    demo: 'https://synapz.demo',
    color: 'cyan',
    difficulty: '★★★',
    bossArt: synapzBoss,
  },
];

const colorHex: Record<string, string> = {
  pink: '#ff2e88',
  cyan: '#00f0ff',
  green: '#39ff14',
  yellow: '#ffe600',
  purple: '#9d4edd',
};

export function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-20 px-4 overflow-hidden bg-retro-bg pixel-noise"
    >
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-6 py-3 mb-4" style={{ boxShadow: '0 0 0 4px #ffe600, 0 0 20px rgba(255,230,0,0.2)' }}>
          <span className="font-pixel text-[10px] sm:text-[14px] text-retro-yellow text-pixel-shadow inline-flex items-center gap-2">
            <Swords size={16} /> BOSS BATTLES
          </span>
        </div>
        <h2 className="font-pixel text-[16px] sm:text-[24px] md:text-[32px] text-retro-white text-pixel-shadow mb-3">
          PROJECTS
        </h2>
        <p className="font-mono text-lg text-retro-gray">~ Defeat Each Mission ~</p>
      </div>

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const c = colorHex[project.color];

  return (
    <div
      className="relative bg-retro-panel border-4 border-retro-dark card-hover group"
      style={{
        boxShadow: `0 0 0 2px ${c}33`,
        animationDelay: `${index * 0.15}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Boss thumbnail */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden border-b-4 border-retro-dark"
        style={{
          background: `linear-gradient(135deg, ${c}11, transparent)`,
        }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 pixel-grid opacity-30" />
        {/* Boss art */}
        <div className={`relative ${hovered ? 'animate-shake' : 'animate-float'}`} style={{ animationDelay: `${index * 0.3}s` }}>
          <PixelArt grid={project.bossArt} size={14} className="drop-shadow-[0_0_12px_currentColor]" style={{ color: c }} />
        </div>
        {/* HP bar overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1">
          <Heart size={10} fill={c} className="shrink-0" style={{ color: c }} />
          <div className="flex-1 h-2 border border-retro-dark bg-retro-dark">
            <div className="h-full transition-all duration-300" style={{ width: hovered ? '20%' : '100%', backgroundColor: c }} />
          </div>
        </div>
        {/* Stage label */}
        <div className="absolute top-2 left-2 font-pixel text-[6px] text-retro-white bg-retro-dark/80 px-2 py-1 border border-retro-dark">
          {project.tagline}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-pixel text-[11px] sm:text-[13px] mb-2" style={{ color: c }}>
          {project.title}
        </h3>
        <p className="font-mono text-sm text-retro-white/80 leading-snug mb-3 min-h-[60px]">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-pixel text-[6px] border px-1.5 py-0.5"
              style={{ color: c, borderColor: c + '66', backgroundColor: c + '11' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Difficulty */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-retro-gray/20">
          <span className="font-pixel text-[7px] text-retro-gray">DIFFICULTY:</span>
          <span className="font-pixel text-[8px]" style={{ color: c }}>{project.difficulty}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <PixelButton color={project.color} size="sm" className="w-full" glow>
            <Eye size={12} /> VIEW MISSION
          </PixelButton>
          <div className="grid grid-cols-2 gap-2">
            <PixelButton href={project.github} target="_blank" color="pink" size="sm" className="w-full">
              <Github size={12} /> GITHUB
            </PixelButton>
            <PixelButton href={project.demo} target="_blank" color="cyan" size="sm" className="w-full">
              <ExternalLink size={12} /> DEMO
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
}