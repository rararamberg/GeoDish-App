import Layout from "../../components/Layout/Layout";

const SignIn = () => {
  return (
    <Layout>
      <main className="sign-in-container">
        you'll see the sign in form here
        <h2 className="log-in">LOG IN</h2>
        <form className="login-container">
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
