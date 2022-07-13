import { apiLinks } from "@/constants";
import { movieDto } from "@/types/dto/movieDto";
import ImageItem from "../imageCarousel/imageItem/ImageItem";
import styles from "./styles.module.scss";

function MovieSearchResults({ movies = [] }: { movies: Array<movieDto> }) {
  const listItems = movies.map((movie) => (
    <ImageItem url={apiLinks.imageBaseUrl + (movie.backdrop_path ?? movie.poster_path)} />
  ));

  return <div className={styles.itemsContainer}>{listItems}</div>;
}

export default MovieSearchResults;
