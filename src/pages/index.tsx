import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div style={{
          fontSize: '90px',
          fontWeight: 'bolder',
          fontFamily: 'sans-serif',
          backgroundImage: 'linear-gradient(180deg, #ffff00, #08ce82)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          lineHeight: '90px'
        }}>
          Let's Start
        </div>
      </Main>
    </>
  )
}