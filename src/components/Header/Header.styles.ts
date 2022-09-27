import styled from "styled-components"

export const Header = styled.header`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-top: 2px solid turquoise;

  img {
    position: absolute;
    height: 65px;
    width: 85px;
    left: 0;
    top: -65px;
  }
`