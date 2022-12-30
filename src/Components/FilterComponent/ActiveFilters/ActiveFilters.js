import React from "react";
import { PillBox } from "../PillBox/PillBox";
import { Rating } from "../../Rating/Rating";

const COUNT = 5;

export const ActiveFilters = ({ selectedFilterItems, onClear }) => {
  console.log("filtersActive",selectedFilterItems)
  const activeFiltersContent = selectedFilterItems.map(({id, type, text, value}) => {
    // const { id, type, text, value } = selectedFilter;
    console.log(selectedFilterItems,"selectedFilterItems2");

    let comp;
    switch (type) {
      case "string":
        comp = text;
        break;
      case "rating":
        comp = <Rating value={value} count={COUNT} />;
        break;
    }
    return (
      <span>
        <PillBox id={id} onClear={onClear}>
          {comp}
        </PillBox>
      </span>
    );
  });
  return (
    <div className="active-filters-component">
      <div className="active-filters-content">
        <h2 className="active-filters-title">Active Filters:</h2>
        <a className="active-filters-reset">Reset filters</a>
      </div>
      {activeFiltersContent}
    </div>
  );
};
