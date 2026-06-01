import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, Card, CardHeader, CardTitle, CardDescription } from '@labmgm/react';
import { PatternGrid } from '@labmgm/patterns';

const meta = { title: 'Media/Carousel', component: Carousel, tags: ['autodocs'] } satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel arrows dots className="max-w-2xl">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} variant="tint-blue" padding="lg">
          <CardHeader>
            <CardTitle>Slide {i}</CardTitle>
            <CardDescription>Embla-backed horizontal carousel.</CardDescription>
          </CardHeader>
          <div className="flex justify-center mt-4">
            <PatternGrid rows={2} cols={4} tileSize={40} seed={`slide-${i}`} />
          </div>
        </Card>
      ))}
    </Carousel>
  ),
};
