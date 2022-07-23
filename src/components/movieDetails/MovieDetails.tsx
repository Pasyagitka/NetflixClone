import ReactDOM from "react-dom";
import { useAppDispatch } from "@/hooks";
import { clearModal, showModal } from "@/storage/actions/app";
import { movieDetailsDto } from "@/types/dto/movieDetailsDto";
import styles from "./styles.module.scss";
import MovieInfo from "./movieInfo/MovieInfo";

function MovieDetails({ movie, isOpen }: { movie: movieDetailsDto; isOpen: boolean }) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(showModal(false));
    dispatch(clearModal());
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className={styles.modal} onClick={handleClick} aria-hidden="true">
        <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()} aria-hidden="true">
          <MovieInfo movie={movie} />
        </div>
      </div>,
      modalRoot
    )
  );
}

export default MovieDetails;
