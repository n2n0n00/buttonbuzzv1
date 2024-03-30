import React, { useState } from "react";
import "./buttonBrokenBlock.css";

interface ButtonBrokenBlockI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
}

export const ButtonBrokenBlock = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  borderColor,
  ...props
}: ButtonBrokenBlockI) => {
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
      className={`bg-transparent border-2 border-dashed px-10 py-2 rounded-none ${superClasses}`}
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

ButtonBrokenBlock.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#3a4756",
  labelWeight: "bold",
  onHover: "#00ff00",
  superClasses: "",
  borderColor: "#fd0000",
};
