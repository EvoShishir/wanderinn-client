import React from "react";
import "./CustomButton.scss";

type CustomButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type = "button",
  onClick,
}) => {
  return (
    <button type={type} className={`customButton font-light`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
