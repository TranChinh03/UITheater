import React, { useState } from "react";
import "../BookingFilter/bookingStyle.scss";
import { SVG_SelectDown } from "../../assets/icons";

function BookingFilter() {
  const [movieSelected, setMovieSelected] = useState("");
  const [theaterSelected, setTheaterSelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [showTimeSelected, setShowTimeSelected] = useState("");
  const movieOptions = ["Meo Di Hia", "Cu Shin", "Doraemon"];
  const theaterOptions = ["CGV", "BHD", "Cinestar"];
  const dateOptions = ["31/02", "01/04", "24/12"];
  const showTimeOptions = ["12:00", "18:00", "23:00"];

  return (
    <>
      <div
        className="booking-container"
        style={{
          background:
            "linear-gradient(to right, #C70039, #E06F84, #C1ADB1, #312849)",
          height: "160px",
        }}
      >
        <div className="banner-content">
          BOOK THE
          <br />
          TICKET NOW!
        </div>
        <div className="box-grid-container">
          <div id="drop1">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{movieSelected}</div>
                <img className="drop-icon" src={SVG_SelectDown} alt="Select Icon" />
              </button>
              <div className="dropdown-content">
              {movieOptions.map(option => (
                <div
                  onClick={(e) => setMovieSelected(option)}
                  className="dropdown-item"
                >{option}</div>
              ))}
              </div>
            </div>
          </div>
          <div id="drop2">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{theaterSelected}</div>
                <img className="drop-icon" src={SVG_SelectDown} alt="Select Icon" />
              </button>
              <div className="dropdown-content">
              {theaterOptions.map(option => (
                <div
                  onClick={(e) => setTheaterSelected(option)}
                  className="dropdown-item"
                >{option}</div>
              ))}
              </div>
            </div>
          </div>
          <div id="drop3">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{dateSelected}</div>
                <img className="drop-icon" src={SVG_SelectDown} alt="Select Icon" />
              </button>
              <div className="dropdown-content">
              {dateOptions.map(option => (
                <div
                  onClick={(e) => setDateSelected(option)}
                  className="dropdown-item"
                >{option}</div>
              ))}
              </div>
            </div>
          </div>
          <div id="drop4">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{showTimeSelected}</div>
                <img className="drop-icon" src={SVG_SelectDown} alt="Select Icon" />
              </button>
              <div className="dropdown-content">
              {showTimeOptions.map(option => (
                <div
                  onClick={(e) => setShowTimeSelected(option)}
                  className="dropdown-item"
                >{option}</div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
