import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <NetflixNav $show={show}>
        <NetflixLogo
          alt="Netflix logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png?20140810085105"
          onClick={() => window.location.reload()}
        />
        <UserLogo
          alt="User ogo"
          src="https://images.ctfassets.net/y2ske730sjqp/6HVwxZ6sJIwTBu1y11pkPX/883966c47f587ef2fc0ddb419b37959f/BrandAssets_Logos_ApplicationExamples_Carousel-06.jpg"
        />
      </NetflixNav>
    </>
  );
}

const NetflixNav = styled.nav<{ $show: boolean }>(
  tw`fixed top-0 w-full h-[30px] z-1 p-20 flex justify-between items-center transition-all duration-500`,
  props => props.$show && tw`bg-black`
);
const NetflixLogo = tw.img`fixed left-40 w-[200px] h-[50px] object-fill`;
const UserLogo = tw.img`fixed right-40 w-[80px] h-[80px] object-cover rounded-full`;