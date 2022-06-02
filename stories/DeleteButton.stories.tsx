import DeleteButton from "../components/atoms/Button/DeleteButton"
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "DeleteButton",
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = (args) => <DeleteButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "続きを読む" };

export const Secondary = Template.bind({});
Secondary.args = { children: "続きを読む", onClick: () => alert("テストクリック")  };
