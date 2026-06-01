import * as React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '@labmgm/tokens/tokens.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#ffffff' },
        { name: 'muted', value: '#f7f7f5' },
        { name: 'inverse', value: '#0e1116' },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { default: 'default', muted: 'muted', inverse: 'inverse' },
      defaultTheme: 'default',
      attributeName: 'data-surface',
      parentSelector: 'body',
    }),
    (Story) => (
      <div className="font-sans text-ink antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
