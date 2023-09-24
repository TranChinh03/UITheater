import React, { useState } from "react";
import "../../styles/global.scss";
import "./moviesNavBar.css"
import "../../assets/fonts/fonts.css";

function MoviesNavBar() {

    const [currentTab, setCurrentTab] = useState("NOW SHOWING");
    
    const handleTabHover = (tabName) => {
        setCurrentTab(tabName)
    }

  return (
    <div className="container">
      <ul>
        <li 
            style={{zIndex: 3}} 
            className={currentTab === "NOW SHOWING" ? "current" :""}
            onClick={() => handleTabHover("NOW SHOWING")}>
                <a>NOW SHOWING</a>
        </li>
        <li 
            style={{zIndex: 2}} 
            className={currentTab === "COMING SHOW" ? "current" :""}
            onClick={() => handleTabHover("COMING SHOW")}>
                <a>COMING SHOW</a>
        </li>
        <li 
            style={{zIndex: 1}} 
            className={currentTab === "SPECIAL SCREENINGS" ? "current" :""}
            onClick={() => handleTabHover("SPECIAL SCREENINGS")}>
                <a>SPECIAL SCREENINGS</a>
        </li>
      </ul>
    </div>  
  );
}



export default MoviesNavBar;
