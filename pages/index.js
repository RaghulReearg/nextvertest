import Head from 'next/head'
import { Layout } from '../comps/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ninja List</title>
      </Head>
      <Layout >
        <h1>Hello Next JS</h1>
      </Layout >
    </>
  )
}
