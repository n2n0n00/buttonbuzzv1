import React, { useState } from "react";
import "./buttonParallel.css";

interface ButtonParallelI {
  labelSize?: string;
  label: string;
  onClick(): any;
  labelColor?: string;
  labelWeight?: string;
  onHover?: string;
  superClasses?: string;
  backgroundColor?: string;
}

export const ButtonParallel = ({
  labelSize,
  label,
  onClick,
  labelColor,
  labelWeight,
  onHover,
  superClasses,
  backgroundColor: initialBackColor,
  ...props
}: ButtonParallelI) => {
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
      className={`px-10 py-3 rounded-none ${superClasses}`}
      style={{
        width: "100%",
        height: "100%",
        transform: "skew(20deg)",
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
      <p style={{ transform: "skew(-20deg)" }}>{label}</p>
    </button>
  );
};

ButtonParallel.defaultProps = {
  labelSize: "22px",
  label: "Subscribe",
  labelColor: "#fff",
  labelWeight: "bold",
  onHover: "#000099",
  superClasses: "",
  backgroundColor: "#000",
};
