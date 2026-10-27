import { useEffect, useState } from 'react';
import { PixelArt } from '@/components/pixelArt';
import { walkCharA, walkCharB } from '@/components/pixelArt/sprites';
import { star, heart } from '@/components/pixelArt/sprites';

export function Footer() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => f + 1), 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-retro-dark border-t-4 border-retro-dark overflow-hidden" style={{ boxShadow: '0 -4px 0 4px #ff2e88' }}>
      {/* Ground line */}
      <div className="h-1 bg-retro-green shadow-glow-green" />

      {/* Main footer content */}
      <div className="relative px-4 py-12 text-center">
        {/* Decorations */}
        <div className="absolute top-4 left-[10%] animate-twinkle">
          <PixelArt grid={star} size={3} />
        </div>
        <div className="absolute top-8 right-[15%] animate-twinkle" style={{ animationDelay: '0.5s' }}>
          <PixelArt grid={star} size={3} />
        </div>
        <div className="absolute top-12 left-[80%] animate-twinkle" style={{ animationDelay: '1s' }}>
          <PixelArt grid={star} size={2} />
        </div>

        {/* GAME COMPLETE? */}
        <h2 className="font-pixel text-[16px] sm:text-[24px] text-retro-pink text-pixel-shadow mb-3">
          MADE WITH LOVE
        </h2>

        {/* CONTINUE BUILDING... */}
        <p className="font-pixel text-[10px] sm:text-[14px] text-retro-cyan mb-2 animate-pulse">
          BY REEYA
        </p>

        {/* Heart decoration */}
        <div className="flex justify-center gap-3 my-4">
          <div className="animate-float"><PixelArt grid={heart} size={3} /></div>
          <div className="animate-float" style={{ animationDelay: '0.3s' }}><PixelArt grid={heart} size={3} /></div>
          <div className="animate-float" style={{ animationDelay: '0.6s' }}><PixelArt grid={heart} size={3} /></div>
        </div>

        {/* Footer text */}
        <p className="font-mono text-base text-retro-gray mt-6">
          © 2026 All Rights Reserved.
        </p>
        <p className="font-mono text-sm text-retro-pink/60 mt-1">
          Built with React + Vite + Tailwind CSS
        </p>
        <p className="font-pixel text-[6px] text-retro-pink/40 mt-3">
          ★ THANK YOU FOR PLAYING ★
        </p>
      </div>

      {/* Walking pixel character */}
      <div className="relative h-12 overflow-hidden">
        <div className="absolute bottom-1 animate-walk">
          <PixelArt grid={frame % 2 === 0 ? walkCharA : walkCharB} size={4} className="drop-shadow-[0_0_4px_rgba(0,240,255,0.4)]" />
        </div>
      </div>
    </footer>
  );
}
