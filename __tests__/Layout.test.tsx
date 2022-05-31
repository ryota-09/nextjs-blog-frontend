import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

describe('components/Layout.tsx', () => {
  test('正常系: ナビゲーションバーをクリックすると各ページに正しく遷移する。', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)

    await userEvent.click(screen.getByTestId('about-nav'))
    expect(await screen.findByText('About')).toBeInTheDocument()
    await userEvent.click(screen.getByTestId('contact-nav'))
    expect(await screen.findByText('Contact')).toBeInTheDocument()
    await userEvent.click(screen.getByTestId('signin-nav'))
    expect(await screen.findByText('Sign In')).toBeInTheDocument()
  })
})
