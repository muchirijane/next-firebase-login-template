import Image from "next/image";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import loginImage from "../../public/Girl.svg";
import {
  LoginWrapper,
  LoginContainer,
  LoginImageWrapper,
  LoginFormWrapper,
  FormInputWrapper,
  ButtonWrapper,
} from "./Login.styles.js";
export default function Login({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  emailError,
  passwordError,
  hasAccount,
  setHasAccount,
}) {
  const emailHandler = (e) => {
    const emailValue = e.target.value;
    return emailValue;
  };
  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginImageWrapper>
          <Image
            src={loginImage}
            alt="An illustration of a girl sitting on a chair"
          />
        </LoginImageWrapper>
        <LoginFormWrapper>
          <h1>Welcome Back to Budgetfy</h1>
          <h2>Login to your account</h2>
          <form>
            <FormInputWrapper>
              <label htmlFor="email-address">Enter Your Email address</label>

              <input
                id="email-address"
                type="text"
                name="email-address"
                value={email}
                required
                setEmail={emailHandler}
              />
              <p>{emailError}</p>
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor="password"> Enter your password</label>

              <input
                id="password"
                type="password"
                name="password"
                value={password}
              />
              <p>{passwordError}</p>
            </FormInputWrapper>
            <ButtonWrapper>
              <button className="link-animated" type="submit">
                Login
              </button>
            </ButtonWrapper>
          </form>
          <div>
            <p>Or sign in with</p>
            <div>
              <FaGoogle />
              <FaFacebookF />
            </div>
          </div>
        </LoginFormWrapper>
      </LoginContainer>
    </LoginWrapper>
  );
}
