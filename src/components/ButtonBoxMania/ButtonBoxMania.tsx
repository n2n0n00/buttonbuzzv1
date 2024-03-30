import React, { useState } from "react";
import "./buttonBoxMania.css";

interface ButtonBoxManiaI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
  backgroundColor?: string;
  onHoverLabel?: string;
}

export const ButtonBoxMania = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor: initialBackgroundColor,
  borderColor,
  onHoverLabel,
  ...props
}: ButtonBoxManiaI) => {
  const [labelColor, setLabelColor] = useState(initialLabelColor);
  const [backgroundHoverColor, setBackgroundHoverColor] = useState(
    initialBackgroundColor
  );

  const handleMouseEnter = () => {
    setLabelColor(onHoverLabel);
    setBackgroundHoverColor(onHover);
  };

  const handleMouseLeave = () => {
    setLabelColor(initialLabelColor);
    setBackgroundHoverColor(initialBackgroundColor);
  };

  return (
    <button
      type="button"
      className={`relative px-10 py-3 ${superClasses}`}
      style={{
        width: "100%",
        height: "100%",
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        backgroundColor: backgroundHoverColor,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="absolute border-2 translate-x-2 translate-y-2 bottom-0 right-0"
        style={{
          width: "100%",
          height: "100%",
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

ButtonBoxMania.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#412C28",
  labelWeight: "bold",
  onHover: "#52B788",
  superClasses: "",
  backgroundColor: "#C9ADA7",
  borderColor: "#412C28",
  onHoverLabel: "#000",
};
