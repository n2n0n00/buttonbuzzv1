import React, { useState } from "react";
import "./buttonBanner.css";

interface ButtonBannerI {
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

export const ButtonBanner = ({
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
}: ButtonBannerI) => {
  const [backColor, setBackColor] = useState(initialBackColor);

  const handleMouseEnter = () => {
    setBackColor(onHover);
  };

  const handleMouseLeave = () => {
    setBackColor(initialBackColor);
  };

  return (
    <div className="flex flex-row">
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
      <div
        style={{
          width: "0",
          height: "0",
          borderTop: "25px solid transparent",
          borderLeft: `30px solid ${backColor}`,
          borderBottom: "25px solid transparent",
        }}
      />
    </div>
  );
};

ButtonBanner.defaultProps = {
  labelSize: "20px",
  label: "Subscribe",
  labelColor: "#721300",
  labelWeight: "normal",
  onHover: "#00d65d",
  superClasses: "",
  backgroundColor: "#92f5bd",
  icon: "/src/assets/x.svg",
  iconWidth: "20px",
  iconHeight: "20px",
};
