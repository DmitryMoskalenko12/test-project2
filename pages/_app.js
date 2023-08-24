import '@/styles/globals.scss'
import Head from 'next/head'
import Layout from '@/components/layout/layout'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Test project 2</title>
        <meta name="description" content="Test project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
