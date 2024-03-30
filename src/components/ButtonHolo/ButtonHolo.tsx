import React, { useState } from "react";
import "./buttonHolo.css";

interface ButtonHoloI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
}

export const ButtonHolo = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  ...props
}: ButtonHoloI) => {
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
      className={`px-10 py-2 border-2 rounded-xl ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        background:
          "linear-gradient(90deg, #fcf1b2 12.5%, #f8e2c8 25%, #f4c5c1 37.5%, #eac2eb 50%, #c0c8f9 62.5%, #c9f2fc 75%, #cdfbd1 87.5%, #e7fcc5 100%)",
        borderColor: labelColor,
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

ButtonHolo.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#000",
  labelWeight: "bold",
  onHover: "#7A0B1F",
  superClasses: "",
};
