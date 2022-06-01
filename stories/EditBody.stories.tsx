import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import EditBody from "../components/organisms/EditBody"

export default { component: EditBody } as ComponentMeta<
  typeof EditBody
>;

export const Index: ComponentStoryObj<typeof EditBody> = {
  args: {
    isUpdated: false,
    index: 0,
    content: {
      id: 0,
      contentTitle: "タイトル１",
      contentImg: "/dummy",
      contentBody: "ボディー１",
      orderNumber: 0,
      articleId: 0
    },
  },
  play: async ({ canvasElement }) => {
    
  },
};
