import React from "react";
import "./Tour01.css";
import PopularToursImage from "../../../../Assets/Images/populartours01.jpg";
import { AiFillStar } from "react-icons/ai";
import { LuTimerReset } from "react-icons/lu";
import { AiOutlineWifi } from "react-icons/ai";
import {
  IoPeopleOutline,
  IoPersonOutline,
  IoLocateSharp,
  IoPricetagsOutline,
} from "react-icons/io5";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FaBed } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const Tour01 = () => {
  return (
    <div>
      <Header />
      <div className="tour01-component">
        <div className="tour01-component-up">
          <img
            src={PopularToursImage}
            alt="tour01"
            className="tour01-component-01"
            style={{
              width: "100%",
              height: "800px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="tour01-component-down">
          <div className="tour01-component-left">
            <div className="tour01-component-left-menubar">
              <div className="tour01-component-left-detail">Detail</div>
              <div className="tour01-component-left-photos">Photos</div>
              <div className="tour01-component-left-itinerary">Itinerary</div>
              <div className="tour01-component-left-map">Map</div>
              <div className="tour01-component-left-FAQ">FAQ</div>
              <div className="tour01-component-left-Reviews">Reviews</div>
            </div>
            <div className="tour01-component-left-detail-content">
              <div className="tour01-component-left-detail-content-title">
                Dubai - All Stunning Place
              </div>
              <div className="tour01-component-left-detail-content-rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="tour01-component-left-detail-content-day-maxpeople-wifi">
                <div className="tour01-component-left-detail-content-day">
                  <LuTimerReset className="time-icon" /> 8 Hours
                </div>
                <div className="tour01-component-left-detail-content-maxpeople">
                  <IoPeopleOutline className="time-icon" /> Max people: 22
                </div>
                <div className="tour01-component-left-detail-content-wifi">
                  <AiOutlineWifi className="time-icon" /> Wifi Available
                </div>
              </div>
              <div className="tour01-component-left-detail-content-calendar-minAge-pickUp">
                <div className="tour01-component-left-detail-content-calendar">
                  <AiTwotoneCalendar className="time-icon" />
                  Jan 18’
                </div>
                <div className="tour01-component-left-detail-content-minAge">
                  <IoPersonOutline className="time-icon" /> Min Age : 12+
                </div>
                <div className="tour01-component-left-detail-content-pickUp">
                  <IoLocateSharp className="time-icon" /> Pickup: Airpot
                </div>
              </div>
            </div>

            <div className="tour01-component-left-detail-detail">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents.
              <br />
              <br />
              Lorem Ipsum decided to leave for the far World of Grammar. The Big
              Oxmox advised her not to do so, because there were thousands of
              bad Comma wild Question Marks and devious Semikoli, but the Little
              Blind Text didn’t listen. She packed her seven versalia, put her
              initial into the belt and made herself on the way. When she
              reached the first hills of t
            </div>

            <div className="tour01-component-left-detail-list">
              <div className="tour01-component-left-detail-list-departure-location">
                <span className="tour01-component-left-detail-list-departure">
                  Departure & Location
                </span>
                <span className="tour01-component-left-detail-list-location">
                  John F.K. International Airport
                </span>
              </div>
              <div className="tour01-component-left-detail-list-departure-time">
                <span className="tour01-component-left-detail-list-time">
                  Departure Time
                </span>
                <span className="tour01-component-left-detail-list-time-content">
                  3 Hours Before Flight Time
                </span>
              </div>
              <div className="tour01-component-left-detail-list-bedroom">
                <span className="tour01-component-left-detail-list-bedroom">
                  Bedroom
                </span>
                <span className="tour01-component-left-detail-list-bedroom-content">
                  4 Bedrooms
                </span>
              </div>
              <div className="tour01-component-left-detail-list-bathroom">
                <span className="tour01-component-left-detail-list-bathroom">
                  Bathroom
                </span>
                <span className="tour01-component-left-detail-list-bathroom-content">
                  6 Bathrooms
                </span>
              </div>
              <div className="tour01-component-left-detail-list-price-include">
                <span className="tour01-component-left-detail-list-priceInclude">
                  Price Include
                </span>
                <div className="tour01-component-left-detail-list-price-include-list">
                  <span className="tour01-component-left-detail-list-price-include-list01">
                    Air fares
                  </span>
                  <span className="tour01-component-left-detail-list-price-include-list01">
                    3 Nights Hotel Accomodation
                  </span>
                  <span className="tour01-component-left-detail-list-price-include-list01">
                    Tour Guide
                  </span>
                  <span className="tour01-component-left-detail-list-price-include-list01">
                    Entrance Fees
                  </span>
                  <span className="tour01-component-left-detail-list-price-include-list01">
                    All transportation in destination location
                  </span>
                </div>
              </div>
              <div className="tour01-component-left-detail-list-price-exclude">
                <span className="tour01-component-left-detail-list-priceExclude">
                  Price Exclude
                </span>
                <div className="tour01-component-left-detail-list-price-exclude-list">
                  <span className="tour01-component-left-detail-list-price-exclude-list01">
                    Guide Service Fee
                  </span>
                  <span className="tour01-component-left-detail-list-price-exclude-list01">
                    Driver Service Fee
                  </span>
                  <span className="tour01-component-left-detail-list-price-exclude-list01">
                    Any Private Expenses
                  </span>
                  <span className="tour01-component-left-detail-list-price-exclude-list01">
                    Room Service Fees
                  </span>
                </div>
              </div>
              <div className="tour01-component-left-detail-list-complementaries"></div>
            </div>
          </div>
          <div className="tour01-component-right">
            <div className="tour01-component-right-booking-process-form">
              <div className="tour01-component-right-booking-process-price">
                <IoPricetagsOutline />
                <span>$1200</span>
              </div>
              <div className="tour01-component-right-booking-process-title">
                Booking Form
              </div>
              <div className="tour01-component-right-booking-process-calendar">
                <AiTwotoneCalendar className="time-icon" />
                <input type="date"></input>
              </div>
              <div className="tour01-component-right-booking-process-bedroom">
                <FaBed className="time-icon" />
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="tour01-component-right-booking-process-room">
                Room 1:
                <select>
                  <option>Adult</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="tour01-component-right-booking-process-button">
                <NavLink to="/process-booking">Process Booking</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tour01;
