import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
} from '@labmgm/react';

const meta = { title: 'Overlays/Drawer', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Sides: Story = {
  render: () => (
    <div className="flex gap-3">
      {(['right', 'left', 'top', 'bottom'] as const).map((side) => (
        <Drawer key={side}>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open {side}</Button>
          </DrawerTrigger>
          <DrawerContent side={side}>
            <DrawerHeader>
              <DrawerTitle>Drawer from {side}</DrawerTitle>
              <DrawerDescription>Slides in from the {side}.</DrawerDescription>
            </DrawerHeader>
            <div className="p-6 text-body text-ink-2">
              Drawer body. Forms, menus, and detail panels live here.
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary">Close</Button>
              </DrawerClose>
              <Button>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  ),
};
