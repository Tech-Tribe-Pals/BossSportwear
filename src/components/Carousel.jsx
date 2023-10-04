import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import styled from "styled-components";

const ImgItem = styled(SplideSlide)`
  background-image: url(${(img) => img});
`;

const Carousel = () => {
  const splide = useRef(null);

  return (
    <Splide
      aria-label="My Favorite Images"
      className="carousel"
      tag="section"
      options={{
        width: "100%",
        height: "100vh",
        type: "loop",
        autoplay: true,
      }}
      ref={splide}
    >
      <ImgItem>
        <img src="/img1.jpeg" />
      </ImgItem>
      <ImgItem>
        <img src="/img2.jpg" />
      </ImgItem>
      <ImgItem img={"/img3.jpg"} />
    </Splide>
  );
};

export default Carousel;
