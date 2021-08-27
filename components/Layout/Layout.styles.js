import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    --colour-white: #fff;
    --darker-white: #f5f5f5;
    --bg-colour: #ddd;
    --green: #02403e;
    --dark-green: #028682;
    --colour-black: #000;
    --dark-pink: #E861A4;
    --light-pink: #FF6F8D;
    --light-orange: #FDE8D0;
    --lighter-pink: rgba(232, 97, 164, 0.52);
    --pink-shadow: 0px 3px 10px rgba(232, 97, 164, 0.2);
    --big-shadow: 0px 8px 30px rgba(0, 0, 0, 0.1);
    --medium-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    --button-shadow: 0px 3px 20px rgba(107, 233, 229, 0.3);
    --button_Hover-shadow: 0px 3px 20px rgba(182, 0, 77, 0.3);
    --light-green: #6be9e5;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1.6px;
    font-size: 1.6rem;
    height: 100vh;
    background-color: var(--bg-color);
  }
  
  
  }

  ::selection {
    background: var(--dark-pink);
  }


  button {
    border: none;
    padding: 1.4rem 3.6rem;
  }

  .center {
    display: inline-block;
    margin: 3rem auto;
  }

  .button-animated {

    display: inline-block;
    background-color: var(--dark-green);
    color: var(--colour-white);
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
    letter-spacing: 1.7px;
    border-radius: 50px;
    margin-bottom: 2rem;
    box-shadow: var(--button-shadow);


    &:hover {
      transition: all .3s cubic-bezier(.88, .17, .05, 1);
      background-color: var(--dark-pink);
      text-decoration: none;
      transform: translateY(-2px);
      box-shadow: var(--button_Hover-shadow);
    }

    &:active {
      transition: all .3s cubic-bezier(.88, .17, .05, 1);
      transform: translateY(3px);
    }

  }

  .menuOpen {
    display: block;
  }

  .menuClosed {
    display: none;
  }


  footer {
    text-align: center;
    letter-spacing: 2px;
    z-index: 2000;
    font-size: clamp(1.5rem, 40%, 6rem);


    a {

      text-decoration: none;
      color: #004947;
    }
  }

  

`;

export default GlobalStyles;

export const Container = styled.main``;

export const device = {
  mobileS: `only screen and (max-width: 20em)`, //320px
  mobileM: `only screen and (max-width: 23.44em)`, //375px
  mobileL: `only screen and (max-width: 28em)`, //450px
  tabletS: `only screen and (max-width: 37em)`, //600px
  tablet: `only screen and (max-width: 48em)`, //768px
  laptopS: `only screen and (max-width: 65em)`, //1050px
  laptopM: `only screen and (max-width: 75em)`, //1200px
  laptopL: `only screen and (max-width: 90em)`, //1400px
  Mlaptop: `only screen and (min-width: 90em)`, //1400px
  desktop: `only screen and (min-width: 112.5em)`, //1800px
};
