import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: "https://i.imgur.com/RtexCFX.png",
    id: "01",
  },
  {
    image: "https://i.imgur.com/kgtcgZp.png",
    id: "02",
  },
  {
    image: "https://i.imgur.com/Q2bVYVH.png",
    id: "03",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={6000}
      pause={false}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100" src={slide.image} alt="slider" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
