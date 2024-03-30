import React, { useState } from "react";
import "./buttonSeeThrough.css";

interface ButtonSeeThroughI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
}

export const ButtonSeeThrough = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  borderColor,
  ...props
}: ButtonSeeThroughI) => {
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
      className={`bg-transparent border-2 px-10 py-2 rounded-3xl ${superClasses}`}
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

ButtonSeeThrough.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#009900",
  labelWeight: "bold",
  onHover: "#0099ff",
  superClasses: "",
  borderColor: "#000",
};
