import Image from "next/image";
import styles from "../../page.module.scss";
import spotifyApi from "../../../../lib/spotify";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Playlist = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin/spotify");
  }

  let data;
  if (spotifyApi.getAccessToken()) {
    data = await spotifyApi.getPlaylist(params.id);
  }

  return (
    <div className={styles.playlist}>
      <div className={styles.header}>{data?.body.name}</div>
    </div>
  );
};

export default Playlist;
