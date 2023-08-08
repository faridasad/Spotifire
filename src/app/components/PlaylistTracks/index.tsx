"use client";
import formatDate from "@/app/lib/formatDate";
import styles from "./table_tracks.module.scss";
import { formatTimeFromMs } from "@/app/lib/timeUtils";
import useSpotify from "@/app/hooks/useSpotify";
import usePlayerState from "@/app/store/playerState";
import Icon from "../Icons";
import React, { useState } from "react";
import Image from "next/image";

const PlaylistTracks = ({ items }: any) => {
  const spotifyApi = useSpotify();
  const [updatePlayer] = usePlayerState((state) => [state.updateTrackUri]);
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

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
          const isHovered = hoveredTrack === item.track?.id;

          return (
            <div
              className={styles.track}
              key={item.track?.id}
              onMouseEnter={() => setHoveredTrack(item.track?.id)}
              onMouseLeave={() => setHoveredTrack(null)}
              onClick={() => {
                updatePlayer(item.track?.uri);
              }}
            >
              <div className={styles.order}>
                {isHovered ? <Icon name="play" /> : idx + 1}
              </div>
              <div className={styles.title}>
                <span>
                  <Image src={item.track?.album?.images[2]?.url} fill alt="" />
                </span>
                <div className={styles.details}>
                  <div className={styles.inner}>
                    <a className={styles.one_line}>{item.track?.name}</a>
                    <div className={styles.artists}>
                      <p className={styles.one_line}>
                        {item.track?.artists?.map(
                          (artist: any, index: number) => (
                            <React.Fragment key={artist.id}>
                              {index > 0 && ", "}
                              <a>{artist.name}</a>
                            </React.Fragment>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
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

export default PlaylistTracks;
