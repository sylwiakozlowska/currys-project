import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectCardDeal } from "../../Store/features/cardDeal/cardDealSlice";
import Slider from "infinite-react-carousel";

const settings = {
  autoplay: true,
  autoplaySpeed: 8000,
  wheelScroll: 3,
  // dots: true,
  centerPadding: 90,
  arrows: true,
};
export const CardDeal = () => {
  const { dealOptions, dealSaveOptions } = useSelector(selectCardDeal);
  const dealOptionsList = dealOptions.map(({ id, src, alt }) => {
    return (
      <figure className="card-deal-img-wrapper">
        <img src={src} alt={alt} />
      </figure>
    );
  });
  const dealSaveOptionsList = dealSaveOptions.map(({ id, src, alt }) => {
    return (
      <figure className="card-deal-save-img-wrapper">
        <img src={src} alt={alt} />
      </figure>
    );
  });
  return (
    <div className="card-deal-component">
      <div className="card-deal-content">{dealOptionsList}</div>
      <div className="card-deal-save-content">
        <Slider className="carousel" {...settings}>
          {dealSaveOptionsList}
        </Slider>
      </div>
    </div>
  );
};
