/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories/**/*.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.server = {
      ...config.server,
      hmr: {
        port: 6006,
        host: 'd11-theme-test.ddev.site'
      }
    };
    return config;
  },
};
export default config;
