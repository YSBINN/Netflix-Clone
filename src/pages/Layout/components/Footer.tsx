import tw from "twin.macro";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="https://help.netflix.com/ko/node/412">
              넷플릭스 소개
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">고객센터</FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              미디어 센터
            </FooterLink>
            <FooterLink href="https://help.netflix.com/ko">
              이용 약관
            </FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRight>Netflix Rights Reserved.</FooterDescRight>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = tw.div`
flex
justify-center 
items-center
px-[40px]
py-[0]
border-t-[1px] border-solid border-[rgb(25,25,25)]
w-full
relative
z-[100]
md:px-[20px] md:py-[20px] md:pb-[30px]`;

const FooterContent = tw.div``;

const FooterLinkContainer = tw.div`
w-[500px]
md:w-full`;

const FooterLinkTitle = tw.h1`
text-gray-200
text-[17px]
text-center	`;

const FooterLinkContent = tw.div`
flex
justify-between
flex-wrap
mt-[35px]
md:mt-[26px]`;

const FooterLink = tw.a`
text-gray-200

text-[14px]
w-[110px]
mb-[21px]
hover:underline
md:mb-[16px]`;

const FooterDescContainer = tw.div`
mt-[30px]
md:mt-[20px]`;

const FooterDescRight = tw.h2`
  text-white
  text-[14px]
  text-center	
`;
