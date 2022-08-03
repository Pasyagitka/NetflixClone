export type movieDetailsDto = {
  id: Key | null | undefined;
  title: string;
  name: string;
  vote_average: number;
  release_date: number;
  first_air_date: number;
  runtime: number;
  episode_run_time: number;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
};
