import Layout from "../../Components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";

import "./BookingPage.scss";
import CustomButton from "../../Components/Core/CustomButton/CustomButton";
import { REMOVE_HOTEL } from "../../Redux/reducerTypings";
import { Hotel } from "../SingleHotel/SingleHotel";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import HotelInfo from "../../Components/HotelInfo/HotelInfo";

const BookingPage = () => {
  const { hotels } = useAppSelector((state: RootState) => state.hotels);
  const dispatch = useAppDispatch();

  const handleRemove = (hotel: Hotel) => {
    const prompt = window.confirm("Are you sure you want to proceed?");
    if (prompt === true) {
      dispatch({ type: REMOVE_HOTEL, payload: hotel?.id });
      toast.success("Booking Removed");
    } else {
      toast.error("Deletion cancelled");
    }
  };

  return (
    <Layout>
      <section className="section bookingContainer">
        {hotels.map((hotel) => (
          <div className="bookingHotel" key={hotel?.id}>
            <div key={hotel?.id} className="imageContainer">
              <img src={hotel?.coverImage} alt={hotel?.name} />
            </div>
            <HotelInfo
              name={hotel?.name}
              location={hotel?.location}
              reviewAverage={hotel?.reviewRating.average}
              totalReviews={hotel?.reviewRating.totalReviews}
            />
            <div className="flexContainer">
              <Link to={`/hotels/${hotel?.id}`}>
                <CustomButton text="View Details" />
              </Link>
              <CustomButton
                onClick={() => handleRemove(hotel)}
                text="DELETE"
                color="#ff3131"
              />
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default BookingPage;
