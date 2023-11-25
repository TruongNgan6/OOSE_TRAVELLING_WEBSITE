import React from "react";
import "./ContactDetails.css";
import popularTourImage from "../../../../../Assets/Images/populartours01.jpg";

const ContactDetails = () => {
  return (
    <>
      <div className="image-contact-detail">
        <img src={popularTourImage} />
      </div>

      <div className="contact-detail-content">
        <div className="contact-detail-form-left">
          <h1>Contact Detail</h1>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" />
          </div>

          <h1>Billing Details</h1>
          <checkbox className="checkbox-billing-details">
            <input
              type="checkbox"
              id="sameAsContactDetails"
              name="sameAsContactDetails"
            />
            <label htmlFor="sameAsContactDetails">
              The Same as Contact Details
            </label>
          </checkbox>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" />
          </div>

          <button className="">Next Step</button>
        </div>
        <div className="contact-detail-form-right">No body else</div>
      </div>
    </>
  );
};

export default ContactDetails;
