import React, { useState } from "react";
import "./buttonCircle.css";

interface ButtonCircleI {
  onClick(): any;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
  backgroundColor?: string;
  circleRadius?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export const ButtonCircle = ({
  onClick,
  backgroundColor: initialBackColor,
  onHover,
  superClasses,
  circleRadius,
  icon,
  iconWidth,
  iconHeight,
  ...props
}: ButtonCircleI) => {
  const [backColor, setBackColor] = useState(initialBackColor);

  const handleMouseEnter = () => {
    setBackColor(onHover);
  };

  const handleMouseLeave = () => {
    setBackColor(initialBackColor);
  };

  return (
    <button
      type="button"
      className={`rounded-full flex items-center justify-center overflow-clip ${superClasses}`}
      style={{
        backgroundColor: backColor,
        height: circleRadius,
        width: circleRadius,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <img src={icon} alt={`${icon}`} height={iconHeight} width={iconWidth} />
    </button>
  );
};

ButtonCircle.defaultProps = {
  onHover: "#b8b0e5",
  superClasses: "",
  backgroundColor: "#ff3",
  circleRadius: "120px",
  icon: "/src/assets/search.png",
  iconWidth: "80px",
  iconHeight: "80px",
};
