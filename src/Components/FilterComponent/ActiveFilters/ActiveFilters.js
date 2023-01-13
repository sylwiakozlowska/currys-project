import React from "react";
import { PillBox } from "../PillBox/PillBox";
import { Rating } from "../../Rating/Rating";

const COUNT = 5;

export const ActiveFilters = ({ selectedFilterItems, onClear }) => {
  console.log("filtersActive", selectedFilterItems);
  const activeFiltersContent = selectedFilterItems.map(
    ({ groupId, id, type, text, value, selected }) => {
      console.log("id",groupId, id, selected);
      // const { id, type, text, value } = selectedFilter;
      // console.log(selectedFilterItems,"selectedFilterItems2");
      // dispatch(addfilterActive({groupId, id, checked }))
      const onClearSelectedFilterItem = (groupId, id, checked) => {
        console.log("groupId, id, checked", groupId, id, checked);
        onClear(groupId, id, checked);
      };
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
          <PillBox groupId={groupId} id={id} onClear={onClearSelectedFilterItem}>
            {comp}
          </PillBox>
        </span>
      );
    }
  );
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
