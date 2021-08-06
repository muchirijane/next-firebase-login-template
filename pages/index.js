import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import fire, {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
} from "../firebase/firebase";
import HomePage from "../components/HomePage/HomePage";
export default function Home() {
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
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const googleLogIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
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
      {user ? (
        <HomePage handleLogout={handleLogout} />
      ) : (
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
          googleLogIn={googleLogIn}
          facebookLogIn={facebookLogIn}
          twitterLogIn={twitterLogIn}
          githubLogIn={githubLogIn}
        />
      )}
    </Layout>
  );
}
