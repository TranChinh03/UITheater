import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss";

import { NavLink } from "react-router-dom";
import Movies from "../../views/MoviesScreen/Movies";

const Header = () => {
  return (
    <div className="headerContainer">
      <img className="headerLogo" src="/logo.svg" alt="Logo" />
      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="Search.." />
        <img className="icon" src="/search.svg" alt="Search Icon" />
      </div>
      <div className="SignInContainer">
        <div
          style={{ fontFamily: "Lilita One", fontSize: "35px", color: "white" }}
        >
          Sign In
        </div>
      </div>
      <div class="NavBar">
        <NavLink to="/" exact={true}>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/schedule">Schedule</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Header;
