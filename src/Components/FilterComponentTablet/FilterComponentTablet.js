import React from "react";
import "../../styles.scss";
import { FilterBox } from "../FilterComponent/FilterBox/FilterBox";
import { ActiveFilters } from "../FilterComponent/ActiveFilters/ActiveFilters";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilterItems,
  selectFilterGroups,
} from "../../Store/features/filterComponent/FilterSlice";
import { filterSelected } from "../../Store/features/filterComponent/FilterSlice";
export const FilterComponentTablet = ({
  setShowFilterComponent,
  // onClear,
  // onChange,
}) => {
  const groups = useSelector(selectFilterGroups);
  const selectedFilterItems = useSelector(selectFilterItems);
  const dispatch = useDispatch();
  const onChangeSelected = (groupId, id, checked) => {
    dispatch(filterSelected({ groupId, id, checked }));
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
    <section className="filter-component-tablet">
      <div className="filter-header">
        <h2 className="title is-2">Filters</h2>
        <button onClick={() => setShowFilterComponent((current) => !current)}>
          <i className="glyph close-icon"></i>
        </button>
      </div>
      <div className="filter-component-tablet-content">
          <ActiveFilters
            onClear={onChangeSelected}
            selectedFilterItems={selectedFilterItems}
          />
          <ul className="filter-boxes">{filterBoxes}</ul>
      </div>
    </section>
  );
};
