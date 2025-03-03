import React from "react";
import "./CreditCard.css"; // Import CSS for styling
import visaLogo from "../assets/images/visa.png";
import masterCardLogo from "../assets/images/master-card.svg";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  // Mask credit card number, only show last 4 digits
  const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`;

  // Format expiration month to always be two digits (e.g., 03 instead of 3)
  const formattedMonth = expirationMonth.toString().padStart(2, "0");

  // Determine card logo
  const cardLogo = type === "Visa" ? visaLogo : masterCardLogo;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
      <div className="logo">
        <img src={cardLogo} alt={type} />
      </div>
      <div className="card-number">{maskedNumber}</div>
      <div className="card-info">
        <span>Expires {formattedMonth}/{expirationYear % 100}</span>
        <span>{bank}</span>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
