"use client";
import { useRouter } from "next/navigation";
import styles from "./playlist.module.scss";

export default function Error() {
  const router = useRouter();

  return (
    <div className={styles.error}>
      <h1>Something went wrong</h1>
      <button type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        Home Page
      </button>
    </div>
  );
}
