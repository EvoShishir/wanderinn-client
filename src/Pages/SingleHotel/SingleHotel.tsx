import React from "react";
import hotelDescription from "../../../hotelDescription.json";
import Layout from "../../Components/Layout/Layout";
import Carousel from "react-material-ui-carousel";
import "./SingleHotel.scss";
import { FaRegLightbulb, FaRegThumbsUp } from "react-icons/fa";
import HotelInfo from "../../Components/HotelInfo/HotelInfo";
import CustomButton from "../../Components/Core/CustomButton/CustomButton";

const SingleHotel = () => {
  const singleHotel = hotelDescription;
  return (
    <Layout>
      <section className="section">
        <div className="hotelContainer">
          <div className="carousel">
            <Carousel animation="fade" swipe indicators={false}>
              {singleHotel.images.map((image, index) => (
                <img key={index} src={image} alt="" draggable="false" />
              ))}
            </Carousel>
          </div>
          <div>
            <HotelInfo
              name={singleHotel.name}
              location={singleHotel.location}
              description={singleHotel.overview.description}
              reviewAverage={singleHotel.reviewRating.average}
              totalReviews={singleHotel.reviewRating.totalReviews}
            />
            <div className="overviewContainer">
              <div>
                {singleHotel.overview.amenities.map((amenity, index) => (
                  <h5 className="flex" key={index}>
                    <FaRegThumbsUp color="#2f80ed" />
                    {amenity}
                  </h5>
                ))}
              </div>
              <div>
                {singleHotel.overview.activities.map((activity, index) => (
                  <h5 className="flex" key={index}>
                    <FaRegLightbulb color="#2f80ed" />
                    {activity}
                  </h5>
                ))}
              </div>
            </div>
          </div>
          <CustomButton text="Book This Hotel" />
        </div>
      </section>
    </Layout>
  );
};

export default SingleHotel;
