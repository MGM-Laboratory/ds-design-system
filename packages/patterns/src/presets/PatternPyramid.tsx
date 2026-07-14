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
} from '../catalog.js';
import { pickIndex, seededRandom } from '../rng.js';

export interface PatternPyramidProps {
  /** Height of the pyramid (rows). Bottom row will have `height` tiles. */
  height?: number;
  tileSize?: number;
  seed?: string | number;
  colors?: readonly PatternColor[];
  shapes?: readonly PatternShape[];
  /** Stepped pyramid (every row has +1 tile) or smooth triangle. */
  className?: string;
}

/**
 * A stacked pyramid of pattern tiles — row 1 has 1, row 2 has 2, etc.
 * Useful as a hero accent or section closer.
 */
export function PatternPyramid({
  height = 4,
  tileSize = 64,
  seed = 'pyramid',
  colors = COLORS,
  shapes = SHAPES,
  className,
}: PatternPyramidProps) {
  const rng = React.useMemo(() => seededRandom(seed), [seed]);
  const rows = React.useMemo(() => {
    const allSchemes: PatternScheme[] = [
      ...colors.map((c) => `white-on-${c}` as PatternScheme),
      ...colors.map((c) => `${c}-on-white` as PatternScheme),
    ];
    const result: PatternEntry[][] = [];
    let lastRow: PatternEntry[] = [];
    for (let r = 0; r < height; r++) {
      const row: PatternEntry[] = [];
      for (let c = 0; c <= r; c++) {
        let entry: PatternEntry | undefined;
        for (let attempts = 0; attempts < 20; attempts++) {
          const shape = shapes[pickIndex(rng, shapes.length)]!;
          const scheme = allSchemes[pickIndex(rng, allSchemes.length)]!;
          const id = `${shape}-${scheme}`;
          const candidate = CATALOG[id];
          if (!candidate) continue;
          const left = c > 0 ? row[c - 1] : undefined;
          const above = lastRow[c];
          if (
            (left && (left.shape === candidate.shape || left.scheme === candidate.scheme)) ||
            (above && (above.shape === candidate.shape || above.scheme === candidate.scheme))
          )
            continue;
          entry = candidate;
          break;
        }
        row.push(entry ?? Object.values(CATALOG)[0]!);
      }
      result.push(row);
      lastRow = row;
    }
    return result;
  }, [height, colors, shapes, rng]);

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn('flex flex-col items-center', className)}
    >
      {rows.map((row, r) => (
        <div key={r} className="flex">
          {row.map((entry, c) => (
            <div
              key={c}
              className="leading-none"
              style={{ width: tileSize, height: tileSize }}
              dangerouslySetInnerHTML={{
                __html: entry.svg
                  .replace(/width="100"/, `width="${tileSize}"`)
                  .replace(/height="100"/, `height="${tileSize}"`),
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
