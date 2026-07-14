import { useEditor, type UseEditorOptions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Youtube from '@tiptap/extension-youtube';
import Mention from '@tiptap/extension-mention';

export const mgmExtensions = (placeholder = 'Start writing…') => [
  StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
  Underline,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: { class: 'text-brand-blue underline underline-offset-[3px]' },
  }),
  Image.configure({ HTMLAttributes: { class: 'rounded-md border border-line' } }),
  Placeholder.configure({ placeholder }),
  Table.configure({ resizable: true }),
  TableRow,
  TableCell,
  TableHeader,
  Youtube.configure({ controls: true, nocookie: true }),
  Mention.configure({ HTMLAttributes: { class: 'text-brand-blue font-medium' } }),
];

export interface UseMgmEditorOptions extends UseEditorOptions {
  placeholder?: string;
}

export function useMgmEditor({
  placeholder,
  extensions,
  immediatelyRender = false,
  ...rest
}: UseMgmEditorOptions = {}) {
  return useEditor({
    extensions: extensions ?? mgmExtensions(placeholder),
    // Tiptap must defer its first render in SSR frameworks such as Next.js.
    // Consumers can still explicitly opt in to immediate rendering when needed.
    immediatelyRender,
    ...rest,
  });
}
