import { useEffect, useState } from 'react';

/**
 * True after the user has used the keyboard for the most recent interaction.
 * Useful for showing focus rings selectively in custom components.
 */
export function useFocusVisible(): boolean {
  const [keyboard, setKeyboard] = useState(false);

  useEffect(() => {
    function onKey() {
      setKeyboard(true);
    }
    function onPointer() {
      setKeyboard(false);
    }
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onPointer);
    window.addEventListener('pointerdown', onPointer);
    window.addEventListener('touchstart', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onPointer);
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('touchstart', onPointer);
    };
  }, []);

  return keyboard;
}
