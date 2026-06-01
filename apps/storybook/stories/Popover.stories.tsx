import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Button,
  Avatar,
} from '@labmgm/react';

const meta = { title: 'Overlays/Popover, HoverCard, Tooltip', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverDemo: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="text-h3 font-semibold">Filters</h4>
          <p className="text-body-sm text-ink-3">Customize your view.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const HoverCardDemo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@jane</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex items-center gap-3">
          <Avatar name="Jane Doe" size="lg" />
          <div>
            <div className="font-semibold">Jane Doe</div>
            <div className="text-caption text-ink-3">Senior designer at MGM Laboratory</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const TooltipDemo: Story = {
  render: () => (
    <TooltipProvider delayDuration={200}>
      <div className="flex gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip on hover</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">⌘ K</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Open command palette</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};
