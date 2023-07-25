import Topbar from "../Topbar";
import styles from "./main-view.module.scss";


const MainView = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={styles.main_view}>
      <Topbar>{children}</Topbar>
    </div>
  );
};

export default MainView;
