import * as React from 'react';
import { cn } from '@labmgm/utils';
import {
  CATALOG,
  COLORS,
  SHAPES,
  type PatternColor,
  type PatternEntry,
  type PatternScheme,
  type PatternShape,
} from './catalog.js';
import { pickIndex, seededRandom, type SeededRandom } from './rng.js';

export interface PatternGridSelection {
  shape: PatternShape;
  scheme: PatternScheme;
}

export interface PatternGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Rows in the composed grid. */
  rows: number;
  /** Columns in the composed grid. */
  cols: number;
  /** Edge length of each tile (px). Default 80. */
  tileSize?: number;
  /** Determines RNG sequence. Same seed → same grid, always. */
  seed?: string | number;
  /** Restrict to specific shapes (otherwise all 10). */
  shapes?: readonly PatternShape[];
  /** Restrict to specific colors (otherwise all 4). */
  colors?: readonly PatternColor[];
  /**
   * Whether tiles use white-on-color schemes ("fill") or color-on-white schemes ("outline").
   * @default 'mixed' — both, alternating to avoid adjacent repeats.
   */
  fill?: 'fill' | 'outline' | 'mixed';
  /** If true, gaps between tiles are removed (tight pack). @default true */
  flush?: boolean;
}

function buildSchemes(
  colors: readonly PatternColor[],
  fill: 'fill' | 'outline' | 'mixed',
): PatternScheme[] {
  const filled = colors.map((c) => `white-on-${c}` as PatternScheme);
  const outlined = colors.map((c) => `${c}-on-white` as PatternScheme);
  if (fill === 'fill') return filled;
  if (fill === 'outline') return outlined;
  return [...filled, ...outlined];
}

function buildGrid(
  rows: number,
  cols: number,
  shapes: readonly PatternShape[],
  schemes: readonly PatternScheme[],
  rng: SeededRandom,
): PatternGridSelection[][] {
  const grid: PatternGridSelection[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: PatternGridSelection[] = [];
    for (let c = 0; c < cols; c++) {
      let pick: PatternGridSelection;
      let attempts = 0;
      do {
        const shape = shapes[pickIndex(rng, shapes.length)]!;
        const scheme = schemes[pickIndex(rng, schemes.length)]!;
        pick = { shape, scheme };
        attempts++;
        // Avoid same shape OR same scheme directly adjacent (left or above).
        const left = c > 0 ? row[c - 1] : undefined;
        const above = r > 0 ? grid[r - 1]![c] : undefined;
        if (attempts > 20) break;
        if (
          (left && (left.shape === pick.shape || left.scheme === pick.scheme)) ||
          (above && (above.shape === pick.shape || above.scheme === pick.scheme))
        ) {
          continue;
        }
        break;
        // eslint-disable-next-line no-constant-condition
      } while (true);
      row.push(pick);
    }
    grid.push(row);
  }
  return grid;
}

/**
 * Compose the 80-tile MGM catalog into an N×M grid using a no-adjacent-repeat algorithm.
 * Deterministic when given a `seed`. Renders inert (decorative) SVGs.
 *
 *   <PatternGrid rows={3} cols={3} seed="hero" />
 *   <PatternGrid rows={2} cols={6} seed="banner" colors={['blue', 'yellow']} />
 */
export const PatternGrid = React.forwardRef<HTMLDivElement, PatternGridProps>(function PatternGrid(
  {
    rows,
    cols,
    tileSize = 80,
    seed = 'mgm',
    shapes = SHAPES,
    colors = COLORS,
    fill = 'mixed',
    flush = true,
    className,
    style,
    ...rest
  },
  ref,
) {
  const schemes = React.useMemo(() => buildSchemes(colors, fill), [colors, fill]);
  const grid = React.useMemo(
    () => buildGrid(rows, cols, shapes, schemes, seededRandom(seed)),
    [rows, cols, shapes, schemes, seed],
  );

  return (
    <div
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${tileSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
        gap: flush ? 0 : 1,
        ...style,
      }}
      {...rest}
    >
      {grid.flat().map((cell, idx) => {
        const entry = CATALOG[`${cell.shape}-${cell.scheme}`]!;
        return <PatternCell key={idx} entry={entry} size={tileSize} />;
      })}
    </div>
  );
});

function PatternCell({ entry, size }: { entry: PatternEntry; size: number }) {
  return (
    <div
      className="leading-none"
      style={{ width: size, height: size }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: entry.svg.replace(/width="100"/, `width="${size}"`).replace(/height="100"/, `height="${size}"`),
      }}
    />
  );
}
