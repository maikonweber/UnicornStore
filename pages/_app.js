import '../styles/globals.css'
import Layout from "../components/layout"
import Head from 'next/head'
import { DataProvider } from "../store/GlobalState"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
  <title> UnicornStore </title> 
    </Head>
    <DataProvider>
  <Layout>
 <Component {...pageProps} />
  </Layout>
  </DataProvider>
  </>
  )
}


export default MyApp
