import React from "react";
// import "../styles.scss";
import { BannerComponent } from "../../Components/BannerComponent/BannerComponent";
import { GiftDeal } from "../../Components/GiftDeal/GiftDeal";
import { CardDeal } from "../../Components/CardDeal/CardDeal";
export const Home = () => {
  return (
    <>
      <section className="banner-wrapper">
        <BannerComponent>
          <GiftDeal />
        </BannerComponent>
      </section>
      <section className="card-deal-wrapper">
        <h1>Christmas at Currys</h1>
        <CardDeal />
      </section>
    </>
  );
};
