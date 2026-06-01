import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, DatePicker, DateRangePicker, TimePicker } from '@labmgm/calendar';

const meta = { title: 'Forms/Date & Time', tags: ['autodocs'] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const CalendarDemo: Story = {
  name: 'Calendar',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },
};

export const DatePickerDemo: Story = {
  name: 'DatePicker',
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return (
      <div className="max-w-xs">
        <DatePicker value={date} onChange={setDate} />
        <p className="mt-3 text-caption text-ink-3">
          {date ? `Selected: ${date.toDateString()}` : 'No date selected'}
        </p>
      </div>
    );
  },
};

export const RangePickerDemo: Story = {
  name: 'DateRangePicker',
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>(undefined);
    return (
      <div className="max-w-xs">
        <DateRangePicker value={range} onChange={setRange} />
      </div>
    );
  },
};

export const TimePickerDemo: Story = {
  name: 'TimePicker',
  render: () => {
    const [time, setTime] = useState('14:30');
    return <TimePicker value={time} onChange={setTime} />;
  },
};
