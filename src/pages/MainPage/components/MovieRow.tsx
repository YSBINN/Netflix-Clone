import { MovieDetails, MovieProps, TV } from "../../../../types/movies";
import { useFetch } from "../../../hooks/useFetch";
import tw from "twin.macro";
import styled from "styled-components";
import { MouseEvent, useRef, useState } from "react";
import MovieDetail from "./RowModal";

export default function MovieRow({ title, fetchUrL, isLargeRow }: MovieProps) {
  //상태값
  const [onModal, setOnModal] = useState(false);
  const [detailData, setDetailData] = useState<TV | MovieDetails | Partial<TV>>(
    {}
  );
  //Dom
  const postersRef = useRef<HTMLDivElement>(null);
  //custom hook
  const { data } = useFetch(fetchUrL);

  const handleClick = (movie: any) => {
    setOnModal(true);
    setDetailData(movie);
  };

  const handleScoll = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (e.currentTarget.id === "1") {
      if (postersRef.current) {
        postersRef.current.scrollLeft -= window.innerWidth - 80;
      }
    } else {
      if (postersRef.current) {
        postersRef.current.scrollLeft += window.innerWidth - 80;
      }
    }
  };
  if (!data) return <></>;
  return (
    <RowSection>
      <RowTitle>{title}</RowTitle>
      <Slider className="group">
        <SliderArrowLeft
          id="1"
          onClick={(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            handleScoll(e)
          }
        >
          <Arrow>{"<"}</Arrow>
        </SliderArrowLeft>
        <Posters ref={postersRef}>
          {data?.map(movie => (
            <Poster
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title || movie.name}
              $isLargeRow={isLargeRow}
              onClick={() => handleClick(movie)}
            />
          ))}
        </Posters>
        <SliderArrowRight onClick={e => handleScoll(e)} id="2">
          <Arrow>{">"}</Arrow>
        </SliderArrowRight>
      </Slider>
      {onModal && (
        <MovieDetail detailData={detailData} setOnModal={setOnModal} />
      )}
    </RowSection>
  );
}

const RowSection = tw.section`
mt-[20px]
ml-[20px]
mr-[20px]
text-white
font-bold
text-2xl
`;

const RowTitle = tw.h1`
pl-[20px]`;

const Slider = tw.div`
relative
hover:(transition-all ease-in-out duration-[400ms])`;

const SliderArrowLeft = tw.div`
bg-clip-content
px-[20px] pt-[0]
box-border
transition-all ease-in-out duration-[400ms]
cursor-pointer
w-[80px]
absolute top-[0] left-[0]
h-full
flex items-center justify-center
invisible
z-[1000]
group-hover:(visible)
hover:(bg-[rgba(20,20,20,0.5)] transition-all ease-in-out duration-[400ms])
`;

const SliderArrowRight = tw.div`
bg-clip-content
px-[20px] pt-[0]
box-border
transition-all ease-in-out duration-[400ms]
cursor-pointer
w-[80px]
z-[1000]
absolute top-[0] right-[0]
h-full
flex items-center justify-center invisible
group-hover:(visible)
hover:(bg-[rgba(20,20,20,0.5)] transition-all ease-in-out duration-[400ms])
`;

const Arrow = tw.span`
text-white
transition-all ease-in-out duration-[400ms]
hover:(transition-all ease-in-out duration-[400ms] scale-150)
`;

const Posters = tw.div`
flex
overflow-y-hidden
overflow-x-scroll
mt-[20px] mr-[20px] mb-[20px] ml-[20px]
scroll-smooth`;

const Poster = styled.img<{ $isLargeRow: boolean }>(
  tw`
  object-contain
  w-full
  mr-[20px]
  rounded-[4px]
  duration-[400ms]`,
  props => (props.$isLargeRow ? tw`max-h-[320px]` : tw`max-h-[144px]`),
  props => (props.$isLargeRow ? tw`hover:scale-[1.10]` : tw`hover:scale-[1.08]`)
);
