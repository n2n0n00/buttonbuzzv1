import React, { useState } from "react";
import "./buttonTextUnderline.css";

interface ButtonTextUnderlineI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHoverOpacity?: string;
  superClasses?: string;
  opacity?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export const ButtonTextUnderline = ({
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
}: ButtonTextUnderlineI) => {
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
        textDecoration: "underline",
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

ButtonTextUnderline.defaultProps = {
  labelSize: "20px",
  label: "See More!",
  labelColor: "#01A31B",
  labelWeight: "bold",
  onHoverOpacity: "50%",
  opacity: "100%",
  superClasses: "",
  icon: "/src/assets/arrow.png",
  iconWidth: "10px",
  iconHeight: "10px",
};
