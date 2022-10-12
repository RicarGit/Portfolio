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

  .blinking-cat {
    position: absolute;
    z-index: -1;
    left: 0;
    animation: catAnimation 2.5s ease-in-out 5s forwards;

    @keyframes catAnimation {
      from {
        top: 0;
      }
      to {
        top: -59px;
      }
    }
  }
`