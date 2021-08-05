import Image from "next/image";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import loginImage from "../../public/login-bg.jpg";
import {
  LoginWrapper,
  LoginContainer,
  LoginImageWrapper,
  LoginFormWrapper,
  FormInputWrapper,
  ButtonWrapper,
  ErrorText,
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
    setEmail(emailValue);
    // return emailValue;
  };
  const passwordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    //return passwordValue;
  };

  const signUpHandler = () => {
    setHasAccount(!hasAccount);
  };
  const logInHandler = () => {
    setHasAccount(!hasAccount);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginImageWrapper>
          <Image
            src={loginImage}
            alt='An illustration of a girl sitting on a chair'
          />
        </LoginImageWrapper>
        <LoginFormWrapper>
          {hasAccount ? (
            <div>
              <h1>Welcome Back to Budgetfy</h1>
              <h2>LogIn to your account</h2>
            </div>
          ) : (
            <div>
              <h1>Welcome to Budgetfy</h1>
              <h2>Create your account</h2>
            </div>
          )}
          <form onSubmit={submitHandler}>
            <FormInputWrapper>
              <label htmlFor='email-address'>Enter Your Email address</label>

              <input
                id='email-address'
                type='text'
                name='email-address'
                value={email}
                required
                onChange={emailHandler}
              />
              <ErrorText>{emailError}</ErrorText>
            </FormInputWrapper>
            <FormInputWrapper>
              <label htmlFor='password'> Enter your password</label>

              <input
                id='password'
                type='password'
                name='password'
                required
                value={password}
                onChange={passwordHandler}
              />
              <ErrorText>{passwordError}</ErrorText>
            </FormInputWrapper>
            <ButtonWrapper>
              {hasAccount ? (
                <>
                  <button
                    onClick={handleLogin}
                    className='button-animated'
                    type='submit'
                  >
                    Login
                  </button>
                  <p>
                    Don't have an account ?<span onClick={logInHandler}>SignUp</span>{" "}
                  </p>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignup}
                    className='button-animated'
                    type='submit'
                  >
                    SignUp
                  </button>
                  <p>
                    Do you have an account?{" "}
                    <span onClick={signUpHandler}>LogIn</span>{" "}
                  </p>
                </>
              )}
            </ButtonWrapper>
          </form>
          <div>
            {hasAccount ? <p>Or Login with</p> : <p>Or SignUp with</p>}
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
