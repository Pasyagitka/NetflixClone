import { NavLink } from "react-router-dom";
import bellIcon from "images/bell.svg";
import SearchBar from "@/elements/searchbar/SearchBar";
import AccountDropdown from "./dropdown/AccountDropdown";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <div className={styles.navBarContainer}>
      <nav>
        <NavLink to="#">Home</NavLink>
        <NavLink to="#">TV Shows</NavLink>
        <NavLink to="#">Movies</NavLink>
        <NavLink to="#">Recently Added</NavLink>
        <NavLink to="#">My List</NavLink>
      </nav>
      <div>
        <SearchBar />
        <NavLink to="#">KIDS</NavLink>
        <NavLink to="#">DVD</NavLink>
        <img src={bellIcon} alt="bell icon" className={styles.icon} />
        <AccountDropdown />
      </div>
    </div>
  );
}

export default Navbar;
