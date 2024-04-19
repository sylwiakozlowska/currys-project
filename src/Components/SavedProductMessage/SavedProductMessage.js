import React from "react";
// import { Redirect, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { CardComponent } from "../CardComponent/CardComponent";
// import { selectSavedProduct } from "../../Store/features/saved/savedProductSlice";
import { RxCross1 } from "react-icons/rx";

export const SavedProductMessage = () => {
//   const { id } = useParams();
//   const isSaved = useSelector((state) => selectSavedProduct(state, Number(id)));

  return (
    <div className="saved-product-message-componenet">
      <CardComponent>
        {/* {isSaved ? ( */}
          <div className="saved-product-message">
            <div>
              <span>Added to your saved items.</span>
              <a href="#">View</a>
              <button className="button button-close">
                <RxCross1 className="close-icon" />
              </button>
            </div>
            <div>
              <a>Sign in/Register </a>
              <span>
                to view your saved items at any time and avoid losing them when
                you leave the site.
              </span>
            </div>
          </div>
        {/* ) : ( */}
          <div className="unsaved-product-message">
            <div>
              <span>Removed your saved items.</span>
              <a href="#">View</a>
              <button className="button button-close">
                <RxCross1 className="close-icon" />
              </button>
            </div>
            <div>
              <a>Sign in/Register </a>
              <span>
                to view your saved items at any time and avoid losing them when
                you leave the site.
              </span>
            </div>
          </div>
        {/* )} */}
      </CardComponent>
    </div>
  );
};
