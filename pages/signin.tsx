import { FC } from 'react'

import Auth from '../components/organisms/Auth'
import Layout from '../components/organisms/Layout'

const Signin: FC = () => {
  return (
    <>
      <Layout tabTitle="Sign in">
        <Auth />
      </Layout>
    </>
  )
}
export default Signin
