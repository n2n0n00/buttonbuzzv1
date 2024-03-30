import React, { useState } from "react";

import "./buttonBoringShadow.css";

interface ButtonBoringShadowI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  backgroundColor?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export const ButtonBoringShadow = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor,
  icon,
  iconWidth,
  iconHeight,
  ...props
}: ButtonBoringShadowI) => {
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
      className={`shadow-xl px-10 py-2 rounded-full flex flex-row justify-center gap-3 items-center ${superClasses}`}
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
      <p>{label}</p>
      <img src={icon} alt={`${icon}`} height={iconHeight} width={iconWidth} />
    </button>
  );
};

ButtonBoringShadow.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#fff",
  labelWeight: "bold",
  onHover: "#cc99ff",
  superClasses: "",
  backgroundColor: "#000",
  icon: "/src/assets/search.png",
  iconWidth: "18px",
  iconHeight: "18px",
};
