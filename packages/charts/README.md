# `@labmgm/charts`

MGM-brand-correct Recharts wrappers.

```tsx
import { BarChart, LineChart, AreaChart, PieChart, DonutChart, Sparkline } from '@labmgm/charts';

<BarChart data={data} xKey="month" yKeys={['revenue', 'costs']} stacked />
<LineChart data={timeseries} xKey="date" yKeys={['users']} />
<AreaChart data={timeseries} xKey="date" yKeys={['signups']} />
<DonutChart data={[{ name: 'A', value: 30 }, { name: 'B', value: 70 }]} />
<Sparkline data={[1, 4, 2, 8, 5, 9, 7]} />
```

Default palette pulls from `@labmgm/tokens` brand colors. Override with the `colors` prop.
