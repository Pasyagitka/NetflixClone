/* eslint-disable import/no-unresolved */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { movieDto } from "@/types/dto/movieDto";
import styles from "./styles.module.scss";
import "../../styles/swiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageItem from "../imageItem/ImageItem";

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
    <SwiperSlide key={movie.id}>
      <ImageItem movie={movie} isPoster={isPoster} />
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
          breakpoints={{
            1378: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            998: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            625: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {listItems}
        </Swiper>
      </div>
    </div>
  );
}

export default ImageCarousel;
