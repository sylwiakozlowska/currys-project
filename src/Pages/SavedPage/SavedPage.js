import React from "react";
import { CiHeart } from "react-icons/ci";
import { CardComponent } from "../../Components/CardComponent/CardComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSavedProducts,
  removeFromSaved,
  selectSavedItemCount,
} from "../../Store/features/saved/savedProductSlice";
import { SavedProduct } from "../../Components/SavedProduct/SavedProduct";

export const SavedPage = () => {
  const products = useSelector(selectSavedProducts);
  console.log("savedproducts", products);
  const savedItemsCount = useSelector(selectSavedItemCount);

  const dispatch = useDispatch();
  // const savedItemsCount = useSelector(selectSavedItemCount);
  // const savedItems = `(${savedItemsCount} ${savedItemsCount === 1 ? "item" : "items"})`;

  // const onClickRemoveItem = (cartProduct) => {
  //   console.log(cartProduct);
  //   dispatch(removeFromSaved(cartProduct));
  // };

  const onClickRemoveFromSaved = (savedItem) => {
    dispatch(removeFromSaved(savedItem));
  };
  const savedProducts = products.map((savedItem) => {
    return (
      <SavedProduct savedItem={savedItem} onClick={onClickRemoveFromSaved} />
    );
  });
  if (savedProducts.length === 0) {
    // if (savedItemsCount === 0) {
    return (
      <div className="saved-page-component">
        <div className="saved-items-info">
          <CiHeart className="heart-icon" />
          <h1 className="title is-1">You have no saved items</h1>
          <p>
            Not ready to buy yet? Shop amazing tech and add your favourites to
            your list.
          </p>
        </div>
        <CardComponent>
          <p>Don’t lose your saved items</p>
          <p>
            Sign in/Register to view your saved items at any time and avoid
            losing them when you leave the site.
          </p>
        </CardComponent>
      </div>
    );
  }
  return (
    <div className="saved-page-component">
      <h1 className="title is-1">Saved Items</h1>
      <CardComponent>
        <p>Don’t lose your saved items</p>
        <p>
          Sign in/Register to view your saved items at any time and avoid losing
          them when you leave the site.
        </p>
      </CardComponent>
      Saved Items:{savedItemsCount}
      <div className="columns">
        <div className="column is-one-third"> {savedProducts}</div>
      </div>
    </div>
  );
};
