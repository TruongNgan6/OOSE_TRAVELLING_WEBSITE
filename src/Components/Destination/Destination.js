import React from "react";
import "./Destination.css";
import destination01 from "../../../src/Assets/Images/destination01.jpg";
import { useState, useEffect } from "react";
import { getAllTours } from '../../Services/apiService';
import { NavLink } from "react-router-dom";


const Destination = () => {

  const [listTours, setListTours] = useState([
    {
      tourId: '1',
      rating: 3,
      title: 'ha noi',
      description: 'f',
      imageURL: 'f',
      price: 34345,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '2',
      rating: 3,
      title: 'tam ky',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '3',
      rating: 3,
      title: 'quang nam',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '4',
      rating: 5,
      title: 'da nang',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '5',
      rating: 4,
      title: 'hoi an',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '6',
      rating: 5,
      title: 'vung tau',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    },
    {
      tourId: '7',
      rating: 3,
      title: 'khanh hoa',
      description: 'f',
      imageURL: 'f',
      price: 40000,
      location: 'd',
      duration: 'd',
      quantity: 4,
      departureDate: '04/05/2024',
    }
  ])
  useEffect(() => {
    fetchListTours();
  }, []);

  const fetchListTours = async () => {
    let res = await getAllTours();
    // if (res.EC === 0) {
    setListTours(res)
    // }
  }

  return (
    <>
      <div className="container">
        <div className="grid-container">
          {/* <div className="grid-item"> */}
          {listTours && listTours.length > 0 &&
            listTours.map((item, index) => {
              console.log('check', item)
              return (
                <div key={index} className="destination-content ">
                  <div className="destination-component">
                    <img src={destination01}></img>
                    <div className="quantity-tours">5 tours</div>
                    <div className="overlay-tour">
                      <div className="destination-text">
                        <h2>{item.location}</h2>
                        {/* <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separate.
              </p> */}
                        <h2><NavLink to={`/all-tours/${item.location}`} className="view-all">
                          View All Tour
                        </NavLink></h2>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Destination;
