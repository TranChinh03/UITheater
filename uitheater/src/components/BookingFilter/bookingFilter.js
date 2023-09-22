import React from "react";
import "../BookingFilter/bookingStyle.css"

function BookingFilter() {
  return (
    <>
      <div
        className="bookingContainer"
        style={{
          background:
            "linear-gradient(to right, #C70039, #E06F84, #C1ADB1, #312849)",
          height: "160px",
        }}
      >
        <div
          style={{
            fontFamily: "InterExtraBoldItalic",
            fontSize: 40,
            color: "#FFFAF5",
            alignSelf: "center",
            marginLeft: 180,
          }}
        >
          BOOK THE<br/>TICKET NOW!
        </div>
        <div class="dropdown">
          <button class="dropbtn">Choose Movie</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
