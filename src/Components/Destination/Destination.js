import React from "react";
import "./Destination.css";
import destination01 from "../../../src/Assets/Images/destination01.jpg";

const Destination = () => {
  return (
    <div>
      <div className="destination-content">
        <div className="destination-component">
          <img src={destination01}></img>
          <div className="quantity-tours">5 tours</div>
          <div className="overlay-tour">
            <dvi className="destination-text">
              <h2>Asia</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separate.
              </p>
              <a href="#">View all tours</a>
            </dvi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
