import { useEffect, useState } from "react";
import hotelDescription from "../../../hotelData.json";
import Layout from "../../Components/Layout/Layout";
import Carousel from "react-material-ui-carousel";
import "./SingleHotel.scss";
import { FaRegLightbulb, FaRegThumbsUp } from "react-icons/fa";
import HotelInfo from "../../Components/HotelInfo/HotelInfo";
import CustomButton from "../../Components/Core/CustomButton/CustomButton";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../Redux/hooks";
import { ADD_HOTEL } from "../../Redux/reducerTypings";

export type Hotel =
  | {
      id: number;
      name: string;
      coverImage: string;
      images: string[];
      location: string;
      bio: string;
      price: string;
      reviewRating: {
        average: number;
        totalReviews: number;
      };
      overview: {
        description: string;
        amenities: string[];
        activities: string[];
      };
    }
  | undefined;

const SingleHotel = () => {
  const [singleHotel, setSingleHotel] = useState<Hotel>();
  const hotels = hotelDescription;
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    findHotel();
  }, []);

  const findHotel = () => {
    if (id === undefined) {
      toast.error("ID is undefined");
    } else {
      const hotel = hotels.find((hotel) => hotel.id === parseInt(id));
      setSingleHotel(hotel);
    }
  };

  const handleBooking = (hotel: Hotel) => {
    try {
      dispatch({ type: ADD_HOTEL, payload: hotel });
      toast.success("Booking Successful!");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <Layout>
      <section className="section">
        <div className="hotelContainer">
          {singleHotel && (
            <>
              <div className="carousel">
                <Carousel
                  animation="fade"
                  swipe
                  indicators={false}
                  navButtonsAlwaysVisible={true}
                >
                  {singleHotel.images.map((image, index) => (
                    <div key={index} className="imageContainer">
                      <img src={image} alt="" draggable="false" />
                    </div>
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
              <CustomButton
                onClick={() => handleBooking(singleHotel)}
                text="Book This Room"
              />
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SingleHotel;
