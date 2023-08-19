"use client";
import { ChangeEvent, useRef } from "react";
import Icon from "../Icons";
import styles from "./searchbar.module.scss";
import debounce from "lodash/debounce";
import useSpotify from "@/app/hooks/useSpotify";
import useTracksStore from "@/app/store/Tracks";

function SearchBar() {
  const spotifyApi = useSpotify();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [updateTracks] = useTracksStore((state) => [state.updateTracks]);

  const debouncedHandleSearch = debounce(async (query: string | undefined) => {
    if (!query && (query?.length as number) < 3) return;

    try {
      const { items } = (await spotifyApi.searchTracks(query as string)).body
        .tracks!;

      updateTracks(items);
    } catch (err) {
      console.log(err);
    }
  }, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = inputRef.current?.value;
    debouncedHandleSearch(query);
  };

  return (
    <div className={styles.search_bar}>
      <div>
        <span>
          <Icon name="search" size={24} />
        </span>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="What do you want to listen to?"
        spellCheck="false"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
