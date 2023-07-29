import Image from "next/image";
import styles from "./playlist.module.scss";
import spotifyApi from "../../../../lib/spotify";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Icon from "@/app/components/Icons";

const Playlist = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  spotifyApi.setAccessToken(session?.user?.accessToken);

  let playlist, user;
  if (spotifyApi.getAccessToken()) {
    playlist = await spotifyApi.getPlaylist(params.id);
    user = await spotifyApi.getUser(playlist.body.owner.id);
  }

  return (
    <div className={styles.playlist}>
      <div className={styles.header}>
        <span className={styles.header__img}>
          <Image src={playlist?.body.images[0].url ?? ""} fill alt="" />
        </span>
        <div className={styles.header__info}>
          <p className={styles.header__info__type}>
            {playlist?.body.type.charAt(0).toUpperCase()! +
              playlist?.body.type.slice(1)}
          </p>
          <h1 className={styles.header__info__name}>{playlist?.body.name}</h1>
          <p className={styles.header__info__description}>
            {playlist?.body.description}
          </p>
          <div className={styles.details}>
            <div className={styles.owner}>
              <span className={styles.owner__img}>
                {<Image src={user?.body.images![0].url ?? ""} fill alt="" />}
              </span>
              <span className={styles.owner__name}>
                {user?.body.display_name}
              </span>
            </div>
            &bull;
            <span className={styles.likes}>
              {playlist?.body.followers.total} likes
            </span>
            &bull;
            <span className={styles.songs}>
              {playlist?.body.tracks.total} songs
            </span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__actions}>
          <span className={styles.content__actions__play}>
            <Icon name="play" />
          </span>
          <span className={styles.content__actions__more}>
            <Icon name="more" />
          </span>
        </div>
        <div className={styles.tracks}>
          {
            <ul>
              {playlist?.body.tracks.items.map((item) => {
                return <p>{item.track?.name}</p>;
              })}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Playlist;
