import React, { useState } from "react";

export const SpreadCostCard = ({ children }) => {
  const [shownCostCard, setshownCostCard] = useState(false);

  return (
    <div className="spread-cost-card-component">
      <div className="spread-cost-card-button">
        <button className="content" onClick={() => setshownCostCard(true)}>
          Spread the cost
        </button>
      </div>
      {shownCostCard && (
        <div className="spread-cost-card-dropdown">
          {children}
          <button onClick={() => setshownCostCard((current) => !current)}>
            <span className="icon">
              <i className="glyph cross-icon"></i>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
