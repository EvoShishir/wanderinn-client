import React from "react";
import CustomButton from "../Core/CustomButton/CustomButton";
import "./HotelsContainer.scss";
import HotelInfo from "../HotelInfo/HotelInfo";

type Props = {
  hotel: {
    id: number;
    name: string;
    coverImage: string;
    location: string;
    bio: string;
    price: string;
    reviewRating: {
      average: number;
      totalReviews: number;
    };
  };
};

const HotelsContainer = ({ hotel }: Props) => {
  const handleClick = () => {
    window.location.href = `/hotels/${hotel.id}`;
  };

  return (
    <div className="hotelsContainer">
      <img src={hotel.coverImage} alt="" />
      <div className="infoContainer">
        <HotelInfo
          name={hotel.name}
          location={hotel.location}
          description={hotel.bio}
          reviewAverage={hotel.reviewRating.average}
          totalReviews={hotel.reviewRating.totalReviews}
        />
        <h3>{hotel.price}</h3>
        <CustomButton onClick={handleClick} text="See Availability" />
      </div>
    </div>
  );
};

export default HotelsContainer;
