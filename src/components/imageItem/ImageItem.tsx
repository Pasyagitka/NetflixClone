import { useState } from "react";
import defaultImage from "images/image-not-available.jpg";
import { useAppDispatch } from "@/hooks";
import { getMovieDetails, showModal } from "@/storage/actions/app";
import { movieDto } from "@/types/dto/movieDto";
import { apiLinks } from "@/constants";
import styles from "./styles.module.scss";

function ImageItem({ movie, isPoster }: { movie: movieDto; isPoster: boolean }) {
  const url = apiLinks.imageBaseUrl + (isPoster ? movie.poster_path : movie.backdrop_path);

  const [imgSrc, setImgSrc] = useState(url);
  const dispatch = useAppDispatch();

  const setDefaultImage = () => {
    setImgSrc(defaultImage);
  };

  const openModal = () => {
    dispatch(getMovieDetails({ mediaType: movie.media_type, mediaId: movie.id }));
    dispatch(showModal(true));
  };

  return (
    <div className={styles.imageContainer} onClick={openModal} aria-hidden="true">
      <img className={styles.image} src={imgSrc} onError={setDefaultImage} alt="" width="350px" height="200px" />
    </div>
  );
}

export default ImageItem;
