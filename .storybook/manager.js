// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import iidTheme from "./IIDTheme.js";

addons.setConfig({
  theme: iidTheme,
});
