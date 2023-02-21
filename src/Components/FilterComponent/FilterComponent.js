import React from "react";
import "../../styles.scss";
import { FilterBox } from "./FilterBox/FilterBox";
import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilterItems,
  selectFilterGroups,
} from "../../Store/features/filterComponent/FilterSlice";
import { filterSelected } from "../../Store/features/filterComponent/FilterSlice";
export const FilterComponent = (
  {
    // onClear,
    // onChange,
  }
) => {
  const groups = useSelector(selectFilterGroups);
  const selectedFilterItems = useSelector(selectFilterItems);
  console.log("selectedFilterItems", selectedFilterItems);
  const dispatch = useDispatch();
  // console.log("selectedFilterItems1", "groups1", selectedFilterItems, groups);
  const onChangeSelected = (groupId, id, checked) => {
    dispatch(filterSelected({ groupId, id, checked }));
    console.log("groupId,id,checked", id, groupId, checked);
  };
  const filterBoxes = groups.map(({ id: groupId, title, filterItems }) => {
    return (
      <FilterBox
        groupId={groupId}
        title={title}
        filterItems={filterItems}
        onChange={onChangeSelected}
      />
    );
  });
  return (
    <section className="filter-component">
      <header className="filter-header">
        <h2 className="title is-2">Filters</h2>
      </header>
      <ActiveFilters
        onClear={onChangeSelected}
        selectedFilterItems={selectedFilterItems}
      />
      <ul className="filter-boxes">{filterBoxes}</ul>
    </section>
  );
};
