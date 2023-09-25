import React from "react";
import "../../styles/global.scss";
import "./movieBlock.css"
import "../../assets/fonts/fonts.css";
import src from "../../assets/img/shin-cau-be-but-chi.jpg";

function MovieBlock() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src={src} alt="Ảnh phim"/>
      </div>
      <div className="movieName">
        <p>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</p>
      </div>
    </div>  
  );
}

export default MovieBlock;
