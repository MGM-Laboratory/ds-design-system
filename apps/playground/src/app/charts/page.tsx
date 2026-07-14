'use client';

import { Container, Section, Stack, Grid } from '@labmgm/layout';
import { Card, CardHeader, CardTitle, Stat } from '@labmgm/react';
import { BarChart, LineChart, AreaChart, DonutChart, Sparkline } from '@labmgm/charts';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const barData = months.map((m, i) => ({ month: m, revenue: 1000 + i * 220, costs: 600 + i * 110 }));
const areaData = months.map((m, i) => ({ month: m, users: 250 + i * 80 }));
const donutData = [
  { name: 'Unity', value: 38 },
  { name: 'Unreal', value: 27 },
  { name: 'Godot', value: 14 },
  { name: 'Other', value: 21 },
];

export default function ChartsPage() {
  return (
    <Section padding="lg">
      <Container>
        <Stack gap={10}>
          <Stack gap={2}>
            <span className="text-eyebrow uppercase text-ink-3">Visualizations</span>
            <h1 className="text-display-lg">Charts</h1>
          </Stack>
          <Grid cols={1} responsive={{ base: 1, md: 3 }} gap={4}>
            <Card>
              <Stat
                label="MRR"
                value="$24,820"
                delta={{ value: '+12%', direction: 'up' }}
                description="vs last month"
              />
            </Card>
            <Card>
              <Stat
                label="Active users"
                value="3,142"
                delta={{ value: '-3%', direction: 'down' }}
                description="vs last week"
              />
            </Card>
            <Card>
              <Stat label="Avg session" value="6m 22s" />
            </Card>
          </Grid>
          <Grid cols={1} responsive={{ base: 1, lg: 2 }} gap={4}>
            <Card padding="md">
              <CardHeader className="mb-2">
                <CardTitle>Revenue vs Costs</CardTitle>
              </CardHeader>
              <BarChart data={barData} xKey="month" yKeys={['revenue', 'costs']} />
            </Card>
            <Card padding="md">
              <CardHeader className="mb-2">
                <CardTitle>Users (line)</CardTitle>
              </CardHeader>
              <LineChart data={areaData} xKey="month" yKeys={['users']} legend={false} />
            </Card>
            <Card padding="md">
              <CardHeader className="mb-2">
                <CardTitle>Users (area)</CardTitle>
              </CardHeader>
              <AreaChart data={areaData} xKey="month" yKeys={['users']} legend={false} />
            </Card>
            <Card padding="md">
              <CardHeader className="mb-2">
                <CardTitle>Engines</CardTitle>
              </CardHeader>
              <DonutChart data={donutData} />
            </Card>
          </Grid>
          <Card>
            <CardHeader className="mb-2">
              <CardTitle>Sparkline</CardTitle>
            </CardHeader>
            <Sparkline data={[3, 4, 2, 8, 5, 9, 7, 6, 10, 12, 11, 14]} />
          </Card>
        </Stack>
      </Container>
    </Section>
  );
}
