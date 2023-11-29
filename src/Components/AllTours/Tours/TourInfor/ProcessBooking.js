import React from "react";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import ContactDetails from "./ContactDetails/ContactDetails";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import PopularToursImage from '../../../../Assets/Images/populartours01.jpg'
import { useState, useEffect } from "react";
import TravellerDetails from "./TravellerDetails/TravellerDetails";
import BillingDetails from "./BillingDetails/BillingDetails";
import { useNavigate } from "react-router-dom";
import "./ProcessBooking.css";
const ProcessBooking = (props) => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [tourId, setTourId] = useState(0);
  const [title, setTitle] = useState('');
  const [travellerDetails, setTravellerDetails] = useState([])
  const [contactDetail, setContactDetail] = useState({})
  const [billingDetail, setBillingDetail] = useState({})
  const [sameAsContactDetails, setSameAsContactDetails] = useState(false);
  const [notes, setNotes] = useState('')

  const navigate = useNavigate();
  useEffect(() => {
    // Lấy thông tin từ localStorage
    const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
    const numberOfPeopleFromLocalStorage = parseInt(bookingInfo.numberOfPeople, 10) || 0;
    const numberOfRoomsFromLocalStorage = parseInt(bookingInfo.numberOfRooms, 10) || 0;
    const tourIdFromLocalStorage = parseInt(bookingInfo.tourId, 10) || 0;
    const titleFromLocalStorage = bookingInfo.title;
    // Cập nhật state
    setNumberOfPeople(numberOfPeopleFromLocalStorage);
    setNumberOfRooms(numberOfRoomsFromLocalStorage);
    setTourId(tourIdFromLocalStorage);
    setTitle(titleFromLocalStorage);


    // In ra console để kiểm tra
    console.log('Booking Info:', numberOfPeopleFromLocalStorage, numberOfRoomsFromLocalStorage, tourIdFromLocalStorage, titleFromLocalStorage);
  }, []);

  const handleListTravellerDetailsfromChild = (dataFromChild) => {
    setTravellerDetails(dataFromChild)
  }
  const handleContactDetailfromChild = (dataFromChild) => {
    setContactDetail(dataFromChild)
  }

  const handleBillingDetailfromChild = (dataFromChild) => {
    setBillingDetail(dataFromChild)
  }

  const handleSameAsContactDetailsChange = () => {
    setSameAsContactDetails(!sameAsContactDetails);
  };


  const handleSubmit = () => {

  }
  console.log("numberOfRooms", numberOfRooms)
  console.log("numberOfPeople", numberOfPeople)
  console.log("checklisttravel", travellerDetails)
  console.log("checkcontact", contactDetail)
  console.log("checkbill", billingDetail)
  console.log("note", notes)
  console.log("tourId", tourId)
  console.log("title", title)


  return (
    <>
      <div className="process-content-up">
        <img
          src={PopularToursImage}
          alt="tour01"
          className="process-content-up-image"
          style={{
            width: "100%",
            height: "340px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="process-content-up-title">{title}</div>
      </div>
      <div className="container">
        <div className="title">Traveller Details</div>
        <TravellerDetails
          numberOfPeople={numberOfPeople}
          handleListTravellerDetailsfromChild={handleListTravellerDetailsfromChild}
        />
        <div className="title">Contact Details</div>
        <ContactDetails
          handleContactDetailfromChild={handleContactDetailfromChild}
        />
        <div className="title">Billing Details</div>
        <checkbox className="checkbox-billing-details">
          <input
            type="checkbox"
            id="sameAsContactDetails"
            name="sameAsContactDetails"
            checked={sameAsContactDetails}
            onChange={handleSameAsContactDetailsChange}

          />
          <label htmlFor="sameAsContactDetails" >
            The Same as Contact Details
          </label>
        </checkbox>

        <BillingDetails
          handleBillingDetailfromChild={handleBillingDetailfromChild}
          contactDetail={contactDetail}
          sameAsContactDetails={sameAsContactDetails}
        />
        <div className="title">Notes</div>
        <div className="col-md-6">
          <label className="form-label">Additional Notes</label>
          <textarea className="form-control" value={notes} onChange={(event) => setNotes(event.target.value)} />
        </div>
        <button type="button"
          className="btn btn-primary"
          onClick={() => {
            handleSubmit();
            // Navigate to the payment page with state
            navigate("/payment", {

              state: {
                title,
                numberOfPeople,
                numberOfRooms,
                tourId,
                travellerDetails,
                contactDetail,
                billingDetail,
                notes


              }
            });
          }}
        >Next Step</button>
      </div>

    </>
  );
};

export default ProcessBooking;