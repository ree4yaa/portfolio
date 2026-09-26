export type PixelGrid = (string | null)[][];

export interface PixelArtProps {
  grid: PixelGrid;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders pixel art from a 2D grid of color strings (or null for transparent).
 * Uses SVG rects so it scales crisply and stays lightweight.
 */
export function PixelArt({ grid, size = 8, className = '', style }: PixelArtProps) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const w = cols * size;
  const h = rows * size;

  const rects: React.ReactNode[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = grid[y][x];
      if (!c) continue;
      rects.push(
        <rect
          key={`${x}-${y}`}
          x={x * size}
          y={y * size}
          width={size}
          height={size}
          fill={c}
        />
      );
    }
  }

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={{ imageRendering: 'pixelated', ...style }}
      shapeRendering="crispEdges"
    >
      {rects}
    </svg>
  );
}