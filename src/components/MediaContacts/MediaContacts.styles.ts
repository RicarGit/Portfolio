import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

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
      animation: floatingEven 1.6s ease-in-out infinite alternate;

      @keyframes floatingEven {
        from {
          top: 0;
          box-shadow: 0 0 5px cyan;
        }
        
        to {
          top: 7px;
          box-shadow: 0 0 10px cyan;
        }
      }
    }

    &:nth-child(odd) {
      animation: floatingOdd 1.6s ease-in-out infinite alternate;
      
      @keyframes floatingOdd {
        from {
          top: 7px;
          box-shadow: 0 0 10px cyan;
        }

        to {
          top: 0;
          box-shadow: 0 0 5px cyan;
        }
      }
    }
  }
`