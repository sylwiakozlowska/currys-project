import React, { useState, useEffect } from "react";
import { CardComponent } from "../CardComponent/CardComponent";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const paymentMethods = [
  { id: 0, text: "Card/PayPal", selected: true },
  { id: 1, text: "Flexible Credit", selected: false },
];
export const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState(0);

  const paymentList = paymentMethods.map((payment) => {
    const { id, text } = payment;

    const onChangePayment = () => {
      setPaymentOption(id);
      console.log("clicked", id, text);
    };
    return (
      <li>
        <input
          type="radio"
          name="payment"
          value={paymentOption}
          checked={paymentOption === id}
          onChange={onChangePayment}
        />
        <p>{text}</p>
      </li>
    );
  });

  return (
    <div className="checkout-component">
      <ul className="payment-list">{paymentList}</ul>
      <CardComponent>
        <p className="promotions">Promotions</p>
        <div className="price-details">
          <span>Total </span>
          <span>£169.00</span>
          <span>Or from £7.05 per month*</span>
        </div>
        <Link to="/shipping">
          <Button className="is-primary">Checkout</Button>
        </Link>
      </CardComponent>
    </div>
  );
};
