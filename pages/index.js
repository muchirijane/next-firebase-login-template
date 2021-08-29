import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login/Login";
import fire from "../firebase/firebase";
import HomePage from "../components/HomePage/HomePage";
export default function Home() {
  const [user, setUser] = useState("");

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, [authListener]);

  return (
    <Layout>{user ? <HomePage handleLogout={handleLogout} /> : <Login />}</Layout>
  );
}
