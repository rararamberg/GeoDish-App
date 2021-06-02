import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: "https://i.imgur.com/dVfUSAD.jpg",
    caption: "Fish and Chips",
    // description: "Description Here",
  },
  {
    image: "https://i.imgur.com/EtqmA2U.jpg",
    caption: "Deep Dish Pizza",
    // description: "Description Here",
  },
  {
    image: "https://i.imgur.com/ku8XTKl.jpg",
    caption: "Shoyu Ramen",
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
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
