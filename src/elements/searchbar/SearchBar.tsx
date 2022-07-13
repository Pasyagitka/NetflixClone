import classNames from "classnames";
import searchIcon from "images/search.svg";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isActive, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    inputRef?.current?.focus();
  };

  const switchClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const path = searchQuery === "" ? "/browse" : "/search"; // TODO navigate
    console.log("------ search actions.....", path);
  }, [searchQuery]);

  return (
    <div
      className={classNames(styles["search-input-container"], {
        [styles.toggled]: isActive,
      })}
    >
      <button type="button" onClick={handleToggle}>
        <img src={searchIcon} alt="search icon" />
      </button>
      <input
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        ref={inputRef}
        onFocus={() => {
          switchClass();
        }}
        onBlur={() => {
          switchClass();
        }}
        type="text"
        placeholder="Title, genres, people"
      />
    </div>
  );
}

export default SearchBar;
