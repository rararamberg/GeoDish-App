import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
// import { signUp } from '../../services/users'

const SignUp = (props) => {
  return (
    <Layout>
      <main className="sign-up-container">this is the signup form</main>
      <h2 className="create-accoutn">CREATE ACCOUNT</h2>
      <form className="signup-form">
        <div className="input-container">
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            // value={ }
            // onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            required
            type="text"
            name="email"
            // value={ }
            // onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            // value={ }
            // onChange={handleChange}
          />
          <label>Confirm Password</label>
          <input
            required
            type="password"
            name="confirmPassword"
            // value={confirmPassword}
            // onChange={handleChange}
          />
        </div>
        {/* end input div */}
        <button className="signup-btn">SIGN UP</button>
        {/* {renderError()} */}
      </form>
    </Layout>
  );
};

export default SignUp;
