import "./buttonStar.css";
import { Star } from "../../assets/index";
import React, { useState } from "react";

interface ButtonStarI {
  labelSize?: string;
  label: string;
  labelWeight?: string;
  onClick(): any;
  backgroundColor?: string;
  onHover?: string;
  onHoverLabel?: string;
  labelColor?: string;
  iconWidth?: string;
}

export const ButtonStar = ({
  backgroundColor: initialShapeColor,
  onHover,
  labelColor: initialLabelColor,
  onHoverLabel,
  labelSize,
  label,
  labelWeight,
  iconWidth,
  ...props
}: ButtonStarI) => {
  const [shapeColor, setShapeColor] = useState(initialShapeColor);
  const [labelHoverColor, setLabelColor] = useState(initialLabelColor);

  const handleMouseEnter = () => {
    setShapeColor(onHover);
    setLabelColor(onHoverLabel);
  };

  const handleMouseLeave = () => {
    setShapeColor(initialShapeColor);
    setLabelColor(initialLabelColor);
  };

  return (
    <button
      type="button"
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Star shapeColor={shapeColor} width={iconWidth} />
      <p
        className="text-white absolute"
        style={{
          color: labelHoverColor,
          fontSize: labelSize,
          fontWeight: labelWeight,
        }}
      >
        {label}
      </p>
    </button>
  );
};

ButtonStar.defaultProps = {
  labelSize: "20px",
  label: "Wow",
  labelWeight: "bold",
  backgroundColor: "#f33",
  onHover: "#ff6",
  onHoverLabel: "#000",
  labelColor: "#eff",
  iconWidth: "137px",
};
