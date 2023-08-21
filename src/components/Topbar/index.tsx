"use client";
import Icon from "../Icons";
import { FC, ReactNode } from "react";
import styles from "./topbar.module.scss";
import DropdownMenu from "./DropdownMenu";
import { useSession } from "next-auth/react";

interface TopbarProps {
  children: ReactNode,
  path: string,
}

const Topbar: FC<TopbarProps> = ({children, path}) => {
  const { data: session, status } = useSession();


  return (
    <header className={`${styles.header} ${path.startsWith("/playlist") ? styles.transparent : styles.solid}`}>
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

export default Topbar