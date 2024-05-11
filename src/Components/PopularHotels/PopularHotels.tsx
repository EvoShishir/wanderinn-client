import React from "react";
import hotel1 from "/hotel1.png";
import hotel2 from "/hotel2.png";
import hotel3 from "/hotel3.png";
import hotel4 from "/hotel4.png";

const PopularHotels = () => {
  return (
    <div>
      <section className="section placesSection">
        <h1>Popular Hotels</h1>
        <div className="gridContainer">
          <div>
            <img src={hotel1} alt="" />
            <h2>Lakeside Motel Warefront</h2>
            <p>2246 Hotels</p>
          </div>
          <div>
            <img src={hotel2} alt="" />
            <h2>Reece Graham Resort</h2>
            <p>2246 Hotels</p>
          </div>
          <div>
            <img src={hotel3} alt="" />
            <h2>Fireside Dinners</h2>
            <p>2246 Hotels</p>
          </div>
          <div>
            <img src={hotel4} alt="" />
            <h2>Oculus Inn Stay</h2>
            <p>2246 Hotels</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularHotels;
