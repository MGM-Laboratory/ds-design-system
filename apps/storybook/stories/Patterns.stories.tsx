import type { Meta, StoryObj } from '@storybook/react';
import {
  PatternGrid,
  PatternCorner,
  PatternBanner,
  PatternDado,
  PatternPyramid,
  PatternStrip,
} from '@labmgm/patterns';

const meta = { title: 'Brand/Patterns', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Grid3x3: Story = { render: () => <PatternGrid rows={3} cols={3} seed="story-3" /> };
export const Grid4x2: Story = { render: () => <PatternGrid rows={4} cols={2} seed="story-4x2" /> };
export const Banner: Story = {
  render: () => <PatternBanner rows={2} cols={6} seed="story-banner" />,
};
export const Strip: Story = {
  render: () => <PatternStrip tiles={20} tileSize={32} seed="story-strip" />,
};
export const Dado: Story = { render: () => <PatternDado tiles={80} /> };
export const Pyramid: Story = {
  render: () => <PatternPyramid height={6} tileSize={48} seed="story-pyr" />,
};
export const CornerAccent: Story = {
  render: () => (
    <div className="relative h-64 rounded-md border border-line bg-surface-muted">
      <PatternCorner placement="top-left" />
      <PatternCorner placement="bottom-right" />
    </div>
  ),
};
