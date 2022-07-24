import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/storage/store";
import { fetchSearchResult } from "@/storage/actions/search";
import { useSearchParams } from "react-router-dom";
import MovieSearchResults from "../../components/movieSearchResults/movieSearchResults";
import { moviesLinks } from "@/constants";

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
    <div>
      Your search for {searchQuery} did not have any matches. Suggestions: Try different keywords Looking for a movie or
      TV show? Try using a movie, TV show title, an actor or director Try a genre, like comedy, romance, sports, or
      drama
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
