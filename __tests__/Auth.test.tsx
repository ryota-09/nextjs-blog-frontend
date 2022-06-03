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

describe('organisms/Auth.tsx', () => {
  it('正常系: ログインしている状態の時、indexページに遷移できる', async () => {
    const { page } = await getPage({
      route: '/admin-page',
    })
    render(page)
    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')

    expect(await screen.findByText('blog page')).toBeInTheDocument()
  })
  it('異常系: ログイン失敗した時、そのページから遷移させない', async () => {
    server.use(
      rest.post(
        "ここにurl",
        (req, res, ctx) => {
          return res(ctx.status(400))
        }
      )
    )
    const { page } = await getPage({
      route: '/signin',
    })
    render(page)
    expect(await screen.findByText('Login')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('Username'), 'user1')
    userEvent.type(screen.getByPlaceholderText('Password'), 'dummypw')
    
    expect(await screen.findByText('Login Error')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.queryByText('Nextjs Blog')).toBeNull()
  })
})
