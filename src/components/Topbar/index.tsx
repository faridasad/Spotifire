"use client"

import { Menu } from "@headlessui/react";
import Icon from "../Icons";
import { ReactNode } from "react";
import Image from "next/image";
import styles from "./topbar.module.scss"


const Topbar = ({children} : {children: ReactNode}) => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation_arrows}>
        <button name="Go Prev">
          <Icon name="navigationPrev" size={16} />
        </button>
        <button name="Go Forward" disabled>
          <Icon name="navigationNext" size={16} />
        </button>
      </div>
      <div className={styles.child_comp}>{children !== null && children}</div>
      <button className={styles.login_button} onClick={() => {signIn('spotify', {callbackUrl: "/"})}}>
        <span>Login</span>
      </button>
    </header>
  )
}

export default Topbar