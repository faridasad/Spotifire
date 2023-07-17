import Topbar from "../Topbar";
import styles from "./main-view.module.scss";
import { usePathname } from "next/navigation";


const MainView = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={styles.main_view}>
      <Topbar>
        {children}
      </Topbar>
    </div>
  )
};

export default MainView;
