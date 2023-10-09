import React, { useState } from "react";
import "../BookingFilter/bookingStyle.scss";
import { SVG_SelectDown } from "../../assets/icons";

const rotation = (isRotated) => {
  return {
    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.25s ease-in-out", // Adjust transition duration as needed
  };
};

function BookingFilter() {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);
  const [selectedInfo, setSelectedInfo] = useState({
    movies: "Choose Movie",
    theaters: "Choose Theater",
    dates: "Choose Date",
    showTime: "Choose Showtime",
  });
  const [isRotated, setIsRotated] = useState([false, false, false, false]);
  const catagories = ["movies", "theaters", "dates", "showTime"];
  const Info = {
    movies: ["Meo Di Hia", "Cu Shin", "Doraemon", "Tham tu lung danh Conan"],
    theaters: ["CGV", "BHD", "Cinestar"],
    dates: ["31/02", "01/04", "24/12"],
    showTime: ["12:00", "18:00", "23:00"],
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
          {isRotated.map((value, index) => (
            <div id="drop">
              <div
                onClick={() => {
                  isRotated.forEach(
                    (value, idx) => {
                      isRotated[idx] = ((index !== idx) ? false : !value)
                      isOpen[idx] = ((index !== idx) ? false : !value)
                    }
                  );
                  setIsRotated(isOpen);
                  setIsOpen(isRotated);
                }}
                className="dropdown"
              >
                <button className="dropbtn">
                  <div className="droptext">
                    {selectedInfo[catagories[index]]}
                  </div>
                  <img
                    className={`drop-icon `}
                    src={SVG_SelectDown}
                    alt="Select Icon"
                    style={rotation(value)}
                  />
                </button>
                {isOpen[index] && (
                  <div className="dropdown-content">
                    {Info[catagories[index]].map((option) => (
                      <div
                        onClick={(e) => {
                          selectedInfo[catagories[index]] = option;
                          setSelectedInfo(selectedInfo);
                        }}
                        className="dropdown-item"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
