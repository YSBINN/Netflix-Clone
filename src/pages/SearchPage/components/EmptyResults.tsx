import tw from "twin.macro";

interface EmptyResultProp {
  searchTerm: string | null;
}

export default function EmptyResults({ searchTerm }: EmptyResultProp) {
  return (
    <EmptyResultsContainer>
      <div>
        <p>찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.</p>
      </div>
    </EmptyResultsContainer>
  );
}

const EmptyResultsContainer = tw.section`
flex
justify-center
content-center
text-[#c5c5c5]
h-full
p-[8rem]`;
