import styles from "./query.module.scss";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { formatTimeFromMs } from "@/app/utils/formatTime";
import Explicit from "@/components/Explicit";
import Icon from "@/components/Icons";
import SearchSongs from "@/components/SearchSongs";
import spotifyApi from "@/lib/spotify";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC, Fragment } from "react";

interface SearchProps {
  params: {
    query: string;
  };
}

const Search: FC<SearchProps> = async ({ params }) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  spotifyApi.setAccessToken(session?.user?.accessToken as string);

  const tracks = (await spotifyApi.searchTracks(params.query)).body.tracks;
  const artists = (await spotifyApi.searchArtists(params.query)).body.artists;
  const albums = (await spotifyApi.searchAlbums(params.query)).body.albums;
  const playlists = (await spotifyApi.searchPlaylists(params.query)).body
    .playlists;

  if (!tracks || !artists) return null;

  const allItems = [...artists.items, ...tracks.items];

  //type Item = typeof artists.items[0] & typeof tracks.items[0].album.images[0]
  const maxPopularity = Math.max(...allItems.map((item) => item.popularity));
  const mostPopularItem = allItems.find(
    (item) => item.popularity === maxPopularity
  );

  return (
    <div className={styles.container}>
      <div className={styles.grid_search}>
        <div className={styles.grid_results}>
          <section className={styles.top_result}>
            <div>
              <h2>Top Result</h2>
            </div>
            <div className={styles.wrapper}>
              <span className={styles.image_con}>
                <Image
                  fill
                  src={
                    mostPopularItem?.type === "artist"
                      ? (mostPopularItem?.images[0].url as string)
                      : (mostPopularItem?.album.images[0].url as string)
                  }
                  alt=""
                />
              </span>
              <div className={styles.details}>
                <span className={styles.name}>{mostPopularItem?.name}</span>
                <div>
                  <span className={styles.type}>
                    {mostPopularItem?.type === "artist" ? "Artist" : "Song"}
                  </span>
                </div>
              </div>
              <div className={styles.play_con}>
                <button className={styles.play_button} type="button">
                  <Icon name="play" size={24} />
                </button>
              </div>
            </div>
          </section>
          <section className={styles.top_songs}>
            <div>
              <h2>Songs</h2>
            </div>

            <SearchSongs tracks={tracks.items} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Search;
