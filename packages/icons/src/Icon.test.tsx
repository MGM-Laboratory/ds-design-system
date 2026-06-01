import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Check } from 'lucide-react';
import { Icon } from './Icon.js';

describe('<Icon>', () => {
  it('renders the provided Lucide icon', () => {
    const { container } = render(<Icon icon={Check} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('uses MGM stroke width by default (2.25)', () => {
    const { container } = render(<Icon icon={Check} />);
    expect(container.querySelector('svg')?.getAttribute('stroke-width')).toBe('2.25');
  });

  it('uses 20px default size', () => {
    const { container } = render(<Icon icon={Check} />);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('20');
  });

  it('accepts size token "sm" (16)', () => {
    const { container } = render(<Icon icon={Check} size="sm" />);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('16');
  });

  it('accepts raw pixel sizes', () => {
    const { container } = render(<Icon icon={Check} size={32} />);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('32');
  });
});
