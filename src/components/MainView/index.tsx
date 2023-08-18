"use client";
import Topbar from "../Topbar";
import styles from "./main-view.module.scss";
import { usePathname } from "next/navigation";

const MainView = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={styles.main_view}>
      {pathname.split("/").at(-1) === "search" ? (
        <Topbar>{children}</Topbar>
      ) : (
        <>
          <Topbar></Topbar>
          {children}
        </>
      )}
    </div>
  );
};

export default MainView;
