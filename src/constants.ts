import { getMovieDetailsType } from "./types/getMovieDetailsType";

export const backgroundMovie = {
  title: "Narcos",
  overview: "A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.",
  url: "https://vimeo.com/384025132",
};

export const apiLinks = {
  apiBaseUrl: "https://api.themoviedb.org/3",
  imageBaseUrl: "https://image.tmdb.org/t/p/w500",
  imageFullHDBaseUrl: "https://image.tmdb.org/t/p/original",
};

export const moviesLinks = {
  trending: `${apiLinks.apiBaseUrl}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  topRated: `${apiLinks.apiBaseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  actionMovies: `${apiLinks.apiBaseUrl}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  comedy: `${apiLinks.apiBaseUrl}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  horror: `${apiLinks.apiBaseUrl}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  romance: `${apiLinks.apiBaseUrl}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  documentaries: `${apiLinks.apiBaseUrl}/discover/movie/?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  netflixOriginals: `${apiLinks.apiBaseUrl}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  search: `${apiLinks.apiBaseUrl}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false&query=`,
};

export const detailsLink = ({ mediaType, mediaId }: getMovieDetailsType) => {
  console.log(mediaType, "!!");
  return `${apiLinks.apiBaseUrl}/${mediaType ?? "movie"}/${mediaId}?api_key=${process.env.REACT_APP_API_KEY}`;
}
