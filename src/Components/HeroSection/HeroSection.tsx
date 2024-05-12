import heroImage from "/heroimage.png";
import SearchBar from "../SearchBar/SearchBar";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroImageContainer">
        <img src={heroImage} alt="" />
        <div className="heroContent">
          <div className="textContainer">
            <h1>Enjoy Your Dream Vacation</h1>
            <p>Book your perfect hotels to stay.</p>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
