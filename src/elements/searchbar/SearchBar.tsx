import classNames from "classnames";
import searchIcon from "images/search.svg";
import { useState, useRef, useEffect } from "react";
import { createSearchParams, useNavigate, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isActive, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    inputRef?.current?.focus();
  };

  const switchClass = () => {
    setActive(!isActive);
  };

  const searchByQuery = () => {
    if (searchQuery !== "") {
      const path = {
        pathname: "/search",
        search: createSearchParams({
          q: searchQuery,
        }).toString(),
      };
      navigate(path);
    } else if (location.pathname === "/search") navigate("/browse");
  };

  useEffect(searchByQuery, [searchQuery]);

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
        onFocus={switchClass}
        onBlur={switchClass}
        type="text"
        placeholder="Title, genres, people"
      />
    </div>
  );
}

export default SearchBar;
