import React, { useEffect, useState } from "react";
import "../../styles/global.scss";
import "./moviesNavBar.css"
import "../../assets/fonts/fonts.css";

function MoviesNavBar({selectedTab, onChangeTab}) {

  return (
    <div className="container">
      <ul>
        <li 
            style={{zIndex: 3}} 
            className={selectedTab === "NOW SHOWING" ? "current" :""}
            onClick={() => onChangeTab("NOW SHOWING")}>
                <a>NOW SHOWING</a>
        </li>
        <li 
            style={{zIndex: 2}} 
            className={selectedTab === "COMING SHOW" ? "current" :""}
            onClick={() => onChangeTab("COMING SHOW")}>
                <a>COMING SHOW</a>
        </li>
        <li 
            style={{zIndex: 1}} 
            className={selectedTab === "SPECIAL SCREENINGS" ? "current" :""}
            onClick={() => onChangeTab("SPECIAL SCREENINGS")}>
                <a>SPECIAL SCREENINGS</a>
        </li>
      </ul>
    </div>  
  );
}



export default MoviesNavBar;
