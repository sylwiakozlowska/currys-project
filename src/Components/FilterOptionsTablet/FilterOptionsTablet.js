import React, { useState } from "react";
import { BsSliders } from "react-icons/bs";
export const FilterOptionsTablet = () => {
  const [sortBy, selectSortBy] = useState("Sort by: Relevance");

  const onChangeSortByOption = (e) => {
    const { value } = e.target;
    selectSortBy(value);
    console.log(value);
  };

  return (
    <div className="filter-options-component-tablet">
      <div class="select">
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

          <option value="Customer rating">Sort by: Customer rating</option>
        </select>
      </div>
      <button className="button">
        <BsSliders />
        Filters
      </button>
    </div>
  );
};
