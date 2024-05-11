import React from "react";
import area1 from "/area1.png";
import area2 from "/area2.png";
import area3 from "/area3.png";
import area4 from "/area4.png";
import "./Places.scss";

const Places = () => {
  return (
    <section className="section placesSection">
      <h1>Enjoy your dream vacation</h1>
      <p>
        Plan and book our perfect trip with expert advice, travel tips,
        destination information and inspiration from us
      </p>
      <div className="gridContainer">
        <div>
          <img src={area1} alt="" />
          <h2>Australia</h2>
          <p>2246 Hotels</p>
        </div>
        <div>
          <img src={area2} alt="" />
          <h2>Japan</h2>
          <p>2246 Hotels</p>
        </div>
        <div>
          <img src={area3} alt="" />
          <h2>New Zealand</h2>
          <p>2246 Hotels</p>
        </div>
        <div>
          <img src={area4} alt="" />
          <h2>Greece</h2>
          <p>2246 Hotels</p>
        </div>
      </div>
    </section>
  );
};

export default Places;
