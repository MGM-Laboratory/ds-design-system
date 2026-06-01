import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup, IconButton, CopyButton, BackButton } from '@labmgm/react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Star } from 'lucide-react';

const meta = { title: 'Components/Button extras', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>
      <ButtonGroup attached>
        <Button variant="secondary">Day</Button>
        <Button variant="secondary">Week</Button>
        <Button variant="secondary">Month</Button>
      </ButtonGroup>
    </div>
  ),
};

export const ToggleButtons: Story = {
  render: () => (
    <div className="flex gap-3">
      <ToggleButton label="Bold"><Bold size={16} /></ToggleButton>
      <ToggleButton label="Italic" defaultPressed><Italic size={16} /></ToggleButton>
      <ToggleButton label="Underline"><Underline size={16} /></ToggleButton>
    </div>
  ),
};

export const ToggleGroup: Story = {
  render: () => (
    <ToggleButtonGroup type="single" defaultValue="left" aria-label="Text align">
      {/* @ts-expect-error Item static prop */}
      <ToggleButtonGroup.Item value="left" aria-label="Left"><AlignLeft size={16} /></ToggleButtonGroup.Item>
      {/* @ts-expect-error Item static prop */}
      <ToggleButtonGroup.Item value="center" aria-label="Center"><AlignCenter size={16} /></ToggleButtonGroup.Item>
      {/* @ts-expect-error Item static prop */}
      <ToggleButtonGroup.Item value="right" aria-label="Right"><AlignRight size={16} /></ToggleButtonGroup.Item>
    </ToggleButtonGroup>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton size="icon-sm" label="Favorite" icon={<Star size={14} />} />
      <IconButton size="icon" label="Favorite" icon={<Star size={16} />} />
      <IconButton size="icon-lg" label="Favorite" icon={<Star size={20} />} />
      <IconButton variant="secondary" label="Favorite" icon={<Star size={16} />} />
      <IconButton variant="ghost" label="Favorite" icon={<Star size={16} />} />
    </div>
  ),
};

export const Copy: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <code className="rounded-sm bg-surface-muted px-2 py-1 font-mono">pnpm add @labmgm/react</code>
      <CopyButton value="pnpm add @labmgm/react" />
    </div>
  ),
};

export const Back: Story = {
  render: () => <BackButton onClick={() => alert('back')} />,
};
