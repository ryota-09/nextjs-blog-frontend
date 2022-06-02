import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import EditHeader from "../components/organisms/EditHeader"

export default { component: EditHeader } as ComponentMeta<
  typeof EditHeader
>;

export const Index: ComponentStoryObj<typeof EditHeader> = {
  args: {
    
  },
  play: async ({ canvasElement }) => {
    
  },
};
