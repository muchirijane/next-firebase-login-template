import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import fire from "../firebase/firebase";
export default function Home() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("jane tracy");
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
              "Your password is weak add characters (@$*?!) and numbers"
            );
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        clearInputs();
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <Layout>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
    </Layout>
  );
}
