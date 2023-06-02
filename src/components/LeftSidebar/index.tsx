"use client";
import { useRef } from "react";
import styles from "./left-sidebar.module.scss";

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
      <div className={styles.leftSidebar}></div>
      <div className={styles.resizeHandle} onMouseDown={startResize}></div>
    </div>
  );
};

export default LeftSidebar;
