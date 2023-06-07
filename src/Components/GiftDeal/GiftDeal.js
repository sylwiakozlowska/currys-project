import React from "react";
import "../../styles.scss";

// const dealOptions = [
//   {
//     id: 0,
//     // src: "https://media.currys.biz/i/currysprod/wk33-grid-pay-in-3?$webpMedium$",
//     // alt: "Pay in 3",
//     src: "https://media.currys.biz/i/currysprod/wk4-hero-summer-clearance-v1?$jpegSmall$",
//     alt: "clearance it's on Huge savings. bag at tech bargain",
//   },
//   {
//     id: 1,
//     // src: "https://media.currys.biz/i/currysprod/wk33-grid-gaming-consoles?$jpegSmall$",
//     // alt: "Console Games",
//     src: "https://media.currys.biz/i/currysprod/wk4-hero-samsung-tv?$jpegSmall$",
//     alt: "Get 10% off the marked price on selected Samsung TVs.",
//   },
//   {
//     id: 2,
//     // src: "	https://media.currys.biz/i/currysprod/wk33-grid-lstv-sony?$webpMedium$",
//     // alt: "Televisions and gift card offer",
//     src: "https://media.currys.biz/i/currysprod/wk4-hero-credit-pay-delay?$jpegSmall$",
//     alt: "flexible credit and pay no interest",
//   },
// ];
export const GiftDeal = () => {
  return (
    <div className="gift-deal-component">
      <div className="gift-deal-content">
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-hero-summer-clearance-v1?$jpegSmall$"
            alt="clearance it's on Huge savings. bag at tech bargain"
          />
        </figure>
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-hero-samsung-tv?$jpegSmall$"
            alt="Get 10% off the marked price on selected Samsung TVs."
          />
        </figure>
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-hero-credit-pay-delay?$jpegSmall$"
            alt="flexible credit and pay no interest"
          />
        </figure>
      </div>
      <div className="gift-deal-content">
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-hero-small1-computing-upweighted?$jpegSmall$"
            alt="Save up to £200 with our amazing computer deals."
          />
        </figure>
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-hero-small2-HB-haircare?$jpegSmall$"
            alt="Glam up for summer with our cutting-edge hair tech. Plus, win a pro hair styling session.&ZeroWidthSpace;"
          />
        </figure>
      </div>
      <div className="gift-deal-content">
        <figure className="image">
          <img
            src="https://media.currys.biz/i/currysprod/wk4-banner-hp-google-pixel-7a-desktop-v1"
            alt="Google Pixel 7a trade-in offer"
          />
        </figure>
      </div>
    </div>
  );
};
