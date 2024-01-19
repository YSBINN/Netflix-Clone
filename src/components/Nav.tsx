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
      </NetflixNav>
    </>
  );
}

const NetflixNav = styled.nav<{ $show: boolean }>(
  tw`
  fixed
  top-0
  w-full
  h-[150px]
  z-1
  p-[20px]
  flex
  justify-between
  items-center
  transition-all duration-500
  cursor-pointer`,
  props => props.$show && tw`bg-black`
);
const NetflixLogo = tw.img`
fixed
left-40
w-[200px]
h-[50px]
object-fill`;
