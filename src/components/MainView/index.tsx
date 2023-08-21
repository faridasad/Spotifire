"use client";
import { FC, ReactNode } from "react";
import SearchBar from "../SearchBar";
import Topbar from "../Topbar";
import styles from "./main-view.module.scss";
import { usePathname } from "next/navigation";

interface MainViewProps {
  children: ReactNode
}

const MainView: FC<MainViewProps> = ({children}) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Topbar path={pathname}>{pathname.startsWith("/search") && <SearchBar />}</Topbar>
      {children}
    </div>
  );
};

export default MainView;
