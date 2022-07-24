import ReactPlayer from "react-player";
import styles from "./styles.module.scss";

function MoviePlayer({ url }: { url: string }) {
  return (
    <>
      <ReactPlayer playing={false} pip={false} loop width="100%" height="100%" volume={1} muted url={url} />
      <div className={styles.fade} />
    </>
  );
}

export default MoviePlayer;
