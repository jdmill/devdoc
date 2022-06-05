import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./navbar.css";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <ul className="nav__list">
          <Link className="nav__item" to="/">
            Home
          </Link>
          <Link className="nav__item" to="/app/userGuide">
            User Guide
          </Link>
          <Link className="nav__item" to="/app/projects">
            My Projects
          </Link>
          <Link className="nav__item" to="/app/login" onClick={logout}>
            Logout
          </Link>
        </ul>
      ) : (
        <ul className="nav__list">
          <Link className="nav__item" to="/app/userGuide">
            User Guide
          </Link>
          <Link className="nav__item" to="/app/signup">
            SignUp
          </Link>
          <Link className="nav__item" to="/app/login">
            Login
          </Link>
        </ul>
      )}
    </>
  );
}

export default Navbar;
