import * as React from 'react';
import { cn } from '@labmgm/utils';

export interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
  /** Preset swatches. Defaults to the MGM brand palette. */
  presets?: string[];
  /** Whether to also show a native color input fallback. */
  allowCustom?: boolean;
  className?: string;
}

const DEFAULT_PRESETS = [
  '#3a6dc5', // brand-blue
  '#f7bf33', // brand-yellow
  '#f94141', // brand-red
  '#0f8657', // brand-green
  '#0e1116', // ink
  '#ffffff', // bg
];

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  presets = DEFAULT_PRESETS,
  allowCustom = true,
  className,
}: ColorPickerProps) {
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  function pick(color: string) {
    if (!isControlled) setInternal(color);
    onChange?.(color);
  }

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <div className="inline-flex flex-wrap gap-1">
        {presets.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`Select ${color}`}
            aria-pressed={current === color}
            onClick={() => pick(color)}
            className={cn(
              'h-6 w-6 rounded-sm border border-line transition-all',
              current === color && 'ring-2 ring-focus ring-offset-1',
            )}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {allowCustom && (
        <label className="inline-flex items-center gap-1">
          <input
            type="color"
            value={current ?? '#000000'}
            onChange={(e) => pick(e.target.value)}
            className="h-6 w-6 cursor-pointer rounded-sm border border-line bg-transparent"
          />
          <span className="sr-only">Custom color</span>
        </label>
      )}
    </div>
  );
}
