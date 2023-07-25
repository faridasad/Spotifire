"use client";
import styles from "./topbar.module.scss";
import {signIn} from "next-auth/react"

const LoginButton = () => {
  return (
    <button
      className={styles.login_button}
      onClick={() => {
        signIn("spotify", { callbackUrl: "/" });
      }}
    >
      <span>Login</span>
    </button>
  );
};

export default LoginButton;
