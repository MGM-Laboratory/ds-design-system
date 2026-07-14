import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@labmgm/utils';

export const Accordion = RadixAccordion.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(function AccordionItem({ className, ...rest }, ref) {
  return (
    <RadixAccordion.Item ref={ref} className={cn('border-b border-line', className)} {...rest} />
  );
});

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(function AccordionTrigger({ className, children, ...rest }, ref) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between gap-2 py-4 text-left text-body font-medium text-ink',
          'transition-all [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...rest}
      >
        {children}
        <ChevronDown size={20} className="shrink-0 text-ink-3 transition-transform duration-200" />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(function AccordionContent({ className, children, ...rest }, ref) {
  return (
    <RadixAccordion.Content
      ref={ref}
      className={cn(
        'overflow-hidden text-body text-ink-2',
        'data-[state=closed]:animate-fade-in data-[state=open]:animate-fade-in',
        className,
      )}
      {...rest}
    >
      <div className="pb-4">{children}</div>
    </RadixAccordion.Content>
  );
});
