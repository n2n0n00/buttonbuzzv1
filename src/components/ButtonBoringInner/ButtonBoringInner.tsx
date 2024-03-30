import React, { useState } from "react";
import "./buttonBoringInner.css";

interface ButtonBoringInnerI {
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

export const ButtonBoringInner = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor,
  ...props
}: ButtonBoringInnerI) => {
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
      className={`shadow-inner px-10 py-2 rounded-full ${superClasses}`}
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

ButtonBoringInner.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#0750ef",
  labelWeight: "bold",
  onHover: "#ffcaca",
  superClasses: "",
  backgroundColor: "#BBD0FF",
};
