import type { Meta, StoryObj } from '@storybook/react';
import {
  Container,
  Section,
  Stack,
  HStack,
  VStack,
  Grid,
  Flex,
  Box,
  Center,
  Spacer,
  AspectRatio,
  Divider,
  Card,
} from '@labmgm/react';

const meta = { title: 'Layout/Primitives', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const Box1 = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-sm bg-brand-blue-50 px-3 py-2 text-body-sm">{children}</div>
);

export const StackDemo: Story = {
  name: 'Stack / HStack / VStack',
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-h3">VStack (gap=4)</h3>
        <VStack gap={4}>
          <Box1>One</Box1>
          <Box1>Two</Box1>
          <Box1>Three</Box1>
        </VStack>
      </div>
      <div>
        <h3 className="mb-2 text-h3">HStack (gap=4)</h3>
        <HStack gap={4}>
          <Box1>One</Box1>
          <Box1>Two</Box1>
          <Box1>Three</Box1>
        </HStack>
      </div>
    </div>
  ),
};

export const GridDemo: Story = {
  name: 'Grid',
  render: () => (
    <Grid cols={4} gap={3}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Box1 key={i}>Cell {i + 1}</Box1>
      ))}
    </Grid>
  ),
};

export const ContainerDemo: Story = {
  name: 'Container widths',
  render: () => (
    <div className="space-y-3">
      <Container width="prose">
        <Box1>prose (640px)</Box1>
      </Container>
      <Container width="default">
        <Box1>default (1200px)</Box1>
      </Container>
      <Container width="wide">
        <Box1>wide (1360px)</Box1>
      </Container>
    </div>
  ),
};

export const SectionDemo: Story = {
  name: 'Section tones',
  render: () => (
    <div className="-mx-6 space-y-1">
      <Section tone="default" padding="sm">
        <Container>
          <Box1>default section</Box1>
        </Container>
      </Section>
      <Section tone="muted" padding="sm">
        <Container>
          <Box1>muted section</Box1>
        </Container>
      </Section>
      <Section tone="inverse" padding="sm">
        <Container>
          <div className="rounded-sm bg-white/10 px-3 py-2 text-body-sm">
            inverse section — children flip
          </div>
        </Container>
      </Section>
    </div>
  ),
};

export const FlexDemo: Story = {
  name: 'Flex with Spacer',
  render: () => (
    <Flex gap={3} align="center">
      <Box1>Left</Box1>
      <Spacer />
      <Box1>Right</Box1>
    </Flex>
  ),
};

export const CenterAndAspect: Story = {
  name: 'Center + AspectRatio',
  render: () => (
    <AspectRatio ratio={16 / 9} className="rounded-md bg-surface-muted">
      <Center fill>
        <span className="text-body text-ink-3">16:9 box, centered text</span>
      </Center>
    </AspectRatio>
  ),
};

export const DividerDemo: Story = {
  name: 'Divider',
  render: () => (
    <Card padding="lg">
      <p>Above the divider</p>
      <Divider className="my-4" />
      <p>Below the divider</p>
      <Divider strong className="my-4" />
      <p>Below the stronger divider</p>
    </Card>
  ),
};
