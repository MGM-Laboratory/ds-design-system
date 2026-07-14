import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@labmgm/react';
import { Surface } from '@labmgm/theme';

const meta = {
  title: 'Foundations/Color & Contrast',
  parameters: { layout: 'padded' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="mb-4 font-display text-h1">Brand</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['brand-blue', '#3a6dc5'],
            ['brand-yellow', '#f7bf33'],
            ['brand-red', '#f94141'],
            ['brand-green', '#0f8657'],
          ].map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-md border border-line">
              <div className="h-20" style={{ background: hex }} />
              <div className="p-3">
                <div className="text-body-sm font-medium">{name}</div>
                <code className="font-mono text-caption text-ink-3">{hex}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 font-display text-h1">Tints</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['brand-blue-50', '#ecf1fa'],
            ['brand-yellow-50', '#fef6e0'],
            ['brand-red-50', '#fee5e5'],
            ['brand-green-50', '#e2f1ea'],
          ].map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-md border border-line">
              <div className="h-20" style={{ background: hex }} />
              <div className="p-3">
                <div className="text-body-sm font-medium">{name}</div>
                <code className="font-mono text-caption text-ink-3">{hex}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 font-display text-h1">Surfaces & Ink</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['bg / surface', '#ffffff'],
            ['surface-muted', '#f7f7f5'],
            ['surface-inverse', '#0e1116'],
            ['ink', '#0e1116'],
            ['ink-2', '#3b4150'],
            ['ink-3', '#6b7280'],
            ['ink-4', '#9aa1ad'],
            ['line', '#ececea'],
          ].map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-md border border-line">
              <div className="h-20" style={{ background: hex }} />
              <div className="p-3">
                <div className="text-body-sm font-medium">{name}</div>
                <code className="font-mono text-caption text-ink-3">{hex}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

export const InverseScope: Story = {
  name: 'Inverse surface (contrast test)',
  render: () => (
    <div className="flex flex-col gap-6">
      <Surface tone="default" className="rounded-md border border-line p-6">
        <h2 className="text-h2">Default surface</h2>
        <p className="text-body text-ink-2">
          Text uses <code>text-ink</code> which resolves to <code>var(--ink)</code> = <b>#0e1116</b>{' '}
          here.
        </p>
        <p className="mt-2 text-body-sm text-ink-3">Secondary text uses ink-3 / ink-2.</p>
      </Surface>
      <Surface tone="muted" className="rounded-md border border-line p-6">
        <h2 className="text-h2">Muted surface</h2>
        <p className="text-body text-ink-2">Soft off-white zoning.</p>
      </Surface>
      <Surface tone="inverse" className="rounded-md p-6">
        <h2 className="text-h2">Inverse surface</h2>
        <p className="text-body text-ink-2">
          Same <code>text-ink</code> class — but the CSS variable now resolves to white because this
          section sets <code>data-surface="inverse"</code>.
        </p>
        <p className="mt-2 text-body-sm text-ink-3">
          ink-3 is also lighter here so it still has contrast on the dark background.
        </p>
      </Surface>
    </div>
  ),
};

export const CardsOnEverySurface: Story = {
  name: 'Card variants — contrast check',
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Outlined</CardTitle>
          <CardDescription>Default product card.</CardDescription>
        </CardHeader>
        <CardContent>Body content reads as ink on white.</CardContent>
      </Card>
      <Card variant="tinted">
        <CardHeader>
          <CardTitle>Tinted</CardTitle>
          <CardDescription>Subtle off-white zoning.</CardDescription>
        </CardHeader>
        <CardContent>Body content.</CardContent>
      </Card>
      <Card variant="tint-blue">
        <CardHeader>
          <CardTitle>Tint blue</CardTitle>
          <CardDescription>Soft brand wash.</CardDescription>
        </CardHeader>
        <CardContent>Light tint stays readable.</CardContent>
      </Card>
      <Card variant="tint-yellow">
        <CardHeader>
          <CardTitle>Tint yellow</CardTitle>
          <CardDescription>Highlight wash.</CardDescription>
        </CardHeader>
        <CardContent>Pale yellow background.</CardContent>
      </Card>
      <Card variant="tint-red">
        <CardHeader>
          <CardTitle>Tint red</CardTitle>
          <CardDescription>Soft danger wash.</CardDescription>
        </CardHeader>
        <CardContent>Pale red background.</CardContent>
      </Card>
      <Card variant="tint-green">
        <CardHeader>
          <CardTitle>Tint green</CardTitle>
          <CardDescription>Soft success wash.</CardDescription>
        </CardHeader>
        <CardContent>Pale green background.</CardContent>
      </Card>
      <Card variant="inverse">
        <CardHeader>
          <CardTitle>Inverse</CardTitle>
          <CardDescription>Dark surface — children flip to light.</CardDescription>
        </CardHeader>
        <CardContent>Body text reads as white via the inverse CSS-var scope.</CardContent>
      </Card>
    </div>
  ),
};
