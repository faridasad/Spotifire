"use client";
import formatDate from "@/app/lib/formatDate";
import styles from "./table_tracks.module.scss";
import { formatTimeFromMs } from "@/app/lib/timeUtils";
import useSpotify from "@/app/hooks/useSpotify";
import usePlayerState from "@/app/store/playerState";

const TableTracks = ({ items }: any) => {
  const spotifyApi = useSpotify();
  const [updatePlayer] = usePlayerState((state) => [state.updateTrackUri])


  /* async function getDevices() {
    try {
      const data = await spotifyApi.getMyDevices();
      return data.body.devices;
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  }

  async function playSong(uri: string) {
    try {
      const devices = await getDevices();

      spotifyApi.play({
        uris: [uri],
        device_id: devices![0].id as string,
      });
    } catch (error) {
      console.log(error)
    }
  } */
  return (
    <>
      {items &&
        items?.map((item: any, idx: number) => {
          return (
            <div
              className={styles.track}
              key={item.track?.id}
              onClick={() => {
                updatePlayer(item.track?.uri)
              }}
            >
              <div className={styles.order}>{idx + 1}</div>
              <div className={styles.title}>
                <a className={styles.one_line}>{item.track?.name}</a>
              </div>
              <div className={styles.album}>{item.track?.album.name}</div>
              <div className={styles.date_added}>
                {formatDate({
                  date: item.added_at,
                  style: "medium",
                })}
              </div>
              <div className={styles.length}>
                {formatTimeFromMs(Number(item.track?.duration_ms))}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TableTracks;
