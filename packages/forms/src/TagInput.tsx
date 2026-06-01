import * as React from 'react';
import { X } from '@labmgm/icons';
import { cn } from '@labmgm/utils';

export interface TagInputProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  /** Validate each tag before adding. Return `false` to reject. */
  validate?: (tag: string) => boolean;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  id?: string;
}

/** Free-form tag entry — press Enter or comma to add. Backspace removes the last tag. */
export function TagInput({
  value,
  defaultValue = [],
  onChange,
  placeholder = 'Add tag…',
  validate,
  disabled,
  invalid,
  className,
  id,
}: TagInputProps) {
  const [internal, setInternal] = React.useState<string[]>(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? (value ?? []) : internal;
  const [draft, setDraft] = React.useState('');

  function commit(raw: string) {
    const trimmed = raw.trim().replace(/,$/, '');
    if (!trimmed) return;
    if (current.includes(trimmed)) return;
    if (validate && !validate(trimmed)) return;
    const next = [...current, trimmed];
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

  function remove(tag: string) {
    const next = current.filter((t) => t !== tag);
    if (!isControlled) setInternal(next);
    onChange?.(next);
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-1 rounded-md border bg-surface px-2 py-1.5 min-h-10 transition-colors',
        'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-1 focus-within:border-focus',
        invalid ? 'border-brand-red' : 'border-line hover:border-line-strong',
        disabled && 'opacity-50',
        className,
      )}
    >
      {current.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 rounded-sm bg-surface-muted px-1.5 py-0.5 text-caption text-ink"
        >
          {tag}
          <button
            type="button"
            onClick={() => remove(tag)}
            aria-label={`Remove ${tag}`}
            className="text-ink-3 hover:text-ink"
          >
            <X size={12} />
          </button>
        </span>
      ))}
      <input
        id={id}
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ',') && draft.trim()) {
            e.preventDefault();
            commit(draft);
            setDraft('');
          } else if (e.key === 'Backspace' && !draft && current.length > 0) {
            remove(current[current.length - 1]!);
          }
        }}
        onBlur={() => {
          if (draft.trim()) {
            commit(draft);
            setDraft('');
          }
        }}
        placeholder={current.length === 0 ? placeholder : undefined}
        disabled={disabled}
        className="min-w-[8ch] flex-1 bg-transparent px-1 text-body text-ink outline-none placeholder:text-ink-4"
      />
    </div>
  );
}
