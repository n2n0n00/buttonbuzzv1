import React, { useState } from "react";
import "./buttonHalfHalf.css";

interface ButtonHalfHalfI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  borderColor?: string;
  backgroundColor?: string;
  iconBackground?: string;
  onHoverIconBackground?: string;
  onHoverLabelBackground?: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
}

export const ButtonHalfHalf = ({
  labelSize,
  label,
  onClick,
  labelColor,
  labelWeight,
  iconBackground: initialIconBackground,
  onHoverIconBackground,
  onHoverLabelBackground,
  superClasses,
  backgroundColor: initialBackLabelColor,
  icon,
  iconWidth,
  iconHeight,
  ...props
}: ButtonHalfHalfI) => {
  const [labelBackColor, setLabelBackColor] = useState(initialBackLabelColor);
  const [iconColor, setIconColor] = useState(initialIconBackground);

  const handleMouseEnter = () => {
    setLabelBackColor(onHoverLabelBackground);
    setIconColor(onHoverIconBackground);
  };

  const handleMouseLeave = () => {
    setLabelBackColor(initialBackLabelColor);
    setIconColor(initialIconBackground);
  };

  return (
    <button
      type="button"
      className={`relative rounded-none flex flex-row items-center w-full ${superClasses}`}
      style={{
        fontSize: labelSize,
        fontWeight: labelWeight,
        color: labelColor,
        backgroundColor: labelBackColor,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <p className="w-full pl-10 pr-5">{label}</p>
      <div
        className="py-3 h-full w-full px-5 flex items-center justify-center"
        style={{ backgroundColor: iconColor }}
      >
        <img src={icon} height={iconHeight} width={iconWidth} />
      </div>
    </button>
  );
};

ButtonHalfHalf.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#fff",
  labelWeight: "bold",
  onHover: "#f1f1f1",
  superClasses: "",
  backgroundColor: "#66ccff",
  iconBackground: "#0099ff",
  onHoverIconBackground: "#38b2ac",
  onHoverLabelBackground: "#38b2ac",
  icon: "/src/assets/x.svg",
  iconWidth: "",
  iconHeight: "",
};
