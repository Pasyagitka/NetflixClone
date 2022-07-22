import { apiLinks } from "@/constants";
import { movieDto } from "@/types/dto/movieDto";
import ImageItem from "../imageItem/ImageItem";
import styles from "./styles.module.scss";

function MovieSearchResults({ movies = [] }: { movies: Array<movieDto> }) {
  const listItems = movies.map((movie) => (
    <ImageItem key={movie.id} url={apiLinks.imageBaseUrl + movie.backdrop_path} />
  ));

  return <div className={styles.itemsContainer}>{listItems}</div>;
}

export default MovieSearchResults;
