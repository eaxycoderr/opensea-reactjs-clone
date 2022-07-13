import { NextArrow } from "./components/sliderArrow/SliderArrow";
import { PrevArrow } from "./components/sliderArrow/SliderArrow";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
