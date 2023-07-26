
import styles from "./left-sidebar.module.scss";
import Link from "next/link";
import Icon from "../Icons";
import Library from "../Library";


const LeftSidebar = async () => {
  

  return (
    <div className={styles.aside}>
      <div className={styles.left_sidebar}>
        <div>
        <div className={styles.navigation}>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <Icon name="home" /> Home
                </Link>
              </li>
              <li>
                <Link href="/search" >
                  <Icon name="search" /> Search
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.library}>
          <header className={styles.header}>
            <button className={styles.library__toggler}>
              <Icon name="library" />
              Your Library
            </button>
            <div className={styles.utils}>
              <button>
                <Icon name="plus" size={16} />
              </button>
              <button>
                <Icon name="navigationNext" size={16} />
              </button>
            </div>
          </header>
          
        </div>
        <Library />
      </div>

      
      </div>
      <div className={styles.resizeHandle}></div>
      
    </div>
  );
};

export default LeftSidebar;
