import styles from "./now-playing.module.scss"
import Player from "./Player";
import "./now-playing.module.scss";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import spotifyApi from "../../../../lib/spotify";

const NowPlaying = async () => {

  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        {/* <div className={styles.footer_wrapper__left}>
          <div className={styles.audio_image}>
            <Image src="https://i.scdn.co/image/ab67616d00004851d4be605a267df4e9a09f6245" width={56} height={56} alt=""/>
          </div>
          <div className={styles.audio_info}>
            <div className={styles.audio_info__title}>Blow Horn Joint</div>
            <div className={styles.audio_info__artist}>DJ Premier</div>
          </div>
          <button role="switch" aria-checked>
            <Icon name="heart" size={16} />
          </button>
        </div>
        <div className={styles.footer_wrapper__center}>
          <div className={styles.player_controls}>
            <div className={styles.player_controls__left}>
              <button role="switch">
                <Icon name="shuffle" size={16} />
              </button>
              <button>
                <Icon name="previous" size={16} />
              </button>
            </div>
            <div className={styles.player_controls__play}>
              <button>
                <Icon name="play" size={16} />
              </button>
            </div>
            <div className={styles.player_controls__right}>
              <button>
                <Icon name="next" size={16} />
              </button>
              <button role="switch">
                <Icon name="repeat" size={16} />
              </button>
            </div>
          </div>
          <div className={styles.audio_player}>
            <Player />
          </div>
        </div>
        <div className={styles.footer_wrapper__right}>
          <button role="switch">
            <Icon name="queue" size={16} />
          </button>
          <div className={styles.volume_con}>
            <button role="switch">
              <Icon name="volume" size={16} />
            </button>
            <div className={styles.volume_con__slider}>
              <VolumeBar />
            </div>
          </div>
        </div> */}
        <Player accessToken={session.user?.accessToken as string} />
      </div>
    </footer>
  )
}

export default NowPlaying