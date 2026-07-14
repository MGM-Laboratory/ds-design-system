import type { MDXComponents } from 'mdx/types';
import { Code, CodeBlock } from '@labmgm/react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-4 mt-8 font-display text-display-lg">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-3 mt-10 font-display text-h1">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-2 mt-6 font-display text-h2">{children}</h3>,
    p: ({ children }) => (
      <p className="my-4 max-w-prose text-body leading-relaxed text-ink-2">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-1 pl-6 text-body text-ink-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-1 pl-6 text-body text-ink-2">{children}</ol>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brand-blue underline underline-offset-[3px] hover:text-brand-blue/80"
      >
        {children}
      </a>
    ),
    code: ({ children }) => <Code>{children}</Code>,
    pre: ({ children }) => {
      const inner = (children as { props?: { children?: string } })?.props?.children ?? '';
      return <CodeBlock code={String(inner)} />;
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-brand-blue pl-4 italic text-ink-2">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-line" />,
    ...components,
  };
}
