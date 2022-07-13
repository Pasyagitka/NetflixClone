import { movieDto } from "@/types/dto/movieDto";
import styles from "./styles.module.scss";
import MovieInfo from "./movieInfo/MovieInfo";

function MovieDetails({ movie }: { movie: movieDto }) {
  const backgroundMovie = {
    title: "Narcos",
    description: "A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.",
  };

  return (
    <div className={styles["modal-wrapper"]}>
      <MovieInfo movie={backgroundMovie} />
    </div>
  );
}

export default MovieDetails;
