import "!style-loader!css-loader!sass-loader!../src/assets/iid_main.scss";
import iidTheme from "./IIDTheme.js";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    docs: {
      theme: iidTheme,
    },
  },
};
