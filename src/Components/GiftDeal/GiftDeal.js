import React from "react";
import "../../styles.scss";

export const GiftDeal = () => {
  return (
    <div className="gift-deal-component">
      <div className="gift-deal-content-mobile">
        <a href="#">
          <img src="https://media.currys.biz/i/currysprod/christmas-delivery-cutoff-mobile" />
          <img
            src="https://media.currys.biz/i/currysprod/wk33-main-hero-gifting-mobile-v2?$webpSmall$"
            alt="Same day gifts ready to collect from your local store. Subject to in-store availability"
          />
        </a>
      </div>
      <div className="gift-deal-content-tablet">
        <a href="#">
          <img
            src="https://media.currys.biz/i/currysprod/christmas-delivery-cutoff-desktop"
            alt="Important service and delivery info"
          />
          <img
            src="https://media.currys.biz/i/currysprod/wk33-main-hero-gifting-desktop-v2"
            alt="Same day gifts ready to collect from your local store. Subject to in-store availability"
          />
        </a>
      </div>
    </div>
  );
};
