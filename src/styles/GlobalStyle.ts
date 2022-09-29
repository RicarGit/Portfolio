import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    scroll-behavior: smooth;
  }
  
  body {
    background-color: #14181E;
  }
`

export default GlobalStyle