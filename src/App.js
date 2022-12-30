import React from "react";
import "./Components/icons.scss";
import "./styles.scss";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import { Header } from "./Components/Header/Header";
import { HeaderTablet } from "./Components/HeaderTablet/HeaderTablet";
import { ServiceMenu } from "./Components/ServiceMenu/ServiceMenu";
import { CardDeal } from "./Components/CardDeal/CardDeal";
import { Overlay } from "./Components/Overlay/Overlay";
import { useSelector } from "react-redux";
import { selectMenuOpen } from "./Store/features/app/appSlice";
import { MenuNavTablet } from "./Components/MenuTablet/MenuNavTablet/MenuNavTablet";
// import { Outlet, Link, Route, Routes } from "react-router-dom";
import { ProductSummaryWithCompare } from "./Components/ProductSummaryWithCompare/ProductSummaryWithCompare";
import { GiftDeal } from "./Components/GiftDeal/GiftDeal";
import { BannerComponent } from "./Components/BannerComponent/BannerComponent";
import {NonPureFilterComponent} from "./Components/FilterComponent/NonPureFilterComponent/NonPureFilterComponent";
function App() {
  const openMenu = useSelector(selectMenuOpen);
  console.log("openMenu", openMenu);

  const scrollBarStyle = openMenu ? "hide-scroll" : "";
  return (
    <div className={`App page ${scrollBarStyle}`}>
      <section className="help-links-wrapper">
        <HelpLinks />
        {/* <Link to='contact'>contact</Link> */}
      </section>
      <header className="header-wrapper">
        <Header />
        <HeaderTablet />
      </header>
      <section className="benner-wrapper">
        <BannerComponent>
          <GiftDeal />
        </BannerComponent>
      </section>
      {/* <section className="service-menu-wrapper">
        <ServiceMenu />
      </section> */}
      <section className="card-deal-wrapper">
        <h1>Christmas at Currys</h1>
        <CardDeal />
      </section>
      <section className="filters-wrapper">
       <NonPureFilterComponent/>
      </section>
      {openMenu && (
        <Overlay>
          <MenuNavTablet />
        </Overlay>
      )}

      <ProductSummaryWithCompare />
      {/* <Route path="contact" element={<CardDeal />}></Route> */}
    </div>
  );
}

export default App;
