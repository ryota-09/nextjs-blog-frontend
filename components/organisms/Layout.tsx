import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

//Headコンポーネント用の文字
type Props = {
  tabTitle: string
}

/**
 * headerを含むレイアウトのcomponent.
 * 
 * @param props
 * @returns FC
 */
const Layout: FC<Props> = ({ tabTitle, children }) => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              data-testid="home-nav"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-400 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Next Blog</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/about">
              <a className="mr-5 hover:text-gray-900" data-testid="about-nav">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900" data-testid="contact-nav">
                Contact
              </a>
            </Link>
          </nav>
          <button className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
            <Link href="/signin">
              <a className="mr-5 hover:text-gray-900" data-testid="signin-nav">
                Sign in
              </a>
            </Link>
          </button>
        </div>
      </header>
      <main className='flex-grow'>{children}</main>
      <footer className="w-full h-12 mt-20 flex justify-center items-center border-t">
        <span className='flex items-center'>&copy; 2022  Next Blog 制作チーム</span>
      </footer>

    </div>
    </>
  )
}
export default Layout
