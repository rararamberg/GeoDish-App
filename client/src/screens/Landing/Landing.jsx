import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import "./Landing.css";

function Landing(props) {
  return (
    <Layout user={props.user}>
      <div className="landing-container">
        <div className="content-container">
          <div className="content-text">
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
          </div>
          <div className="content-image">
            <img src="https://i.imgur.com/o1yJG73.png" alt="around the world" />
          </div>
        </div>{" "}
        {/* content-container */}
        <div className="carousel-container">
          <Carousel className="carousel" />
        </div>{" "}
        {/* carousel-container */}
        <section className="brand">
          <div className="brand-container">
            <div className="brand-statement">
              To be human is to experience food.
            </div>{" "}
            {/* brand-statement */}
            <div className="main-brand-icon-container">
              <div className="brand-icon-container">
                <div className="icon-container">
                  <img
                    className="icon-logo"
                    src="https://i.imgur.com/9TSAqgq.png"
                    alt="connect icon"
                  />
                </div>
                <div className="brand-container">
                  <h5 className="brand-title">Connect.</h5>
                  <p className="brand-substatement">
                    We’re living in a world that moves a million miles an hour.
                    Take a moment to pause and connect with the things around
                    you. We believe that food is an avenue to keep you grounded
                    during the crazy times.{" "}
                  </p>
                </div>
              </div>{" "}
              {/* brand-icon-container */}
              <div className="brand-icon-container">
                <div className="icon-container">
                  <img
                    className="icon-logo"
                    src="https://i.imgur.com/pf7TDJA.png"
                    alt="explore icon"
                  />
                </div>
                <div className="brand-container">
                  <h5 className="brand-title">Explore.</h5>
                  <p className="brand-substatement">
                    Let yourself wander. When you have a chance to explore new
                    cuisines and restaurants, it introduces you to other
                    perspectives. Not all who wander are lost, some of them are
                    just exploring.
                  </p>
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
                  <h5 className="brand-title">Share.</h5>
                  <p className="brand-substatement">
                    There is no better way to experience food than by sharing.
                    Whether you’re sharing a meal or suggesting a restaurant,
                    the community of food allows us to appreciate everything
                    else around us.{" "}
                  </p>
                </div>
              </div>{" "}
              {/* brand-icon-container */}
            </div>
          </div>{" "}
          {/* brand-container */}
        </section>
      </div>{" "}
      {/* landing-container */}
    </Layout>
  );
}

export default Landing;
