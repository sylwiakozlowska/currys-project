import React from "react";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectCardDeal } from "../../Store/features/cardDeal/cardDealSlice";
import Slider from "infinite-react-carousel";

const settings = {
  // autoplay: true,
  autoplay: false,
  autoplaySpeed: 3e3,
  wheelScroll: 3,
  centerPadding: 90,
  rows: 1,
  slidesToShow: 2,
  // autoplayScroll: 1,
  // slidesPerRow: 1,
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
