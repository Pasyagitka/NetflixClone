import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/storage/store";
import { fetchSearchResult } from "@/storage/actions/search";
import { useSearchParams } from "react-router-dom";
import MovieSearchResults from "../../components/movieSearchResults/movieSearchResults";

function Search() {
  const searchParamName = "q";
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchResult = useAppSelector((state: RootState) => state.search.result);
  const searchQuery = searchParams.get(searchParamName);

  function loadSearchResult() {
    console.log('fetch search', searchQuery);
    dispatch(fetchSearchResult(searchQuery));
  }

  useEffect(loadSearchResult, [searchQuery]);

  return (
    <div>
      <MovieSearchResults movies={searchResult} />
    </div>
  );
}

export default Search;
