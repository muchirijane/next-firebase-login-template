import styled from "styled-components";
export const Section = styled.section`
  height: 100vh;
  h2 {
    text-align: center;
    margin-top: 4rem;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--color-white);
  box-shadow: var(--medium-shadow);
`;
export const Logo = styled.div``;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  margin-right: 5rem;
  li {
    list-style: none;
    &:not(:last-child) {
      padding-right: 2rem;
    }
    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: var(--dark-pink);
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  button {
    margin: 0;
    font-size: 1.6rem;
    padding: 1.2rem 2rem;
  }
`;
