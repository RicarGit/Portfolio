import styled from "styled-components"

export const Header = styled.header`
  height: 63px;
  width: 100vw;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: #14181E;
  box-shadow: 0 0 2px 1px cyan;
  animation: headerGlowing 3s infinite 4s alternate;

  .blinking-cat {
    position: absolute;
    z-index: -1;
    left: 0;
    animation: catAnimation 2.5s ease-in-out 6s forwards;
  }

  @keyframes headerGlowing {
    from {
      box-shadow: 0 0 6px 1px cyan;
    }

    to {
      box-shadow: 0 0 14px 2px cyan;
    }
  }
  
  @keyframes catAnimation {
    from {
      top: 0;
    }
    to {
      top: -59px;
    }
  }
`