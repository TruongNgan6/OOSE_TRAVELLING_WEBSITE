import React from "react";
import "./AllTours.css";
import Tours from "./Tours/Tours";
import { useState, useEffect } from "react";
import { getAllTours } from '../../Services/apiService';


const AllTours = () => {
  const [listTours, setListTours] = useState([

    {
      tourId: '1',
      title: 'txdcfvghnjmk',
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
      title: 'rsdfghjk',
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
                <Tours
                  key={item.tourId}
                  title={item.title}
                  price={item.price}
                  imageURL={item.imageURL}
                  tourName={item.title}
                />
              )
            })
          }
          {/* </div> */}
        </div>
      </div>



    </>
  );
};

export default AllTours;
