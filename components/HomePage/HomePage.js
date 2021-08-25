import Link from "next/link";
import { Section, Header, Nav, Menu, Logo, ButtonWrapper } from "./HomePage.Styles";
export default function HomePage({ handleLogout }) {
  return (
    <>
      <Section>
        <Header>
          <Logo>
            <h1>Budgetfy App</h1>
          </Logo>
          <Nav>
            <Menu>
              <li>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </Menu>
            <ButtonWrapper>
              <button className='button-animated' onClick={handleLogout}>
                LogOut
              </button>
            </ButtonWrapper>
          </Nav>
        </Header>
        <h2>Welcome </h2>
      </Section>
    </>
  );
}
