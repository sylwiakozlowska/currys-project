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
      <section className="service-menu-wrapper">
        <ServiceMenu />
      </section>
      <section className="card-deal-wrapper">
        <CardDeal />
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
