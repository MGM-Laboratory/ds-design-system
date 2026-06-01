import { describe, expect, it } from 'vitest';
import { tokens, colors, typography, shadows, radii, durations, easings } from './index.js';

describe('tokens', () => {
  it('exports brand colors from DESIGN_SYSTEM.md', () => {
    expect(colors['brand-blue']).toBe('#3a6dc5');
    expect(colors['brand-yellow']).toBe('#f7bf33');
    expect(colors['brand-red']).toBe('#f94141');
    expect(colors['brand-green']).toBe('#0f8657');
  });

  it('uses #ffffff as page background', () => {
    expect(colors.bg).toBe('#ffffff');
  });

  it('has 13 typography steps', () => {
    expect(Object.keys(typography)).toHaveLength(13);
  });

  it('has three shadow levels', () => {
    expect(Object.keys(shadows)).toEqual(['1', '2', '3']);
  });

  it('has 12px default radius (md)', () => {
    expect(radii.md).toBe('12px');
  });

  it('has motion durations 120-800ms', () => {
    expect(durations['1']).toBe('120ms');
    expect(durations['5']).toBe('800ms');
  });

  it('has spring easing', () => {
    expect(easings.spring).toMatch(/cubic-bezier/);
  });

  it('aggregate `tokens` includes every subset', () => {
    expect(tokens).toHaveProperty('colors');
    expect(tokens).toHaveProperty('typography');
    expect(tokens).toHaveProperty('shadows');
    expect(tokens).toHaveProperty('radii');
    expect(tokens).toHaveProperty('durations');
    expect(tokens).toHaveProperty('easings');
  });
});
