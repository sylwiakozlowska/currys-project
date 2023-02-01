import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSingleProductSummary } from "../../Store/features/productSummary/productSummarySlice";
import { ProductImage } from "../ProductSummary/ProductImage/ProductImage";
import { Rating } from "../Rating/Rating";
import { PricingOptions } from "../ProductSummary/ProductPrice/PricingOptions/PricingOptions";
import { ProductOffers } from "../ProductSummary/ProductOffers/ProductOffers";
import { ColorVariation } from "../ColorVariation/ColorVariation";
import { Button } from "../Button/Button";
import { SearchStockWrapper } from "../SearchStock/SearchStockWrapper";
import { CardComponent } from "../CardComponent/CardComponent";

export const Product = () => {
  const { id } = useParams();
  const product = useSelector((state) => selectSingleProductSummary(state, id));
  //   const deliveryOptions = useSelector((state) => selectDelivery2(state, id));
  //   console.log("deliveryOptions", deliveryOptions);

  const { rating, pricingOptions, productOffers, colorVariation, deliveries } =
    product;
  const [priceOption, setPriceOption] = useState(pricingOptions[0].id);
  const [colorOption, setColorOption] = useState(colorVariation[0].id);
  //   const [deliveryOption, setDeliveryOption] = useState(deliveryOptions);

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
          <div className="color-variation-wrapper">
            <ColorVariation
              colorOption={colorOption}
              setColorOption={setColorOption}
              colorVariation={colorVariation}
            />
          </div>

          <div className="stock-wrapper">
            <CardComponent>
              <SearchStockWrapper deliveries={deliveries} />
            </CardComponent>
          </div>
          <Button className="is-primary">
            <i className="glyph basket-icon"></i> Add to Basket
          </Button>
        </div>
      </div>
    </section>
  );
};
