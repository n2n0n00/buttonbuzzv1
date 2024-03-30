import React, { useState } from "react";
import "./buttonGeometry.css";

interface ButtonGeometryI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  backgroundColor?: string;
  leftShapeColor?: string;
  rightTopShapeColor?: string;
  rightBottomShapeColor?: string;
}

export const ButtonGeometry = ({
  labelSize,
  label,
  onClick,
  labelColor: initialLabelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor,
  leftShapeColor,
  rightTopShapeColor,
  rightBottomShapeColor,
  ...props
}: ButtonGeometryI) => {
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
      className={`relative px-10 py-2 rounded-full ${superClasses} overflow-clip`}
      style={{
        fontSize: labelSize,
        color: labelColor,
        fontWeight: labelWeight,
        background: backgroundColor,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className="absolute left-1 top-1 bottom-0 -rotate-[50deg]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "25px solid transparent",
          borderRight: "25px solid transparent",
          borderTop: `100px solid ${leftShapeColor}`,
        }}
      ></div>

      {label}

      <div
        className="absolute -top-20 -right-0 rotate-[90deg]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderTop: `130px solid ${rightTopShapeColor}`,
        }}
      ></div>
      <div
        className="absolute -bottom-20 -right-5 rotate-[60deg]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderTop: `130px solid ${rightBottomShapeColor}`,
        }}
      ></div>
    </button>
  );
};

ButtonGeometry.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#7ba2ff",
  labelWeight: "bold",
  onHover: "#878a93",
  superClasses: "",
  backgroundColor: "#fff",
  leftShapeColor: "#FCD5CE",
  rightTopShapeColor: "#FEC89A",
  rightBottomShapeColor: "#D8E2DC",
};
