import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.mainContent}>
        <h3>LOST YOUR WAY?</h3>
        <span>Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</span>
        <span>Error Code NSES-404 FROM LOST IN SPACE</span>
        <Link to="/">
          <button type="button">Netflix Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
