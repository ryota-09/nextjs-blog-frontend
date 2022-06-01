import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import BlogHeader from "../components/organisms/BlogHeader"

export default { component: BlogHeader } as ComponentMeta<
  typeof BlogHeader
>;

export const Index: ComponentStoryObj<typeof BlogHeader> = {
  args: {
    title: "テストブログtitle",
    summary: "テストブログsummary",
    imgPath: "https://source.unsplash.com/random",
    createdAt: "テストブログcreatedAt",
    updatedAt: "テストブログupdatedAt",
  },
  play: async ({ canvasElement }) => {
    
  },
};
