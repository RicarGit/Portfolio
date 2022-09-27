import styled from "styled-components"

export const Apresentation = styled.section`
  height: 92vh;
  width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  img {
    border-radius: 50%;
    rotate: 45deg;
    position: absolute;
    right: 0;
    margin-right: 30px;
    border: 2px solid turquoise;
    z-index: -1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: -90px;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background-color: turquoise;
    z-index: -999;
  }
`

export const HeroInfoContainer = styled.div`
  width: inherit;
`

export const HeroWelcome = styled.h2`
  color: turquoise;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-bottom: 25px;
`

export const HeroApresentation = styled.h1`
  color: turquoise;
  font-size: 76px;
  font-weight: bold;
  letter-spacing: 1.6px;
  
  span {
    -webkit-text-stroke: 2px turquoise;
    color: transparent;
  }
`

export const HeroButtons = styled.button`
  padding: 15px 45px;
  margin-right: 20px;
  margin-top: 80px;
  color: turquoise;
  background-color: #000;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 25px;
  border: 2px solid turquoise;
  transition: all .5s ease-in;
  cursor: pointer;

  &:hover {
    background-color: turquoise;
    color: #000;
  }
`