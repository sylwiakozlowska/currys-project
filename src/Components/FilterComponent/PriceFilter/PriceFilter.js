import React, { useState } from "react";
import { Button } from "../../Button/Button";

export const PriceFilter = ({ onChange }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const onSubmit = (e) => {
    onChange(priceFrom, priceTo);
    e.preventDefault();
  };

  const onPriceFromChange = (e) => {
    const withoutLetters = e.target.value.replace(/\D/g, "");
    setPriceFrom(withoutLetters);
  };
  const onPriceToChange = (e) => {
    const withoutLetters = e.target.value.replace(/\D/g, "");
    setPriceTo(withoutLetters);
  };

  const validate =() => {
    return priceFrom !== '' && priceTo;
  }
  
  const buttonDisabled = !validate()

  return (
    <nav className="price-filter-component">
      <span>£</span>
      <form onSubmit={onSubmit}>
        <div className="field is-grouped">
          <p className="control">
            <input
              className="input"
              type="text"
              value={priceFrom}
              placeholder="from"
              onChange={onPriceFromChange}
            />
          </p>
          <p className="control">
            <input
              className="input"
              type="text"
              value={priceTo}
              placeholder="to"
              onChange={onPriceToChange}
            />
          </p>
          <Button className="is-primary is-outlined" type="submit" disabled={buttonDisabled}>
            Refresh
          </Button>
        </div>
      </form>
    </nav>
  );
};
