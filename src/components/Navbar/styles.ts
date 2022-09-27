import styled from "styled-components"

export const Container = styled.nav`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-top: 3px solid turquoise;

  img {
    position: absolute;
    height: 65px;
    width: 85px;
    left: 0;
    top: -65px;
  }
`

export const MenuLink = styled.a`
  display: flex;
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  color: turquoise;

  &.active {
    font-size: 40px;
  }
`