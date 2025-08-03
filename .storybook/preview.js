/** @type { import('@storybook/html-vite').Preview } */

import { INITIAL_VIEWPORTS } from 'storybook/viewport';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;