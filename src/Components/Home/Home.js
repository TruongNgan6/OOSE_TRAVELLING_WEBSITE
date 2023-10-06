import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-component">
        <div className="home-wrapper"></div>
        <div className="home-introduce"></div>
        <div className="home-popular-destination">
          {/* component popular destination */}
        </div>
        <div className="home-popular-tours">{/* component  tour*/}</div>
        <div className="home-discount"></div>
        <div className="home-recommend"></div>
        <div className="home-hightligth"></div>
        <div className="home-customer-reviews"></div>
        {/* component newletter */}
        <div className="home-recent-blog"></div>
        <div className="home-feature-in"></div>
      </div>
    </div>
  );
};

export default Home;
