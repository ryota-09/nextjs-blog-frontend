import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Edit from "../pages/edit"

export default { component: Edit } as ComponentMeta<
  typeof Edit
>;

export const Index: ComponentStoryObj<typeof Edit> = {
  args: {
    
  },
  play: async ({ canvasElement }) => {
    
  },
};
