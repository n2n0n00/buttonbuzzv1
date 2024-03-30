import React, { useState } from "react";
import "./buttonTextOnly.css";

interface ButtonTextOnlyI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHoverOpacity?: string;
  opacity?: string;
  superClasses?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export const ButtonTextOnly = ({
  labelSize,
  label,
  onClick,
  labelColor,
  labelWeight,
  onHoverOpacity,
  opacity: initialOpacity,
  superClasses,
  icon,
  iconWidth,
  iconHeight,
  ...props
}: ButtonTextOnlyI) => {
  const [opacityHover, setOpacityHover] = useState(initialOpacity);

  const handleMouseEnter = () => {
    setOpacityHover(onHoverOpacity);
  };

  const handleMouseLeave = () => {
    setOpacityHover(initialOpacity);
  };

  return (
    <button
      type="button"
      className={`px-10 py-2 flex flex-row justify-center gap-3 items-center ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        opacity: opacityHover,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <p>{label}</p>
      <img src={icon} alt={`${icon}`} height={iconHeight} width={iconWidth} />
    </button>
  );
};

ButtonTextOnly.defaultProps = {
  labelSize: "18px",
  label: "Click here I tell you lad!",
  labelColor: "#01A31B",
  labelWeight: "bold",
  onHoverOpacity: "50%",
  opacity: "100%",
  superClasses: "",
  icon: "/src/assets/arrow.png",
  iconWidth: "20px",
  iconHeight: "20px",
};
