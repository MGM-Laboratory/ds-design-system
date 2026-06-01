import type { MDXComponents } from 'mdx/types';
import { Code, CodeBlock } from '@labmgm/react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-display-lg mb-4 mt-8 font-display">{children}</h1>,
    h2: ({ children }) => <h2 className="text-h1 mb-3 mt-10 font-display">{children}</h2>,
    h3: ({ children }) => <h3 className="text-h2 mb-2 mt-6 font-display">{children}</h3>,
    p: ({ children }) => <p className="my-4 max-w-prose text-body text-ink-2 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="my-4 list-disc pl-6 text-body text-ink-2 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 list-decimal pl-6 text-body text-ink-2 space-y-1">{children}</ol>,
    a: ({ href, children }) => (
      <a href={href} className="text-brand-blue underline underline-offset-[3px] hover:text-brand-blue/80">
        {children}
      </a>
    ),
    code: ({ children }) => <Code>{children}</Code>,
    pre: ({ children }) => {
      const inner = (children as { props?: { children?: string } })?.props?.children ?? '';
      return <CodeBlock code={String(inner)} />;
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-brand-blue pl-4 italic text-ink-2">{children}</blockquote>
    ),
    hr: () => <hr className="my-8 border-line" />,
    ...components,
  };
}
