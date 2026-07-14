import * as React from 'react';
import { EditorContent } from '@tiptap/react';
import { cn } from '@labmgm/utils';
import { useMgmEditor } from './useMgmEditor.js';
import { Toolbar } from './Toolbar.js';

export interface RichTextEditorProps {
  defaultValue?: string;
  /** Called whenever the document updates. Receives HTML. */
  onUpdate?: (html: string) => void;
  placeholder?: string;
  editable?: boolean;
  className?: string;
  showToolbar?: boolean;
  minHeight?: number;
}

export function RichTextEditor({
  defaultValue,
  onUpdate,
  placeholder,
  editable = true,
  className,
  showToolbar = true,
  minHeight = 200,
}: RichTextEditorProps) {
  const editor = useMgmEditor({
    placeholder,
    content: defaultValue,
    editable,
    onUpdate: ({ editor: e }) => onUpdate?.(e.getHTML()),
  });

  return (
    <div
      className={cn(
        'border-line bg-surface focus-within:ring-focus focus-within:border-focus rounded-md border focus-within:ring-2 focus-within:ring-offset-1',
        className,
      )}
    >
      {showToolbar && <Toolbar editor={editor} />}
      <EditorContent
        editor={editor}
        className={cn(
          'prose prose-sm max-w-none p-4 outline-none',
          '[&_.ProseMirror]:outline-none',
          '[&_.ProseMirror]:min-h-[var(--mgm-rt-min-h)]',
          '[&_h1]:text-h1 [&_h2]:text-h2 [&_h3]:text-h3',
          '[&_a]:text-brand-blue [&_a]:underline [&_a]:underline-offset-[3px]',
          '[&_blockquote]:border-line-strong [&_blockquote]:border-l-2 [&_blockquote]:pl-3 [&_blockquote]:italic',
          '[&_code]:bg-surface-muted [&_code]:text-mono [&_code]:rounded-sm [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono',
          '[&_p.is-editor-empty:first-child::before]:text-ink-4',
          '[&_p.is-editor-empty:first-child::before]:float-left',
          '[&_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]',
          '[&_p.is-editor-empty:first-child::before]:pointer-events-none',
        )}
        style={{ ['--mgm-rt-min-h' as string]: `${minHeight}px` }}
      />
    </div>
  );
}
