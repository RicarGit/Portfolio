import Head from 'next/head'
import styled from 'styled-components'

import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'

const Main = styled.main`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  color: #fff;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Main>

      </Main>
    </>
  )
}