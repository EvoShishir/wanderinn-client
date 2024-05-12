import Layout from "../../Components/Layout/Layout";
import HotelsContainer from "../../Components/HotelsContainer/HotelsContainer";

import hotelData from "../../../hotelData.json";

import "./Hotels.scss";

const Hotels = () => {
  const hotels = hotelData;

  return (
    <Layout>
      <section className="section hotelsSection">
        {hotels.map((hotel) => (
          <HotelsContainer key={hotel.id} hotel={hotel} />
        ))}
      </section>
    </Layout>
  );
};

export default Hotels;
