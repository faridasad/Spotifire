"use client";
import formatDate from "@/app/lib/formatDate";
import styles from "./table_tracks.module.scss";
import { formatTimeFromMs } from "@/app/lib/timeUtils";
import useSpotify from "@/app/hooks/useSpotify";

const TableTracks = ({ items }: any) => {
  const spotifyApi = useSpotify();

  const getDevices = async () => {
    try {
      const data = await spotifyApi.getMyDevices();
      return data.body.devices;
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  const playSong = async (uri: string) => {
    const devices = await getDevices();

    spotifyApi.play({
      uris: [uri],
      device_id: devices![0].id as string
    });
  };

  return (
    <>
      {items &&
        items?.map((item: any, idx: number) => {
          return (
            <div
              className={styles.track}
              key={item.track?.id}
              onClick={() => playSong(item.track?.uri)}
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
