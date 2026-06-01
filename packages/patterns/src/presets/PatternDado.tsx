import * as React from 'react';
import { cn } from '@labmgm/utils';
import { COLORS, type PatternColor } from '../catalog.js';
import { seededRandom, pickIndex } from '../rng.js';

export interface PatternDadoProps {
  /** Width in tiles. The strip is 1 tile tall. */
  tiles?: number;
  /** Tile edge length (px). DESIGN_SYSTEM.md calls for thin 8px dados. */
  tileSize?: number;
  seed?: string | number;
  colors?: readonly PatternColor[];
  className?: string;
}

/**
 * A thin horizontal strip of solid brand-color squares, used as a footer divider
 * (Bauhaus-style dado).
 */
export function PatternDado({
  tiles = 60,
  tileSize = 8,
  seed = 'dado',
  colors = COLORS,
  className,
}: PatternDadoProps) {
  const rng = React.useMemo(() => seededRandom(seed), [seed]);
  const sequence = React.useMemo(() => {
    const out: PatternColor[] = [];
    let last: PatternColor | undefined;
    for (let i = 0; i < tiles; i++) {
      let pick = colors[pickIndex(rng, colors.length)]!;
      let tries = 0;
      while (pick === last && tries < 6) {
        pick = colors[pickIndex(rng, colors.length)]!;
        tries++;
      }
      out.push(pick);
      last = pick;
    }
    return out;
  }, [tiles, colors, rng]);

  const colorMap: Record<PatternColor, string> = {
    blue: 'bg-brand-blue',
    yellow: 'bg-brand-yellow',
    red: 'bg-brand-red',
    green: 'bg-brand-green',
  };

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn('flex', className)}
      style={{ height: tileSize }}
    >
      {sequence.map((color, i) => (
        <div key={i} className={colorMap[color]} style={{ width: tileSize, height: tileSize }} />
      ))}
    </div>
  );
}
