import AddButton from "../components/atoms/Button/AddButton"
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/AddButton.css"

export default {
  title: "Button/AddButton",
  component: AddButton,
} as ComponentMeta<typeof AddButton>;

const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "+" };

// export const Secondary = Template.bind({});
// Secondary.args = { children: "続きを読む"};
