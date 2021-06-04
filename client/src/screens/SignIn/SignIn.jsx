import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignIn.css";
import { signIn } from "../../services/users";

const SignIn = (props) => {
  // use history to redirect user on site
  const history = useHistory();

  // use state to collect and set what user enters for their login info
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  // create handleChange function to add what is being inputed in form to setForm
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // like onSubmit, create onSignIn function that uses imported signIn api post function for user to access their account after submitting sign in form
  const onSignIn = async (e) => {
    // prevent default behavior
    e.preventDefault();
    // destructure passed in props (setUser)
    const { setUser } = props;
    try {
      const user = await signIn(form);
      // set user to matched user from log in form
      setUser(user);
      // after log in success redirect user to home screen
      history.push("/");
    } catch (error) {
      console.error(error);
      // if error, notify user invalid credentials and reset email/password to empty string
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
        <button className="login-btn" type="submit">
          SIGN IN
        </button>
      );
    }
  };

  // destructure form's email and password
  const { email, password } = form;

  return (
    <Layout>
      <main className="sign-in-container">
        <form onSubmit={onSignIn} className="login-form">
          <h2 className="log-in">LOG IN</h2>
          <div className="input-container">
            <div className="label-input-container">
              <label>Email Address</label>
              <input
                required
                className="input-email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="your-email@mailsite.com"
              />
            </div>
            <div className="label-input-container">
              <label>Password</label>
              <input
                required
                className="input-password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="your-password"
              />
            </div>
            {renderError()}
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default SignIn;
