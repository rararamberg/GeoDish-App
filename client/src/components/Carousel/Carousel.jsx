import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: "https://i.imgur.com/RtexCFX.png",
    // caption: "Fish and Chips",
    // description: "Description Here",
  },
  {
    image: "https://i.imgur.com/kgtcgZp.png",
    // caption: "Deep Dish Pizza",
    // description: "Description Here",
  },
  {
    image: "https://i.imgur.com/Q2bVYVH.png",
    // caption: "Shoyu Ramen",
    // description: "Description Here",
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
          <Carousel.Item>
            <img className="d-block w-100" src={slide.image} alt="slider" />
            {/* <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
