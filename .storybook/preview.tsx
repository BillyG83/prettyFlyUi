import React from "react";
import type { Preview } from "@storybook/react";
import "../lib/styles/global.css";
import "./styles.css";

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      return <Story />;
    },
  ],
};

export default preview;
