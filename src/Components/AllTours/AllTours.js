import React from "react";
import "./AllTours.css";
import Tours from "./Tours/Tours";

const AllTours = () => {
  return (
    <div>
      <div className="allTours-component">
        <div className="allTours-header"></div>
        <div className="allTours-body">
          <Tours />
        </div>
      </div>
    </div>
  );
};

export default AllTours;
