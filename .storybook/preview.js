/** @type { import('@storybook/html-vite').Preview } */

import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../css/style.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
