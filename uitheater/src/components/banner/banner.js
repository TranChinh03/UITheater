import React from "react";
import "../../styles/global.scss";
import "./banner.css";
import { IM_Banner } from "../../assets/imgs";

function Banner() {
  return (
    <img
      className="bannerImage"
      src={IM_Banner}
      alt="banner"
    />
  );
}

export default Banner;
