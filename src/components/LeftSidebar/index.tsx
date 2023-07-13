"use client";
import { useRef } from "react";
import styles from "./left-sidebar.module.scss";
import Link from "next/link";
import Icon from "../Icons";
import Library from "../Library";

const MAX_WIDTH = 351;
const MIN_WIDTH = 71;
const DEFAULT_WIDTH = 280;

const LeftSidebar = () => {
  const leftSidebarRef = useRef<HTMLDivElement>(null);

  const resize = (e: MouseEvent) => {
    if (!leftSidebarRef.current) return;

    // Prevent exceeding limits
    if (e.clientX > MAX_WIDTH) {
      leftSidebarRef.current.style.setProperty(
        "--sidebar-width",
        `${MAX_WIDTH}px`
      );
      return;
    }

    if (e.clientX < MIN_WIDTH) {
      leftSidebarRef.current.style.setProperty(
        "--sidebar-width",
        `${MIN_WIDTH}px`
      );
      return;
    }

    // Set the pre-defined widths
    if (e.clientX + 50 < DEFAULT_WIDTH && e.clientX > MIN_WIDTH) {
      leftSidebarRef.current.style.setProperty(
        "--sidebar-width",
        `${MIN_WIDTH}px`
      );
      return;
    }

    if (e.clientX - 50 > MIN_WIDTH && e.clientX < DEFAULT_WIDTH) {
      leftSidebarRef.current.style.setProperty(
        "--sidebar-width",
        `${DEFAULT_WIDTH}px`
      );
      return;
    }

    // Free resize beyond the pre-defined widths
    if (e.clientX > DEFAULT_WIDTH) {
      leftSidebarRef.current.style.setProperty(
        "--sidebar-width",
        `${e.clientX}px`
      );
      return;
    }
  };

  const startResize = () => {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
  };

  const stopResize = () => {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div className={styles.aside} ref={leftSidebarRef}>
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
          <div className={styles.categories}>
            <button>
              <span>Playlists</span>
            </button>
            <button>
              <span>Podcasts & Shows</span>
            </button>
          </div>
          <div className={styles.lib_content}>
            <div className={styles.search_filter}>
              <button>
                <Icon name="search" size={16} />
              </button>
              <div className={styles.dropdown}>
                Recents <Icon name="dropDown" size={16} />
              </div>
            </div>
          </div>
        </div>
        <Library />
      </div>

      
      </div>
      <div className={styles.resizeHandle} onMouseDown={startResize}></div>
      
    </div>
  );
};

export default LeftSidebar;
