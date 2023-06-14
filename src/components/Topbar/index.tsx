"use client";

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
      {true ? (
        <a className={styles.login_button}>
          <span>Login</span>
        </a>
      ) : (
        <Menu as="div" className={styles.profile_con}>
          <Menu.Button className={styles.user_profile}>
            <Image src="https://i.scdn.co/image/ab6775700000ee859e36edc9c5e37682327654e2" width={28} height={28} alt=""/>
            <span>fared.wav</span>
            <Icon name="dropDown" size={16} />
          </Menu.Button>
          <Menu.Items className={styles.menu_items}>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && styles.active}`}>
                  <span>Account</span>
                  <Icon name="externalLink" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && styles.active}`}>Profile</a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && styles.active}`}>Settings</a>
              )}
            </Menu.Item>
            <span className={styles.menu_divider}></span>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && styles.active}`}
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </header>
  )
}

export default Topbar