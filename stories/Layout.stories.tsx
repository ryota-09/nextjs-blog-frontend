import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Layout from '../components/Layout'
import { expect } from '@storybook/jest'

export default { component: Layout } as ComponentMeta<typeof Layout>

export const CompLayout: ComponentStoryObj<typeof Layout> = {
  args: {
    tabTitle: 'タイトル',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('about-nav'))
    expect(await canvas.findByText('About')).toBeInTheDocument()
    await userEvent.click(canvas.getByTestId('contact-nav'))
    expect(await canvas.findByText('Contact')).toBeInTheDocument()
    await userEvent.click(canvas.getByTestId('signin-nav'))
    expect(await canvas.findByText('Sign in')).toBeInTheDocument()
    await userEvent.click(canvas.getByTestId('home-nav'))
    expect(await canvas.findByText('Hello Nextjs')).toBeInTheDocument()
  },
}
