import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@labmgm/react';
import { Settings, FolderOpen, FileText } from 'lucide-react';

const meta = { title: 'Navigation/Tabs', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content</TabsContent>
      <TabsContent value="files">Files content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="files">
      <TabsList>
        <TabsTrigger value="overview">
          <FileText size={14} /> Overview
        </TabsTrigger>
        <TabsTrigger value="files">
          <FolderOpen size={14} /> Files
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings size={14} /> Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview</TabsContent>
      <TabsContent value="files">Files</TabsContent>
      <TabsContent value="settings">Settings</TabsContent>
    </Tabs>
  ),
};
