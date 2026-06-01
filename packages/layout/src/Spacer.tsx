import * as React from 'react';

export interface SpacerProps {
  /** Flex axis growth. Default 1. */
  grow?: number;
  className?: string;
}

/** Eat remaining flex space. Use inside <Stack> / <Flex> to push siblings apart. */
export function Spacer({ grow = 1, className }: SpacerProps) {
  return <div className={className} style={{ flexGrow: grow }} aria-hidden="true" />;
}
