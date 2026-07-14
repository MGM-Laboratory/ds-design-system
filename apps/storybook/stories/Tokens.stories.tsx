import type { Meta, StoryObj } from '@storybook/react';
import { tokens } from '@labmgm/tokens';

const meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'padded' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h2 className="font-display text-h1">Colors</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Object.entries(tokens.colors).map(([name, value]) => (
          <div key={name} className="flex items-center gap-3 rounded-md border border-line p-3">
            <div
              className="h-10 w-10 rounded-sm border border-line"
              style={{ background: value }}
            />
            <div className="flex flex-col">
              <span className="text-body-sm font-medium">{name}</span>
              <span className="font-mono text-caption text-ink-3">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      {Object.entries(tokens.typography).map(([token, style]) => (
        <div key={token} className="flex items-baseline gap-4 border-b border-line py-3">
          <code className="w-32 shrink-0 text-caption text-ink-3">{token}</code>
          <span
            style={{
              fontSize: style.fontSize,
              lineHeight: style.lineHeight,
              letterSpacing: style.letterSpacing,
              fontWeight: style.fontWeight,
              fontFamily: token.startsWith('display') ? 'var(--font-display)' : 'var(--font-sans)',
              textTransform: style.textTransform,
            }}
          >
            The quick brown fox
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      {Object.entries(tokens.shadows).map(([level, value]) => (
        <div
          key={level}
          className="rounded-md bg-surface p-6 text-center"
          style={{ boxShadow: value }}
        >
          <code className="text-caption text-ink-3">shadow-{level}</code>
        </div>
      ))}
    </div>
  ),
};
