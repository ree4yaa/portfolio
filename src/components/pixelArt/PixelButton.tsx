import type { ReactNode, MouseEventHandler } from 'react';

type ButtonColor = 'pink' | 'cyan' | 'green' | 'yellow' | 'purple' | 'red';

const colorMap: Record<ButtonColor, { bg: string; shadow: string; hover: string }> = {
  pink: { bg: '#ff2e88', shadow: '#b01e60', hover: '#ff5fa0' },
  cyan: { bg: '#00f0ff', shadow: '#0099aa', hover: '#40ffff' },
  green: { bg: '#39ff14', shadow: '#1a8800', hover: '#6fff40' },
  yellow: { bg: '#ffe600', shadow: '#b8a800', hover: '#fff040' },
  purple: { bg: '#9d4edd', shadow: '#6a2d99', hover: '#b87eff' },
  red: { bg: '#ff3344', shadow: '#aa1122', hover: '#ff6677' },
};

interface PixelButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  href?: string;
  download?: boolean;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function PixelButton({
  children,
  onClick,
  color = 'pink',
  className = '',
  size = 'md',
  glow = false,
  href,
  download,
  target,
  type = 'button',
}: PixelButtonProps) {
  const c = colorMap[color];
  const sizes = {
    sm: 'text-[8px] px-3 py-2',
    md: 'text-[10px] px-5 py-3',
    lg: 'text-[12px] px-8 py-4 sm:text-[14px] sm:px-10 sm:py-5',
  };

  const style: React.CSSProperties = {
    backgroundColor: c.bg,
    boxShadow: `inset -3px -3px 0 0 rgba(0,0,0,0.3), inset 3px 3px 0 0 rgba(255,255,255,0.2), 0 4px 0 0 ${c.shadow}, 0 4px 0 4px #06060c${glow ? `, 0 0 16px ${c.bg}88` : ''}`,
  };

  const cls = `pixel-btn inline-flex items-center justify-center gap-2 ${sizes[size]} ${className} uppercase tracking-wider select-none`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target ? 'noopener noreferrer' : undefined}
        className={`${cls} no-underline`}
        style={style}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = c.hover)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = c.bg)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      style={style}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = c.hover)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = c.bg)}
    >
      {children}
    </button>
  );
}