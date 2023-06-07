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
  slidesToShow: 3,
  // autoplayScroll: 1,
  // slidesPerRow: 1,
  arrows: true,
};
export const CardDeal = () => {
  const { shopDeals, latestOffers } = useSelector(selectCardDeal);

  const latestOffersList = latestOffers.map(({ id, src, alt }) => {
    return (
      <figure className="image card-offers-img-wrapper">
        <img src={src} alt={alt} />
      </figure>
    );
  });
  const shopDealsList = shopDeals.map(({ id, src, alt, text }) => {
    return (
      <div className="card-deals-img-wrapper">
        <figure className="image">
          <img src={src} alt={alt} />
          <p>{text}</p>
        </figure>
      </div>
    );
  });
  return (
    <div className="card-deal-component">
      <div className="card-deals">
        <h1 className="title is-1">Shop deals</h1>
        <Slider className="carousel" {...settings} slidesToShow={4}>
          {shopDealsList}
        </Slider>
      </div>
      <div className="card-offers">
        <h1 className="title is-1">Discover the latest Apple offers</h1>
        <Slider className="carousel" {...settings}>
          {latestOffersList}
        </Slider>
      </div>
    </div>
  );
};
