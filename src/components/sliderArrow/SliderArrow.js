import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./sliderArrow.css";

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      className={className}
      id="nextArrow"
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      id="prevArrow"
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
