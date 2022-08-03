import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/storage/store";
import { fetchSearchResult } from "@/storage/actions/search";
import { useSearchParams } from "react-router-dom";
import MovieSearchResults from "../../components/movieSearchResults/movieSearchResults";
import styles from "./styles.module.scss";

function Search() {
  const searchParamName = "q";
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchResult = useAppSelector((state: RootState) => state.search.result);
  const searchQuery = searchParams.get(searchParamName);

  function loadSearchResult() {
    dispatch(fetchSearchResult(searchQuery));
  }

  useEffect(loadSearchResult, [searchQuery]);

  const resultNotFound = (
    <div className={styles.search}>
      <div className={styles.mainContent}>
        <span>Your search for &quot;{searchQuery}&quot; did not have any matches.</span>
        <span>Suggestions:</span>
        <ul>
          <li>Try different keywords</li>
          <li>Looking for a movie or TV show?</li>
          <li>Try using a movie, TV show title, an actor or director</li>
          <li>Try a genre, like comedy, romance, sports, or drama</li>
        </ul>
      </div>
    </div>
  );

  const resultFound = (
    <div>
      <MovieSearchResults movies={searchResult} />
    </div>
  );

  return searchResult?.length === 0 ? resultNotFound : resultFound;
}

export default Search;
