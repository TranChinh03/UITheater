import React from "react";
import "./movieStyle.css";
import src from "../../assets/imgs/shin-cau-be-but-chi.jpg";
import { SVG_Youtube } from "../../assets/icons";

function MovieInfo({ props }) {
  return (
    <>
      <div className="bg-container">
        <img
          src={src}
          alt="Phim"
          width={"200px"}
          height={"300px"}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        ></img>
        <div className="info-container">
          <div className="movieTitle">3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</div>
          <div className="detailContainer">
            <div>3DCG! Shin the Pencil Boy: Super Power War ~Flying Sushi~ revolves around the story of two special light sources from the universe bringing special super powers to Earth. A positive light source "entered" Shin, making his plump butt hot and able to control surrounding objects at will. </div>
          </div>
          <div className="preDate">
            <div style={{ color: "white" }}>Premiere:</div>
            <div className="preDate-container">
              <div className="date">From 31/02/2023</div>
            </div>
          </div>
          <div className="buttons">
            <button className="trailerBtn">
              <img className="ytbLogo" src={SVG_Youtube} alt="Youtube" />
              Trailer
            </button>
            <button className="bookingBtn">
              BOOKING NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
