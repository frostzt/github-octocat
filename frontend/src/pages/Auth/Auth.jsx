import { Redirect } from "react-router-dom";
import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/user.context";

// Styling
import styles from "./Auth.module.scss";

// Components
import SignUp from "../../components/Auth/Signup/SignUp";
import SignIn from "../../components/Auth/SignIn/SignIn";

const Auth = () => {
  const [signingIn, setSigningIn] = useState(false);

  const { user } = useContext(AuthContext);

  console.log(user);

  if (user) {
    return <Redirect to="/app" />;
  }

  const switchState = () => {
    setSigningIn((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {signingIn ? <SignIn switchState={switchState} /> : <SignUp switchState={switchState} />}
    </div>
  );
};

export default Auth;
