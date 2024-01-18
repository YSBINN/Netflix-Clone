import Nav from "./components/Nav";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import requests from "./api/requests";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <MovieRow
        title="NETFLIX ORIGNALS"
        fetchUrL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <MovieRow
        title="Trending Now"
        fetchUrL={requests.fetchTrending}
        isLargeRow={false}
      />
      <MovieRow
        title="Top Rated"
        fetchUrL={requests.fetchTopRated}
        isLargeRow={false}
      />
      <MovieRow
        title="Action Movies"
        fetchUrL={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <MovieRow
        title="Comedy Movies"
        fetchUrL={requests.fetchComedyMovies}
        isLargeRow={false}
      />
    </>
  );
}

export default App;
