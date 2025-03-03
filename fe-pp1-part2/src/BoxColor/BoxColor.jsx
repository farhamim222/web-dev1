import React from "react";

function BoxColor({ r, g, b }) {
  // Convert RGB to hex format
  const rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const bgColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = rgbToHex(r, g, b);

  return (
    <div style={{
      backgroundColor: bgColor,
      padding: "20px",
      margin: "10px 0",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#fff"
    }}>
      {bgColor} → {hexColor}
    </div>
  );
}

export default BoxColor;
