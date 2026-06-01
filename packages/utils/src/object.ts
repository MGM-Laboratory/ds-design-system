export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (!isObject(value)) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isEmpty(value: unknown): boolean {
  if (isNil(value)) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (isPlainObject(value)) return Object.keys(value).length === 0;
  return false;
}

export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  ...sources: Array<Partial<T>>
): T {
  const out: Record<string, unknown> = { ...target };
  for (const source of sources) {
    if (!isPlainObject(source)) continue;
    for (const key of Object.keys(source)) {
      const a = out[key];
      const b = source[key];
      if (isPlainObject(a) && isPlainObject(b)) {
        out[key] = deepMerge(a as Record<string, unknown>, b);
      } else if (b !== undefined) {
        out[key] = b;
      }
    }
  }
  return out as T;
}
