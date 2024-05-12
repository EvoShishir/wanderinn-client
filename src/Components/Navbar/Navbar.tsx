import React from "react";
import "./Navbar.scss";
import { BiSolidPlaneAlt } from "react-icons/bi";
import CustomButton from "../Core/CustomButton/CustomButton";
import { Button, Dropdown, MenuProps } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href="/">Home</a>,
    },
    {
      key: "2",
      label: <a href="/hotels">Discover</a>,
    },
    {
      key: "3",
      label: <a href="/bookings">Bookings</a>,
    },
    {
      key: "4",
      label: <a href="#">Contact</a>,
    },
    {
      key: "5",
      label: <a href="login">Login</a>,
      danger: true,
    },
  ];

  const handleClick = () => {
    window.location.href = "/login";
  };

  return (
    <section className="section">
      <div className="navContainer">
        <a href="/" className="logo">
          <BiSolidPlaneAlt color="#2f80ed" />
          Wander<span style={{ color: "#2f80ed" }}>Inn.</span>
        </a>
        <div className="linkContainer">
          <a href="/">Home</a>
          <a href="/hotels">Discover</a>
          <a href="/bookings">Bookings</a>
          <a href="#">Contact</a>
        </div>
        <div className="loginBtn">
          <CustomButton text="Login" onClick={handleClick} />
        </div>
        <div className="mobileMenu">
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            trigger={["click"]}
            arrow={{ pointAtCenter: true }}
          >
            <Button>
              <div>
                <UnorderedListOutlined />
              </div>
            </Button>
          </Dropdown>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
