import type { Meta, StoryObj } from '@storybook/react';
import { BarChart, LineChart, AreaChart, PieChart, DonutChart, Sparkline } from '@labmgm/charts';
import { Card, CardHeader, CardTitle } from '@labmgm/react';

const meta = { title: 'Charts/All', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const barData = months.map((m, i) => ({ month: m, revenue: 1000 + i * 220, costs: 600 + i * 110 }));
const lineData = months.map((m, i) => ({ month: m, users: 250 + i * 80 }));
const donutData = [
  { name: 'Unity', value: 38 },
  { name: 'Unreal', value: 27 },
  { name: 'Godot', value: 14 },
  { name: 'Other', value: 21 },
];

export const Bar: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Bar chart</CardTitle></CardHeader>
      <BarChart data={barData} xKey="month" yKeys={['revenue', 'costs']} />
    </Card>
  ),
};

export const Line: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Line chart</CardTitle></CardHeader>
      <LineChart data={lineData} xKey="month" yKeys={['users']} legend={false} />
    </Card>
  ),
};

export const Area: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Area chart</CardTitle></CardHeader>
      <AreaChart data={lineData} xKey="month" yKeys={['users']} legend={false} />
    </Card>
  ),
};

export const Pie: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Pie chart</CardTitle></CardHeader>
      <PieChart data={donutData} />
    </Card>
  ),
};

export const Donut: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Donut chart</CardTitle></CardHeader>
      <DonutChart data={donutData} />
    </Card>
  ),
};

export const SparklineDemo: Story = {
  name: 'Sparkline',
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Sparkline (inline)</CardTitle></CardHeader>
      <div className="flex items-center gap-4">
        <Sparkline data={[3, 4, 2, 8, 5, 9, 7, 6, 10, 12, 11, 14]} />
        <Sparkline data={[12, 9, 14, 8, 11, 5]} color="#0f8657" />
        <Sparkline data={[2, 4, 3, 6, 4, 8, 5]} color="#f94141" />
      </div>
    </Card>
  ),
};

export const Stacked: Story = {
  render: () => (
    <Card padding="md">
      <CardHeader className="mb-3"><CardTitle>Stacked bars</CardTitle></CardHeader>
      <BarChart data={barData} xKey="month" yKeys={['revenue', 'costs']} stacked />
    </Card>
  ),
};
