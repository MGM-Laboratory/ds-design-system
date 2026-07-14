# `@labmgm/calendar`

> Calendar, DatePicker, DateRangePicker, and TimePicker for MGM Laboratory.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Fcalendar?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/calendar)

Powered by `react-day-picker` v9 + `date-fns`.

```bash
pnpm add @labmgm/calendar
```

> [Storybook (Forms / Date & Time)](https://ds.labmgm.org/?path=/docs/forms-date-time--docs) · [Source](./src)

---

## Examples

```tsx
import { useState } from 'react';
import { Calendar, DatePicker, DateRangePicker, TimePicker } from '@labmgm/calendar';

function Demo() {
  const [date, setDate] = useState<Date | undefined>();
  const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
  const [time, setTime] = useState('14:30');

  return (
    <>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <DatePicker value={date} onChange={setDate} />
      <DateRangePicker value={range} onChange={setRange} />
      <TimePicker value={time} onChange={setTime} />
    </>
  );
}
```

## Components

| Component           | Purpose                                                         |
| ------------------- | --------------------------------------------------------------- |
| `<Calendar>`        | The day-picker grid. All `react-day-picker` props pass through. |
| `<DatePicker>`      | Single date selection in a popover.                             |
| `<DateRangePicker>` | From-to selection across two months.                            |
| `<TimePicker>`      | Native `<input type="time">` with MGM styling.                  |

The modifier classes (today / selected / outside / disabled / range\_\*) target the inner `<button>` via `[&>button]:` so the cell renders correctly — see [CLAUDE.md → Calendar gotcha](../../CLAUDE.md#calendar-gotcha).

## See also

- [`@labmgm/forms`](../forms) — Field wrapper + form integration

## License

MIT © MGM Laboratory
