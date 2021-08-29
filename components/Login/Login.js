import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGoogle, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import loginImage from "../../public/login-bg.jpg";

import fire, {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
} from "../../firebase/firebase";
import {
  LoginWrapper,
  LoginContainer,
  LoginImageWrapper,
  LoginFormWrapper,
  FormInputWrapper,
  ButtonWrapper,
  ErrorText,
  ButtonText,
  SocialIconWrapper,
} from "./Login.styles.js";

export default function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError("Your email address appears to be malformed.");
            break;
          case "auth/user-disabled":
            setEmailError("User with this email has been disabled.");
            break;
          case "auth/user-not-found":
            setEmailError("The user of this email doesn't exist.");
            break;

          case "auth/wrong-password":
            setEmailError("Your password is not correct");
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError("Your email address is already in use, please login.");
            break;
          case "auth/invalid-email":
            setEmailError("Your email address is invalid.");
            break;
          case "auth/weak-password":
            setPasswordError(
              "Your password is short and weak add characters (@$*?!) and numbers"
            );
            break;
        }
      });
  };

  const googleLogIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        let credential = res.credential;

        // The signed-in user info.
        let user = res.user;
      })
      .catch((err) => {
        // Handle Errors here.
        let errorCode = err.code;
        let errorMessage = err.message;
        // The email of the user's account used.
        let email = err.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = err.credential;
        console.log(errorMessage);
      });
  };
  const facebookLogIn = () => {
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const twitterLogIn = () => {
    auth
      .signInWithPopup(twitterProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const githubLogIn = () => {
    auth
      .signInWithPopup(githubProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
    // clearInputs();
    // clearErrors();
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
                placeholder='Enter your email'
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
                placeholder='Enter your password'
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
                    Don't have an account ?
                    <ButtonText onClick={logInHandler}>SignUp</ButtonText>
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
                    <ButtonText onClick={signUpHandler}>LogIn</ButtonText>
                  </p>
                </>
              )}
            </ButtonWrapper>
          </form>
          <div>
            {hasAccount ? <p>Or Login with</p> : <p>Or SignUp with</p>}
            <SocialIconWrapper>
              <FaGoogle onClick={googleLogIn} />
              <FaFacebookF onClick={facebookLogIn} />
              <FaTwitter onClick={twitterLogIn} />
              <FaGithub onClick={githubLogIn} />
            </SocialIconWrapper>
          </div>
        </LoginFormWrapper>
      </LoginContainer>
    </LoginWrapper>
  );
}
