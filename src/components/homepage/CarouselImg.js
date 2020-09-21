import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselImg = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../img/serious-image.jpg")}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../img/serious-image.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../img/serious-image.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImg;