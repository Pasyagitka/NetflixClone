import { movieDto } from "@/types/dto/movieDto";
import ReactDOM from "react-dom";
import { useAppDispatch } from "@/hooks";
import { showModal } from "@/storage/actions/app";
import styles from "./styles.module.scss";
import MovieInfo from "./movieInfo/MovieInfo";

function MovieDetails({ movie, isOpen }: { movie: movieDto; isOpen: boolean }) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showModal(false));
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className={styles.modal} onClick={handleClick} aria-hidden="true">
        <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()} aria-hidden="true">
          <MovieInfo movie={movie} />
        </div>
      </div>,
      document.getElementById("modal-root")
    )
  );
}

export default MovieDetails;
