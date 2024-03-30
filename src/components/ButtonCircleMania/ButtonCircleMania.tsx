import React, { useState } from "react";
import "./buttonCircleMania.css";

interface ButtonCircleManiaI {
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

export const ButtonCircleMania = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor,
  borderColor,
  ...props
}: ButtonCircleManiaI) => {
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
      className={`relative px-10 py-3 ${superClasses}`}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
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
      <div
        className="absolute border-2 -rotate-[10deg] top-0 right-0"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          fontSize: labelSize,
          color: labelColor,
          fontWeight: labelWeight,
          backgroundColor: "transparent",
          borderColor: borderColor,
        }}
      ></div>
      <p>{label}</p>
    </button>
  );
};

ButtonCircleMania.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#412C28",
  labelWeight: "bold",
  onHover: "#ffffcc",
  superClasses: "",
  backgroundColor: "#C9ADA7",
  borderColor: "#412C28",
};
