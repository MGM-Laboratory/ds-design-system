import type { Meta, StoryObj } from '@storybook/react';
import { Code, CodeBlock, Kbd } from '@labmgm/react';

const meta = { title: 'Components/Code & Kbd', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: () => (
    <p className="text-body">
      Run <Code>pnpm add @labmgm/react</Code> to install. Open a story with <Kbd>⌘K</Kbd>.
    </p>
  ),
};

export const Block: Story = {
  render: () => (
    <CodeBlock
      filename="tailwind.config.ts"
      language="ts"
      code={`import preset from '@labmgm/tailwind-config';

export default {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
};`}
    />
  ),
};

export const KbdSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="sm">K</Kbd>
      <Kbd size="md">Enter</Kbd>
      <Kbd size="md">Esc</Kbd>
    </div>
  ),
};
