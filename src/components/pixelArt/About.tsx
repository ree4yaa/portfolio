import { PixelArt } from '@/components/PixelArt';
import { PixelPanel } from '@/components/pixelArt/PixelPanel';
import { useReveal } from '@/components/pixelArt/useReveal';
import { avatar, controller, heart, sword, shield, star } from '@/components/pixelArt/sprites';
import { User, Target, BookOpen, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

interface InfoRow {
  label: string;
  value: string;
}

function InfoLine({ label, value, color = 'retro-white' }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-baseline gap-2 py-1 border-b border-retro-gray/20 last:border-0">
      <span className="font-pixel text-[7px] text-retro-gray shrink-0">{label}</span>
      <span className={`font-mono text-base ${color} leading-tight`}>{value}</span>
    </div>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-block font-pixel text-[7px] bg-retro-bg2 border-2 border-retro-green/60 text-retro-green px-2 py-1 m-0.5">
      {label}
    </span>
  );
}

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-4 overflow-hidden bg-retro-bg pixel-noise"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pixel-grid opacity-20" />

      {/* Section header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-6 py-3 mb-4" style={{ boxShadow: '0 0 0 4px , 0 0 20px rgba(0,240,255,0.2)' }}>
          <span className="font-pixel text-[10px] sm:text-[14px] text-pixel inline-flex items-center gap-2">
            LEVEL 01
          </span>
        </div>
        <h2 className="font-pixel text-[16px] sm:text-[24px] md:text-[32px] text-retro-white text-pixel-shadow mb-3">
          ABOUT ME
        </h2>
        <p className="font-mono text-lg text-retro-gray">~ Character Info ~</p>
      </div>

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* === GAME CONSOLE WITH SCREEN === */}
        <div className="flex justify-center mb-12">
          <GameConsole />
        </div>

        {/* === INFO CARDS (inventory windows) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: PLAYER PROFILE */}
          <PixelPanel color="pink" title="PLAYER PROFILE" icon={<User size={14} className="text-retro-pink" />}>
            <div className="space-y-0">
              <InfoLine label="NAME:" value="Reeya" color="text-retro-pink" />
              <InfoLine label="ROLE:" value="CSE / Software Developer" color="text-retro-cyan" />
              <InfoLine label="LOCATION:" value="India" color="text-retro-green" />
              <InfoLine label="STATUS:" value="Learning + Building" color="text-retro-yellow" />
            </div>
          </PixelPanel>

          {/* Card 2: CURRENT MISSION */}
          <PixelPanel color="yellow" title="CURRENT MISSION" icon={<Target size={14} className="text-retro-yellow" />}>
            <div className="space-y-2">
              <MissionRow text="Building projects" icon="▣" />
              <MissionRow text="Cybersecurity" icon="▣" />
              <MissionRow text="AI Automation" icon="▣" />
              <MissionRow text="FOSS" icon="▣" />
            </div>
          </PixelPanel>

          {/* Card 3: EDUCATION LOG */}
          <PixelPanel color="cyan" title="EDUCATION LOG" icon={<BookOpen size={14} className="text-retro-cyan" />}>
            <div className="space-y-1">
              <InfoLine label="DEGREE:" value="B.Tech CSE-DS" color="text-retro-cyan" />
              <InfoLine label="UNIVERSITY:" value="GGSIPU" color="text-retro-white" />
              <InfoLine label="DURATION:" value="2025–Present" color="text-retro-green" />
              <InfoLine label="GPA:" value="8.5/10" color="text-retro-yellow" />
            </div>
          </PixelPanel>

          {/* Card 4: SKILLS MASTER */}
          <PixelPanel color="green" title="SKILLS MASTER" icon={<Zap size={14} className="text-retro-green" />}>
            <div className="flex flex-wrap">
              <SkillTag label="HTML" />
              <SkillTag label="CSS" />
              <SkillTag label="JavaScript" />
              <SkillTag label="React" />
              <SkillTag label="Python" />
              <SkillTag label="Git/GitHub" />
              <SkillTag label="Linux" />
              <SkillTag label="Networking" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <PixelArt grid={star} size={3} />
            </div>
          </PixelPanel>
        </div>
      </div>
    </section>
  );
}

function MissionRow({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="font-pixel text-[8px] text-retro-yellow">{icon}</span>
      <span className="font-mono text-base text-retro-white">{text}</span>
      <span className="ml-auto font-pixel text-[7px] text-retro-green">[ACTIVE]</span>
    </div>
  );
}

/* ===== GAME CONSOLE COMPONENT ===== */
function GameConsole() {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`relative ${visible ? 'animate-pop-in' : 'opacity-0'}`}>
      {/* Console body */}
      <div
        className="relative border-4 border-retro-dark p-4 sm:p-6"
        style={{ background: 'linear-gradient(to bottom, var(--retro-purple), var(--retro-panel2))', boxShadow: '0 0 0 4px var(--retro-purple), 0 0 30px rgba(157,78,221,0.3)' }}
      >
        {/* Console top decoration */}
        <div className="absolute -top-2 left-4 right-4 h-2 bg-retro-purple border-2 border-retro-dark" />

        {/* Brand text */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-retro-red animate-blink" />
            <div className="w-2 h-2 bg-retro-green" />
          </div>
        </div>

        {/* Screen bezel */}
        <div className="bg-retro-dark border-4 border-retro-dark p-2 sm:p-3" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }}>
          {/* Screen */}
          <div className="relative border-2 border-retro-gray/30 overflow-hidden" style={{ width: '224px', height: '224px', background: 'linear-gradient(135deg, var(--console-screen-from), var(--console-screen-to))' }}>
            {/* Scanlines on screen */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)',
              }}
            />
            {/* Screen content: avatar */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="animate-float">
                <PixelArt grid={avatar} size={12} className="drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              </div>
            </div>
            {/* Screen corner decorations */}
            <div className="absolute top-1 left-1 font-pixel text-[5px] text-retro-green">●</div>
            <div className="absolute top-1 right-1 font-pixel text-[5px] text-retro-yellow">★</div>
          </div>
        </div>

        {/* D-pad and buttons */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* D-pad */}
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-retro-dark border-2 border-retro-dark" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-retro-dark border-2 border-retro-dark" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-retro-dark border-2 border-retro-dark" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-retro-dark border-2 border-retro-dark" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-retro-dark border-2 border-retro-dark" />
          </div>

          {/* A/B buttons */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-retro-pink border-2 border-retro-dark flex items-center justify-center font-pixel text-[7px] text-retro-dark" style={{ boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.3)' }}>
              B
            </div>
            <div className="w-7 h-7 rounded-full bg-retro-cyan border-2 border-retro-dark flex items-center justify-center font-pixel text-[7px] text-retro-dark" style={{ boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.3)' }}>
              A
            </div>
          </div>
        </div>

        {/* Controller icon */}
        <div className="flex justify-center mt-3 opacity-50">
          <PixelArt grid={controller} size={3} />
        </div>
      </div>

      {/* Floating decorative sprites around console */}
      <div className="absolute -top-6 -left-6 animate-float hidden sm:block">
        <PixelArt grid={heart} size={4} />
      </div>
      <div className="absolute -top-4 -right-8 animate-float-slow hidden sm:block">
        <PixelArt grid={sword} size={4} />
      </div>
      <div className="absolute -bottom-4 -left-8 animate-float-slow hidden sm:block" style={{ animationDelay: '0.5s' }}>
        <PixelArt grid={shield} size={4} />
      </div>
      <div className="absolute -bottom-6 -right-6 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
        <PixelArt grid={star} size={4} />
      </div>
    </div>
  );
}