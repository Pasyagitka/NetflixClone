import {
  fetchTrending,
  fetchTopRated,
  fetchRomance,
  fetchComedy,
  fetchActionMovies,
  fetchHorrorMovies,
  fetchDocumentaries,
  fetchNetflixOriginals,
} from "@/storage/actions/movies";
import { useEffect } from "react";
import { RootState } from "@/storage/store";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { backgroundMovie } from "@/constants";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import styles from "./styles.module.scss";
import MoviePlayer from "../../components/player/MoviePlayer";
import PlayerMovieInfo from "../../components/player/playerMovieInfo/PlayerMovieInfo";

function Browse() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state: RootState) => state.counter);
  const movies = useAppSelector((state: RootState) => state.movies);

  function loadMovies() {
    dispatch(fetchNetflixOriginals());
    dispatch(fetchTrending());
    dispatch(fetchTopRated());
    dispatch(fetchActionMovies());
    dispatch(fetchComedy());
    dispatch(fetchHorrorMovies());
    dispatch(fetchRomance());
    dispatch(fetchDocumentaries());
  }

  useEffect(loadMovies, [dispatch]);

  return (
    <div className={styles.browse}>
      <div>
        <MoviePlayer url={backgroundMovie.url} />
        <PlayerMovieInfo movie={backgroundMovie} />
      </div>
      <div>
        <div className={styles.mainContent}>
          <ImageCarousel title="Netflix Originals" isPoster movies={movies.netflixOriginals} />
          <ImageCarousel title="Trending" movies={movies.trending} />
          <ImageCarousel title="Top Rated" movies={movies.topRated} />
          <ImageCarousel title="Action Movies" movies={movies.action} />
          <ImageCarousel title="Comedy" movies={movies.comedy} />
          <ImageCarousel title="Horror Movies" movies={movies.horror} />
          <ImageCarousel title="Romance" movies={movies.romance} />
          <ImageCarousel title="Documentaries" movies={movies.documentaries} />
        </div>
      </div>
    </div>
  );
}

export default Browse;
