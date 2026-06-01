export function initials(name: string, maxLength = 2): string {
  if (!name) return '';
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0] ?? '')
    .filter(Boolean)
    .slice(0, maxLength)
    .join('')
    .toUpperCase();
}

export function truncate(input: string, max: number, ellipsis = '…'): string {
  if (input.length <= max) return input;
  return input.slice(0, Math.max(0, max - ellipsis.length)) + ellipsis;
}

export function slugify(input: string): string {
  return input
    .toString()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function capitalize(input: string): string {
  if (!input) return input;
  return input[0]!.toUpperCase() + input.slice(1);
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}
