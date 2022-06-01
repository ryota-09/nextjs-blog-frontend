import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import BlogBody from "../components/organisms/BlogBody";

export default { component: BlogBody } as ComponentMeta<typeof BlogBody>;

export const Index: ComponentStoryObj<typeof BlogBody> = {
  args: {
    contentTitle: "テストボディーcontentTitle",
    contentImg: "テストボディーcontentImg",
    contentBody: "テストボディーcontentBody",
  },
  play: async ({ canvasElement }) => {},
};
