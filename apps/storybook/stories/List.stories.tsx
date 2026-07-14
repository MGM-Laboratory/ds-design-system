import type { Meta, StoryObj } from '@storybook/react';
import {
  List,
  ListItem,
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
  Timeline,
  TimelineItem,
  Separator,
} from '@labmgm/react';
import { Check, Sparkles, Bug } from 'lucide-react';

const meta = { title: 'Data display/Lists & Timeline', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Lists: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <h3 className="mb-2 text-h3">Plain</h3>
        <List>
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
          <ListItem>Third</ListItem>
        </List>
      </div>
      <div>
        <h3 className="mb-2 text-h3">Bulleted</h3>
        <List variant="bullet">
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
        </List>
      </div>
      <div>
        <h3 className="mb-2 text-h3">Numbered</h3>
        <List variant="number">
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
        </List>
      </div>
      <div>
        <h3 className="mb-2 text-h3">Divided</h3>
        <List variant="divided">
          <ListItem>First</ListItem>
          <ListItem>Second</ListItem>
          <ListItem>Third</ListItem>
        </List>
      </div>
    </div>
  ),
};

export const Description: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>Version</DescriptionTerm>
      <DescriptionDetails>v0.1.2</DescriptionDetails>
      <DescriptionTerm>License</DescriptionTerm>
      <DescriptionDetails>MIT</DescriptionDetails>
      <DescriptionTerm>Author</DescriptionTerm>
      <DescriptionDetails>MGM Laboratory</DescriptionDetails>
    </DescriptionList>
  ),
};

export const TimelineDemo: Story = {
  name: 'Timeline',
  render: () => (
    <Timeline>
      <TimelineItem title="Published" time="just now" icon={<Check size={10} />}>
        Forest Pack v2 is now live in the library.
      </TimelineItem>
      <TimelineItem title="New release" time="2 hours ago" icon={<Sparkles size={10} />}>
        v0.1.2 — fixed exports, added stories, color contrast fixes.
      </TimelineItem>
      <TimelineItem title="Bug filed" time="yesterday" icon={<Bug size={10} />}>
        Reported issue with Storybook deploy.
      </TimelineItem>
    </Timeline>
  ),
};

export const SeparatorDemo: Story = {
  name: 'Separator',
  render: () => (
    <div className="flex flex-col gap-4">
      <span>Top</span>
      <Separator />
      <span>Middle</span>
      <div className="flex h-12 items-center gap-3">
        <span>Left</span>
        <Separator orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
  ),
};
