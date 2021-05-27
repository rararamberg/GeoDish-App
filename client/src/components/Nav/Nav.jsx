import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          GeodishApp
        </NavLink>
        <div className="links">
          {/* {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions} */}
          <NavLink to="/">Dishes</NavLink>
          <NavLink to="/add-dishes">Create Dish</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
