import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

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
function Landing(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout user={props.user}>
      <div>
        <div className="landing-container">
          <div className="content-container">
            <h1>Are </h1>
            <h1>You Hungry?</h1>
            <br />
            <h6 className="bold-four">
              This is a space created for those that are apart of the restaurant
              industry to share their most iconic dishes. Connect with the
              hungry people and let them experience your craft. So... Are you
              hungry yet?
            </h6>
            <br />
            <Link className="btn-explore" to="/dishes">
              Explore Dishes
            </Link>
            <div className="carousel-container">
              <Carousel index={index} onSelect={handleSelect}>
                {data.map((slide, i) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.caption}
                      />
                      <Carousel.Caption>
                        <h3>{slide.caption}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>{" "}
            {/* carousel-container */}
          </div>{" "}
          {/* content-container */}
        </div>{" "}
        {/* landing-container */}
        <section className="brand">
          <div className="brand-container">
            <div className="brand-statement">
              To be human is to experience food.
            </div>{" "}
            {/* brand-statement */}
            <div className="brand-icon-container">
              <div className="icon-container">
                <img
                  className="icon-logo"
                  src="https://i.imgur.com/4jJMlko.png"
                />
              </div>
              <div className="brand-container">
                <h5>Connect.</h5>
                <p className="brand-substatement">statement 1</p>
              </div>
            </div>{" "}
            {/* brand-icon-container */}
            <div className="brand-icon-container">
              <div className="icon-container">
                <img
                  className="icon-logo"
                  src="https://i.imgur.com/TyXMZ0y.png"
                />
              </div>
              <div className="brand-container">
                <h5>Explore.</h5>
                <p className="brand-substatement">statement 2</p>
              </div>
            </div>{" "}
            {/* brand-icon-container */}
            <div className="brand-icon-container">
              <div className="icon-container">
                <img
                  className="icon-logo"
                  src="https://i.imgur.com/bQ3OaP2.png"
                />
              </div>
              <div className="brand-container">
                <h5>Share.</h5>
                <p className="brand-substatement">statement 3</p>
              </div>
            </div>{" "}
            {/* brand-icon-container */}
          </div>{" "}
          {/* brand-container */}
        </section>
      </div>
    </Layout>
  );
}

export default Landing;
