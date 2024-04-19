import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduct,
  selectProduct,
  selectStatus,
} from "../../Store/features/product/productSlice";
import {
  addToBasket,
  selectItemCount,
} from "../../Store/features/cart/cartProductSlice";
import {
  toggleSaved,
  selectSavedItemCount,
  selectSavedProduct,
} from "../../Store/features/saved/savedProductSlice";
import { ProductImage } from "../ProductSummary/ProductImage/ProductImage";
import { Rating } from "../Rating/Rating";
import { PricingOptions } from "../ProductSummary/ProductPrice/PricingOptions/PricingOptions";
import { ProductOffers } from "../ProductSummary/ProductOffers/ProductOffers";
import { ColorVariation } from "../ColorVariation/ColorVariation";
import { Button } from "../Button/Button";
import { SearchStockWrapper } from "../SearchStock/SearchStockWrapper";
import { CardComponent } from "../CardComponent/CardComponent";
import { ShareComponent } from "../ShareComponent/ShareComponent";
import { VerticalCarousel } from "../VerticalCarousel/VerticalCarousel";
import { BsHeart, BsHeartFill, BsShare } from "react-icons/bs";

const settings = {
  // autoplay: true,
  autoplay: false,
  autoplaySpeed: 3e3,
  wheelScroll: 3,
  centerPadding: 90,
  rows: 1,
  slidesToShow: 4,
  // autoplayScroll: 1,
  // slidesPerRow: 1,
  arrows: true,
};
export const Product = () => {
  // const [shown, setShown] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const status = useSelector(selectStatus);
  const isSaved = useSelector((state) => selectSavedProduct(state, Number(id)));
  const onClickAddToBasket = () => {
    dispatch(addToBasket(product));
  };
  const itemCount = useSelector(selectItemCount);
  const onClickToggleSaved = () => {
    dispatch(toggleSaved(product));
  };
  const [priceOption, setPriceOption] = useState(0);
  const [colorOption, setColorOption] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return "loading";
  }

  const buttonAddToBasketProps =
    itemCount > 4
      ? {
          title:
            "Unable to update product quantity. Please try again! If the issue continues please contact customer service",
        }
      : {};
  const {
    imagesGroup,
    productImageUrl,
    rating,
    pricingOptions,
    productOffers,
    colorVariation,
    deliveries,
  } = product;

  const slides = imagesGroup.map((imageGroup, i) => ({
    smallImage: { src: imageGroup.src },
    id: i,
    content: { image: imageGroup.src },
  }));
  return (
    <section className="product-component">
      <div className="columns">
        <div className="column is-three-fifths">
          <h1 className="product-title title is-1">{product.title}</h1>
          <div className="product-rating">
            <Rating value={rating.value} count={rating.count}></Rating>
            <span className="product-rating-reviews">(47)</span>
          </div>
          <div className="images-group">
            {/* {productMiniImagesList}
            <div> */}
            <VerticalCarousel
              slides={slides}
              // data={data.slides}
              // leadingText={data.leadingText}
            />
            {/* <ProductImage
              productImageUrl={product.productImageUrl}
              formatBadges={product.formatBadges}
            /> */}
            {/* </div> */}
          </div>
          <div className="key-features">
            <ul className="key-features-list">
              <li>Android 10.0</li>
              <li>HD Ready screen</li>
              <li>32 GB storage: Perfect for apps / photos / videos</li>
              <li>Add more storage with a microSD card</li>
              <li>Dolby Atmos </li>
              <li>2 year guarantee</li>
            </ul>
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
          <Button
            {...buttonAddToBasketProps}
            className="is-primary"
            onClick={onClickAddToBasket}
            disabled={itemCount > 4}
          >
            <i className="glyph basket-icon"></i> Add to Basket
          </Button>
          <div className="button-group">
            {isSaved ? (
              <button className="button-saved" onClick={onClickToggleSaved}>
                <BsHeartFill fill="red" />
                <span>Saved</span>
              </button>
            ) : (
              <button
                className="button-save-later"
                onClick={onClickToggleSaved}
              >
                <BsHeart />
                <span>Save for later</span>
              </button>
            )}
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button button-share"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <BsShare />
                  <span>Share</span>
                </button>
              </div>
              <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <ShareComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stock-wrapper">
            <CardComponent>
              <SearchStockWrapper deliveries={deliveries} />
            </CardComponent>
          </div>
        </div>
      </div>
    </section>
  );
};
