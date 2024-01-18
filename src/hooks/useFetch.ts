import { useEffect, useState } from "react";
import axios from "../api/baseApi";

export const useFetch = (url: string) => {
  const [data, setData] = useState();

  const fetchData = async (fetchUrl: string) => {
    const request = await axios.get(fetchUrl);
    setData(request.data.results);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data };
};
