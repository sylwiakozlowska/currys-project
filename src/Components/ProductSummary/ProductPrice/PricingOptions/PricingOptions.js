import React from "react";
export const PricingOptions = ({
  priceOption,
  setPriceOption,
  pricingOptions,
}) => {
  const pricingOptionsList = pricingOptions.map((option) => {
    const { id, price, text, selected } = option;
    const onChangeOption = (e) => {
      setPriceOption(Number(id));
    };

    const selectedOption =
      priceOption === id
        ? "pricing-options-list selected"
        : "pricing-options-list";

    return (
      <div className={selectedOption} onClick={onChangeOption}>
        <input
          type="radio"
          name="pricing-options"
          value={id}
          checked={priceOption === id}
        />
        <span>£{price}</span>
        <span>{text}</span>
      </div>
    );
  });
  return (
    <section className="pricing-options-component">
      {pricingOptionsList}
      <div>
        *Representative example: Credit amount £{pricingOptions[0].price}. Pay
        36 monthly payments of £{pricingOptions[1].price}. Total amount payable
        £247.32. Rate of interest 24.9% (variable). 24.9% APR representative
        variable.
      </div>
    </section>
  );
};
