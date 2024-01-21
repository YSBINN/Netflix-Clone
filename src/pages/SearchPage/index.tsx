import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/baseApi";
import { MovieDetails } from "../../../types/movies";
import EmptyResults from "./components/EmptyResults";
import Results from "./components/Results";

function SearchPage() {
  const [searchResults, setSearchResults] = useState<Partial<MovieDetails>[]>(
    []
  );
  console.log(useLocation().search);
  const searchUrl = "/search/multi?include_adult=false&query=";
  const searchTerm = new URLSearchParams(useLocation().search).get("q");

  useEffect(() => {
    if (searchTerm) fetchSearchMovie(searchTerm);
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm: string) => {
    try {
      const { data } = await axios.get(searchUrl + searchTerm);
      setSearchResults(data.results);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return searchResults.length > 0 ? (
    <Results searchResults={searchResults} />
  ) : (
    <EmptyResults searchTerm={searchTerm} />
  );
}

export default SearchPage;
