import styled from "styled-components";
import { device } from "../Layout/Layout.styles";
export const LoginWrapper = styled.section`
  margin: 4% auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(630px, 1fr));
  background: var(--darker-white);
  border-radius: 20px;

  @media ${device.laptopS} {
    width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.tabletS} {
    width: 40rem;
  }
  @media only screen and (max-width: 27em) {
    width: 33rem;
  }
`;
export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 6rem;
  height: 100%;
  width: 100rem;

  @media ${device.laptopS} {
    width: 0;
    display: flex;
    justify-content: center;
  }
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  height: 100%;
  z-index: 2;
  border-top-left-radius: 20px;

  border-bottom-left-radius: 20px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 134, 130, 0.68);
    z-index: 3;
    border-top-left-radius: 20px;

    border-bottom-left-radius: 20px;
  }

  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    border-top-left-radius: 20px;

    border-bottom-left-radius: 20px;
  }

  @media ${device.laptopS} {
    display: none;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    @media ${device.laptopS} {
      font-size: 2rem;
    }
  }
  h2{
    @media ${device.laptopS} {
      font-size: 1.8rem;
    }
`;

export const FormInputWrapper = styled.div`
  width: 30rem;
  padding: 2rem 0;

  form {
    display: grid;
  }

  label {
    font-size: 1.8rem;
  }

  input {
    height: 4.5rem;
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 1.8rem;
    margin-top: 1rem;
    background-color: var(--colour-white);
    border: 0;
    border-radius: 6px;

    &::placeholder {
      font-size: 1.5rem;
    }

    &:focus {
      border-color: var(--light-green);
    }
  }
`;
export const ButtonWrapper = styled.div`
  margin: 2rem 0;
`;

export const ErrorText = styled.p`
  color: red;
`;
export const ButtonText = styled.button`
  background: transparent;
  color: #b6004d;
  display: inline-block;
  padding: 0;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const SocialIconWrapper = styled.div`
  margin-top: 1rem;

  svg {
    display: inline-block;
    font-size: 1.8rem;
    color: var(--dark-green);
    cursor: pointer;

    &:not(:first-child) {
      margin: 0 10px;
    }
    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.4) translateY(0.4rem);
      color: var(--dark-pink);
    }
  }
`;
