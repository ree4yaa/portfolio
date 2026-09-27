import { PixelArt } from '@/components/PixelArt';
import type { PixelGrid } from '@/components/PixelArt';
import { cloud, cloudSmall, star, starSmall, coin, tree, flower } from '@/components/pixelArt/sprites';

interface CloudProps {
  className?: string;
  size?: number;
  delay?: number;
  duration?: number;
  small?: boolean;
}

export function Cloud({ className = '', size = 8, delay = 0, duration = 40, small = false }: CloudProps) {
  return (
    <div
      className={`absolute pointer-events-none animate-cloud-drift ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <PixelArt grid={small ? cloudSmall : cloud} size={size} />
    </div>
  );
}

interface StarProps {
  className?: string;
  size?: number;
  delay?: number;
  small?: boolean;
}

export function Star({ className = '', size = 4, delay = 0, small = false }: StarProps) {
  return (
    <div
      className={`absolute pointer-events-none animate-twinkle ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <PixelArt grid={small ? starSmall : star} size={size} />
    </div>
  );
}

interface CoinProps {
  className?: string;
  size?: number;
  delay?: number;
}

export function Coin({ className = '', size = 4, delay = 0 }: CoinProps) {
  return (
    <div
      className={`absolute pointer-events-none animate-coin-bounce ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <PixelArt grid={coin} size={size} />
    </div>
  );
}

interface TreeProps {
  className?: string;
  size?: number;
}

export function Tree({ className = '', size = 6 }: TreeProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <PixelArt grid={tree} size={size} />
    </div>
  );
}

interface FlowerProps {
  className?: string;
  size?: number;
}

export function Flower({ className = '', size = 4 }: FlowerProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <PixelArt grid={flower} size={size} />
    </div>
  );
}

/** Full animated environment scene — layered clouds, stars, ground decorations */
export function EnvironmentScene({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Stars */}
      <Star className="top-[10%] left-[15%]" size={3} delay={0} small />
      <Star className="top-[8%] left-[45%]" size={4} delay={0.5} />
      <Star className="top-[15%] left-[70%]" size={3} delay={1} small />
      <Star className="top-[5%] left-[85%]" size={4} delay={1.5} />
      <Star className="top-[20%] left-[30%]" size={3} delay={0.8} small />
      <Star className="top-[12%] left-[60%]" size={3} delay={2} small />
      <Star className="top-[18%] left-[90%]" size={3} delay={0.3} small />
      <Star className="top-[6%] left-[25%]" size={4} delay={1.2} />

      {/* Clouds */}
      <Cloud className="top-[18%]" size={6} delay={0} duration={45} />
      <Cloud className="top-[35%]" size={5} delay={15} duration={55} small />
      <Cloud className="top-[50%]" size={4} delay={30} duration={60} small />
      <Cloud className="top-[8%]" size={5} delay={20} duration={50} small />

      {/* Ground decorations */}
      <Tree className="bottom-[8%] left-[5%]" size={6} />
      <Tree className="bottom-[8%] right-[8%]" size={5} />
      <Flower className="bottom-[10%] left-[20%]" size={4} />
      <Flower className="bottom-[10%] left-[40%]" size={3} />
      <Flower className="bottom-[10%] right-[25%]" size={4} />
      <Flower className="bottom-[10%] right-[45%]" size={3} />

      {/* Coins */}
      <Coin className="top-[45%] left-[20%]" size={4} delay={0} />
      <Coin className="top-[55%] left-[75%]" size={4} delay={0.5} />
      <Coin className="top-[40%] left-[55%]" size={3} delay={1} />
    </div>
  );
}

export type { PixelGrid };
