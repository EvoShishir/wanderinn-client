import React from "react";
import "./CustomButton.scss";

type CustomButtonProps = {
  text: string;
  redirect?: string;
  styles?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  redirect,
  styles,
}) => {
  const handleClick = () => {
    if (redirect) {
      window.location.href = redirect;
    }
  };

  return (
    <button
      className={`customButton ${styles} font-light`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
