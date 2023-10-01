import "./header.scss";
import { SVG_LOGO, SVG_Search } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import Switcher from "../../routes/Switchs";
import SignIn from "../SignInModal/SignIn";
import { TEModal, TERipple } from "tw-elements-react";
import { useState } from "react";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="headerContainer">
      <img className="headerLogo" src={SVG_LOGO} alt="Logo" />
      <div className="headerOthers">
        <div className="searchAndSignInContainer">
          <div className="search">
            <input className="searchInput" type="text" placeholder="Search..." />
            <img className="searchLogo" src={SVG_Search} alt="Search" />
          </div>
          <div className="signIn" onClick={showModal}>
            <div className="signInText">Sign In</div>
          </div>
        </div>
        <div className="NavBar">
        <NavLink to="/" exact={true}>
          <div className="NavBarText">
            Home
          </div>
        </NavLink>
        <NavLink to="/movies" className={"BetweenNav"}>
          <div className="NavBarText">
            Movies
          </div>
        </NavLink>
        <NavLink to="/schedule" className={"BetweenNav"}>
          <div className="NavBarText">
            Schedule
          </div></NavLink>
        <NavLink to="/about" className={"EndNav"}>
          <div className="NavBarText">
            About
          </div>
        </NavLink>
        </div> 
      </div>
      <SignIn 
    isModalOpen = {isModalOpen}
    handleOk ={handleOk}
    handleCancel={handleCancel}/>
    </div>
  );
};

export default Header;
