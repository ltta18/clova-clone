import React from "react";
import { Carousel } from "react-bootstrap";
import './CarouselImg.css'

const CarouselImg = () => {
  return (
    <Carousel className="h-100">
      <Carousel.Item className="h-100">
        <img
          className="d-block w-100 h-100"
          src={require("../../img/serious-image.jpg")}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item className="h-100"> 
        <img
          className="d-block w-100 h-100"
          src={require("../../img/serious-image.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-100">
        <img
          className="d-block w-100 h-100"
          src={require("../../img/serious-image.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;