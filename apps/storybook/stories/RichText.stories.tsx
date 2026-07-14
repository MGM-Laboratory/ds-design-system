import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor, RichTextRenderer } from '@labmgm/rich-text';

const meta = { title: 'Rich text/Editor & Renderer', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Editor: Story = {
  name: 'Editor',
  render: () => {
    const [html, setHtml] = useState(
      '<h1>Hello, MGM Laboratory</h1><p>Edit this. Try <b>bold</b>, <i>italic</i>, and <code>code</code>.</p><ul><li>Bulleted</li><li>Lists</li></ul>',
    );
    return (
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RichTextEditor defaultValue={html} onUpdate={setHtml} />
        <div className="rounded-md border border-line p-4">
          <h3 className="mb-2 text-caption uppercase text-ink-3">Rendered output</h3>
          <RichTextRenderer html={html} />
        </div>
      </div>
    );
  },
};
