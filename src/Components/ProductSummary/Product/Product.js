import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { colorSelected } from "../../../Store/features/productSummary/productSummarySlice";
import { selectProductSummary2 } from "../../../Store/features/productSummary/productSummarySlice";
import { ProductImage } from "../ProductImage/ProductImage";
import { Rating } from "../../Rating/Rating";
import { PricingOptions } from "../ProductPrice/PricingOptions/PricingOptions";
import { ProductOffers } from "../ProductOffers/ProductOffers";
import { ColorVariation } from "../../ColorVariation/ColorVariation";
import { Button } from "../../Button/Button";
export const Product = () => {
  const { id } = useParams();
  const product = useSelector((state) => selectProductSummary2(state, id));

  const { rating, pricingOptions, productOffers, colorVariation } = product;
  const [priceOption, setPriceOption] = useState(pricingOptions[0].id);
  const [colorOption, setColorOption] = useState(colorVariation[0].id);

  return (
    <section className="product-component">
      <div className="columns">
        <div className="column is-half">
          <h1 className="product-title title is-1">{product.title}</h1>
          <div className="product-rating">
            <Rating value={rating.value} count={rating.count}></Rating>
            <span className="product-rating-reviews">(47)</span>
          </div>
          <div>
            <ProductImage
              productImageUrl={product.productImageUrl}
              formatBadges={product.formatBadges}
            />
          </div>
        </div>
        {/* hello {JSON.stringify(product)} */}
        <div className="column">
          <PricingOptions
            priceOption={priceOption}
            setPriceOption={setPriceOption}
            pricingOptions={pricingOptions}
            // onChange={onChangeOption}
          />
          <div className="product-offers-component">
            {productOffers?.length ? (
              <ProductOffers offers={productOffers} max={1} />
            ) : null}
          </div>
          <ColorVariation
            colorOption={colorOption}
            setColorOption={setColorOption}
            colorVariation={colorVariation}
          />
          <div>
            {" "}
            <Button className="is-primary">
              <i class="glyph basket-icon"></i> Add to Basket
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
