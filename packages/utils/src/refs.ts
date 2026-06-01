import * as React from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

function assignRef<T>(ref: PossibleRef<T>, value: T): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.MutableRefObject<T>).current = value;
  }
}

export function composeRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void {
  return (node) => {
    for (const ref of refs) assignRef(ref, node);
  };
}

export function useComposedRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(composeRefs(...refs), refs);
}
