import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  IconButton,
  Badge,
  Avatar,
  Alert,
  AlertTitle,
  AlertDescription,
  Banner,
  Callout,
  Progress,
  Skeleton,
  Stat,
  Code,
  Kbd,
  Tag,
  Chip,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Empty,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@labmgm/react';
import { Surface } from '@labmgm/theme';
import { Heart, Plus } from 'lucide-react';

const meta = {
  title: 'Foundations/Inversion smoke test',
  parameters: { layout: 'padded' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function ComponentMatrix() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h3 className="font-display text-h3">Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
          <IconButton icon={<Heart size={16} />} label="Heart" />
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Neutral</Badge>
          <Badge tone="info">Info</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Badge tone="outline">Outline</Badge>
          <Badge tone="solid">Solid (ink)</Badge>
          <Badge tone="solid-blue">Blue</Badge>
          <Badge tone="solid-yellow">Yellow</Badge>
          <Badge tone="solid-red">Red</Badge>
          <Badge tone="solid-green">Green</Badge>
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Tags & Chips</h3>
        <div className="flex flex-wrap gap-2">
          <Tag>plain tag</Tag>
          <Tag onRemove={() => {}}>removable</Tag>
          <Chip>Inactive</Chip>
          <Chip active>Active</Chip>
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Avatars + Stat</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Avatar name="Jane Doe" />
          <Avatar name="Bob Smith" size="lg" />
          <Stat label="MRR" value="$24,820" delta={{ value: '+12%', direction: 'up' }} />
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Inline text</h3>
        <p>
          Press <Kbd>⌘</Kbd>
          <Kbd>K</Kbd> to run <Code>pnpm install</Code> in the terminal.
        </p>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Feedback</h3>
        <Banner tone="info">Info banner stays visible inside any scope.</Banner>
        <Banner tone="warning">Warning banner has dark text on yellow (literal).</Banner>
        <Banner tone="inverse">Inverse banner reads as light text on dark.</Banner>
        <Alert tone="info">
          <AlertTitle>Alerts reset to default surface</AlertTitle>
          <AlertDescription>
            Light tinted backgrounds render with dark text regardless of context.
          </AlertDescription>
        </Alert>
        <Callout tone="warning" title="Callout">
          Same — light tint, dark text.
        </Callout>
        <Progress value={62} />
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Overlays</h3>
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog resets scope</DialogTitle>
                <DialogDescription>
                  Even when opened from inside an inverse Section, the dialog content is a light
                  surface.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Popover</Button>
            </PopoverTrigger>
            <PopoverContent>Light popover content with dark text.</PopoverContent>
          </Popover>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip stays dark.</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Tabs</h3>
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">First</TabsTrigger>
            <TabsTrigger value="b">Second</TabsTrigger>
            <TabsTrigger value="c">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="a">First content.</TabsContent>
          <TabsContent value="b">Second content.</TabsContent>
          <TabsContent value="c">Third content.</TabsContent>
        </Tabs>
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Skeleton + Empty</h3>
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-3/4" />
        <Empty
          title="Nothing here yet"
          description="Empty states use brand patterns as accent."
          action={<Button leadingIcon={<Plus size={16} />}>Add item</Button>}
        />
      </section>
      <section className="space-y-2">
        <h3 className="font-display text-h3">Cards (mixed)</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
              <CardDescription>Light, white</CardDescription>
            </CardHeader>
            <CardContent>Body text.</CardContent>
          </Card>
          <Card variant="tint-blue">
            <CardHeader>
              <CardTitle>Tint blue</CardTitle>
              <CardDescription>Light brand wash</CardDescription>
            </CardHeader>
            <CardContent>Body text.</CardContent>
          </Card>
          <Card variant="tint-yellow">
            <CardHeader>
              <CardTitle>Tint yellow</CardTitle>
              <CardDescription>Light brand wash</CardDescription>
            </CardHeader>
            <CardContent>Body text.</CardContent>
          </Card>
          <Card variant="inverse">
            <CardHeader>
              <CardTitle>Inverse</CardTitle>
              <CardDescription>Dark surface</CardDescription>
            </CardHeader>
            <CardContent>Body text flips white.</CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export const InDefault: Story = {
  name: 'Default surface',
  render: () => (
    <Surface tone="default" className="rounded-md border border-line p-6">
      <ComponentMatrix />
    </Surface>
  ),
};

export const InMuted: Story = {
  name: 'Muted surface',
  render: () => (
    <Surface tone="muted" className="rounded-md p-6">
      <ComponentMatrix />
    </Surface>
  ),
};

export const InInverse: Story = {
  name: 'Inverse surface',
  render: () => (
    <Surface tone="inverse" className="rounded-md p-6">
      <ComponentMatrix />
    </Surface>
  ),
};
