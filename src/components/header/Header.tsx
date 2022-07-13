import useScroll from "@/hooks/useScroll";
import classNames from "classnames";
import logo from "images/logo.png";
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
        <img src={logo} alt="netflix logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
