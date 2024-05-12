import Layout from "../../Components/Layout/Layout";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Places from "../../Components/Places/Places";
import PopularHotels from "../../Components/PopularHotels/PopularHotels";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Places />
        <PopularHotels />
      </Layout>
    </div>
  );
};

export default HomePage;
