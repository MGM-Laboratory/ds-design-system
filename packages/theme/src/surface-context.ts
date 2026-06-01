import { createContext } from 'react';
import type { SurfaceTone } from './Surface.js';

export const SurfaceContext = createContext<SurfaceTone>('default');
