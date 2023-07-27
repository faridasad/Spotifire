import styles from "./library.module.scss";
import Icon from "../Icons";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import spotifyApi from "../../../../lib/spotify";
import Link from "next/link";
import Image from "next/image";

export default async function Library() {

  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }
  spotifyApi.setAccessToken(session?.user?.accessToken);
  
  let playlists;
  if(spotifyApi.getAccessToken()){
    playlists = (await spotifyApi.getUserPlaylists()).body.items
  }

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
          </button>
          <div className={styles.dropdown}>
          </div>
        </div>
      </div>
      {<ul role="list">
        {playlists?.map((i: any) => {
          return (
            <Link href={`/playlist/${i.id}`}>
              <li
                key={i.id}
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
      </ul>}
    </div>
  );
}
