import MovieInfo from "@/components/movieDetails/movieInfo/MovieInfo";
import { movieDto } from "@/types/dto/movieDto";
import styles from "./styles.module.scss";

function PlayerMovieInfo({ movie }: { movie: movieDto }) {
  return (
    <div className={styles.playerMovieInfoContainer}>
      <MovieInfo movie={movie} />
    </div>
  );
}

export default PlayerMovieInfo;
