import React, { useState, useContext, Fragment } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

// Styling
import styles from "./SignUp.module.scss";

// Context
import AuthContext from "../../../contexts/user.context";

const SignUp = ({ switchState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  const createAccount = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      toast.error("Passwords don't match!", { style: { fontSize: "2rem" } });
      return;
    }
    if (!name) {
      toast.error("No name provided!", { style: { fontSize: "2rem" } });
      return;
    }
    if (!email) {
      toast.error("No email provided!", { style: { fontSize: "2rem" } });
      return;
    }
    signUp(e, { name, email, password });
  };

  return (
    <Fragment>
      <Toaster />
      <div className={styles.container}>
        <h2 className={styles.title}>Sign Up</h2>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <label className={styles.form__group_label} htmlFor="Name">
              Name
            </label>
            <input
              className={styles.form__group_input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Who is the handsome devil?"
            />
          </div>
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
          <div className={styles.form__group}>
            <label className={styles.form__group_label} htmlFor="ConfirmPassword">
              Confirm Password
            </label>
            <input
              className={styles.form__group_input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="One more time?"
            />
          </div>
          <button onClick={(e) => createAccount(e)} className={styles.btn}>
            Create an account!
          </button>
          <p onClick={switchState} className={styles.switch}>
            Already have an account?
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
