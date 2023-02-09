import React from "react";
// import "../styles.scss";
import { Tabs } from "../../Components/Tabs/Tabs";
import { FiltersWithProducts } from "../../Components/FiltersWithProducts/FiltersWithProducts";
import { ServicesAndSupport } from "../../Components/ServicesAndSupport/ServicesAndSupport";
import { useLocation } from "react-router-dom";
export const SearchProducts = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  return (
    <div className="search-products-component">
      <h1 className="title is-1 search-products-results">
        Showing results for "{params.get("q")}"
      </h1>
      <Tabs
        items={[
          {
            title: "Products",
            comp: <FiltersWithProducts />,
          },
          {
            title: "Services, expert advice & support",
            comp: <ServicesAndSupport />,
          },
        ]}
      ></Tabs>
    </div>
  );
};
