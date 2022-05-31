import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import SingleArticle from "../components/organisms/SingleArticle";

export default { component: SingleArticle } as ComponentMeta<
  typeof SingleArticle
>;

export const Index: ComponentStoryObj<typeof SingleArticle> = {
  args: {
    id: 0,
      title: "テストタイトル",
      sumary: "テストサマリー",
      imgPath: "https://source.unsplash.com/random",
      createdAt: "テストcreatedTime",
      updatedAt: "テストupdatedTime",
  },
  play: async ({ canvasElement }) => {
    
  },
};
