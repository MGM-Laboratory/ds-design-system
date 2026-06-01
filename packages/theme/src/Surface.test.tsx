import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Surface } from './Surface.js';

describe('<Surface>', () => {
  it('renders a div by default', () => {
    const { container } = render(<Surface>hello</Surface>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('omits data-surface for default tone', () => {
    const { container } = render(<Surface tone="default">hi</Surface>);
    expect((container.firstChild as HTMLElement).hasAttribute('data-surface')).toBe(false);
  });

  it('sets data-surface="inverse" for inverse tone', () => {
    const { container } = render(<Surface tone="inverse">hi</Surface>);
    expect((container.firstChild as HTMLElement).getAttribute('data-surface')).toBe('inverse');
  });

  it('supports polymorphic `as`', () => {
    const { container } = render(<Surface as="section">hi</Surface>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });
});
