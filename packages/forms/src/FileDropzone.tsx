import * as React from 'react';
import { Upload } from 'lucide-react';
import { cn, formatBytes } from '@labmgm/utils';

export interface FileDropzoneProps {
  /** Triggered when files are accepted (drop or click). */
  onFiles: (files: File[]) => void;
  /** MIME types or extensions accepted, e.g. ['image/*', '.pdf']. */
  accept?: string[];
  /** Max bytes per file. */
  maxSize?: number;
  /** Allow selecting multiple files. */
  multiple?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function FileDropzone({
  onFiles,
  accept,
  maxSize,
  multiple = true,
  disabled,
  invalid,
  className,
  title = 'Drop files here',
  description = 'or click to browse',
}: FileDropzoneProps) {
  const [isOver, setIsOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleFiles(list: FileList | null) {
    if (!list) return;
    const files = Array.from(list);
    const valid = maxSize ? files.filter((f) => f.size <= maxSize) : files;
    onFiles(valid);
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsOver(false);
        if (!disabled) handleFiles(e.dataTransfer.files);
      }}
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors',
        'focus-visible:ring-focus cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        isOver
          ? 'border-brand-blue bg-brand-blue-50'
          : 'border-line bg-surface hover:border-line-strong',
        invalid && 'border-brand-red',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <Upload size={24} className="text-ink-3" />
      <div className="flex flex-col gap-1">
        <div className="text-body text-ink font-medium">{title}</div>
        <div className="text-caption text-ink-3">{description}</div>
        {maxSize && <div className="text-caption text-ink-4">Max {formatBytes(maxSize)}</div>}
      </div>
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        accept={accept?.join(',')}
        disabled={disabled}
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
