import Image from "next/image";
import styles from "./playlist.module.scss";
import spotifyApi from "../../../../lib/spotify";
import { Session, getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Icon from "@/app/components/Icons";
import formatDate from "@/app/lib/formatDate";
import { formatTimeFromMs } from "@/app/lib/timeUtils";

const Playlist = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  if (!spotifyApi.getAccessToken()) {
    spotifyApi.setAccessToken(session?.user?.accessToken);
  }

  const playlist = await spotifyApi.getPlaylist(params.id);
  const user = await spotifyApi.getUser(playlist.body.owner.id);

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
            <Icon name="more" size={32} />
          </span>
        </div>
        <div className={styles.content__table}>
          <div className={styles.content__table__header}>
            <div className={styles.head_index}>#</div>
            <div className={styles.head_title}>Title</div>
            <div className={styles.head_album}>Album</div>
            <div className={styles.head_date_added}>Date added</div>
            <div className={styles.head_length}>
              <Icon name="clock" size={16} />
            </div>
          </div>
          <div className={styles.content__table__tracks}>
            {playlist.body.tracks.items.map((item, idx) => {
              return (
                <div className={styles.track} key={item.track?.id}>
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
                  <div className={styles.length}>{formatTimeFromMs(Number(item.track?.duration_ms))}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
