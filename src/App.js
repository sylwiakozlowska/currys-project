import React from "react";
import "./Components/icons.scss";
import "./styles.scss";
import { Home } from "./Pages/Home/Home";
import { SearchProducts } from "./Pages/SearchProducts/SearchProducts";
import { Breadcrumb } from "./Components/Breadcrumb/Breadcrumb";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import { Header } from "./Components/Header/Header";
import { HeaderTablet } from "./Components/HeaderTablet/HeaderTablet";
import { Overlay } from "./Components/Overlay/Overlay";
import { useSelector } from "react-redux";
import { selectMenuOpen } from "./Store/features/app/appSlice";
import { MenuNavTablet } from "./Components/MenuTablet/MenuNavTablet/MenuNavTablet";
import { Product } from "./Components/ProductSummary/Product/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const openMenu = useSelector(selectMenuOpen);
  console.log("openMenu", openMenu);

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
          <Route exact path="/home">
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
        </Switch>
        {openMenu && (
          <Overlay>
            <MenuNavTablet />
          </Overlay>
        )}
      </div>
    </Router>
  );
}
// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
