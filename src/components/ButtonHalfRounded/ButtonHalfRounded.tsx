import React, { useState } from "react";
import "./buttonHalfRounded.css";

interface ButtonHalfRoundedI {
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

export const ButtonHalfRounded = ({
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
}: ButtonHalfRoundedI) => {
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
      className={`relative rounded-full flex flex-row items-center w-full ${superClasses}`}
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
      <p className="w-full pl-10 pr-5 py-2">{label}</p>
      <div
        className="mr-1 h-full w-full p-2 flex items-center justify-center"
        style={{ backgroundColor: iconColor, borderRadius: "100%" }}
      >
        <img src={icon} height={iconHeight} width={iconWidth} />
      </div>
    </button>
  );
};

ButtonHalfRounded.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#fff",
  labelWeight: "bold",
  onHover: "#f1f1f1",
  superClasses: "",
  backgroundColor: "#000",
  iconBackground: "#ff3",
  onHoverIconBackground: "#cc3300",
  onHoverLabelBackground: "#cc3300",
  icon: "/src/assets/info.svg",
  iconWidth: "",
  iconHeight: "",
};
