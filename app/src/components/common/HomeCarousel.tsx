import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as CarouselImages from "../../assets/images";


const HomeCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={5000}>
      {Object.values(CarouselImages).map((image, index) => (
        <div>
          <img src={image} alt="item" key={index} />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
