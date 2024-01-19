import { useState, useEffect } from "react";
import axios from "../../../api/baseApi";
import requests from "../../../api/requests";
import tw from "twin.macro";
import { MovieDetails } from "../../../../types/movies";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState<MovieDetails>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const bannerBackUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

  useEffect(() => {
    fetchDate();
  }, []);

  const truncate = (str: string | undefined, n: number): string => {
    if (str === undefined) return "";
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  const fetchDate = async () => {
    const request = await axios.get(requests.fetchNowPlaying);

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  if (!movie) return <></>;

  if (!isClicked) {
    return (
      <BannerHeader $backDropPath={bannerBackUrl}>
        <BannerContents>
          <BannerTitle>{movie.title || movie.original_title}</BannerTitle>
          <BannerButtons>
            <BannerPlayButton onClick={() => setIsClicked(true)}>
              Play
            </BannerPlayButton>
            <BannerInfoButton>More Information</BannerInfoButton>
          </BannerButtons>
          <BannerDesc>{truncate(movie.overview, 200)}</BannerDesc>
        </BannerContents>
        <BannerFadeBotton />
      </BannerHeader>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Ifram
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            allow="autoplay; fullscreen"
          ></Ifram>
        </HomeContainer>
      </Container>
    );
  }
}

////Banner styles///////
const BannerHeader = styled.header<{ $backDropPath: string }>`
  background-image: url(${props => props.$backDropPath});
  ${tw`
  object-cover 
  h-[448px]
  w-full
  bg-cover
  bg-center
  bg-top`}
`;

const BannerContents = tw.div`
ml-[40px]
pt-[140px]
h-[190px]
`;

const BannerTitle = tw.h1`
text-5xl
font-extrabold
pb-2
`;

const BannerButtons = tw.div`
flex
flex-row
mt-[15px]`;

const BannerPlayButton = tw.button`
bg-white 
text-black 
flex 
flex-row 
justify-start 
items-center 
text-xs 
font-bold 
rounded-[0.2vw] 
p-[0.4rem 1.8rem 0.4rem 1rem] 
mr-4
hover:(text-white bg-black transition-all delay-200)`;

const BannerInfoButton = tw(BannerPlayButton)`
bg-[rgba(109,109,110,0.7)] 
text-white
hover:(bg-[rgb(74,74,84)] text-black)`;

const BannerDesc = tw.h1`
w-[45rem]
mt-[15px]
leading-tight
font-medium
text-base
max-w-[400px]
h-[80px]`;

const BannerFadeBotton = tw.div`
h-[20rem]
bg-gradient-to-b from-transparent via-[rgba(37,37,37,0.61)] to-[#111]`;

////Banner Detail styles///////

const Container = tw.div`
  flex 
  justify-center 
  items-center
  flex-col
  w-full
  h-screen
`;

const HomeContainer = tw.div`
w-full
h-full
`;

const Ifram = tw.iframe`
w-full
h-full
z-[1]
opacity-65
border-none
after:(absolute top-0 left-0 w-full h-full)
`;
