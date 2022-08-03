import { NavLink } from "react-router-dom";
import dropDownIcon from "images/drop-down-arrow.svg";
import styles from "./styles.module.scss";

function AccountDropdown() {
  return (
    <div className={styles.dropdown}>
      <div>
        <div className={`${styles["dropdown-button"]} ${styles.square}`} />
        <img src={dropDownIcon} alt="" />
      </div>
      <div className={styles["dropdown-content"]}>
        <div>
          <div>
            <div className={styles.square} />
            <NavLink to="#">Andres</NavLink>
          </div>
          <div>
            <div className={styles.square} />
            <NavLink to="#">Tony</NavLink>
          </div>
          <div>
            <div className={styles.square} />
            <NavLink to="#">Luis</NavLink>
          </div>
        </div>
        <div>
          <NavLink to="#">Account</NavLink>
          <NavLink to="#">Help Center</NavLink>
        </div>
      </div>
    </div>
  );
}

export default AccountDropdown;
