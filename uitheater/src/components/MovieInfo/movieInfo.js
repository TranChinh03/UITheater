import React from "react";
import "./movieStyle.css";
import src from "../../assets/imgs/shin-cau-be-but-chi.jpg";
import { SVG_Youtube } from "../../assets/icons";

function MovieInfo(props) {
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
          <div className="movieTitle">{props.title}</div>
          <div className="detailContainer">
            <div>{props.detail}</div>
          </div>
          <div className="preDate">
            <div style={{ color: "white" }}>Premiere:</div>
            <div className="preDate-container">
              <div className="date">From {props.premiere}</div>
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
