# `@labmgm/charts`

> MGM-brand-correct Recharts wrappers.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fcharts?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/charts)

```bash
pnpm add @labmgm/charts
```

> [Storybook (Charts)](https://mgm-laboratory.github.io/ds-design-system/?path=/docs/charts-all--docs) · [Source](./src)

---

## Examples

```tsx
import {
  BarChart,
  LineChart,
  AreaChart,
  PieChart,
  DonutChart,
  Sparkline,
  ChartContainer,
  BRAND_COLORS,
  CHART_PALETTE,
} from '@labmgm/charts';

<BarChart data={data} xKey="month" yKeys={['revenue', 'costs']} stacked />
<LineChart data={timeseries} xKey="date" yKeys={['users']} />
<AreaChart data={timeseries} xKey="date" yKeys={['signups']} />
<PieChart data={[{ name: 'A', value: 30 }, { name: 'B', value: 70 }]} />
<DonutChart data={breakdown} />
<Sparkline data={[1, 4, 2, 8, 5, 9, 7]} />
```

The default categorical palette pulls from `@labmgm/tokens` brand colors. Override with the `colors` prop:

```tsx
<BarChart data={data} xKey="month" yKeys={['users']} colors={[BRAND_COLORS.green]} />
```

## Components

| Component | Props highlights |
|---|---|
| `<BarChart>` | `xKey`, `yKeys`, `stacked`, `colors`, `legend`, `grid` |
| `<LineChart>` | `xKey`, `yKeys`, `curve: 'linear' \| 'monotone'`, `colors`, `legend` |
| `<AreaChart>` | `xKey`, `yKeys`, `stacked`, `colors`, `legend` |
| `<PieChart>` | `data: {name,value}[]`, `innerRadius`, `outerRadius`, `colors` |
| `<DonutChart>` | Same as PieChart with default `innerRadius={60}` |
| `<Sparkline>` | `data: number[]`, `color`, `width`, `height`, `strokeWidth` |
| `<ChartContainer>` | Generic ResponsiveContainer wrapper if you need a custom Recharts setup |

All wrappers respect the design tokens (font family, axis colors, tooltip styling).

## License

MIT © MGM Laboratory
