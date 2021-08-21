import React, { useState, useContext, Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";

// Styling
import styles from "./SignIn.module.scss";

// Context
import AuthContext from "../../../contexts/user.context";

const SignIn = ({ switchState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("No email entered!", { style: { fontSize: "2rem" } });
      return;
    }
    if (!password) {
      toast.error("No password entered!", { style: { fontSize: "2rem" } });
      return;
    }

    signIn(e, { email, password });
  };

  return (
    <Fragment>
      <Toaster />
      <div className={styles.container}>
        <h2 className={styles.title}>Sign In</h2>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <label className={styles.form__group_label} htmlFor="Email">
              Email
            </label>
            <input
              className={styles.form__group_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Where to look for you?"
            />
          </div>
          <div className={styles.form__group}>
            <label className={styles.form__group_label} htmlFor="Password">
              Password
            </label>
            <input
              className={styles.form__group_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Key to your palace?"
            />
          </div>
          <button onClick={(e) => login(e)} className={styles.btn}>
            Sign in!
          </button>
          <p onClick={switchState} className={styles.switch}>
            Don't have an account?
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;
