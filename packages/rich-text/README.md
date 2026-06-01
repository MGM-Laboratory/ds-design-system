# `@labmgm/rich-text`

Tiptap-based rich text editor and HTML renderer for MGM Laboratory.

```tsx
import { RichTextEditor, RichTextRenderer } from '@labmgm/rich-text';

<RichTextEditor
  defaultValue="<p>Hello</p>"
  onUpdate={(html) => setValue(html)}
  placeholder="Write something brilliant…"
/>

<RichTextRenderer html={savedHtml} />
```

Includes StarterKit, Link, Image, Underline, Placeholder, Table, YouTube, and Mention extensions by default. Hooks for advanced usage:

```tsx
import { useMgmEditor, mgmExtensions, Toolbar, EditorContent } from '@labmgm/rich-text';

const editor = useMgmEditor({ content: initial, placeholder: '…' });
<Toolbar editor={editor} />
<EditorContent editor={editor} />
```

> Always sanitize HTML at the trust boundary before passing to `<RichTextRenderer>` (e.g., DOMPurify).
