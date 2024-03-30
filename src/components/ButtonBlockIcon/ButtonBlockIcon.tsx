import React, { useState } from "react";
import "./buttonBlockIcon.css";

interface ButtonBlockIconI {
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

export const ButtonBlockIcon = ({
  labelSize,
  label,
  onClick,
  labelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor: initialBackColor,
  icon,
  iconWidth,
  iconHeight,
  ...props
}: ButtonBlockIconI) => {
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
      className={`px-5 py-2 rounded-none flex flex-row justify-center gap-3 items-center ${superClasses}`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        backgroundColor: backColor,
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

ButtonBlockIcon.defaultProps = {
  labelSize: "20px",
  label: "Subscribe",
  labelColor: "#721300",
  labelWeight: "normal",
  onHover: "#E66000",
  superClasses: "",
  backgroundColor: "#f4fcba",
  icon: "/src/assets/x.svg",
  iconWidth: "20px",
  iconHeight: "20px",
};
