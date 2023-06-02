import LeftSidebar from '@/components/LeftSidebar'
import styles from './page.module.scss'
import MainView from '@/components/MainView'
import NowPlaying from '@/components/NowPlaying'

export default function Home() {
  return (
    <div className={styles.rootGrid}>
      <LeftSidebar />
      <MainView />
      <NowPlaying />
    </div>
  )
}
