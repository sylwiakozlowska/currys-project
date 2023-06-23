import React from "react";

export const FilterComp = ({ children, count, onChange, selected }) => {

  const onChangeFilter = (e) => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <div className="filter-comp-component">
      <div className="filter-items">
        <input
          type="checkbox"
          checked={selected}
          onChange={onChangeFilter}
        ></input>
        <a>
          {children}
          <span>({count})</span>
        </a>
      </div>
    </div>
  );
};
