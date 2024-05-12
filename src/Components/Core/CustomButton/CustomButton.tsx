import React from "react";
import "./CustomButton.scss";

type CustomButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  color?: "string" | string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type = "button",
  onClick,
  color = "",
}) => {
  return (
    <button
      type={type}
      style={{ backgroundColor: `${color}` }}
      className={`customButton`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
