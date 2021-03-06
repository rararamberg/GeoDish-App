import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/add-dish">
        ADD DISH
      </NavLink>
      <NavLink className="signout-link" to="/sign-out">
        SIGN OUT
      </NavLink>
    </>
  );
  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-in">
        LOG IN
      </NavLink>
      <NavLink className="signup-link" to="/sign-up">
        SIGN UP
      </NavLink>
    </>
  );
  const alwaysOptions = (
    <>
      <NavLink className="link" to="/dishes">
        DISHES
      </NavLink>
    </>
  );

  return (
    <nav>
      <div className="nav-bar">
        <NavLink className="logo" to="/">
          GeoDish
        </NavLink>
        <div className="links-welcome-container">
          <div className="links">
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
