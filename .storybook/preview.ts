import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: {
        ...themes.light,
        fontBase: '"Figtree", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        fontCode: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
      },
    },
    layout: 'padded',
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Foundations', 'Components'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
