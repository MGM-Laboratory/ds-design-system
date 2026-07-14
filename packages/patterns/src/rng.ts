/**
 * Tiny, fast, fully deterministic PRNG (mulberry32). Same seed → same sequence.
 * Used to build pattern grids reproducibly across SSR + client renders.
 */
export type SeededRandom = () => number;

export function seededRandom(seed: string | number): SeededRandom {
  let state =
    typeof seed === 'number'
      ? seed >>> 0
      : Array.from(String(seed)).reduce(
          (acc, ch) => (Math.imul(acc, 31) + ch.charCodeAt(0)) | 0,
          7,
        ) >>> 0;
  return function rng(): number {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pickIndex(rng: SeededRandom, length: number): number {
  return Math.floor(rng() * length);
}
