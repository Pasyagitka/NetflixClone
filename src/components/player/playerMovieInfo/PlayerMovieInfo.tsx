import play from "images/play-button.svg";
import add from "images/add.svg";
import mute from "images/mute.svg";
import { movieDto } from "@/types/dto/movieDto";
import styles from "./styles.module.scss";

function PlayerMovieInfo({ movie }: { movie: movieDto }) {
  return (
    <div className={styles.playerMovieInfoContainer}>
      <div className={styles.movieInfoContainer}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.overview}>{movie.overview}</span>
        <div>
          <button type="button" className={styles.controlButton}>
            <img src={play} width="15px" alt="" />
            Play
          </button>
          <button type="button" className={styles.controlButton}>
            <img src={add} width="15px" alt="" className={styles.invertedImage} />
            My List
          </button>
        </div>
      </div>
      <button type="button" className={styles["mute-button"]}>
        <img src={mute} width="15px" alt="" className={styles.invertedImage} />
      </button>
    </div>
  );
}

export default PlayerMovieInfo;
