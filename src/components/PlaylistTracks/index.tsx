"use client";

import styles from "./table_tracks.module.scss";
import useSpotify from "@/app/hooks/useSpotify";
import usePlayerState from "@/app/store/Player";
import Icon from "../Icons";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import formatDate from "@/app/utils/formatDate";
import { formatTimeFromMs } from "@/app/utils/formatTime";

const PlaylistTracks = ({ items }: any) => {
  const spotifyApi = useSpotify();
  const [track, updateTrack, isPlaying, updateIsPlaying] = usePlayerState(
    (state) => [
      state.track,
      state.updateTrack,
      state.isPlaying,
      state.updateIsPlaying,
    ]
  );

  return (
    <>
      {items !== null &&
        items?.map((item: any, idx: number) => {
          return (
            <div
              className={`${styles.track} ${styles.hoverable}`}
              aria-selected={track.trackId === item.track?.id}
              key={item.track?.id}
              onClick={(e) => {
                if (e.detail === 2) {
                  updateTrack(item.track?.uri, item.track?.id);
                  updateIsPlaying(true);
                }
              }}
            >
              <div className={styles.order}>

                {(isPlaying && track.trackId === item.track?.id) ? (
                  <span
                    className={styles.pause_icon}
                    onClick={(e) => {
                      e.stopPropagation();
                      updateIsPlaying(false);
                    }}
                  >
                    <Icon name="pause" size={16} />
                  </span>
                ) : (
                  <span
                    className={styles.play_icon}
                    onClick={(e) => {
                      e.stopPropagation();
                      updateTrack(item.track?.uri, item.track?.id);
                      updateIsPlaying(true);
                    }}
                  >
                    <Icon name="play" size={16} />
                  </span>
                )}

                <span className={styles.order_num}>{idx + 1}</span>
              </div>
              <div className={styles.title}>
                <span>
                  <Image
                    src={item.track?.album?.images[2]?.url ?? ""}
                    fill
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </span>
                <div className={styles.details}>
                  <div className={styles.inner}>
                    <Link
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      href="/search"
                      className={`${styles.one_line} ${styles.track_name}`}
                    >
                      {item.track?.name.length > 40 ? item.track?.name.substring(0, 40) + "..." : item.track?.name}
                    </Link>
                    <div className={styles.artists}>
                      <p className={styles.one_line}>
                        {item.track?.artists?.map(
                          (artist: any, index: number) => (
                            <React.Fragment key={artist.id}>
                              {index > 0 && ", "}
                              <Link
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                                href="/search"
                              >
                                {artist.name}
                              </Link>
                            </React.Fragment>
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.album}>
                <Link
                  href="/search"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {item.track?.album.name.length > 25 ? item.track?.album.name.substring(0, 25) + "..." : item.track?.album.name}
                </Link>
              </div>
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
