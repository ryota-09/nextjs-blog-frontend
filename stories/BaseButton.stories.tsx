import Button from "../components/atoms/Button/BaseButton"
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "BaseButton",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "続きを読む" };

export const Secondary = Template.bind({});
Secondary.args = { children: "続きを読む", onClick: () => alert("テストクリック")  };
