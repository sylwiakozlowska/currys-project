import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
export const StockMessage = ({ stock }) => {
  const message = stock.map(({ text }) => {
    return (
      <div className="stock-message-content">
        <AiFillInfoCircle className="info-icon"/>
        <p className="info-text">{text}</p>
      </div>
    );
  });

  return <div className="stock-message-component">{message}</div>;
};
