import Menu from "../components/molecules/Menu"
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "続きを読む" };

export const Secondary = Template.bind({});
Secondary.args = { children: "続きを読む"  };
