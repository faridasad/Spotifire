"use client";
import Image from "next/image";
import styles from "./topbar.module.scss";
import { Menu } from "@headlessui/react";
import Icon from "../Icons";
import { signOut } from "next-auth/react";

interface MenuProps {
  imageUrl: string | null | undefined;
  username: string | null | undefined;
}

const DropdownMenu = ({ imageUrl, username }: MenuProps) => {
  return (
    <Menu as="div" className={styles.profile_con}>
      <Menu.Button className={styles.user_profile}>
        <Image
          src={
            imageUrl ??
            "https://i.scdn.co/image/ab6761610000e5eb58efbed422ab46484466822b"
          }
          width={28}
          height={28}
          alt=""
        />
        <span>{username}</span>
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
              onClick={() => signOut()}
            >
              Log Out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default DropdownMenu;
