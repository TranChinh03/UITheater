import "./header.scss";
import { SVG_LOGO, SVG_Search } from "../../assets/icons";
import { NavLink } from "react-router-dom";
import SignIn from "../SignInModal/SignIn";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import getLastWord from "../../store/getLastWord";
// import getLastWord from "../../store/getLastWord";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["userToken"]);
  const [response, setResponse] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const isLogin = () => {
    if (localStorage.getItem("Token") === null) {
      return false;
    }
    return true;
  };
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://uitlogachcu.onrender.com/me",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
  };
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        console.log(response.data.name);
        setResponse(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cookies]);

  return (
    <div className="headerContainer">
      <img className="headerLogo" src={SVG_LOGO} alt="Logo" />
      <div className="headerOthers">
        <div className="searchAndSignInContainer">
          <div className="search">
            <input
              className="searchInput"
              type="text"
              placeholder="Search..."
            />
            <img className="searchLogo" src={SVG_Search} alt="Search" />
          </div>
          {!isLogin ? (
            <div className="signIn" onClick={showModal}>
              <div className="signInText">Sign In</div>
            </div>
          ) : (
            <div className="signIn">
              <div className="signInText">{getLastWord(response)}</div>
            </div>
          )}
        </div>
        <div className="NavBar">
          <NavLink to="/" exact={true}>
            <div className="NavBarText">Home</div>
          </NavLink>
          <NavLink to="/movies" className={"BetweenNav"}>
            <div className="NavBarText">Movies</div>
          </NavLink>
          <NavLink to="/schedule" className={"BetweenNav"}>
            <div className="NavBarText">Schedule</div>
          </NavLink>
          <NavLink to="/about" className={"EndNav"}>
            <div className="NavBarText">About</div>
          </NavLink>
        </div>
      </div>
      <SignIn
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Header;
