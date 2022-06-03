import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()


const handler = [
  rest.post(
    "ここにurl",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          access: '123abc',
        })
      )
    }
  ),
  rest.post(
    "ここにurl",
    (req, res, ctx) => {
      return res(ctx.status(200))
    }
  ),
]

const server = setupServer(...handler)
beforeAll(() => {
  server.listen()
})
beforeEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('adminページのテスト', () => {
  it('ログインしている状態の時、indexページに遷移できる', async () => {
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)
    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')

    userEvent.click(screen.getByText('Login with JWT'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
  })
  it('ログイン失敗した時、そのページから遷移させない', async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/jwt/create/`,
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      )
    )
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)
    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')
    userEvent.click(screen.getByText('Login with JWT'))
    expect(await screen.findByText('Login Error')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.queryByText('blog page')).toBeNull()
  })
  it('サインアップ画面に切り替わるかどうか', async () => {
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)

    expect(await screen.findByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Login with JWT')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('mode-change'))
    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.getByText('Create new user')).toBeInTheDocument()
  })
  it('ユーザー登録が成功した時、ログインも同時に行える', async () => {
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)

    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('mode-change'))
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')
    userEvent.click(screen.getByText('Create new user'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
  })
  it('ユーザー登録が失敗したときのテスト', async () => {
    server.use(
      rest.post(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/register/`,
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      )
    )
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)
    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('mode-change'))
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')
    userEvent.click(screen.getByText('Create new user'))
    expect(await screen.findByText('Registration Error'))
    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.queryByText('blog page')).toBeNull()
  })
})
