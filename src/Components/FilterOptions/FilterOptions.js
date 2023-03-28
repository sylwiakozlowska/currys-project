import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
import { BsListUl, BsGrid } from "react-icons/bs";
export const FilterOptions = () => {
  const [sortBy, selectSortBy] = useState("Sort by: Relevance");
  const [showPage, setShowPage] = useState("20");
  const onChangeSortByOption = (e) => {
    const { value } = e.target;
    selectSortBy(value);
    console.log(value);
  };
  const onChangePage = (e) => {
    const { value } = e.target;
    setShowPage(value);
    console.log(value);
  };
  return (
    <div className="filter-options-component">
      <div className="select">
        <select
          className="sort-by"
          value={sortBy}
          onChange={onChangeSortByOption}
        >
          <option value="Relevance">Sort by: Relevance</option>
          <option value="Brand - A to Z">Sort by: Brand - A to Z</option>
          <option value="Brand - Z to A">Sort by: Brand - Z to A</option>
          <option value="Price - low to high">
            Sort by: Price - low to high
          </option>
          <option value="Price - high to low">
            Sort by: Price - high to low
          </option>
          <option value="Customer rating">Sort by: Customer rating</option>
        </select>
      </div>
      <div className="select-page">
        <div className="select">
          <select className="show-pages" onChange={onChangePage}>
            <option value={showPage}>Show: 20</option>
            <option value="Show: 30">Show: 30</option>
            <option value="Show: 50">Show: 50</option>
          </select>
        </div>
      </div>
      <div className="field has-addons">
        <p className="control">
          <button className="button">
            <BsListUl />
            <span>List</span>
          </button>
        </p>
        <p className="control">
          <button className="button">
            <BsGrid />
            <span>Grid</span>
          </button>
        </p>
      </div>
    </div>
  );
};
