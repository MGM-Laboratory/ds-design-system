import { describe, expect, it } from 'vitest';
import preset from './index.js';

describe('@labmgm/tailwind-config preset', () => {
  it('exposes brand colors under theme.extend.colors.brand', () => {
    const colors = preset.theme?.extend?.colors as Record<string, unknown>;
    expect(colors).toHaveProperty('brand');
  });

  it('uses inverse surface as dark mode selector', () => {
    expect(preset.darkMode).toEqual(['selector', '[data-surface="inverse"]']);
  });

  it('registers all 13 typography tokens', () => {
    const fontSize = preset.theme?.extend?.fontSize as Record<string, unknown>;
    expect(Object.keys(fontSize)).toContain('display-2xl');
    expect(Object.keys(fontSize)).toContain('eyebrow');
    expect(Object.keys(fontSize)).toHaveLength(13);
  });

  it('uses 12px as default radius', () => {
    const radii = preset.theme?.extend?.borderRadius as Record<string, unknown>;
    expect(radii.DEFAULT).toBe('12px');
  });
});
