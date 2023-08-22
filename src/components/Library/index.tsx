import styles from "./library.module.scss";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import spotifyApi from "@/lib/spotify";
import Link from "next/link";
import Image from "next/image";
import { PlaylistTypes } from "@/app/types/Playlist";


/* async function getUserPlaylistsWebAPI(accessToken: string) {
  try{
    const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });


  return await res.json();
  }catch(err){
    console.log(err)
  }
} */

export default async function Library() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }
  spotifyApi.setAccessToken(session?.user?.accessToken!);

  /* const playlists: PlaylistTypes[] = (await getUserPlaylistsWebAPI(session?.user?.accessToken!)).items */

  const playlists = (await spotifyApi.getUserPlaylists()).body.items;

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
          <button></button>
          <div className={styles.dropdown}></div>
        </div>
      </div>
      {
        <ul role="list">
          {playlists?.map((i: any) => {
            return (
              <Link href={`/playlist/${i.id}`} key={i.id}>
                <li key={i.id}>
                  <span className={styles.img_con}>
                    <Image src={i.images[0]?.url ?? ""} fill alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                  </span>
                  <div className={styles.item}>
                    <span className={styles.name}>{i.name}</span>
                    <div className={styles.details}>
                      <span>{i.type.charAt(0).toUpperCase() + i.type.slice(1)}</span>
                      &bull;
                      <span>{i.owner.display_name}</span>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      }
    </div>
  );
}
