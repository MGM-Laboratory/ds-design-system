export function range(start: number, end?: number, step = 1): number[] {
  const [from, to] = end === undefined ? [0, start] : [start, end];
  const length = Math.max(0, Math.ceil((to - from) / step));
  return Array.from({ length }, (_, i) => from + i * step);
}

export function chunk<T>(input: readonly T[], size: number): T[][] {
  if (size <= 0) throw new Error('chunk: size must be > 0');
  const result: T[][] = [];
  for (let i = 0; i < input.length; i += size) {
    result.push(input.slice(i, i + size));
  }
  return result;
}

export function unique<T>(input: readonly T[]): T[] {
  return Array.from(new Set(input));
}

export function groupBy<T, K extends PropertyKey>(
  input: readonly T[],
  key: (item: T) => K,
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of input) {
    const k = key(item);
    (result[k] ??= []).push(item);
  }
  return result;
}

export function sortBy<T>(
  input: readonly T[],
  ...selectors: Array<(item: T) => number | string>
): T[] {
  return [...input].sort((a, b) => {
    for (const selector of selectors) {
      const av = selector(a);
      const bv = selector(b);
      if (av < bv) return -1;
      if (av > bv) return 1;
    }
    return 0;
  });
}
