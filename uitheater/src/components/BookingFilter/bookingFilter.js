import React from "react";
import "../BookingFilter/bookingStyle.css";

function BookingFilter() {
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
          <div className="item1">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">Choose Movie</div>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">Choose Theater</div>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="item3">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">Choose Date</div>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
          <div className="item4">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="droptext">Choose Showtime</div>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
