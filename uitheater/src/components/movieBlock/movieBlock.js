import React from "react";
import "../../styles/global.scss";
import "./movieBlock.css"
import "../../assets/fonts/fonts.css";

function MovieBlock() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="http://placehold.it/" alt="Ảnh phim"/>
      </div>
      <div className="movieName">
        <p>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</p>
      </div>
    </div>  
  );
}

export default MovieBlock;
