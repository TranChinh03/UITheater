import React, { useState } from "react";
import "../BookingFilter/bookingStyle.scss";
import selectDown from "../../assets/icons/selectDown.svg";

function BookingFilter() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);
  const [theaterSelected, setTheaterSelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [showTimeSelected, setShowTimeSelected] = useState("");
  const movieOptions = ["Meo Di Hia", "Cu Shin", "Doraemon"];
  const theaterOptions = ["CGV", "BHD", "Cinestar"];
  const dateOptions = ["31/02", "01/04", "24/12"];
  const showTimeOptions = ["12:00", "18:00", "23:00"];
  const [isRotated, setIsRotated] = useState(false);

  const handleDivClick = () => {
    setIsRotated(!isRotated);
  };

  const imageStyle = {
    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.25s ease-in-out', // Adjust transition duration as needed
  };

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
            <div
              onClick={() => {
                setIsOpen1(!isOpen1);
                handleDivClick();
              }}
              className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{movieSelected ? movieSelected : "Choose Movie"}</div>
                <img 
                  className={`drop-icon ${isRotated ? 'rotate' : ''}`}
                  src={selectDown} alt="Select Icon" 
                  style={imageStyle}/>
              </button>
                {isOpen1 && (
                  <div className="dropdown-content">
                  {movieOptions.map(option => (
                    <div
                      onClick={(e) => setMovieSelected(option)}
                      className="dropdown-item"
                    >{option}</div>
                  ))}
                  </div>
                )}
              </div>
          </div>
          <div id="drop2">
          <div
              onClick={() => setIsOpen2(!isOpen2)}
              className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{theaterSelected ? theaterSelected : "Choose Theater"}</div>
                <img className="drop-icon" src={selectDown} alt="Select Icon" />
              </button>
                {isOpen2 && (
                  <div className="dropdown-content">
                  {theaterOptions.map(option => (
                    <div
                      onClick={(e) => setTheaterSelected(option)}
                      className="dropdown-item"
                    >{option}</div>
                  ))}
                  </div>
                )}
              </div>
          </div>
          <div id="drop3">
            <div
                onClick={() => setIsOpen3(!isOpen3)}
                className="dropdown">
                <button className="dropbtn">
                  <div className="droptext">{dateSelected ? dateSelected : "Choose Date"}</div>
                  <img className="drop-icon" src={selectDown} alt="Select Icon" />
                </button>
                  {isOpen3 && (
                    <div className="dropdown-content">
                    {dateOptions.map(option => (
                      <div
                        onClick={(e) => setDateSelected(option)}
                        className="dropdown-item"
                      >{option}</div>
                    ))}
                    </div>
                  )}
                </div>
            </div>
          <div id="drop4">
          <div
              onClick={() => setIsOpen4(!isOpen4)}
              className="dropdown">
              <button className="dropbtn">
                <div className="droptext">{showTimeSelected ?  showTimeSelected : "Choose Showtime"}</div>
                <img className="drop-icon" src={selectDown} alt="Select Icon" />
              </button>
                {isOpen4 && (
                  <div className="dropdown-content">
                  {showTimeOptions.map(option => (
                    <div
                      onClick={(e) => setShowTimeSelected(option)}
                      className="dropdown-item"
                    >{option}</div>
                  ))}
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
