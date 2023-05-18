import React from "react";
import { CiHeart } from "react-icons/ci";
import { CardComponent } from "../../Components/CardComponent/CardComponent";

export const SavedPage = () => {
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
          Sign in/Register to view your saved items at any time and avoid losing
          them when you leave the site.
        </p>
      </CardComponent>
    </div>
  );
};
