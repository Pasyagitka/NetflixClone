import play from "images/play-button.svg";
import add from "images/add.svg";
import { movieDetailsDto } from "@/types/dto/movieDetailsDto";
import styles from "./MovieInfo.module.scss";

function MovieInfo({ movie }: { movie: movieDetailsDto }) {
  return (
    <div className={styles.movieInfoContainer}>
      <h1>{movie.title ?? movie.name}</h1>
      <div className={styles["movie-info"]}>
        <span className={styles.rating}>Rating: {(movie.vote_average * 10).toFixed(2)}%</span>
        <span>Release date: {movie.release_date ?? movie.first_air_date}</span>
        <span>Runtime: {movie.runtime ?? movie.episode_run_time}m</span>
      </div>
      <div className={styles.series}>
        {movie.number_of_episodes ? ` Episodes: ${movie.number_of_episodes}` : ""}
        {movie.number_of_seasons ? ` Seasons: ${movie.number_of_seasons}` : ""}
      </div>
      <p className={styles["movie-overview"]}>{movie.overview}</p>
      <div className={styles.buttons}>
        <button type="button">
          <img src={play} width="15px" alt="" />
          Play
        </button>
        <button type="button">
          <img src={add} width="15px" alt="" className={styles.invertedImage} />
          My List
        </button>
      </div>
    </div>
  );
}

export default MovieInfo;
