import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{
  --colour-white: #fff;
  --bg-colour: #eee;
  --dark-pink: #E861A4;
  --light-pink: #FF6F8D;
  --light-orange: #FDE8D0;
  --lighter-pink:  rgba(232, 97, 164, 0.52);
  --pink-shadow:  0px 3px 10px rgba(232, 97, 164, 0.2);
  --big-shadow:  0px 8px 30px rgba(0, 0, 0, 0.1);
  --medium-shadow: 0px 5px 20px  rgba(0, 0, 0, 0.05);
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    
}

body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1.3;
    font-size: 1.6rem; 
    height: 100vh;
    background-color: var(--colour-white);
}

::selection {
	background: var(--dark-pink);
}


button{
  border: none;
  padding: 1.6rem 3rem;
}
.center{
  display: inline-block;
  margin: 3rem auto;
}

.link-animated{
  
		display: inline-block;
		color: var(--colour-pink);
		text-decoration: none;

		&:hover {
			transition: all .3s cubic-bezier(.88, .17, .05, 1) ;
			color: var(--light-pink);
			text-decoration: none;
			transform: translateY(-2px);
		}

		&:active {
			transition: all .3s cubic-bezier(.88, .17, .05, 1) ;
			transform: translateY(3px);
		}
	
}






 .menuOpen{
   display: block;
 }
 .menuClosed{
   display: none;
 }


footer{
  text-align: center;
  letter-spacing: 2px;
  z-index: 2000;
  font-size: clamp(1.5rem, 40%, 6rem);
  
  
  a{
   
    text-decoration: none;
  }
}

`;

export default GlobalStyles;

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	z-index: 1000;
`;
