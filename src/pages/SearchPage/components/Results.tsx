import { useNavigate } from "react-router-dom";
import { MovieDetails } from "../../../../types/movies";
import tw from "twin.macro";

export default function Results({
  searchResults,
}: {
  searchResults: Partial<MovieDetails>[];
}) {
  const navigate = useNavigate();
  const url = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {searchResults.map(movie => {
        if (movie.backdrop_path !== null && movie.media_type !== "person") {
          const movieImageUrl = url + movie.backdrop_path;
          return (
            <ResultContainer>
              <Result key={movie.id}>
                <ResultPosters onClick={() => navigate(`/${movie.id}`)}>
                  <ResultPoster src={movieImageUrl} alt="movie" />
                </ResultPosters>
              </Result>
            </ResultContainer>
          );
        }
        return <></>;
      })}
    </>
  );
}

const ResultContainer = tw.section`
bg-black
w-full
text-center
py-[5rem]
`;

const Result = tw.div`
flex-auto
inline-block
pr-[0.5rem]
pb-[7rem]
`;

const ResultPosters = tw.div`
cursor-pointer
transition-transform
duration-300`;

const ResultPoster = tw.img`
w-[90%]
rounded-[5px]`;
