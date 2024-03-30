import React, { useState } from "react";
import "./buttonPinkPanther.css";

interface ButtonPinkPantherI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  superClasses?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  opacity?: string;
  onHoverOpacity?: string;
}

export const ButtonPinkPanther = ({
  labelSize,
  label,
  onClick,
  labelColor,
  labelWeight,
  superClasses,
  icon,
  iconWidth,
  iconHeight,
  opacity: initialHoverOpacity,
  onHoverOpacity,
  ...props
}: ButtonPinkPantherI) => {
  const [opacityHover, setOpacityHover] = useState(initialHoverOpacity);

  const handleMouseEnter = () => {
    setOpacityHover(onHoverOpacity);
  };

  const handleMouseLeave = () => {
    setOpacityHover(initialHoverOpacity);
  };
  return (
    <button
      type="button"
      className={`bg_pink-panther px-10 py-2 rounded-none flex flex-row justify-center gap-5 items-center ${superClasses}`}
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

ButtonPinkPanther.defaultProps = {
  labelSize: "22px",
  label: "Search",
  labelColor: "#fff",
  labelWeight: "semibold",
  superClasses: "",
  icon: "/src/assets/s.svg",
  iconWidth: "20px",
  iconHeight: "20px",
  opacity: "100%",
  onHoverOpacity: "80%",
};
