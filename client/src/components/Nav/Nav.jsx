import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/add-dish">
        Add Dish
      </NavLink>
      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  );
  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-in">
        Log In
      </NavLink>
      <NavLink className="link" to="/sign-up">
        Sign Up
      </NavLink>
    </>
  );
  const alwaysOptions = (
    <>
      <NavLink className="link" to="/">
        Dishes
      </NavLink>
    </>
  );

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          GeodishApp
        </NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
          {/* <NavLink to="/">Dishes</NavLink>
          <NavLink to="/add-dishes">Create Dish</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
