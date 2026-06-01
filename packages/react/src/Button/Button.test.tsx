import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.js';

describe('<Button>', () => {
  it('renders the children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeTruthy();
  });

  it('applies primary variant by default', () => {
    render(<Button>hi</Button>);
    expect(screen.getByRole('button').className).toContain('bg-surface-inverse');
  });

  it('respects disabled state', () => {
    render(<Button disabled>disabled</Button>);
    expect(screen.getByRole('button').hasAttribute('disabled')).toBe(true);
  });

  it('reflects loading state in aria-busy', () => {
    render(<Button loading>loading</Button>);
    const btn = screen.getByRole('button');
    expect(btn.getAttribute('aria-busy')).toBe('true');
    expect(btn.hasAttribute('disabled')).toBe(true);
  });

  it('uses type=button by default', () => {
    render(<Button>x</Button>);
    expect(screen.getByRole('button').getAttribute('type')).toBe('button');
  });
});
