import React, { useState } from "react";
import "./buttonSquare.css";

interface ButtonSquareI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
}

export const ButtonSquare = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  borderColor,
  ...props
}: ButtonSquareI) => {
  const [labelColor, setLabelColor] = useState(initialLabelColor);

  const handleMouseEnter = () => {
    setLabelColor(onHover);
  };

  const handleMouseLeave = () => {
    setLabelColor(initialLabelColor);
  };

  return (
    <button
      type="button"
      className={`bg-transparent border-2 px-10 py-2 rounded-none ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        borderColor: borderColor,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {label}
    </button>
  );
};

ButtonSquare.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#0000cc",
  labelWeight: "bold",
  onHover: "#009900",
  superClasses: "",
  borderColor: "#000",
};
