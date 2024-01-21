import { ModalProps} from "../../../../types/movies";
import tw from "twin.macro";
export default function RowModal({ modalData, setOnModal }: ModalProps) {
  const { backdrop_path, title, name, vote_average, overview } = modalData;
  return (
    <Container>
      <ModalWrapper>
        <Modal>
          <ModalClose onClick={() => setOnModal(false)}>X</ModalClose>
          <ModalPoster
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          />
          <ModalContents>
            <ModalDetail>
              <ModalUserPerc>100% for you</ModalUserPerc>
            </ModalDetail>
            <ModalTitle>{title ? title : name}</ModalTitle>
            <ModalOverview>평점:{vote_average}</ModalOverview>
            <ModalOverview>{overview}</ModalOverview>
          </ModalContents>
        </Modal>
      </ModalWrapper>
    </Container>
  );
}

const Container = tw.div`
z-[1200]
absolute
py-[100px]
`;

const ModalWrapper = tw.div`
fixed
inset-[0px]
bg-[rgb(0 0 0 / 71%)]
flex
justify-center
`;

const Modal = tw.div`
p-[80px]
relative
max-w-[800px]
bg-[#111]
overflow-hidden
rounded-[8px]
transition-all ease-in-out duration-[400ms]
shadow-[0px_3px_5px_-1px_rgba(0,0,0,0.2), 0px_5px_8px_0px_rgba(0,0,0,0.14), 0px_1px_14px_0px_rgba(0,0,0,0.12)]
`;

const ModalClose = tw.span`
absolute
top-[20px] 
right-[20px]
cursor-pointer
z-[1000]
text-white
`;

const ModalPoster = tw.img`
w-full
h-auto`;

const ModalContents = tw.div`
p-[40px]
text-white`;

const ModalDetail = tw.p`
font-[600]
text-[18px]
`;

const ModalUserPerc = tw.span`
text-[#46d369]`;

const ModalTitle = tw.h2`
p-[0]
font-[40px]
mt-[16px] mb-[0]
`;

const ModalOverview = tw.p`
text-[20px]
leading-[1.5]
`;
