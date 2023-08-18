"use client";
import { ChangeEvent, useRef } from "react";
import Icon from "../Icons";
import styles from "./searchbar.module.scss";
import debounce from "lodash/debounce";

function SearchBar() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedHandleSearch = debounce(async (query: string | undefined) => {
    if (query && query.length >= 3) {
      console.log(query);
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
