# `@labmgm/calendar`

Calendar, DatePicker, DateRangePicker, and TimePicker primitives, powered by `react-day-picker` and `date-fns`.

```tsx
import { Calendar, DatePicker, DateRangePicker, TimePicker } from '@labmgm/calendar';

<DatePicker value={date} onChange={setDate} />
<DateRangePicker value={range} onChange={setRange} />
<TimePicker value="14:30" onChange={setTime} />
<Calendar mode="single" selected={date} onSelect={setDate} />
```
