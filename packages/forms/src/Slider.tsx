import * as React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import { cn } from '@labmgm/utils';

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof RadixSlider.Root> {}

export const Slider = React.forwardRef<React.ElementRef<typeof RadixSlider.Root>, SliderProps>(
  function Slider({ className, ...rest }, ref) {
    return (
      <RadixSlider.Root
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...rest}
      >
        <RadixSlider.Track className="relative h-1.5 grow overflow-hidden rounded-full bg-line">
          <RadixSlider.Range className="absolute h-full bg-surface-inverse" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block h-5 w-5 rounded-full border-2 border-surface-inverse bg-bg shadow-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2" />
      </RadixSlider.Root>
    );
  },
);
