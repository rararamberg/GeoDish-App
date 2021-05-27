import { NavLink } from "react-router-dom";

const Nav = () => {
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
          <Navlink to="/">Dishes</Navlink>
          <Navlink to="/create-dish">Create Dish</Navlink>
          <Navlink to="/login">Login</Navlink>
          <Navlink to="/signup">Sign Up</Navlink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
