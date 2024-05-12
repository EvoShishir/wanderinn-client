import React from "react";
import CustomButton from "../Core/CustomButton/CustomButton";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <section className="searchBar">
      <div className="searchBarContainer">
        <div className="inputContainer">
          <h1>Where are you going?</h1>
          <input type="text" placeholder="eg. sydney, california" />
        </div>
        <div className="inputContainer">
          <h1 className="searchBarDateTitle">Check In Date</h1>
          <input type="Date" />
        </div>
        <div className="inputContainer">
          <h1 className="searchBarDateTitle">Check Out Date</h1>
          <input type="Date" />
        </div>
        <CustomButton text="Search" />
      </div>
    </section>
  );
};

export default SearchBar;
