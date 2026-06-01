import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { PatternGrid } from './PatternGrid.js';
import { seededRandom } from './rng.js';
import { CATALOG, PATTERN_IDS } from './catalog.js';

describe('catalog', () => {
  it('contains 80 patterns', () => {
    expect(PATTERN_IDS).toHaveLength(80);
  });
  it('every entry has an SVG body', () => {
    for (const entry of Object.values(CATALOG)) {
      expect(entry.svg).toContain('<svg');
      expect(entry.svg).toContain('</svg>');
    }
  });
});

describe('seededRandom', () => {
  it('is deterministic for the same seed', () => {
    const a = seededRandom('hero');
    const b = seededRandom('hero');
    expect(a()).toBe(b());
    expect(a()).toBe(b());
  });

  it('diverges for different seeds', () => {
    const a = seededRandom('hero');
    const b = seededRandom('footer');
    expect(a()).not.toBe(b());
  });
});

describe('<PatternGrid>', () => {
  it('renders rows × cols tiles', () => {
    const { container } = render(<PatternGrid rows={3} cols={3} seed="t" />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.children).toHaveLength(9);
  });

  it('is decorative (aria-hidden, role=presentation)', () => {
    const { container } = render(<PatternGrid rows={2} cols={2} seed="t" />);
    expect((container.firstChild as HTMLElement).getAttribute('aria-hidden')).toBe('true');
    expect((container.firstChild as HTMLElement).getAttribute('role')).toBe('presentation');
  });
});
