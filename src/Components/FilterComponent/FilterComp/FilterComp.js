import React from "react";

export const FilterComp = ({ children, count, onChange, selected }) => {
// const {selected, count} = filter
  const onChangeFilter = () => {
      onChange(!selected);
      // onChange(filter /*, !selected*/);
  };

  return (
    <div className="filter-comp-component">
        <div className="filter-items">
          <input type="checkbox" value={selected} onChange={onChangeFilter}></input>
          <a>
            {children}
            <span>({count})</span>
          </a>
        </div>
    </div>
  );
};
