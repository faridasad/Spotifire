import Image from "next/image";
import styles from "./library.module.scss";

const dummyData = [
  {
    id: 1,
    name: "boyum olsa da bir elli",
    type: "Podcast",
    author: "kore10",
    img_url:
      "https://hips.hearstapps.com/hmg-prod/images/biggie_smalls_photo_by_clarence_davis_new_york_daily_news_archive_getty_97348258.jpg",
  },
  {
    id: 2,
    name: "poxdan kanfet",
    type: "Playlist",
    author: "ebiay",
    img_url:
      "https://upload.wikimedia.org/wikipedia/en/5/51/The_Notorious_B.I.G.jpg",
  },
  {
    id: 3,
    name: "eatin big pun",
    type: "Playlist",
    author: "leş fikret",
    img_url:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-547402373.jpg?resize=1200:*",
  },
];

const Library = () => {
  return (
    <div className={styles.library}>
      <ul role="list">
        {dummyData.map((i) => {
          return (
            <li key={i.id}>
                <Image src={i.img_url} width={45} height={45} alt="" />
                <div className={styles.item}>
                    <span className={styles.name}>{i.name}</span>
                    <div className={styles.details}>
                        <span>{i.type}</span>
                        &bull;
                        <span>{i.author}</span>
                    </div>
                </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Library;
