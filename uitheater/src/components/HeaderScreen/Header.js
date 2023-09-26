import "./header.scss";
import { SVG_LOGO, SVG_Search} from "../../assets/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <img className="headerLogo" src={SVG_LOGO} alt="Logo" />
      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="Search.." />
        <img className="icon" src={SVG_Search} alt="Search Icon" />
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
        <NavLink to="/movies" className={"BetweenNav"}>Movies</NavLink>
        <NavLink to="/schedule" className={"BetweenNav"}>Schedule</NavLink>
        <NavLink to="/about" className={"EndNav"}>About</NavLink>
      </div>
    </div>
  );
};

export default Header;
