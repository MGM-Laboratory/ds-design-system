import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@labmgm/react';

const meta = { title: 'Navigation/Accordion', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible className="max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is the MGM design system?</AccordionTrigger>
        <AccordionContent>
          A complete React component library for MGM Laboratory products — colors, type, components,
          all opinionated.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          <code>pnpm add @labmgm/react @labmgm/tokens @labmgm/tailwind-config</code>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it without Tailwind?</AccordionTrigger>
        <AccordionContent>
          Yes — import <code>@labmgm/react/styles.css</code> for the pre-compiled stylesheet.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="max-w-md">
      <AccordionItem value="a">
        <AccordionTrigger>Item A</AccordionTrigger>
        <AccordionContent>Content A</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Item B</AccordionTrigger>
        <AccordionContent>Content B</AccordionContent>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionTrigger>Item C</AccordionTrigger>
        <AccordionContent>Content C</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
