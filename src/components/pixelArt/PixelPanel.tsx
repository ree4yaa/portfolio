import type { ReactNode } from 'react';
import { useReveal } from '@/components/pixelArt/useReveal';

type BorderColor = 'pink' | 'cyan' | 'green' | 'yellow' | 'purple';

const borderMap: Record<BorderColor, string> = {
  pink: '#ff2e88',
  cyan: '#00f0ff',
  green: '#39ff14',
  yellow: '#ffe600',
  purple: '#9d4edd',
};

const glowMap: Record<BorderColor, string> = {
  pink: 'rgba(255, 46, 136, 0.25)',
  cyan: 'rgba(0, 240, 255, 0.25)',
  green: 'rgba(57, 255, 20, 0.25)',
  yellow: 'rgba(255, 230, 0, 0.25)',
  purple: 'rgba(157, 78, 221, 0.25)',
};

interface PixelPanelProps {
  children: ReactNode;
  color?: BorderColor;
  className?: string;
  title?: string;
  icon?: ReactNode;
  glow?: boolean;
}

export function PixelPanel({
  children,
  color = 'pink',
  className = '',
  title,
  icon,
  glow = true,
}: PixelPanelProps) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`pixel-panel card-hover ${className} ${visible ? 'animate-fade-up' : 'opacity-0'}`}
      style={
        {
          '--border-color': borderMap[color],
          '--glow-color': glow ? glowMap[color] : 'transparent',
        } as React.CSSProperties
      }
    >
      {title && (
        <div className="flex items-center gap-2 border-b-4 border-retro-dark px-3 py-2 bg-retro-bg2/50">
          {icon && <span className="shrink-0">{icon}</span>}
          <h3 className="font-pixel text-[8px] sm:text-[10px] text-retro-white uppercase tracking-wider">
            {title}
          </h3>
        </div>
      )}
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

export type { BorderColor };
