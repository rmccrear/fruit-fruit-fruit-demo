/** @type { import('@storybook/react').Preview } */
// Import CSS here
import "../src/styles/globals.css";
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
