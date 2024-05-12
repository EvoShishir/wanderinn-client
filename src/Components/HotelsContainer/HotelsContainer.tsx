import React from "react";
import CustomButton from "../Core/CustomButton/CustomButton";
import "./HotelsContainer.scss";
import HotelInfo from "../HotelInfo/HotelInfo";
import { Link } from "react-router-dom";
import { Hotel } from "../../Pages/SingleHotel/SingleHotel";

type Props = {
  hotel?: Hotel;
};

const HotelsContainer = ({ hotel }: Props) => {
  return (
    <div className="hotelsContainer">
      <img src={hotel?.coverImage} alt="" />
      <div className="infoContainer">
        <HotelInfo
          name={hotel?.name}
          location={hotel?.location}
          description={hotel?.bio}
          reviewAverage={hotel?.reviewRating.average}
          totalReviews={hotel?.reviewRating.totalReviews}
        />
        <h3>{hotel?.price}</h3>
        <Link to={`/hotels/${hotel?.id}`}>
          <CustomButton text="See Availability" />
        </Link>
      </div>
    </div>
  );
};

export default HotelsContainer;
