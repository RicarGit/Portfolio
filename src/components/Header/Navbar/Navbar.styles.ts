import styled from "styled-components"

export const Container = styled.nav`
  display: flex;
  align-items: center;
`

export const MenuLink = styled.a`
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: turquoise;

  &.active {
    font-size: 40px;
    -webkit-text-stroke: 1.5px turquoise;
    color: transparent;
  }
`