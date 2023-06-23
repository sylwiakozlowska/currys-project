import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
const mapImg = {
  freewiew: "https://media.currys.biz/i/currysprod/freeview_play-9650.png",
  "4kHDR": "https://media.currys.biz/i/currysprod/new_oel-28959.png",
};
export const ProductImage = ({ productImageUrl, formatBadges }) => {
  const badgesList = formatBadges.map((badge) => (
    <img key={badge} src={mapImg[badge]} />
  ));
  // const imageUrl = productImageUrl.map((image) => (
  //   <img key={image} src={productImageUrl} />
  // ));
  return (
    <div className="product-image-component">
      <img src={productImageUrl} />
      {/* <div className="badges">{badgesList}</div> */}
    </div>
  );
};
