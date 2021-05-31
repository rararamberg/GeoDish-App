import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import { signUp } from "../../services/users";

const SignUp = (props) => {
  // use history to redirect user on site
  const history = useHistory();

  // use state to collect and set what user enters for their login info
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  // create handleChange function to add what is being inputed in form to setForm
  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  // Sign Up Function
  const onSignUp = async (event) => {
    // prevent default behavior
    event.preventDefault();
    // destructure props setUser
    const { setUser } = props;
    try {
      // create user with passing form into signUp axios function
      const user = await signUp(form);
      // set user to the user that was created after successful post request
      setUser(user);
      // once user is successfully signed up redirect to home page
      history.push("/");
    } catch (error) {
      console.error(error);
      // if error creating user setForm isError true and add error message while resetting form inputs to empty strings
      setForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  // FUNCTION TO RENDER  ERROR  MSG WITHIN BUTTON OR TOGGLE OFF IF USER ABLE TO SIGN IN
  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button type="submit" className="signup-btn">
          SIGN UP
        </button>
      );
    }
  };

  // destructure form's email, pw, pw confirm, and username
  const { username, email, password, confirmPassword } = form;

  return (
    <Layout>
      <main className="sign-up-container">
        <form onSubmit={onSignUp} className="signup-form">
          <h2 className="create-account">CREATE ACCOUNT</h2>
          <div className="signup-input-container">
            <label>Username</label>
            <input
              required
              className="signup-input-username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <label>Email Address</label>
            <input
              required
              className="signup-input-email"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              required
              className="signup-input-password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
            <input
              required
              className="signup-input-confirm"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          {/* end input div */}

          {renderError()}
          {/* TAKE OUT BTN BELOW IF RENDERERROR IS FUNCTIONAL */}
          {/* <button className="signup-btn">SIGN UP</button> */}
        </form>
      </main>
    </Layout>
  );
};

export default SignUp;
