import play from "images/play-button.svg";
import add from "images/add.svg";
import { movieDetailsDto } from "@/types/dto/movieDetailsDto";
import styles from "./MovieInfo.module.scss";

function MovieInfo({ movie }: { movie: movieDetailsDto }) {
  return (
    <div className={styles.movieInfoContainer}>
      <span>{movie.title}</span>
      <div>
        <span className={styles.rating}>Rating: {movie.vote_average * 10}%</span>
        <span>Release date: {movie.release_date}</span>
        <span>Runtime: {movie.runtime ?? movie.episode_run_time}m</span>
      </div>
      <div className="modal__episode">
        {movie.number_of_episodes ? ` Episodes: ${movie.number_of_episodes}` : ""}
        {movie.number_of_seasons ? ` Seasons: ${movie.number_of_seasons}` : ""}
      </div>
      <span>{movie.overview}</span>
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
  );
}

export default MovieInfo;
