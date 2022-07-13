import play from "images/play-button.svg";
import add from "images/add.svg";
import mute from "images/mute.svg";
import { movieDto } from "@/types/dto/movieDto";
import styles from "./MovieInfo.module.scss";

function MovieInfo({ movie }: { movie: movieDto }) {
  return (
    <div className={styles.movieInfoContainer}>
      <span>{movie.title}</span>
      <span>{movie.description}</span>
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
      <button type="button" className={styles["mute-button"]}>
        <img src={mute} width="15px" alt="" className={styles.invertedImage} />
      </button>
    </div>
  );
}

export default MovieInfo;
