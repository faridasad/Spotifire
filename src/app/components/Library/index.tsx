"use client";
import styles from "./library.module.scss";
import useSpotify from "@/app/hooks/useSpotify";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "../Icons";
import usePlaylistStore from "@/app/store/playlistState";
import Link from "next/link";

export default function Library() {
  const spotifyApi = useSpotify();
  const [playlists, setPlaylists] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data: any) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  const [playlist, updatePlaylist] = usePlaylistStore((state) => [
    state.playlist,
    state.updatePlaylist,
  ]);

  console.log(playlist);

  return (
    <div className={styles.library}>
      <div className={styles.categories}>
        <button>
          <span>Playlists</span>
        </button>
        <button>
          <span>Podcasts & Shows</span>
        </button>
      </div>
      <div className={styles.lib_content}>
        <div className={styles.search_filter}>
          <button>
            <Icon name="search" size={16} />
          </button>
          <div className={styles.dropdown}>
            Recents <Icon name="dropDown" size={16} />
          </div>
        </div>
      </div>
      <ul role="list">
        {playlists.map((i: any) => {
          return (
            <Link href={`/playlist/${i.id}`}>
              <li
                key={i.id}
                onClick={() => {
                  updatePlaylist(i.id, spotifyApi);
                }}
              >
                <span className={styles.img_con}>
                  <Image src={i.images[0].url} fill alt="" />
                </span>
                <div className={styles.item}>
                  <span className={styles.name}>{i.name}</span>
                  <div className={styles.details}>
                    <span>{i.type}</span>
                    &bull;
                    <span>{i.owner.display_name}</span>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
