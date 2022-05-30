import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import SimpleForm from './SimpleForm'

export default { component: SimpleForm } as ComponentMeta<typeof SimpleForm>

export const Index: ComponentStoryObj<typeof SimpleForm> = {
  args: {
    title: 'お名前フォーム'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(canvas.getByRole('textbox'), 'yukishinonome', {
      delay: 100
    })
    userEvent.click(canvas.getByText('Submit'))
  }
}
