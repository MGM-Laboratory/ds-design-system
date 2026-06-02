# `@labmgm/rich-text`

> Tiptap-based rich text editor and HTML renderer.

[![npm version](https://img.shields.io/npm/v/%40labmgm%2Frich-text?style=flat&color=3a6dc5)](https://www.npmjs.com/package/@labmgm/rich-text)

```bash
pnpm add @labmgm/rich-text
```

> [Storybook (Rich text)](https://mgm-laboratory.github.io/ds-design-system/?path=/docs/rich-text-editor-renderer--editor) · [Source](./src)

---

## Editor + Renderer

```tsx
import { RichTextEditor, RichTextRenderer } from '@labmgm/rich-text';

<RichTextEditor
  defaultValue="<p>Hello</p>"
  onUpdate={(html) => setValue(html)}
  placeholder="Write something brilliant…"
  showToolbar
  minHeight={200}
/>

<RichTextRenderer html={savedHtml} />
```

Bundled extensions: **StarterKit, Link, Image, Underline, Placeholder, Table, YouTube, Mention**.

## Advanced — custom editor wiring

```tsx
import { useMgmEditor, mgmExtensions, Toolbar, EditorContent } from '@labmgm/rich-text';

const editor = useMgmEditor({
  extensions: mgmExtensions('Type here…'),
  content: initialHtml,
  onUpdate: ({ editor }) => save(editor.getHTML()),
});

<Toolbar editor={editor} />
<EditorContent editor={editor} />
```

## Security

> ⚠️ **Always sanitize HTML at the trust boundary** before passing it to `<RichTextRenderer>` (e.g., DOMPurify, isomorphic-dompurify, rehype-sanitize). The renderer uses `dangerouslySetInnerHTML` directly.

## License

MIT © MGM Laboratory
