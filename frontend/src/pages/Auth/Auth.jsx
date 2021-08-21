import { Redirect } from "react-router-dom";
import React, { useState, useContext } from "react";
import AuthContext from "../../contexts/user.context";

// Components
import SignUp from "../../components/Auth/Signup/SignUp";
import SignIn from "../../components/Auth/SignIn/SignIn";

const Auth = () => {
  const [signingIn, setSigningIn] = useState(false);

  const { user } = useContext(AuthContext);

  if (user) {
    return <Redirect to="/app" />;
  }

  const switchState = () => {
    setSigningIn((prev) => !prev);
  };

  return <div>{signingIn ? <SignIn switchState={switchState} /> : <SignUp switchState={switchState} />}</div>;
};

export default Auth;
