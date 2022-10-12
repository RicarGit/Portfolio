import styled from "styled-components"

export const Apresentation = styled.section`
  height: 92vh;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  .my-photo {
    background-color: #14181E;
    border-radius: 50%;
    rotate: 45deg;
    position: absolute;
    right: 0;
    margin-right: 30px;
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
    background-color: cyan;
    z-index: -999;
  }
`

export const HeroInfoContainer = styled.div`
  width: inherit;
`

export const HeroWelcome = styled.h2`
  color: cyan;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-bottom: 25px;

  span {
    color: #eee;
    font-weight: bold;
    background-color: #B71825;
    border-radius: 4px;
  }
`

export const HeroApresentation = styled.h1`
  color: cyan;
  font-size: 76px;
  font-weight: bold;
  letter-spacing: 1.6px;
  
  span {
    -webkit-text-stroke: 2px cyan;
    color: transparent;
  }
`

export const HeroButtons = styled.button`
  padding: 15px 45px;
  margin-right: 20px;
  margin-top: 90px;
  color: cyan;
  background-color: #14181E;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 0 10px cyan;
  transition: all .7s ease;
  cursor: pointer;

  &:hover {
    background-color: darkcyan;
  }

  &:nth-child(even) {
      animation: glowingEven 1.6s ease-in-out infinite alternate;

      @keyframes glowingEven {
        from {
          box-shadow: 0 0 7px cyan;
        }
        
        to {
          box-shadow: 0 0 15px cyan;
        }
      }
    }

    &:nth-child(odd) {
      animation: glowingOdd 1.6s ease-in-out infinite alternate;

      @keyframes glowingOdd {
        from {
          box-shadow: 0 0 15px cyan;
        }
        
        to {
          box-shadow: 0 0 7px cyan;
        }
      }
    }
`