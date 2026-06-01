import { CATALOG, PATTERN_IDS, type PatternEntry, type PatternScheme, type PatternShape } from './catalog.js';
import { pickIndex, seededRandom, type SeededRandom } from './rng.js';

export function getPatternTile(shape: PatternShape, scheme: PatternScheme): PatternEntry {
  const id = `${shape}-${scheme}`;
  const entry = CATALOG[id];
  if (!entry) {
    throw new Error(`@labmgm/patterns: unknown tile "${id}"`);
  }
  return entry;
}

export function getPatternSvg(shape: PatternShape, scheme: PatternScheme): string {
  return getPatternTile(shape, scheme).svg;
}

/**
 * Pick a pattern at random. Provide a deterministic rng for reproducible output (e.g., on SSR).
 */
export function randomPattern(rng?: SeededRandom): PatternEntry {
  const random = rng ?? seededRandom(Date.now());
  const id = PATTERN_IDS[pickIndex(random, PATTERN_IDS.length)]!;
  return CATALOG[id]!;
}
