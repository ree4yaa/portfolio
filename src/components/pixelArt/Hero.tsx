import { useState, useEffect } from 'react';
import { PixelArt } from '@/components/pixelArt';
import { PixelButton } from '@/components/pixelArt/PixelButton';
import { EnvironmentScene } from '@/components/pixelArt/Decorations';
import { girlDev, girlDevIdle, battery } from '@/components/pixelArt/sprites';

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => f + 1), 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-retro-bg pixel-noise"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pixel-grid opacity-40" />

      {/* Animated environment */}
      <EnvironmentScene />

      {/* Gradient ground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[15%]"
        style={{
          background: 'linear-gradient(to top, #1a1a2e 30%, transparent)',
        }}
      />
      {/* Ground line */}
      <div className="absolute bottom-[15%] left-0 right-0 h-1 bg-retro-green shadow-glow-green" />

      {/* === TOP HUD === */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-4 sm:pt-6">
        <div
          className="flex flex-wrap items-center justify-between gap-2 bg-retro-bg2/90 border-4 border-retro-dark px-3 py-2 sm:px-4 sm:py-3"
          style={{ boxShadow: '0 0 0 4px #ff2e88, 0 0 20px rgba(255,46,136,0.2)' }}
        >
          {/* Left: HP + Level */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <PixelArt grid={battery} size={3} />
              <span className="font-pixel text-[7px] sm:text-[9px] text-retro-green">
                HP: 100%
              </span>
            </div>

            {/* HP Progress bar */}
            <div className="hidden sm:flex flex-col gap-1">
              <div className="w-32 h-3 border-2 border-retro-dark bg-retro-dark relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-retro-green to-retro-cyan"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1 border-l-2 border-retro-gray/50 pl-2 sm:pl-4">
            </div>
          </div>

          {/* Right: PLAYER 01 */}
          <div className="flex items-center gap-2">
            <span className="font-pixel text-[7px] sm:text-[9px] text-retro-cyan animate-blink">
              ●
            </span>
            <span className="font-pixel text-[7px] sm:text-[9px] text-retro-white">
              PLAYER 01
            </span>
          </div>
        </div>
      </div>

      {/* === MAIN TITLE === */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-8 sm:pt-12">

        <h1
          className="font-pixel text-retro-cyan text-pixel-shadow-cyan text-[24px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-none mb-2 sm:mb-4 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          
        </h1>

        {/* PORTFOLIO */}
        <h1
          className="font-pixel text-retro-pink text-pixel-shadow text-[20px] sm:text-[32px] md:text-[44px] lg:text-[56px] leading-none mb-6 sm:mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          
        </h1>

        {/* Subtitle: PLAYER: REEYA */}
        <div
          className="animate-fade-up mb-8 sm:mb-12"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="inline-block bg-retro-bg2 border-4 border-retro-dark px-4 py-2 sm:px-6 sm:py-3" style={{ boxShadow: '0 0 0 4px #39ff14, 0 0 16px rgba(57,255,20,0.2)' }}>
            <span className="font-pixel text-[5px] sm:text-[5px] md:text-[11px] text-retro-green">
Hey! I'm Reeya, a CSE student exploring cybersecurity, Linux, and AI automation.
Currently, I'm learning security fundamentals, experimenting with automation workflows, and exploring open-source tech on Fedora Workstation. When I'm not learning, I'm probably testing a new tool or wondering why the terminal has beef with me.
            </span>
          </div>
        </div>

        {/* START button */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 animate-pulse-glow rounded-none" style={{ color: '#ffe600' }} />
            <PixelButton
              onClick={onStart}
              color="yellow"
              size="lg"
              glow
              className="animate-pulse-glow"
            >
              ▶ START
            </PixelButton>
          </div>
          <p className="mt-4 font-pixel text-[7px] sm:text-[8px] text-retro-gray animate-blink">
            PRESS START TO BEGIN
          </p>
        </div>
      </div>

      {/* === GIRL DEVELOPER CHARACTER === */}
      <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 z-10">
        <div className="animate-idle-bob">
          <PixelArt
            grid={frame % 2 === 0 ? girlDev : girlDevIdle}
            size={8}
            className="drop-shadow-[0_0_12px_rgba(255,46,136,0.4)]"
          />
        </div>
        {/* Shadow */}
        <div className="mx-auto mt-1 h-2 w-24 rounded-none bg-retro-dark/60 blur-[2px]" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-1">
          <span className="font-pixel text-[6px] text-retro-gray">SCROLL</span>
          <div className="w-1 h-3 bg-retro-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
}
