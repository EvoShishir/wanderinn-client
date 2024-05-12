import { Rating } from "@mui/material";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

type Props = {
  name?: string;
  location?: string;
  description?: string;
  reviewAverage?: number;
  totalReviews?: number;
};

const HotelInfo = ({
  name,
  location,
  description,
  reviewAverage,
  totalReviews,
}: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Rating
          name="half-rating-read"
          defaultValue={reviewAverage}
          precision={0.5}
          readOnly
        />
        <p style={{ lineHeight: "5px" }}>
          {reviewAverage} ({totalReviews} Reviews)
        </p>
      </div>
      <h5 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <CiLocationOn />
        {location}
      </h5>
      <p>{description}</p>
    </div>
  );
};

export default HotelInfo;
