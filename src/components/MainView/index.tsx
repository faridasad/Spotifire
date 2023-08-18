"use client";
import SearchBar from "../SearchBar";
import Topbar from "../Topbar";
import styles from "./main-view.module.scss";
import { usePathname } from "next/navigation";

const MainView = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={styles.main_view}>
      <Topbar>{pathname === "/search" && <SearchBar />}</Topbar>
      {children}
    </div>
  );
};

export default MainView;
