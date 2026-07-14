import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@labmgm/utils';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none',
    'font-sans font-medium tracking-tight',
    'rounded-md border border-transparent',
    'transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out-soft',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'active:translate-y-px',
    'data-[loading=true]:cursor-progress',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-surface-inverse text-white hover:bg-[#3b4150]', 'shadow-1 hover:shadow-2'],
        secondary: ['bg-surface-muted text-ink border-line hover:bg-bg hover:border-line-strong'],
        outline: [
          'bg-transparent text-ink border-line hover:bg-surface-muted hover:border-line-strong',
        ],
        ghost: ['bg-transparent text-ink hover:bg-surface-muted'],
        accent: ['bg-brand-blue text-white hover:bg-brand-blue/90', 'shadow-1'],
        danger: ['bg-brand-red text-white hover:bg-brand-red/90', 'shadow-1'],
        link: ['bg-transparent text-brand-blue underline-offset-4 hover:underline px-0 border-0'],
      },
      size: {
        sm: 'h-8 px-3 text-body-sm',
        md: 'h-10 px-4 text-body',
        lg: 'h-12 px-6 text-body-lg',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /** Render as the child element (composition via Radix Slot). */
  asChild?: boolean;
  /** Show a spinner and set aria-busy. */
  loading?: boolean;
  /** Icon to render before the label. */
  leadingIcon?: React.ReactNode;
  /** Icon to render after the label. */
  trailingIcon?: React.ReactNode;
}

/**
 * Primary action button. CVA variants cover product + marketing surfaces.
 * Composes via `asChild` for polymorphic rendering (`<Button asChild><Link href="…">…</Link></Button>`).
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    asChild,
    variant,
    size,
    fullWidth,
    loading,
    leadingIcon,
    trailingIcon,
    disabled,
    type = 'button',
    className,
    children,
    ...rest
  },
  ref,
) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      type={asChild ? undefined : type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...rest}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {leadingIcon ? <span className="inline-flex shrink-0">{leadingIcon}</span> : null}
          {children}
          {trailingIcon ? <span className="inline-flex shrink-0">{trailingIcon}</span> : null}
        </>
      )}
    </Comp>
  );
});

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.25" opacity="0.2" />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
