import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { select } from "@storybook/addon-knobs";
import { Button } from "./";

import Readme from "./README.md";

const stories = storiesOf("Components | Button", module);
const decoratorOptions = {
  info: {
    text: Readme
  }
};

stories.add(
  "Default",
  () => (
    <Button
      onClick={action("click")}
      type={select("Button Type", ["primary", "default"], "default")}
    >
      Hello Button
    </Button>
  ),
  decoratorOptions
);

stories.add(
  "Emojis",
  () => (
    <Button
      type={select("Button Type", ["primary", "default"], "default")}
      onClick={linkTo("Default")}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ),
  decoratorOptions
);
