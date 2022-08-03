import ReactPlayer from "react-player";
import styles from "./styles.module.scss";

function MoviePlayer({ url, isMuted }: { url: string; isMuted: boolean }) {
  return (
    <>
      <ReactPlayer playing pip={false} loop width="100%" height="100%" volume={1} muted={isMuted} url={url} />
      <div className={styles.fade} />
    </>
  );
}

export default MoviePlayer;
