import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";

function Landing(props) {
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
            <div className="content-image">
              <img
                src="https://i.imgur.com/o1yJG73.png"
                alt="around the world"
              />
            </div>
          </div>{" "}
          {/* content-container */}
        </div>{" "}
        {/* landing-container */}
        <div className="carousel-container">
          <Carousel />
        </div>{" "}
        {/* carousel-container */}
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
                  alt="connect icon"
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
                  alt="explore icon"
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
                  alt="share icon"
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
