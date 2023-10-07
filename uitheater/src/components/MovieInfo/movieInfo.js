import React from "react";
import "./movieStyle.css";
import src from "../../assets/imgs/shin-cau-be-but-chi.jpg";

function MovieInfo() {
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
        <div className="info-container"></div>
      </div>
    </>
  );
}

export default MovieInfo;
