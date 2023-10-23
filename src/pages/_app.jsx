import Layout from '@/Components/layout/Layout'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
