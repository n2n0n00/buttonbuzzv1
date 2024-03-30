import React, { useState } from "react";
import "./buttonSlick.css";

interface ButtonSlickI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
}

export const ButtonSlick = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  ...props
}: ButtonSlickI) => {
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
      className={`btnSlick_bg px-10 py-2 rounded-full ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
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

ButtonSlick.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#fff",
  labelWeight: "bold",
  onHover: "#f1f1f1",
  superClasses: "",
};
