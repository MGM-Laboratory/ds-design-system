import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@labmgm/utils';
import { IconButton } from '../Button/IconButton.js';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show prev/next arrow buttons. */
  arrows?: boolean;
  /** Show dot indicators. */
  dots?: boolean;
  /** Embla options. */
  options?: Parameters<typeof useEmblaCarousel>[0];
}

/** Horizontal carousel using Embla. Children are the slides. */
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
  { arrows = true, dots = false, options, className, children, ...rest },
  ref,
) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, ...options });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCount(emblaApi.scrollSnapList().length);
    };
    update();
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi]);

  return (
    <div ref={ref} className={cn('relative', className)} {...rest}>
      <div className="overflow-hidden" ref={emblaRef as unknown as React.RefObject<HTMLDivElement>}>
        <div className="flex gap-4">
          {React.Children.map(children, (child, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
              {child}
            </div>
          ))}
        </div>
      </div>
      {arrows && (
        <>
          <IconButton
            variant="secondary"
            size="icon-sm"
            label="Previous slide"
            icon={<ChevronLeft size={16} />}
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
          <IconButton
            variant="secondary"
            size="icon-sm"
            label="Next slide"
            icon={<ChevronRight size={16} />}
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </>
      )}
      {dots && count > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-200',
                i === selectedIndex ? 'w-6 bg-ink' : 'w-1.5 bg-line-strong',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export type { UseEmblaCarouselType };
