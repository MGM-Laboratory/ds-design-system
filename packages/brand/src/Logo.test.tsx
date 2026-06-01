import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Logo } from './Logo.js';

describe('<Logo>', () => {
  it('renders an SVG', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('svg')).toBeTruthy();
  });

  it('defaults to 40px square', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('40');
    expect(svg.getAttribute('height')).toBe('40');
  });

  it('is decorative (aria-hidden) when no label', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('becomes role="img" with a label', () => {
    const { container } = render(<Logo label="MGM" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-label')).toBe('MGM');
  });
});
