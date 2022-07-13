/* eslint-disable import/no-unresolved */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { movieDto } from "@/types/dto/movieDto";
import styles from "./styles.module.scss";
import { apiLinks } from "../../constants";
import "../../styles/swiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageItem from "./imageItem/ImageItem";

function ImageCarousel({
  title,
  isPoster = false,
  movies = [],
}: {
  title: string;
  isPoster: boolean;
  movies: Array<movieDto>;
}) {
  const listItems = movies.map((movie) => (
    <SwiperSlide>
      <ImageItem url={apiLinks.imageBaseUrl + (isPoster ? movie.poster_path : movie.backdrop_path)} />
    </SwiperSlide>
  ));

  return (
    <div>
      <span className={styles.title}>{title}</span>
      <div>
        <Swiper
          className={classNames({
            [styles.poster]: isPoster,
            [styles.movie]: !isPoster,
          })}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={7}
          slidesPerGroup={5}
          slidesPerView={5}
          loop
          navigation
          pagination={{ clickable: true }}
          scrollbar={false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {listItems}
        </Swiper>
      </div>
    </div>
  );
}

export default ImageCarousel;
