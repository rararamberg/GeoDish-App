import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignIn.css";
// import { signIn } from '../../services/users'

const SignIn = () => {
  return (
    <Layout>
      <main className="sign-in-container">
        you'll see the sign in form here
        <h2 className="log-in">LOG IN</h2>
        <form className="login-form">
          <label>Email Address</label>
          <input
            required
            type="text"
            name="email"
            // value={email}
            // onChange={handleChange}
            placeholder="your-email@mailsite.com"
          />
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            placeholder="your-password"
          />
          <button className="login-btn">LOG IN</button>
          {/* {renderError()} */}
        </form>
      </main>
    </Layout>
  );
};

export default SignIn;
