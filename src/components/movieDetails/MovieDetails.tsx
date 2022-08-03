import ReactDOM from "react-dom";
import { useAppDispatch } from "@/hooks";
import { clearModal, showModal } from "@/storage/actions/app";
import { movieDetailsDto } from "@/types/dto/movieDetailsDto";
import classNames from "classnames";
import { apiLinks } from "@/constants";
import styles from "./styles.module.scss";
import MovieInfo from "./movieInfo/MovieInfo";

function MovieDetails({ movie, isOpen }: { movie: movieDetailsDto; isOpen: boolean }) {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const url = apiLinks.imageFullHDBaseUrl + (movie.backdrop_path || movie.poster_path);
  const dispatch = useAppDispatch();

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${url})`,
  };

  const handleClick = () => {
    dispatch(showModal(false));
    dispatch(clearModal());
  };

  return ReactDOM.createPortal(
    <div
      className={classNames(styles.modal, {
        [styles["modal-show"]]: isOpen,
      })}
      onClick={handleClick}
      aria-hidden="true"
    >
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
        style={backgroundStyle}
      >
        <MovieInfo movie={movie} />
      </div>
    </div>,
    modalRoot
  );
}

export default MovieDetails;
