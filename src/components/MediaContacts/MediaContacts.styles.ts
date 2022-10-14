import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  animation: fallingIcons 1.5s ease 1.5s forwards;
  
  .mediaIcon {
    position: relative;
    margin: 18px 0 0 18px;
    padding: 4px;
    border-radius: 15%;
    box-shadow: 0 0 6px cyan;
    transition: all .7s ease;
    cursor: pointer;
    
    &:hover {
      background-color: darkcyan;
    }
    
    &:nth-child(even) {
      animation: floatingIcons 1.6s ease-in-out 4s infinite alternate;
    }
    
    &:nth-child(odd) {
      animation: floatingIcons 1.6s ease-in-out 5.6s infinite alternate;
    }
  }
  
  @keyframes fallingIcons {
    from {
      top: -60px;
    }

    to {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes floatingIcons {
    from {
      top: 0;
      box-shadow: 0 0 5px cyan;
    }
    
    to {
      top: 7px;
      box-shadow: 0 0 10px cyan;
    }
  }
`