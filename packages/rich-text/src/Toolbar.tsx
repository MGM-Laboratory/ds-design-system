import * as React from 'react';
import type { Editor } from '@tiptap/react';
import { Bold, Italic, Underline, Code, List, ListOrdered, Quote, Link as LinkIcon, Heading1, Heading2, Heading3, Undo, Redo } from 'lucide-react';
import { cn } from '@labmgm/utils';

export interface ToolbarProps {
  editor: Editor | null;
  className?: string;
}

interface BtnProps {
  active?: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
}

function Btn({ active, onClick, label, children, disabled }: BtnProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-sm text-ink-3 transition-colors',
        'hover:bg-surface-muted hover:text-ink',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus',
        active && 'bg-ink text-white hover:bg-ink',
        disabled && 'opacity-40 cursor-not-allowed',
      )}
    >
      {children}
    </button>
  );
}

export function Toolbar({ editor, className }: ToolbarProps) {
  if (!editor) return null;
  return (
    <div className={cn('flex flex-wrap items-center gap-0.5 border-b border-line bg-surface-muted/50 p-1', className)}>
      <Btn label="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold size={16} />
      </Btn>
      <Btn label="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic size={16} />
      </Btn>
      <Btn label="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <Underline size={16} />
      </Btn>
      <Btn label="Code" active={editor.isActive('code')} onClick={() => editor.chain().focus().toggleCode().run()}>
        <Code size={16} />
      </Btn>
      <div className="mx-1 h-5 w-px bg-line" />
      <Btn label="Heading 1" active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        <Heading1 size={16} />
      </Btn>
      <Btn label="Heading 2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <Heading2 size={16} />
      </Btn>
      <Btn label="Heading 3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <Heading3 size={16} />
      </Btn>
      <div className="mx-1 h-5 w-px bg-line" />
      <Btn label="Bulleted list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List size={16} />
      </Btn>
      <Btn label="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered size={16} />
      </Btn>
      <Btn label="Blockquote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <Quote size={16} />
      </Btn>
      <Btn
        label="Link"
        active={editor.isActive('link')}
        onClick={() => {
          const url = window.prompt('URL', editor.getAttributes('link').href ?? 'https://');
          if (url === null) return;
          if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
          }
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }}
      >
        <LinkIcon size={16} />
      </Btn>
      <div className="mx-1 h-5 w-px bg-line" />
      <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
        <Undo size={16} />
      </Btn>
      <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
        <Redo size={16} />
      </Btn>
    </div>
  );
}
