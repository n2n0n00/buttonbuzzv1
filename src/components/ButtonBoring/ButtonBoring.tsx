import React, { useState } from "react";
import "./buttonBoring.css";

interface ButtonBoringI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const ButtonBoring = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor,
  ...props
}: ButtonBoringI) => {
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
      className={`px-10 py-2 rounded-full ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        backgroundColor: backgroundColor,
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

ButtonBoring.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#ffa1a1",
  labelWeight: "bold",
  onHover: "#ff3",
  superClasses: "",
  backgroundColor: "#14007e",
};
