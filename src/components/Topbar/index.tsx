"use client";
import Icon from "../Icons";
import { ReactNode } from "react";
import styles from "./topbar.module.scss";
import DropdownMenu from "./DropdownMenu";
import { useSession } from "next-auth/react";

export default function Topbar({ children }: { children?: ReactNode }) {
  const { data: session, status } = useSession();

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

      {session ? (
        <DropdownMenu
          imageUrl={session.user?.image}
          username={session.user?.name}
        />
      ) : (
        <div className={styles.skeleton}></div>
      )}
    </header>
  );
}
