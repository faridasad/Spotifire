'use client'
import Icon from "../Icons";
import { ReactNode } from "react";
import styles from "./topbar.module.scss";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";

export default function Topbar({ children }: { children?: ReactNode }) {
  const { data: session, status } = useSession();
  if(status === 'loading'){
    return <div>loading..</div>
  }

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
        <LoginButton />
      )}
    </header>
  );
}
