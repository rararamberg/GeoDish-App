import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

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
            <div className="image-container">
              <img src="./" alt="this is where the carousel will go" />
            </div>{" "}
            {/* image-container */}
          </div>{" "}
          {/* content-container */}
        </div>{" "}
        {/* landing-container */}
        <section className="brand">
          <div className="brand-container">
            <div className="brand-statement">
              To be human is to experience food.
            </div>
            <div className="branding-container">
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
            </div>
          </div>{" "}
          {/* brand-container */}
        </section>
      </div>
    </Layout>
  );
}

export default Landing;
