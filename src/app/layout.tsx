import "./styles/globals.scss";
import { Roboto } from "next/font/google";
import LeftSidebar from "@/components/LeftSidebar";
import styles from "./page.module.scss";
import MainView from "@/components/MainView";
import NowPlaying from "@/components/NowPlaying";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "SpotiFire",
  description: "Spotify clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className={roboto.className}>
        <div className={styles.rootGrid}>
          <LeftSidebar />
          <MainView>{children}</MainView>
          <NowPlaying />
        </div>
      </body>
    </html>
  );
}
