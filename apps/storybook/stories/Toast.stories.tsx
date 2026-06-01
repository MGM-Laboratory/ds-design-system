import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@labmgm/react';
import { Toaster, toast } from '@labmgm/toast';

const meta = { title: 'Feedback/Toast', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => toast('Saved')}>Default</Button>
        <Button variant="accent" onClick={() => toast.info('New version available')}>Info</Button>
        <Button onClick={() => toast.success('Asset published')}>Success</Button>
        <Button variant="secondary" onClick={() => toast.warning('Almost out of space')}>Warning</Button>
        <Button variant="danger" onClick={() => toast.error('Upload failed', { description: 'Network unreachable' })}>
          Error
        </Button>
        <Button variant="ghost" onClick={() => toast.loading('Generating thumbnails…')}>Loading</Button>
      </div>
      <Toaster />
    </>
  ),
};
