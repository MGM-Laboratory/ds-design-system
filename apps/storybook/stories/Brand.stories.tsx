import type { Meta, StoryObj } from '@storybook/react';
import { Logo, Wordmark, ShapeSignature, FooterStrip } from '@labmgm/brand';

const meta = { title: 'Brand/Logo & Wordmark', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const LogoSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo size={24} />
      <Logo size={40} />
      <Logo size={64} />
      <Logo size={96} />
    </div>
  ),
};

export const WordmarkDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Wordmark />
      <Wordmark size={36} />
      <Wordmark showName={false} size={64} />
      <Wordmark href="https://mgm.ub.ac.id" />
    </div>
  ),
};

export const Signature: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <ShapeSignature rows={2} cols={2} tileSize={28} seed="sig-1" />
      <ShapeSignature rows={3} cols={3} tileSize={32} seed="sig-2" />
      <ShapeSignature rows={4} cols={4} tileSize={40} seed="sig-3" />
    </div>
  ),
};

export const Footer: Story = {
  render: () => (
    <div className="-mx-6">
      <FooterStrip />
    </div>
  ),
};
