import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Auth from "../components/organisms/Auth";

export default { component: Auth } as ComponentMeta<typeof Auth>;

export const Index: ComponentStoryObj<typeof Auth> = {
  args: {
  
  },
  play: async ({ canvasElement }) => {},
};
