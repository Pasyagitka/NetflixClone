import styles from "./styles.module.scss";

function ImageItem({ url }: { url: string }) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={url} alt="" width="350px" height="200px" />
    </div>
  );
}

export default ImageItem;
