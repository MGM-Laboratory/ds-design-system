import * as React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { cn } from '@labmgm/utils';

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof RadixSlider.Root> {}

export const Slider = React.forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>(
  function Slider({ className, ...rest }, ref) {
    return (
      <RadixSlider.Root
        ref={ref}
        className={cn('relative flex w-full touch-none items-center select-none', className)}
        {...rest}
      >
        <RadixSlider.Track className="bg-line relative h-1.5 grow overflow-hidden rounded-full">
          <RadixSlider.Range className="bg-surface-inverse absolute h-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="border-surface-inverse bg-bg shadow-1 focus-visible:ring-focus block h-5 w-5 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none" />
      </RadixSlider.Root>
    );
  },
);
