import { useEffect, useState } from "react";
import axios from "../api/baseApi";
import { MovieDetails, TV } from "../../types/movies";

export const useFetch = (url: string) => {
  const [data, setData] = useState<TV[] | MovieDetails[] | []>([]);

  const fetchData = async (fetchUrl: string) => {
    const request: TV[] | MovieDetails[] = (await axios.get(fetchUrl)).data
      .results;
    setData(request);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data };
};
