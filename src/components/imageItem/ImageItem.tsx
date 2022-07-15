import { useState } from "react";
import defaultImage from "images/image-not-available.jpg";
import styles from "./styles.module.scss";

function ImageItem({ url }: { url: string }) {
  const [imgSrc, setImgSrc] = useState(url);
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={imgSrc}
        onError={() => setImgSrc(defaultImage)}
        alt=""
        width="350px"
        height="200px"
      />
    </div>
  );
}

export default ImageItem;
