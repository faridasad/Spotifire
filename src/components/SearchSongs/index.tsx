"use client";

import { Tracks } from "@/app/types/Track";
import { FC, Fragment } from "react";
import styles from "./search_songs.module.scss";
import Image from "next/image";
import Explicit from "../Explicit";
import Icon from "../Icons";
import { formatTimeFromMs } from "@/app/utils/formatTime";
import usePlayerState from "@/app/store/Player";
import Link from "next/link";

interface SearchSongsProps {
  tracks: Tracks;
}

const SearchSongs: FC<SearchSongsProps> = ({ tracks }) => {

  const [track, updateTrack, isPlaying, updateIsPlaying] = usePlayerState(
    (state) => [
      state.track,
      state.updateTrack,
      state.isPlaying,
      state.updateIsPlaying,
    ]
  );

  return (
    <div className={styles.tracks_con}>
      {tracks?.slice(0, 4).map((item) => {
        return (
          <div
            className={`${styles.track} ${styles.hoverable}`}
            key={item.id}
            aria-selected={track.trackId === item.id}
            onClick={(e) => {
              if (e.detail === 2) {
                updateTrack(item?.uri, item?.id);
                updateIsPlaying(true);
              }
            }}
          >
            <span className={styles.img_con}>
              {isPlaying && track.trackId === item?.id ? (
                <span
                  className={`${styles.pause_icon} ${styles.icon}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateIsPlaying(false);
                  }}
                >
                  <Icon name="pause" size={16} />
                </span>
              ) : (
                <span
                  className={`${styles.play_icon} ${styles.icon}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTrack(item?.uri, item?.id);
                    updateIsPlaying(true);
                  }}
                >
                  <Icon name="play" size={16} />
                </span>
              )}

              <Image
                src={item.album.images[0].url}
                alt=""
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </span>
            <div className={styles.track_info}>
              <Link
                href="/search"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <p className={styles.track_name}>{item.name}</p>
              </Link>
              <div className={styles.artists}>
                {item.explicit && (
                  <span>
                    <Explicit />
                  </span>
                )}
                <p>
                  {item.artists.map((artist, index) => {
                    return (
                      <Fragment key={artist.id}>
                        {index > 0 && ", "}
                        <Link
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          href="/search"
                        >
                          {artist.name}
                        </Link>
                      </Fragment>
                    );
                  })}
                </p>
              </div>
            </div>
            <div className={styles.track_utils}>
              <span className={styles.like_con}>
                <Icon name="favourite" size={16} />
              </span>
              <span className={styles.length}>
                {formatTimeFromMs(item.duration_ms)}
              </span>
              <span className={styles.more_con}>
                <Icon name="more" size={16} />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchSongs;
