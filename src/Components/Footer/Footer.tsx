import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footerContainer">
      <div className="section footerItems">
        <div>
          <h1 className="logo">
            <BiSolidPlaneAlt /> Wander
            <span style={{ color: "#2f80ed" }}>Inn.</span>
          </h1>
          <p>Your next goto companion for travel</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>About</p>
          <p>Jobs</p>
          <p>Newsroom</p>
          <p>Advertising</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1>Terms and Policies</h1>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Accessibility</p>
          <p>Reward System Policy</p>
        </div>
        <div>
          <h1>Help</h1>
          <p>Support</p>
          <p>Cancel your bookings</p>
          <p>Use Coupon</p>
          <p>Refund Policies</p>
          <p>International Travel Documents</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
