import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Components/icons.scss";
import "./styles.scss";
import { selectMenuOpen, selectIsLoading } from "./Store/features/app/appSlice";
import { selectSavedProduct } from "./Store/features/saved/savedProductSlice";
import { Home } from "./Pages/Home/Home";
import { SearchProducts } from "./Pages/SearchProducts/SearchProducts";
import { Breadcrumb } from "./Components/Breadcrumb/Breadcrumb";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import { Header } from "./Components/Header/Header";
import { HeaderTablet } from "./Components/HeaderTablet/HeaderTablet";
import { Overlay } from "./Components/Overlay/Overlay";
import { MenuNavTablet } from "./Components/MenuTablet/MenuNavTablet/MenuNavTablet";
import { Product } from "./Components/Product/Product";
import { Cart } from "./Pages/Cart/Cart";
import { ShippingPage } from "./Pages/ShippingPage/ShippingPage";
import { SavedPage } from "./Pages/SavedPage/SavedPage";
import { SavedProductMessage } from "./Components/SavedProductMessage/SavedProductMessage";
import { Footer } from "./Components/Footer/Footer";
import { FooterLinks } from "./Components/FooterLinks/FooterLinks";
import { FooterSocialMedia } from "./Components/FooterSocialMedia/FooterSocialMedia";
import RingLoader from "react-spinners/RingLoader";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const props = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color: "#4C12A1",
};

function App() {
  const openMenu = useSelector(selectMenuOpen);
  const isLoading = useSelector(selectIsLoading);
  // const isSaved = useSelector((state) => selectSavedProduct(state, Number(id)));

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  const scrollBarStyle = openMenu ? "hide-scroll" : "";
  return (
    <Router>
      <div className={`App page ${scrollBarStyle}`}>
        <section className="help-links-wrapper">
          <HelpLinks />
        </section>
        <header className="header-wrapper">
          <Header />
          <HeaderTablet />
        </header>
        <section className="breadcrumb-wrapper">
          <Breadcrumb>
            <Link to="/home">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/products">Products</Link>
          </Breadcrumb>
        </section>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product/:id">
            <section className="product-wrapper">
              <Product />
            </section>
          </Route>
          <Route path="/products">
            <section className="filters-wrapper">
              <SearchProducts />
            </section>
          </Route>
          <Route path="/cart">
            <section className="cart-wrapper">
              <Cart />
            </section>
          </Route>
          <Route path="/wishlist">
            <section className="saved-page-wrapper">
              <SavedPage />
            </section>
          </Route>
          <Route path="/shipping">
            <section className="shipping-page-wrapper">
              <ShippingPage />
            </section>
          </Route>
        </Switch>
        {openMenu && (
          <Overlay>
            <MenuNavTablet />
          </Overlay>
        )}
        {/* <p>{!data ? "Loading..." : data}</p> */}
        <footer className="footer-wrapper">
          <Footer />
          <FooterLinks />
          <FooterSocialMedia />
        </footer>
      </div>
      {isLoading && (
        <div className="loading">
          <RingLoader
            color={props.color}
            loading={props.loading}
            props={props}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {/* <div className="saved-product-message-wrapper">
        <SavedProductMessage />
      </div> */}
      {/* {isSaved && (
       
      )} */}
    </Router>
  );
}
export default App;
