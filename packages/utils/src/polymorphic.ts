import type * as React from 'react';

export type AsProps<E extends React.ElementType> = { as?: E };

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

export type PolymorphicComponentProps<
  E extends React.ElementType,
  Props = Record<string, never>,
> = AsProps<E> &
  Props &
  Omit<React.ComponentPropsWithoutRef<E>, keyof (AsProps<E> & Props)>;
