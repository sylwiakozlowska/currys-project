import React from "react";
import { FilterBox } from "./FilterBox/FilterBox";
import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
import "../../styles.scss";
import { useSelector } from "react-redux";
import { selectFilterSlice } from "../../Store/features/filterComponent/FilterSlice";

export const FilterComponent = ({
  filter,
  // onClear,
  onChange,
}) => {
  console.log("filter1",filter);

  const {selectedFilterItems, groups}  = useSelector(selectFilterSlice);
console.log("selectedFilterItems1",selectedFilterItems)
  const filterBoxes = groups.map(({title, filterItems}) => {
    const onChangeSelected = (filter) => {
      onChange(groups);
      console.log("filterBoxes1",filterBoxes)
    };
    return (
      <FilterBox
        title={title}
        filterItems={filterItems}
        onChange={onChangeSelected}
      />
    );
  });

  return (
    <section className="filter-component">
      <ActiveFilters
        // onClear={onClear}
        selectedFilterItems={selectedFilterItems}
      />
      <header className="filter-header">
        <h1>Filters</h1>
      </header>
      <ul className="filter-boxes">{filterBoxes}</ul>
    </section>
  );
};
