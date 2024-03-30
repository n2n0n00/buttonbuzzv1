import React, { useState } from "react";
import "./buttonDelete.css";

interface ButtonDeleteI {
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

export const ButtonDelete = ({
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
}: ButtonDeleteI) => {
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
      className={` px-5 py-2 rounded-2xl flex flex-row justify-center gap-3 items-center ${superClasses}`}
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
      <p> | </p>
      <img src={icon} alt={`${icon}`} height={iconHeight} width={iconWidth} />
    </button>
  );
};

ButtonDelete.defaultProps = {
  labelSize: "20px",
  label: "Subscribe",
  labelColor: "#721300",
  labelWeight: "normal",
  onHover: "#E66000",
  superClasses: "",
  backgroundColor: "#FF9B54",
  icon: "/src/assets/x.svg",
  iconWidth: "20px",
  iconHeight: "20px",
};
