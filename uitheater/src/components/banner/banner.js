import React from "react";
import "../../styles/global.scss";
import "./banner.css"
import bannerImage from '../../assets/img/banner.png'

function Banner() {
  return (
    <div className="container">
      <img className="bannerImage" src={bannerImage} alt="banner image"/>
    </div>  
  );
}

export default Banner;
