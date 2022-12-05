import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";

export const CostCard = ({onClose}) => {
  return (
    <div className="cost-card-component">
      <div className="cost-card-content">
        <div>
          <div className="cost-card-header">
            <h1>Spread the cost</h1>
            <button className="button button-cost" onClick={onClose}>
              <span className="icon">
                <i className="glyph cross-icon"></i>
              </span>
            </button>
          </div>
          <div className="cost-card-info">
            <img src="https://currys-ssl.cdn.dixons.com/css/themes/test/your-plan-logo.png" alt="currys logo"/>
            <div className="monthly-spread">
              <p>
                "From" <b>£57.59 a month</b>
              </p>
              <p>
                <b>
                  Spread the cost for up to 36 months with our flexible credit
                  plan.
                </b>
                24.9% APR representative (variable).
              </p>
              <p>
                Flexible credit only available for home delivery and in-store
                purchases. Apply at checkout and select delivery. If you're
                reserving something online or shopping in store you can{" "}
                <a href="#">apply here.</a>
              </p>
            </div>
            <div className="cost-example">
              <p>Representative example</p>
              <p>
                Credit amount £1499.00. Pay 36 monthly payments of £57.59. Total
                amount payable £2073.24. Rate of interest 24.9% (variable).
                24.9% APR representative (variable).
              </p>
              <p>
                Monthly payment amounts may vary depending on the credit amount
                and payment term selected.
              </p>
            </div>
            <span>
              <a href="#">Credit account FAQs</a>
            </span>
            <span>
              <a href="#">Credit account information</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
