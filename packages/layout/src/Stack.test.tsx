import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Stack, HStack, VStack } from './Stack.js';

describe('<Stack>', () => {
  it('defaults to column with gap-4', () => {
    const { container } = render(<Stack>hi</Stack>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('flex-col');
    expect(el.className).toContain('gap-4');
  });

  it('<HStack> sets row direction', () => {
    const { container } = render(<HStack>hi</HStack>);
    expect((container.firstChild as HTMLElement).className).toContain('flex-row');
  });

  it('<VStack> sets col direction', () => {
    const { container } = render(<VStack>hi</VStack>);
    expect((container.firstChild as HTMLElement).className).toContain('flex-col');
  });
});
