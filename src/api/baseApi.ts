import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4ea7af4be3882ab2eac2e15ae176c2a7",
    languege: "ko-KR",
  },
});

export default instance;
