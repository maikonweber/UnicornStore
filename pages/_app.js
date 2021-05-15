import '../styles/globals.css'
import Layout from "../components/layout"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
  <title> UnicornStore </title> 
    </Head>
  <Layout>
 <Component {...pageProps} />
  </Layout>
  </>
  )
}


export default MyApp
