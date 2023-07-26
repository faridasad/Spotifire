'use client'
import Icon from "../Icons"
import styles from "./searchbar.module.scss"

function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <div>
        <span>
          <Icon name="search" size={24} />
        </span>
      </div>
      <input
        type="text"
        placeholder="What do you want to listen to?"
        spellCheck="false"
      />
    </div>
  )
}

export default SearchBar