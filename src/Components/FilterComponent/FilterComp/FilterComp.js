import React from "react";

export const FilterComp = ({ children, count, onChange, selected }) => {
  // const {selected, count} = filter
  console.log("selected", selected, children);

  const onChangeFilter = (e) => {
    const { checked } = e.target;
    console.log("checked",checked)
    onChange(checked);
    // onChange(filter /*, !selected*/);
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
