import styles from "./filters.module.scss";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <nav>
        <ul>
          <li><a>All</a></li>
          <li><a>Playlists</a></li>
          <li><a>Podcasts & Shows</a></li>
          <li><a>Profiles</a></li>
          <li><a>Artists</a></li>
          <li><a>Albums</a></li>
          <li><a>Songs</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Filters;
