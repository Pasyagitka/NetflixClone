import useScroll from "@/hooks/useScroll";
import classNames from "classnames";
import logo from "images/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

function Header() {
  const [scrollDimensions] = useScroll();

  return (
    <header
      className={classNames(styles.header, {
        [styles.dark]: scrollDimensions.scrollY > 50,
      })}
    >
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
