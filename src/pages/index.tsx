import Head from 'next/head'
import styled from 'styled-components'

import { Header, Apresentation } from '~/components'

const Main = styled.main`
  max-width: 1300px;
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

      <Apresentation />
      <Header />
      <Main>

      </Main>
    </>
  )
}