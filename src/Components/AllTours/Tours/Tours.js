import React from "react";
import "./Tours.css";
import { NavLink } from "react-router-dom";
import { LuTimerReset } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import PopularToursImage from "../../../Assets/Images/populartours01.jpg";
import Tour01 from "./Tour01/Tour01";
const Tours = () => {
  return (
    <div>
      <div className="tours-component">
        <div className="tours-content">
          <div className="tours-content-up">
            <img src={PopularToursImage} alt="Dubai" />
          </div>
          <div className="tours-content-down">
            <div className="tours-content-title">
              <NavLink to="/tour01" className="tour01">
                <AiTwotoneThunderbolt className="thunder-icon" /> Dubai - All
                Stunning Place
              </NavLink>
            </div>
            <div className="tours-content-time">
              <LuTimerReset className="time-icon" />8 Hours
            </div>
            <div className="tours-content-rate-price">
              <div className="tours-content-rate">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="tours-content-price">
                From <span>$1200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
