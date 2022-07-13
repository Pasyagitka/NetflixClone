import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/storage/store";
import { fetchSearchResult } from "@/storage/actions/search";
import { useSearchParams } from "react-router-dom";
import MovieSearchResults from "../movieSearchResults/movieSearchResults";

function Search() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchResult = useAppSelector((state: RootState) => state.search.result);
  const searchQuery = searchParams.get("q");

  // console.log(searchResult)

  useEffect(() => {
    dispatch(fetchSearchResult(searchQuery));
  }, [dispatch]);

  return (
    <div>
      <MovieSearchResults movies={searchResult} />
    </div>
  );
}

export default Search;
